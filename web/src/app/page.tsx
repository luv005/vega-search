"use client";
import { Footer } from "@/app/components/footer";
import { Logo } from "@/app/components/logo";
import { PresetQuery } from "@/app/components/preset-query";
import { Search } from "@/app/components/search";
import React from "react";

export default function Home() {
  return (
    <div className="absolute inset-0 min-h-[500px] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-8 px-4">
        <div className="text-center">
          <Logo />
          {/* <h1 className="text-2xl font-bold mt-4">Vega Search</h1> */}
        </div>
        <Search />
        <div className="flex gap-2 flex-wrap justify-center">
          <PresetQuery query="What is the Vega star?" />
          <PresetQuery query="What are the benefits of meditation?" />
        </div>
        <Footer />
      </div>
    </div>
  );
}