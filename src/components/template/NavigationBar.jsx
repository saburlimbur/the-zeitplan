/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import NavMenu from '../fragments/NavMenu';
import logo from '/assets/logo.png';

function NavigationBar({ id }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-lg shadow-md py-6 px-6 max-w-[1208px] mx-auto my-3 rounded-lg" id={id}>
      <div className="mx-auto flex justify-between items-center px-4">
        <Link to="/" id="#home">
          <img src={logo} className="h-10 cursor-pointer" />
        </Link>
        <NavMenu />
      </div>
    </header>
  );
}

export default NavigationBar;
