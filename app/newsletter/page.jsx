"use client";
import SectionHeader from "@app/components/common_components/SectionHeader";
import next from "next";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import constants from "./constants.json";

const Newsletter = () => {
  const [links, setLinks] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const nextPage = () =>
    pageNum == links.length - 1 ? setPageNum(pageNum) : setPageNum(pageNum + 1);
  const previousPage = () =>
    pageNum == 1 ? setPageNum(pageNum) : setPageNum(pageNum - 1);
  const [selected, setSelected] = useState("newsletter_5");

  const handleChange = async (event) => {
    setPageNum(1);
    setSelected(event.target.value);
  };
  const fetchLinks = async () => {
    if (!selected) return;
    try {
      const url = `/api/list-newsletter-files?folder=${selected}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch newsletter items");
      const data = await res.json();
      setLinks(data);
      console.log("Fetched links:", data);
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  };
  useEffect(() => {
    fetchLinks();
  }, [selected]);

  return (
    <main>
      <SectionHeader sectionLabel="Newsletter" />
      <div className="pt-8 flex gap-4 items-center justify-center">
        <select
          id="edition"
          value={selected}
          onChange={handleChange}
          className="font-caudex text-primary-maroon text-4xl max-md:text-2xl text-center"
        >
          <option value="" disabled>
            -- Select edition --
          </option>
          <option value="newsletter_1">Edition 1</option>
          <option value="newsletter_2">Edition 2</option>
          <option value="newsletter_3">Edition 3</option>
          <option value="newsletter_4">Edition 4</option>
          <option value="newsletter_5">Edition 5</option>
          <option value="newsletter_6">Edition 6</option>
        </select>
      </div>

      {/* Latest Newsletter edition will be hardcoded. Previous ones will have pdf links. */}
      <div className="flex flex-col items-center gap-8">
        {/* Newsletter Hyperlinks */}
        <div
          className="px-2 flex flex-wrap gap-8 bg-white/45 underline underline-offset-4 decoration-0 justify-center pt-6 cursor-pointer font-palanquin text-base 
            max-lg:text-sm max-sm:text-xs text-primary-maroon"
        >
          {constants.editions
            .find((edition) => edition.edition === selected)
            .bookmarks.map((bookmark, i) => (
              <div key={i} onClick={() => setPageNum(bookmark.page)}>
                {bookmark.name}
              </div>
            ))}
        </div>
        {/* Newsletter */}
        <div className="px-52 flex max-md:flex-col justify-center items-center max-xl:px-12 max-md:px-0 relative">
          <button onClick={previousPage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-9 absolute inset-y-1/2 left-36 max-xl:left-2 stroke-primary-maroon hover:stroke-primary-maroon/40 max-sm:size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
          {links.length > 0 && (
            <>
              <Image
                src={`${links[pageNum - 1]?.url || ""}`}
                width={600}
                height={100}
                alt="newsletter"
                className="w-1/2 max-md:w-3/4"
              />
              <Image
                src={`${links[pageNum]?.url || ""}`}
                width={600}
                height={100}
                alt="newsletter"
                className="w-1/2 max-md:hidden"
              />
            </>
          )}
          <button onClick={nextPage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-9 absolute inset-y-1/2 right-36 max-xl:right-2  stroke-primary-maroon hover:stroke-primary-maroon/40 max-sm:size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
        {/* Download Button */}
        <div className="mb-12">
          <a
            href={
              constants.editions.find((edition) => edition.edition === selected)
                .downloadLink
            }
            download={`ND_Newsletter_Edition_${selected.charAt(
              selected.length - 1
            )}`}
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
