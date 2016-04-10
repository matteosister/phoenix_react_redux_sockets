defmodule ReactReduxList.ProductView do
  use ReactReduxList.Web, :view

  def render("index.json", %{products: products}) do
    %{data: render_many(products, ReactReduxList.ProductView, "product.json")}
  end

  def render("show.json", %{product: product}) do
    %{data: render_one(product, ReactReduxList.ProductView, "product.json")}
  end

  def render("product.json", %{product: product}) do
    %{id: product.id, name: product.name, qty: product.qty}
  end
end
