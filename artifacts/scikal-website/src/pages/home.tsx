import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { WhyBorn } from "@/components/sections/why-born";
import { WhatDrivesUs } from "@/components/sections/what-drives-us";
import { Instrumentation } from "@/components/sections/instrumentation";
import { ComputationalBiology } from "@/components/sections/computational-biology";
import { Services } from "@/components/sections/services";
import { Clients } from "@/components/sections/clients";
import { Team } from "@/components/sections/team";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhyBorn />
        <WhatDrivesUs />
        <Instrumentation />
        <ComputationalBiology />
        <Services />
        <Clients />
        <Team />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
