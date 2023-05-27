import PropTypes from 'prop-types';
import { lazy } from 'react';
import {
  Outlet,
  Routes,
  Route,
} from 'react-router-dom';
import AppBar from '../components/AppBar';

/*
  All page imports should be Lazy loaded to reduce loading time and bundle size.
  Vite exhibits this behavior by default, but does not gurantee lazy loading in
  Routes wrapped in more than 1 route. This ensures the minimum bundle size in
  production only.
 */
const Home = lazy(() => import('../Pages/Home'));
const Blog = lazy(() => import('../Pages/Blog'));

// Posts
const DangersOfMagic = lazy(() => import('../posts/the-dangers-of-magic.mdx'));

const UNAUTHENTICATED = [
  <Route key="overengineered" path="/" element={<AppBar />}>
    <Route index element={<Home />} />
    <Route path="articles" element={<Outlet />}>
      <Route index element={<Blog />} />
      <Route path="the-dangers-of-magic" element={<DangersOfMagic />} />
    </Route>
  </Route>,
];

/*
  The `hydrated` prop is a sign the app has been loaded in the browser and it is
  safe to begin rendering content. Otherwise, the document does not exist on the server
  and the app will error out.
*/
export default function Router({ hydrated }) {
  if (hydrated) {
    return (
      <Routes>
        {UNAUTHENTICATED}
      </Routes>
    );
  }

  return null;
}

Router.propTypes = {
  hydrated: PropTypes.bool.isRequired,
};
