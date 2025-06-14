"use client";
// import Carousel from "@app/components/common_components/Carousel";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "dompurify";
import { formatDate } from "@lib/formatDate";
import { useParams } from "next/navigation";
import Loading from "@app/components/common_components/Loading";
import BootstrapCarousel from "@app/components/common_components/BootstrapCarousel";
import "./carousel-only.css";

const EventExample = () => {
  const { eventIndex } = useParams();
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  window.scroll(0, 0);
  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`/api/get-post-by-id?id=${eventIndex}`);
        if (!res.ok) throw new Error("Failed to fetch event");

        const data = await res.json();
        setSelectedPost(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (eventIndex) fetchPost();
  }, [eventIndex]);

  if (loading) return <Loading />;
  if (!selectedPost) return <div>Post not found</div>;
  return (
    <main>
      <section className="py-12 px-10 max-sm:p-8 bg-primary-maroon">
        <div className="relative">
          <h1 className="font-caudex text-4xl max-md:text-2xl max-sm:text-xl font-bold text-center text-beige">
            {selectedPost.title}
          </h1>
          <Link href="/events">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute inset-y-0 left-0 max-sm:w-3 max-sm:h-3 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </Link>
        </div>
      </section>

      <section className="flex justify-center bg-beige">
        <div className="w-1/2 max-md:w-full">
          <BootstrapCarousel selectedPost={selectedPost} />
        </div>
      </section>
      <section>
        <div className="px-48 max-md:px-12 mt-16 max-container">
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(selectedPost.rich_text, {
                ADD_TAGS: ["iframe"],
                ADD_ATTR: [
                  "allow",
                  "allowfullscreen",
                  "frameborder",
                  "scrolling",
                  "src",
                  "height",
                  "width",
                ],
                FORBID_ATTR: ["onload", "onclick"], // optional safety
              }),
            }}
          />
          <hr className="my-6 w-full h-px bg-gray-300 border-0 rounded" />
          <p className="mb-12 font-palanquin text-left text-primary-maroon text-xl max-sm:text-base max-sm:leading-7 leading-8">
            {formatDate(selectedPost.date)}
          </p>
        </div>
      </section>
    </main>
  );
};

export default EventExample;
