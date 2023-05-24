import Blog from '../Pages/Blog/index';
import AppBar from '../components/AppBar';
import Home from '../Pages/Home';
import ErrorBoundary from '../components/ErrorBoundary';
import blogMap from '../Pages/Blog/blogmap';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';

/*
  https://reactrouter.com/en/main/routers/create-browser-router#createbrowserrouter
  children: [
    {
      path: 'first',
      element: <First />,
    },
  ],
 */

const blogPages = [];
blogMap.forEach(({ element, path }) => blogPages.push({ element, path }));

const routeConfig = [
  {
    element: <AppBar />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'articles',
        element: <Blog />,
        children: blogPages,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
];

export default routeConfig;
