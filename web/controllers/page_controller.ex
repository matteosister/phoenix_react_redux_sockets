defmodule ReactReduxList.PageController do
  use ReactReduxList.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
