defmodule ReactReduxList.ProductChannel do
  use ReactReduxList.Web, :channel

  alias ReactReduxList.Repo
  alias ReactReduxList.Product
  alias ReactReduxList.ProductView

  def join("products:all", payload, socket) do
    if authorized?(payload) do
      send self, :after_connect
      {:ok, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  # Channels can be used in a request/response fashion
  # by sending replies to requests from the client
  def handle_in("ping", payload, socket) do
    {:reply, {:ok, payload}, socket}
  end

  # It is also common to receive messages from the client and
  # broadcast to everyone in the current topic (products:all).
  def handle_in("shout", payload, socket) do
    broadcast socket, "shout", payload
    {:noreply, socket}
  end

  def handle_in("inc_product_qty", %{"product_id" => id}, socket) do
    spawn fn ->
      update_product id, &(%{:qty => &1.qty + 1}), socket
    end
    {:noreply, socket}
  end

  def handle_in("dec_product_qty", %{"product_id" => id}, socket) do
    spawn fn ->
      update_product id, &(%{:qty => &1.qty - 1}), socket
    end
    {:noreply, socket}
  end

  defp update_product(id, params_builder, socket) do
    product = Repo.get!(Product, id)
    params = params_builder.(product)
    changeset = Product.changeset(product, params)
    case Repo.update(changeset) do
      {:ok, product} -> broadcast socket, "product_updates", render_one(product)
      {:error, error} -> raise "error!"
    end
  end

  def handle_info(:after_connect, socket) do
    products = Product.ordered
    |> render_many

    broadcast socket, "set_products", products
    {:noreply, socket}
  end

  # This is invoked every time a notification is being broadcast
  # to the client. The default implementation is just to push it
  # downstream but one could filter or change the event.
  def handle_out(event, payload, socket) do
    push socket, event, payload
    {:noreply, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end

  defp render_one(product) do
    ProductView.render("product.json", %{product: product})
  end

  defp render_many(products) do
    ProductView.render("index.json", %{products: products})
  end
end
