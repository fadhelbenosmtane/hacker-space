import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link> {/* Correct the path */}
          </li>
          <li>
            <Link to="/my-event">My Events</Link> {/* Correct the path */}
          </li>
          <li>
            <Link to="/notification">Notification</Link> {/* Correct the path */}
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
