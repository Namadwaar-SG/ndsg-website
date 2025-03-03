"use client";
import SectionHeader from "@app/components/common_components/SectionHeader";
import next from "next";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const Newsletter = () => {
  const [pageNum, setPageNum] = useState(1);
  const nextPage = () =>
    pageNum == 39 ? setPageNum(pageNum) : setPageNum(pageNum + 1);
  const previousPage = () =>
    pageNum == 1 ? setPageNum(pageNum) : setPageNum(pageNum - 1);

  return (
    <main>
      <SectionHeader sectionLabel="Prayers" />
      <div className="pt-8 flex gap-4 items-center justify-center">
        <div className="flex flex-col items-center gap-8 padding-y px-20 max-lg:p-10 font-palanquin text-center text-balance text-black text-lg max-sm:text-base max-sm:leading-7 leading-8">
          <p>
            Prabhodanam" means "awakening." It is the ritual of waking up the
            deity after a symbolic period of rest. It is performed in the
            Namadwaar permises every morning to awaken our beloved Premika
            Varadhan and Madhuri Sakhi.
          </p>
          <a
            href="/assets/prayers/prabodhanam.pdf"
            download="Prabodhanam"
            className="p-2 bg-primary-orange text-white rounded-md font-palanquin"
          >
            Download PDF
          </a>
        </div>
      </div>
      <div className="pt-8 flex gap-4 items-center justify-center">
        <div className="flex flex-col items-center gap-8 padding-y px-20 max-lg:p-10 font-palanquin text-center text-balance text-black text-lg max-sm:text-base max-sm:leading-7 leading-8">
          <p>
            "Dola" means "swing," and "Utsavam" means "festival" in Sanskrit. It
            is a ritual where the presiding deity of a temple is placed on a
            decorated swing and gently rocked while priests perform pujas,
            bhajans (devotional songs), and aratis (waving of lamps) before
            putting the deity to sleep.
          </p>
          <a
            href="/assets/prayers/dolotsavam.pdf"
            download="Dolotsavam"
            className="p-2 bg-primary-orange text-white rounded-md font-palanquin"
          >
            Download PDF
          </a>
        </div>
      </div>
    </main>
  );
};

export default Newsletter;
