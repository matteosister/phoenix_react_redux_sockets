# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     ReactReduxList.Repo.insert!(%ReactReduxList.SomeModel{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

defmodule Seeds do
  alias ReactReduxList.Product

  def create_product(order) do
    %Product{name: "name #{ random_number }", qty: random_number(1..5), sort_order: order}
  end

  def delete_all do
    ReactReduxList.Repo.delete_all(Product)
  end

  defp random_number(range \\ 10..99) do
    range |> Enum.random
  end
end

Seeds.delete_all
ReactReduxList.Repo.insert!(Seeds.create_product(1))
ReactReduxList.Repo.insert!(Seeds.create_product(2))
ReactReduxList.Repo.insert!(Seeds.create_product(3))
ReactReduxList.Repo.insert!(Seeds.create_product(4))
ReactReduxList.Repo.insert!(Seeds.create_product(5))
