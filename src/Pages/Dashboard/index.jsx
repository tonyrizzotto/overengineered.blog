import { Outlet } from 'react-router-dom';
import Home from '../Home';

export default function Dashboard() {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
}
