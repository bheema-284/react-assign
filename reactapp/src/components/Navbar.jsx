import { Link } from 'react-router-dom';
import '../App.css';
export const Navbar = () => {
  return (
    <div id="nav">
      <Link id="aa" to={'/'}>
        Home
      </Link>
      <Link id="aa" to={'/add-country'}>
        Country
      </Link>
      <Link id="aa" to={'/add-city'}>
        City
      </Link>
    </div>
  );
};
