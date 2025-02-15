/* eslint-disable react/prop-types */
import Button from '../elements/Button';
import Card from '../fragments/Card';
import SectionTitle from '../fragments/SectionTitle';
import ceklis from '/assets/ceklis.svg';

const datax = [
  {
    id: 1,
    title: 'Rinduratu',
    price: 'Free',
    subtitle: 'Akses ke semua fitur gratis tapi data lo dijual ke agen khusus US.',
    feature: ['Jadwal tak terbatas', 'Fitur Notifikasi (kadang telat)', 'Mode Gelap', 'Bisa Topup pulsa', 'Bisa beli token listrik', 'Data lo dijual'],
  },
  {
    id: 2,
    title: 'Sultan',
    price: 'Rp 100K',
    subtitle: 'Sama aja data lo juga tetep dijual, tapi lo dapet fitur lain.',
    feature: ['Semua Fitur Sebelumnya', 'Diingetin Makan', 'Sleepcall Sampe Bobo', 'Ditemenin Jalan Tiap Minggu', 'Ditemenin Eksekswan', 'Terhindar Razia Rambut', 'Dapet Izin Bikin Ormas'],
  },
  {
    id: 3,
    title: 'Rafatar',
    price: 'Rp 100000K',
    subtitle: 'Ini juga sama aja, data lo dijual juga. Tapi fitur-fiturnya lebih ok.',
    feature: ['Semua Fitur Sebelumnya', 'Dibayarin Kuliah 4 Semester', 'Dibayarin Cicilan Motor', 'Dicicilin KPR 12 Tahun', 'Magang di NASA Cab.   Depok', 'Dapet Skin Alok', 'Nonton Film Gratis di Ganool', 'Naik Haji Bila Mampu'],
  },
];

function Harga({ id }) {
  return (
    <div className="w-full relative py-16" id={id}>
      <div className="absolute inset-0 w-full h-full bg-[#FE5E44] bg-opacity-5"></div>
      <SectionTitle className="space-y-14">
        <div className="flex justify-center items-center max-w-[700px] mx-auto flex-col text-center space-y-5">
          <div>
            <h1 className="text-[#0E144A] text-[40px] font-semibold leading-normal text-center">Main catur sambil bersepeda,</h1>
            <h1 className="text-[#0E144A] text-[40px] font-semibold leading-normal text-center">beda harga beda fitur</h1>
          </div>
          <p className="text-center text-gray-600 max-w-[600px]">Aplikasi ini gratis sebenernya, brodie. Tapi kalo mau bayar gapapa juga sih, untuk gantinya kami kasih fitur yang spesial buat kamu!</p>
        </div>

        <div className="grid grid-cols-3 gap-10 px-5">
          {datax.map((item) => (
            <Card key={item.id} className="max-h-[700px] max-w-[400px] bg-white shadow-lg rounded-lg select-none p-10 space-y-5 h-auto flex flex-col justify-between z-10">
              <Card.Header>
                <p className="uppercase text-[#FE5E44] font-semibold">{item.title}</p>
              </Card.Header>
              <Card.Body className="space-y-3">
                <h3 className="text-2xl font-bold">{item.price}</h3>
                <p className="text-[15px] text-gray-500 font-medium">{item.subtitle}</p>
              </Card.Body>
              <Card.Badge className="space-y-3">
                <ul className="space-y-2">
                  {item.feature.map((feat, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-800">
                      <img src={ceklis} alt="Check" className="w-4 h-4" />
                      <p className="text-sm">{feat}</p>
                    </li>
                  ))}
                </ul>
              </Card.Badge>
              <Card.Footer>
                <Button className="bg-[#FE5E44] rounded-lg text-white py-3 px-12 font-semibold w-full">Downlad</Button>
              </Card.Footer>
            </Card>
          ))}
        </div>

        <div className="flex justify-center items-center text-center max-w-[650px] mx-auto py-10">
          <h3 className="font-bold text-gray-700">
            Harap Diingat: <span className="text-gray-500 font-normal">Harga di atas belum termasuk KKM, dan harga sewaktu-waktu bisa berubah secara mendadak seperti pengumuman PPKM darurat.</span>
          </h3>
        </div>
      </SectionTitle>
    </div>
  );
}

export default Harga;
