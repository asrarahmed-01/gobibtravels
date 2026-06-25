"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchBlogs } from "@/lib/slices/blogsSlice";
import BlogCard from "../Components/BlogCard";

export default function Blogs() {
  const dispatch = useAppDispatch();
  const { blogs, loading: blogsLoading } = useAppSelector(
    (state) => state.blogs
  );

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <>
      <section
        className="relative h-96 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('/bg-image.jpeg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />

        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl px-20 font-bold text-white drop-shadow-2xl">
            Our Blogs
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            What Our Travelers Say
          </h2>

          {blogsLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div
                  key={index}
                  className="animate-pulse bg-gray-200 h-80 rounded-lg"
                ></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} review={blog} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

