import { Blog } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import CursorHover from "./cursorHover";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <CursorHover scaleSize={6} message="Read" className="group bg-bleached-silk relative w-full overflow-hidden rounded-xl shadow-md">
      <Link href={`/blogs/${blog.slug}`} key={blog.slug}>
        <div className="aspect-square overflow-hidden">
          <Image
            src={blog.thumbnail}
            width="1000"
            height="800"
            alt={blog.title}
            className="bg-eerie-black aspect-square h-auto w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-5">
          <h2 className="mb-6 text-lg font-medium md:mb-8">{blog.title}</h2>

          <div className="text-nickel absolute bottom-4 left-0 flex w-full flex-col justify-between px-5 text-xs md:flex-row">
            <span>Reading time 4 min</span>
            <span>Created at 2022-01-01</span>
          </div>
        </div>
      </Link>
    </CursorHover>
  );
}
