"use client";
import SectionHeader from "@app/components/common_components/SectionHeader";
import React, { useState, useEffect } from "react";
import { upcomingeventdetails } from "@constants/fixed";
import UpcomingEvents from "@app/components/homepage_components/UpcomingEvents";
import Link from "next/link";
import Loading from "@app/components/common_components/Loading";

const Events = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [cursors, setCursors] = useState([null]);
  const [totalPosts, setTotalPosts] = useState(null);
  const [currentItems, setCurrentItems] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const PAGE_SIZE = 6;

  async function fetchPage(cursor) {
    let url = `/api/get-post?pageSize=${PAGE_SIZE}`;
    if (cursor) url += `&cursor=${cursor}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch events");
    const data = await res.json();
    return data;
  }

  async function loadPage(pageIndex) {
    setLoading(true);
    try {
      const cursor = cursors[pageIndex];
      const {
        events: newEvents,
        nextCursor,
        totalPosts,
      } = await fetchPage(cursor);

      setCurrentPage(pageIndex);
      setTotalPosts(totalPosts);
      setCurrentItems(newEvents);

      // If moving forward and nextCursor is new, add it to cursors list
      if (nextCursor && !cursors[pageIndex + 1]) {
        const newCursors = [...cursors];
        newCursors[pageIndex + 1] = nextCursor;
        setCursors(newCursors);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPage(0);
    fetch("/api/get-upcoming-events")
      .then((res) => res.json())
      .then(setUpcomingEvents)
      .catch(console.error);
  }, []);

  // PAGINATION CONTROLS
  const totalPages = Math.ceil(totalPosts / PAGE_SIZE);

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <SectionHeader sectionLabel="Events" />
      <section>
        <div className="flex flex-col items-center gap-8 padding-y px-48 max-lg:p-10 font-palanquin text-center text-balance text-black text-lg max-sm:text-base max-sm:leading-7 leading-8">
          <p>
            Namadwaar Singapore organizes a variety of events throughout a year
            such as contests, community events, and celebrations during festive
            occasions, bringing people together in a close-knit space.
          </p>
          <p>
            These include the annual{" "}
            <strong>
              {" "}
              Madhurageetham Music Contest, Gopakuteeram Annual Day,{" "}
            </strong>{" "}
            which have garnered immense interest from the local community in
            Singapore over the past 8 years. Our celebrations of utsavs leave
            people with warm hearts after gathering for a{" "}
            <span className="underlined decoration-solid">
              {" "}
              blissful evening of song, chant and dance!{" "}
            </span>
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h1
          className="font-caudex text-primary-maroon text-4xl max-md:text-3xl
      max-md:leading-8 font-bold max-lg:text-center m-4"
        >
          Upcoming Events
        </h1>
        <div className="mx-5 max-sm:mx-20 grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 justify-center gap-5">
          {upcomingEvents.map((item, index) => (
            <div
              className="group relative overflow-hidden cursor-pointer"
              key={index}
            >
              <Link href={`/events/upcomingevents/${item.id}`}>
                <img
                  className="w-full aspect-[6/5] object-cover group-hover:scale-125 transition-transform duration-1000"
                  src={item.image_links[0]}
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black ">
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-5 text-center">
                    <h1 className="text-2xl max-lg:text-lg font-palanquin text-white">
                      {item.title}
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <br />
      </section>

      {/* {"PAST EVENTS"} */}
      <section className="mb-12">
        <h1
          className="font-caudex text-primary-maroon text-4xl max-md:text-3xl
      max-md:leading-8 font-bold max-lg:text-center m-4"
        >
          Past Events
        </h1>
        <div className="mx-5 max-sm:mx-20 grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 justify-center gap-5">
          {currentItems.map((item, index) => (
            <div
              className="group relative overflow-hidden cursor-pointer"
              key={index}
            >
              <Link href={`/events/${item.id}`}>
                <img
                  className="w-full aspect-[6/5] object-cover group-hover:scale-125 transition-transform duration-1000"
                  src={item.image_links[0]}
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black ">
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-5 text-center">
                    <h1 className="text-2xl max-lg:text-lg font-palanquin text-white">
                      {item.title}
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* Pagination */}
        {totalPages > 0 && (
          <div className="flex justify-center mt-8 gap-4 font-palanquin">
            <button
              onClick={() => loadPage(currentPage - 1)}
              disabled={currentPage === 0 || loading}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2 text-gray-700">
              Page {currentPage + 1} of {totalPages}
            </span>
            <button
              onClick={() => loadPage(currentPage + 1)}
              disabled={loading || currentPage + 1 >= totalPages}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </section>
      {upcomingeventdetails.length > 0 && (
        <section className="padding-x py-10 mt-20 bg-beige">
          <UpcomingEvents />
        </section>
      )}
    </main>
  );
};

export default Events;
