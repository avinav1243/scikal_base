import { Hero } from "@/components/sections/hero";
import { Trust } from "@/components/sections/trust";
import { About } from "@/components/sections/about";
import { Story } from "@/components/sections/story";
import { Mission } from "@/components/sections/mission";
import { Products } from "@/components/sections/products";
import { Clients } from "@/components/sections/clients";
import { Team } from "@/components/sections/team";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Trust /> */}
      {/* <About />
      <Story />
      <Mission /> */}
      <Products />
      <Clients />
      {/* <Team /> */}
      <Contact />
    </>
  );
}
