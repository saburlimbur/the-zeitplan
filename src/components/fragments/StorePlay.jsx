import SectionTitle from './SectionTitle';
import appstore from '/assets/appstore.svg';
import googleplay from '/assets/googleplay.svg';

function StorePlay() {
  return (
    <div className="max-w-[1508px] mx-auto ">
      <SectionTitle className="max-w-[1300px] mx-auto p-28 flex justify-center items-center space-y-8 flex-col">
        <h1 className="text-[#0E144A] text-[40px] font-semibold leading-normal">Download Aplikasi Keren Ini Sekarang!</h1>
        <p className="text-gray-600 text-lg font-medium text-center">Please download lah aplikasi ini, udah susah-susah buat, mana pas bikin sampe begadang, terus juga ditambah weekend. Jadi, please download lah ya.</p>
        <div className="flex justify-center space-x-4">
          <img src={appstore} />
          <img src={googleplay} />
        </div>
      </SectionTitle>
    </div>
  );
}

export default StorePlay;
