import Image from "next/image";
import Header from "./_component/Header";
import Hero from "./_component/Hero";
import Testominals from "./_component/Testominals";

export default function Home() {
  return (
    <div>
      {/* header  */}
      <Header />
      {/* hero section  */}
      <Hero />
      {/* testominal */}
      <Testominals/>
    </div>
  );
}
