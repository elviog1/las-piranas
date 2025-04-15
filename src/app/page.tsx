import Club from "./components/Club";
import Hero from "./components/Hero";
import Juniors from "./components/Juniors";

export default function Home() {
  return (
    <div className="px-4 py-8">
      <Hero />
      <Club />
      <Juniors />
    </div>
  );
}
