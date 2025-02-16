import { Link } from 'react-router-dom';
import logo from '/assets/logo.png';
import instagram from '/assets/instagram.svg';
import facebook from '/assets/facebook.svg';
import twitter from '/assets/twitter.svg';

function Footer() {
  return (
    <footer className="bg-white px-4 md:px-36 py-24">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="flex flex-col items-center md:items-start md:w-1/4">
          <div className="mb-4">
            <div className="">
              <img src={logo} />
            </div>
          </div>
          <p className="text-gray-500 text-sm text-center md:text-left">
            Sebuah aplikasi yang membantu kamu untuk membuat jadwal kuliah, jadwal mabar, jadwal makan, jadwal liga inggris, dan jadwal-jadwal lainnya. Walaupun banyak error, setidaknya kami sudah berusaha semaksimal mungkin.
          </p>
          <p className="text-gray-600 text-xs mt-4">
            COPYRIGHT (C) {new Date().getFullYear()}, DESIGN BY <span className="text-white">NAUVAL</span>
          </p>
        </div>

        <div className="flex flex-col text-center md:text-left space-y-2">
          <h2 className="text-black font-semibold text-lg pb-3">Sitemap</h2>
          <Link to="#" className="text-gray-500 hover:text-blue-400">
            Beranda
          </Link>
          <Link to="#" className="text-gray-500 hover:text-blue-400">
            Fitur-fitur
          </Link>
          <Link to="#" className="text-gray-500 hover:text-blue-400">
            Harga
          </Link>
          <Link to="#" className="text-gray-500 hover:text-blue-400">
            Testimoni
          </Link>
          <Link to="#" className="text-gray-500 hover:text-blue-400">
            Download
          </Link>
        </div>

        <div className="flex flex-col text-center md:text-left space-y-2">
          <h2 className="text-black font-semibold text-lg pb-3">Partner</h2>

          <Link to="#" className="text-gray-500 hover:text-blue-400">
            Sefan.ru
          </Link>
          <Link to="#" className="text-gray-500 hover:text-blue-400">
            Ganool
          </Link>
          <Link to="#" className="text-gray-500 hover:text-blue-400">
            Waptrick
          </Link>
          <Link to="#" className="text-gray-500 hover:text-blue-400">
            Stafaband
          </Link>
          <Link to="#" className="text-gray-500 hover:text-blue-400">
            MyWapBlog
          </Link>
          <Link to="#" className="text-gray-500 hover:text-blue-400">
            Friv
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-black font-semibold text-lg pb-3">Tetap Terhubung</h2>
          <p className="text-gray-500 text-sm mb-4">Lihat kami pansos di sosial media berikut:</p>
          <div className="flex space-x-3">
            <img src={instagram} />
            <img src={facebook} />
            <img src={twitter} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
