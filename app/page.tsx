"use client";

import Foot from "@/components/Semantic/Foot";
import Head from "@/components/Semantic/Head";
import Hero from "@/components/Semantic/Hero";
import Nav from "@/components/Semantic/Nav";
import Section from "@/components/Semantic/Section";

export default function Home() {
  return (
    <div className="relative   gap-8 font-rajdhani w-full h-screen flex flex-col">
      <div className="fixed -z-10 inset-0 bg-gradient-to-t from-[#0e0e17] via-[#0e0e17] to-[#f74f4984]"></div>
      <div
        className="min-w-[100px] gap-8 font-rajdhani w-full h-full flex flex-col justify-start absolute inset-0 items-center"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff563c' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <Head />
        <Nav />
        <Hero />
        <Section />
        <Foot />
      </div>
    </div>
  );
}
