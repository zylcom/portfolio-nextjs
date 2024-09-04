import Head from "next/head";
import BlogCard from "@/components/blogCard";
import HeaderBar from "@/components/headerBar";
import { blogs } from "@/utils/data";

export default function Blog() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Blogs</title>
      </Head>

      <header className="w-full p-3">
        <HeaderBar />
      </header>

      <main className="mx-auto min-h-screen max-w-screen-md py-8 px-3">
        <h1 className="mb-10 text-center text-6xl font-bold">Blogs</h1>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog.slug} />
          ))}
        </div>
      </main>
    </>
  );
}
