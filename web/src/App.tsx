import { Routes, Route, Outlet } from "react-router";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Submit } from "./pages/Submit";
import { NoMatch } from "./pages/NoMatch";
import { SignIn } from "./pages/SignIn";

import { RequireAuth } from "./routes";
import { useState } from "react";
import { User } from "./services/AuthService";

export function Layout({ user }: { user: User | null }) {
  return (
    <>
      <Header user={user} />
      <Outlet />
    </>
  );
}

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <Routes>
      <Route path="/" element={<Layout user={user} />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route
          path="submit"
          element={
            <RequireAuth user={user}>
              <Submit />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Route>

      <Route path="login" element={<SignIn setUser={setUser} />} />
    </Routes>
  );
}

export default App;
