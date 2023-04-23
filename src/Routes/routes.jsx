import Blog from '../Pages/Blog';
import Home from '../Pages/Home';

// https://reactrouter.com/en/main/routers/create-browser-router#createbrowserrouter
const routeConfig = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'blog',
    element: <Blog />,
  },
];

export default routeConfig;
