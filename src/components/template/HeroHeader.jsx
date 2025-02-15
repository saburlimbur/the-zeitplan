/* eslint-disable react/prop-types */
import Button from '../elements/Button';
import Card from '../fragments/Card';
import SectionTitle from '../fragments/SectionTitle';
import cardHeroHeader from '/assets/card.png';
import heroHeader from '/assets/heroheader.png';

function HeroHeader({ id }) {
  return (
    <div className="w-full px-5" id={id}>
      <SectionTitle className="flex justify-between space-x-5">
        {/* left */}
        <div className="w-1/2">
          <Card className="space-y-8">
            <Card.Header>
              <h1 className="text-[#0E144A] text-[54px] font-semibold">Sebuah cara mudah mengatur jadwal kuliah kamu</h1>
            </Card.Header>
            <Card.Body>
              <p className="text-gray-600 text-lg">Datang kuliah terlambat karena ketiduran itu tidak masalah; datang kuliah karena lupa jadwal itu sangatlah tidak keren. Aplikasi ini adalah sahabat kamu sekarang, brodie~</p>
            </Card.Body>
            <Card.Badge className="space-x-5">
              <Button className="bg-[#FE5E44] rounded-lg text-white py-4 px-12 font-semibold">Learn More</Button>
              <Button className="bg-[#FE5E44] bg-opacity-20 rounded-lg text-[#FE5E44] py-4 px-12 font-semibold">Play Demo</Button>
            </Card.Badge>
            <Card.Footer className="w-full flex justify-start">
              <img src={cardHeroHeader} className="w-full object-left object-cover" />
            </Card.Footer>
          </Card>
        </div>
        {/* right */}
        <div className="w-1/2">
          <img src={heroHeader} className="h-full w-full" />
        </div>
      </SectionTitle>
    </div>
  );
}

export default HeroHeader;
