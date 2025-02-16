/* eslint-disable react/prop-types */
import Card from '../fragments/Card';
import star1 from '/assets/star1.svg';
import star3 from '/assets/star3.svg';
import star5 from '/assets/star5.svg';
import SectionTitle from '../fragments/SectionTitle';
import avatar1 from '/assets/unsplash__THUISs23CI.svg';
import avatar2 from '/assets/unsplash_d1UPkiFd04A.svg';
import avatar3 from '/assets/unsplash_5rQG1mib90I.svg';
import avatar4 from '/assets/unsplash_U4JDjYmjn1g.svg';
import avatar5 from '/assets/unsplash_d8OX1jeN5Ac.svg';
import avatar6 from '/assets/unsplash_8Vt2haq8NSQ.svg';

const datax = [
  {
    id: 1,
    name: 'Sanusi Sulivan',
    kedudukan: 'Dosen di Boating School Ny. Puff',
    rating: star5,
    message: 'Terima kasih untuk aplikasinya, karena aplikasi ini murid-murid saya jadi rajin kuliah walaupun nggak ada adab. Adab tidak perlu kuliah nomor satu! 👈😎👉',
    avatar: avatar1,
  },
  {
    id: 2,
    name: 'Wahyu Hayuk',
    kedudukan: 'Mahasiswa Abadi',
    rating: star1,
    message: 'Gara-gara aplikasi ini aku tidak bisa bolos kuliah, padahal cita-citaku ingin bolos kuliah dan menitipkan absen saja. Huft.',
    avatar: avatar2,
  },
  {
    id: 3,
    name: 'Ibu Skarlet Darkening',
    kedudukan: 'Ibunya Wahyu Hayuk',
    rating: star5,
    message: 'Hanya di rezim ini ada aplikasi yang membuat anak saya menjadi rajin kuliah walaupun tidak menjadi pandai. Terima kasih Papa Zola!',
    avatar: avatar3,
  },
  {
    id: 4,
    name: 'Indah Cyank Dya Clmax',
    kedudukan: 'Works at Looking For True Love, Inc',
    rating: star3,
    message: 'Aq kmrn koq instla di hp qu gx bs y? ap krn aq pke hp miTho? admin tLonk dnk bntU instlA d hp qu, aq mw pKe apkx',
    avatar: avatar4,
  },
  {
    id: 5,
    name: 'Jumadi RT. 03',
    kedudukan: 'Ketua RT. 06',
    rating: star1,
    message:
      'Pengiriman cepat,,, seller ramah,, packing juga rapih, tapi barangnya belom dicoba... saya kasih bintang satu dulu,,,, nanti kalo udah dicoba saya kasih bintang dua,,, nanti kalo udah peterpen jadi bintang di surga... xixixixi... 😀😀😀😀😀',
    avatar: avatar5,
  },
  {
    id: 6,
    name: 'Cucunya Megalodon',
    kedudukan: 'Pecinta Kucing Hungaria',
    rating: star5,
    message:
      'aplikasinya keren! mjb, nder.... aku numpang lapak yaaa ... Jual Netflix Spotify disney plus Youtube prem Iqiyi Grammarly Viu Canva Wetv Vidio Mola tv picsart Tezza Unfold Aligh motion Vsco Lightroom get contact apple music amazon prime resso iflix Microsoft 365 HBO GO zoom.',
    avatar: avatar6,
  },
];

function Testimonials({ id }) {
  return (
    <div className="w-full py-16 relative" id={id}>
      <div className="absolute inset-0 w-full h-full bg-[#FE5E44] bg-opacity-10"></div>

      <SectionTitle className="space-y-14 max-w-[1208px] mx-auto ">
        <div className="flex justify-center items-center max-w-[700px] mx-auto flex-col text-center space-y-5">
          <div>
            <h1 className="text-[#0E144A] text-[40px] font-semibold leading-normal text-center">Apa kata umat manusia tentang</h1>
            <h1 className="text-[#0E144A] text-[40px] font-semibold leading-normal text-center">aplikasi keren ini?</h1>
          </div>
          <p className="text-center text-gray-600 max-w-[600px]">Kami tidak memfilter semua review, males soalnya. Jadi semua yang ditampilkan di sini semuanya asli tanpa reksadana.</p>
        </div>

        <div className="grid grid-cols-3 gap-10 px-5 ">
          {datax.map((item) => (
            <Card key={item.id} className="max-w-[380px] h-auto flex flex-col space-y-5 p-6 bg-white border border-gray-100 rounded-lg justify-between z-10">
              <Card.Badge>
                <img src={item.rating} />
              </Card.Badge>
              <Card.Body>
                <h4 className="text-gray-600 text-sm">{item.message}</h4>
              </Card.Body>
              <Card.Footer className="flex gap-2 items-center ">
                <img src={item.avatar} className="w-12 h-12 rounded-full border border-gray-200" alt={item.name} />

                <div className="flex flex-col">
                  <h2 className="text-[16px] font-semibold">{item.name}</h2>
                  <h4 className="text-gray-600 text-sm">{item.kedudukan}</h4>
                </div>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </SectionTitle>
    </div>
  );
}

export default Testimonials;
