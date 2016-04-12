defmodule ReactReduxList.ProductTest do
  use ReactReduxList.ModelCase

  alias ReactReduxList.Product

  @valid_attrs %{name: "some content", qty: 42, sort_order: 1}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Product.changeset(%Product{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Product.changeset(%Product{}, @invalid_attrs)
    refute changeset.valid?
  end
end
