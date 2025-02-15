import NavigationBar from './components/template/NavigationBar';
import HeroHeader from './components/template/HeroHeader';
import Hero from './components/template/Hero';
import Fitur from './components/template/Fitur';
import Harga from './components/template/Harga';
import Testimonials from './components/template/Testimonials';

function App() {
  return (
    <main className="max-w-[1208px] mx-auto">
      <section className="py-28 space-y-6" id="#home">
        <NavigationBar id="#home" />
        <HeroHeader id="#home" />
      </section>
      <Hero id="#fitur" />
      <Fitur id="#fitur" />
      <Harga id="#harga" />
      <Testimonials id="#testimoni" />
    </main>
  );
}

export default App;
