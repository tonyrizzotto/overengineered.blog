import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/*
 Login will receive a valid token in the params. It's job is to set the cookie
 then redirect to the dashboard. AuthContext will pull cookie on Dashboard render to determine auth.

 If not authorized, that will be a redirect back to the home page. Otherwise, it will use token to
 make authenticated request for data.
*/
export default function Login() {
  // const [params] = useSearchParams();
  const navigate = useNavigate();
  const isAuth = true;

  useEffect(() => {
    if (isAuth) {
      navigate('/dashboard');
    }
  }, [isAuth]);
  return null;
}
