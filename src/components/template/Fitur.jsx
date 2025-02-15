/* eslint-disable react/prop-types */
import cloud from '/assets/cloud.svg';
import bell from '/assets/bell.svg';
import video from '/assets/video.svg';
import trash from '/assets/trash.svg';
import fitur from '/assets/fitur.png';
import SectionTitle from '../fragments/SectionTitle';
import Card from '../fragments/Card';

const datax = [
  {
    id: 1,
    icon: cloud,
    title: 'Tidak Tersimpan Otomatis',
    description: 'Kalo lo pelupa ya udah dah, jadwal lo bakal gak kesimpen tuh.',
  },
  {
    id: 2,
    icon: video,
    title: 'Tidak Tersimpan Otomatis',
    description: 'Kalo lo pelupa ya udah dah, jadwal lo bakal gak kesimpen tuh.',
  },
  {
    id: 3,
    icon: trash,
    title: 'Tidak Tersimpan Otomatis',
    description: 'Kalo lo pelupa ya udah dah, jadwal lo bakal gak kesimpen tuh.',
  },
  {
    id: 4,
    icon: bell,
    title: 'Tidak Tersimpan Otomatis',
    description: 'Kalo lo pelupa ya udah dah, jadwal lo bakal gak kesimpen tuh.',
  },
];

function Fitur({ id }) {
  return (
    <div className="w-full px-5 py-16" id={id}>
      <SectionTitle className="flex justify-center items-center space-x-5">
        {/* left */}
        <div className="w-1/2 h-full">
          <img src={fitur} className="h-full w-full rounded-2xl" />
        </div>
        {/* right */}
        <div className="w-1/2">
          <Card className="space-y-6">
            <Card.Header>
              <h1 className="text-[#0E144A] text-[40px] font-semibold leading-normal">Memangnya ada fitur apa aja sih di aplikasi yang katanya keren ini? Jadi penasaran nich~</h1>
            </Card.Header>
            <Card.Body className="text-gray-600 text-lg font-medium">
              Aplikasi sekeren ini akan membuat kamu tidak dapat memberi alasan apapun untuk bolos matkul dosen (HAHA MAMPUS!). Lagian lo kuliah tapi jarang masuk, titip absen doang!
            </Card.Body>
            <div className="grid grid-cols-2 gap-5">
              {datax.map((data) => (
                <Card.Footer key={data.id} className="w-[270px] h-[150px] p-7 space-y-5 flex flex-col justify-center select-none space-x-5">
                  <div className="flex flex-col gap-2 justify-start">
                    <img src={data.icon} className="w-8 h-8" />
                    <h2 className="text-[16px] font-bold">{data.title}</h2>
                    <p className="text-gray-600 text-xs">{data.description}</p>
                  </div>
                </Card.Footer>
              ))}
            </div>
          </Card>
        </div>
      </SectionTitle>
    </div>
  );
}

export default Fitur;
