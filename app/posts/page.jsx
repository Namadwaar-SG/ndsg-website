"use client";
import SectionHeader from "@app/components/common_components/SectionHeader";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Loading from "@app/components/common_components/Loading";

const Posts = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [cursors, setCursors] = useState([null]);
  const [totalPosts, setTotalPosts] = useState(null);
  const [currentItems, setCurrentItems] = useState([]);
  const PAGE_SIZE = 6;

  async function fetchPage(cursor) {
    let url = `/api/get-post?pageSize=${PAGE_SIZE}`;
    if (cursor) url += `&cursor=${cursor}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch posts");
    const data = await res.json();
    return data;
  }

  async function loadPage(pageIndex) {
    setLoading(true);
    try {
      const cursor = cursors[pageIndex];
      const {
        posts: newPosts,
        nextCursor,
        totalPosts,
      } = await fetchPage(cursor);

      setCurrentPage(pageIndex);
      setTotalPosts(totalPosts);
      setCurrentItems(newPosts);

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

  // PAGINATION CONTROLS
  const totalPages = Math.ceil(totalPosts / PAGE_SIZE);

  useEffect(() => {
    loadPage(0);
  }, []);

  return (
    <>
      {loading && <Loading />}
      <main>
        <SectionHeader sectionLabel="Posts" />
        {/* {"Posts"} */}
        <section className="mb-12">
          <br></br>
          <div className="mx-5 max-sm:mx-20 grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 justify-center gap-5">
            {currentItems.map((item, index) => (
              <div
                className="group relative overflow-hidden cursor-pointer"
                key={index}
              >
                <Link href={`/posts/${item.id}`}>
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
      </main>
    </>
  );
};

export default Posts;
