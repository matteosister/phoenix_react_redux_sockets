defmodule ReactReduxList.Repo.Migrations.AddSortOrder do
  use Ecto.Migration

  def change do
    alter table(:products) do
      add :sort_order, :integer 
    end
  end
end
