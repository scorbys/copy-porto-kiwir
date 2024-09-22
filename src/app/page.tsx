import Image from "next/image";
import Navbar from "./component/navbar";
import Heroimg from "./component/hero";
import Business from "./landing_page/business";
import Career from "./landing_page/career";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10">
      <Heroimg />
      <Business />
      <Career />
      </main>
  );
}
