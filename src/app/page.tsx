import About from '../components/items/About';
import Projects from '../components/items/Projects';
import Study from '../components/items/Study';

export default function Home() {
  return (
    <div>
      <About ref={aboutRef} />
      <Projects />
      <Study />
    </div>
  );
}
