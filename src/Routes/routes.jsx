import Blog from '../pages/Blog';
import Home from '../pages/Home';
import First from '../pages/Blog/posts/2023-04-22.mdx';

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
  },
  {
    path: 'blog',
    element: <Blog />,
  },
  {
    path: '/blog/2023-04-22',
    element: <First />,
  },
];

export default routeConfig;
