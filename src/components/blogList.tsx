import { Blog } from "@/utils/data";
import ActionButton from "./actionButton";
import BlogCard from "./blogCard";
import CursorHover from "./cursorHover";

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  return (
    <>
      <div className="mb-6 flex items-center justify-center pt-5 md:justify-between">
        <h2 className="text-piano-black block text-3xl">Latest articles</h2>

        <CursorHover scaleSize={4} className="hidden md:block">
          <ActionButton
            afterContent="after:content-['View_all']"
            text="View all"
            className="border-dynamic-black bg-eerie-black w-full border px-10 py-5 text-sm uppercase"
            href="/blogs"
          />
        </CursorHover>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogs.slice(0, 3).map((blog) => (
          <BlogCard blog={blog} key={blog.slug} />
        ))}
      </div>

      <CursorHover scaleSize={4} className="block w-full md:hidden">
        <ActionButton
          afterContent="after:content-['View_all']"
          text="View all"
          className="border-dynamic-black bg-eerie-black mt-5 w-full border py-5 text-sm uppercase"
          href="/blogs"
        />
      </CursorHover>
    </>
  );
}
