import { Routes, Route, Outlet } from "react-router";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Submit } from "./pages/Submit";
import { NoMatch } from "./pages/NoMatch";
import { SignIn } from "./pages/SignIn";

import { RequireAuth } from "./routes";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route
          path="submit"
          element={
            <RequireAuth>
              <Submit />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Route>

      <Route path="login" element={<SignIn />} />
    </Routes>
  );
}

export default App;
