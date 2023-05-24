import { Outlet, Link } from "react-router-dom";

export default function NoHeaderLayout() {
  return (
    <main>
      <header>
        <Link to="/" className="logo">
          MyBlog
        </Link>
      </header>
      <Outlet />
    </main>
  );
};