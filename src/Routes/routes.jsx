import Blog from '../pages/Blog';
import Home from '../pages/Home';
import ErrorBoundary from '../components/ErrorBoundary';
import blogMap from '../pages/Blog/blogmap';

/*
  https://reactrouter.com/en/main/routers/create-browser-router#createbrowserrouter
  Nested Children Routes don't freakin work!!
  children: [
    {
      path: 'first',
      element: <First />,
    },
  ],
 */

const routeConfig = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: 'blog',
    element: <Blog />,
  },

];

blogMap.forEach((post) => routeConfig.push(post));
export default routeConfig;
