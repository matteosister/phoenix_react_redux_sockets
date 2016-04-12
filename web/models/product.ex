defmodule ReactReduxList.Product do
  use ReactReduxList.Web, :model
  alias ReactReduxList.Product
  alias ReactReduxList.Repo
  import Ecto.Query

  schema "products" do
    field :name, :string
    field :qty, :integer
    field :sort_order, :integer

    timestamps
  end

  @required_fields ~w(name qty sort_order)
  @optional_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end

  defp ordered_query do
    from p in Product,
      order_by: p.sort_order
  end

  def ordered do
    Repo.all(ordered_query)
  end

  def product_after_query(order) do
    from p in ordered_query,
      order_by: p.sort_order,
      where: p.sort_order > ^order,
      limit: 1
  end

  def product_after(order) do
    order
    |> product_after_query
    |> Repo.one
  end

  def change_posisition(product1 = %Product{sort_order: sort_order}, :up) do
    case product_after(sort_order) do
      nil -> []
      product2 -> [{product1, product2.sort_order}, {product2, product1.sort_order}] 
    end
  end
end
