import Blog from '../pages/Blog';
import AppBar from '../components/AppBar';
import Home from '../pages/Home';
import ErrorBoundary from '../components/ErrorBoundary';
import blogMap from '../pages/Blog/blogmap';

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
        path: 'blog',
        element: <Blog />,
        children: blogPages,
      },
    ],
  },
];

export default routeConfig;
