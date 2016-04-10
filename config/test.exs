use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :react_redux_list, ReactReduxList.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :react_redux_list, ReactReduxList.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "react_redux_list",
  password: "react_redux_list",
  database: "react_redux_list_test",
  hostname: "db",
  pool: Ecto.Adapters.SQL.Sandbox
