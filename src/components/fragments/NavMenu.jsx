import { Link } from 'react-scroll';
import { NavMenuProps } from '../../proptypes';
import Button from '../elements/Button';
import { ArrowRight } from 'lucide-react';

const routes = [
  {
    id: 1,
    name: 'Home',
    to: '#home',
  },
  {
    id: 2,
    name: 'Fitur-Fitur',
    to: '#fitur',
  },
  {
    id: 3,
    name: 'Harga',
    to: '#harga',
  },
  {
    id: 4,
    name: 'Testimoni',
    to: '#testimoni',
  },
];

function NavMenu({ isMobile = false, closeMenu }) {
  return (
    <nav className="flex items-center gap-6">
      <ul className={`flex ${isMobile ? 'flex-col gap-2' : 'gap-2'}`}>
        {routes.map((route) => (
          <li key={route.id} className="list-none text-black">
            <Link
              to={route.to}
              smooth={true}
              duration={500}
              spy={true}
              hashSpy={true}
              offset={-50}
              className="cursor-pointer text-gray-500 hover:text-gray-500 transition-all ease-in-out px-2 py-2 rounded-md text-sm font-medium relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
              onClick={isMobile ? closeMenu : undefined}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
      <Button className="bg-[#FE5E44] rounded-lg py-3 px-5 flex items-center gap-2 text-white" type="button">
        Download
        <ArrowRight />
      </Button>
    </nav>
  );
}

NavMenu.propTypes = NavMenuProps;

export default NavMenu;
