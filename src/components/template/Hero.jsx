/* eslint-disable react/prop-types */
import Card from '../fragments/Card';
import SectionTitle from '../fragments/SectionTitle';
import database from '/assets/database.svg';
import code from '/assets/code.svg';
import user from '/assets/user.svg';
import wifioff from '/assets/wifi-off.svg';

const datax = [
  {
    id: 1,
    icon: database,
    title: 'Aplikasi Gratis',
    description: 'Semua fitur di aplikasi ini adalah gratis, tapi data privasi kamu akan kami jual ke agen khusus US.',
  },
  {
    id: 2,
    icon: code,
    title: 'Aplikasi Gratis',
    description: 'Pas login kode OTP lo gak kekirim kadang, terus lo harus nyoba berulang kali sampe bisa.',
  },
  {
    id: 3,
    icon: user,
    title: 'Aplikasi Gratis',
    description: 'Data tidak disimpan dengan baik dan rentan bocor, jangan heran data lo tiba-tiba ada di deepweb.',
  },
  {
    id: 4,
    icon: wifioff,
    title: 'Aplikasi Gratis',
    description: 'Ketika submit data biasanya error di bagian ajax-nya, eh engga deng itu aplikasi pemerintah~',
  },
];

function Hero({ id }) {
  return (
    <div className="max-w-[1208px] mx-auto pb-12 px-5" id={id}>
      <SectionTitle className="flex justify-between space-x-5">
        {/* left */}
        <div className="flex w-2/5">
          <Card className="space-y-5">
            <Card.Header>
              <h1 className="text-[#0E144A] text-[54px] font-semibold"> Kenapa Kamu Sangat Harus Pakai Aplikasi Yang Keren Ini?</h1>
            </Card.Header>
            <Card.Body className="text-gray-600">Sejujurnya aplikasi kita ini seringkali bermasalah. Kadang-kadang gak bisa submit data, kadang dibukanya lambat, kadang tiba-tiba logout sendiri, untung gak berdua.</Card.Body>
            <Card.Footer className="flex gap-10 max-w-[400px]">
              <div className="space-y-2 border border-gray-300 p-3 rounded-lg select-none">
                <h4 className="text-gray-600 uppercase">Total Download</h4>
                <h2 className="text-xl font-semibold text-center text-[#121418]">1,501,234</h2>
              </div>
              <div className="space-y-2 border border-gray-300 p-3 rounded-lg max-w-xl px-8 select-none">
                <h4 className="text-gray-600 uppercase">Total Users</h4>
                <h2 className="text-xl font-semibold text-center text-[#0C1B4D]">1,501,234</h2>
              </div>
            </Card.Footer>
          </Card>
        </div>

        {/* right */}
        <div className="grid grid-cols-2 gap-5">
          {datax.map((data) => (
            <Card className="bg-[#FE5E44] bg-opacity-5 w-[320px] h-[240px] p-7 space-y-5 flex flex-col justify-center rounded-lg cursor-pointer hover:bg-[#fd573e] hover:bg-opacity-10 transition-all ease-in" key={data.id}>
              <Card.Header className="flex gap-3 items-center">
                <div className="bg-[#FE5E44] bg-opacity-20 p-3 rounded-lg">
                  <img src={data.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold">{data.title}</h3>
              </Card.Header>
              <Card.Body>
                <p className="text-gray-600">{data.description}</p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </SectionTitle>
    </div>
  );
}

export default Hero;
