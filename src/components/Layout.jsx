import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="flex justify-between items-center px-32 py-3">
        <div>logo</div>
        <nav className="flex gap-4">
          <Link to="/game">Game</Link>
          <Link to="/shape">Shape</Link>
          <Link to="/bin">Bin</Link>
        </nav>
      </header>

      <div className="min-h-[calc(100dvh-20px)]">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
