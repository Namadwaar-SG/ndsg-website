"use client";
import SectionHeader from "@app/components/common_components/SectionHeader";
import next from "next";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import constants from "./constants.json";
import { db } from "@app/firebaseconfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { downloadSelectedPages } from "@lib/pdf-maker";
import Loading from "@app/components/common_components/Loading";
import { trackButtonClick } from "../analytics";

const Newsletter = () => {
  const [links, setLinks] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(1);

  const [section, setSection] = useState("Home");
  const [loading, setLoading] = useState(false);

  const nextPage = () =>
    pageNum >= links.length - 1 ? setPageNum(pageNum) : setPageNum(pageNum + 1);
  const previousPage = () =>
    pageNum == 1 ? setPageNum(pageNum) : setPageNum(pageNum - 1);
  const [selected, setSelected] = useState("newsletter_8");

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [feedback, setFeedback] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          contact: contact,
          feedback: feedback,
        }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to submit feedback");
      }

      alert("Thank you for your feedback!");
      setName("");
      setContact("");
      setFeedback("");
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = async (event) => {
    setPageNum(1);
    setSelected(event.target.value);
    setStartPage(1);
    setEndPage(links.length);
  };
  const fetchLinks = async () => {
    if (!selected) return;
    try {
      const url = `/api/list-newsletter-files?folder=${selected}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch newsletter items");
      const data = await res
        .json()
        .then((res) => res.filter((obj) => obj.name.includes(".png")));
      setLinks(data);
      console.log("Fetched links:", data);
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  };
  useEffect(() => {
    fetchLinks();
  }, [selected]);

  useEffect(() => {
    setEndPage(links.length);
  }, [links]);

  return (
    <>
      {loading && <Loading />}
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
            <option value="newsletter_1">{"Edition 1 (2024)"}</option>
            <option value="newsletter_2">{"Edition 2 (2024)"}</option>
            <option value="newsletter_3">{"Edition 3 (2024)"}</option>
            <option value="newsletter_4">{"Edition 4 (2024)"}</option>
            <option value="newsletter_5">{"Edition 5 (2025)"}</option>
            <option value="newsletter_6">{"Edition 6 (2025)"}</option>
            <option value="newsletter_7">{"Edition 7 (2025)"}</option>
            <option value="newsletter_8">{"Edition 8 (2025)"}</option>
          </select>
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* Newsletter Hyperlinks */}
          <div
            className="px-2 flex flex-wrap gap-8 bg-white/45 underline underline-offset-4 decoration-0 justify-center pt-6 cursor-pointer font-palanquin text-base 
            max-lg:text-sm max-sm:text-xs text-primary-maroon"
          >
            {constants.editions
              .find((edition) => edition.edition === selected)
              .bookmarks.map((bookmark, i) => (
                <div
                  key={i}
                  onClick={() => {
                    trackButtonClick("Submit Button");
                    setSection(bookmark.name);
                    setPageNum(bookmark.page);
                    setStartPage(bookmark.page);
                    if (bookmark.page === 1) {
                      setEndPage(links.length);
                    } else {
                      setEndPage(bookmark.endPage);
                    }
                  }}
                >
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
                  src={`${
                    links[pageNum - 1]?.url || `/assets/images/white.png`
                  }`}
                  width={600}
                  height={100}
                  alt="newsletter"
                  className="w-1/2 max-md:w-3/4"
                />
                <Image
                  src={`${links[pageNum]?.url || `/assets/images/white.png`}`}
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
            <button
              onClick={async () => {
                setLoading(true);
                console.log(startPage);
                console.log(endPage);
                await downloadSelectedPages(
                  `/api/fetch-pdf?url=${encodeURIComponent(
                    constants.editions.find(
                      (edition) => edition.edition === selected,
                    ).downloadLink,
                  )}`,
                  `ND_Newsletter_Edition_${selected.charAt(
                    selected.length - 1,
                  )}${section === "Home" ? "" : `_${section}`}`,
                  startPage,
                  endPage,
                );
                setLoading(false);
              }}
              className="p-2 bg-primary-orange text-white rounded-md font-palanquin"
            >
              Download PDF
            </button>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <h1 className="my-6 container max-container text-center font-caudex text-4xl max-sm:text-3xl font-bold text-primary-maroon">
              Newsletter Feedback Form
            </h1>
            <div className="my-4 p-4 rounded shadow">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  value={name}
                  placeholder={"Your name..."}
                  onChange={(e) => setName(e.target.value)}
                  className="border p-2 w-full rounded bg-white border-black"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">
                  Contact Details
                </label>
                <input
                  type="text"
                  value={contact}
                  placeholder={"Your contact details..."}
                  onChange={(e) => setContact(e.target.value)}
                  className="border p-2 w-full rounded border-black"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Feedback</label>
                <textarea
                  type="text"
                  value={feedback}
                  placeholder={"Your feedback about the newsletter..."}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="border p-2 w-full rounded border-black"
                  required
                  rows={5}
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Newsletter;
