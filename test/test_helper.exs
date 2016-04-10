ExUnit.start

Mix.Task.run "ecto.create", ~w(-r ReactReduxList.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r ReactReduxList.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(ReactReduxList.Repo)

