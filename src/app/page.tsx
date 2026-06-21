import { Hero } from "@/components/sections/hero";
import { Products } from "@/components/sections/products";
import { Clients } from "@/components/sections/clients";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Clients />
      <Contact />
    </>
  );
}
