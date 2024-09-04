import { Blog } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import CursorHover from "./cursorHover";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <CursorHover scaleSize={6} message="Read" className="group relative overflow-hidden rounded-xl bg-bleached-silk shadow-md w-full">
      <Link href={`/blogs/${blog.slug}`} key={blog.slug}>
        <div className="aspect-square overflow-hidden">
          <Image
            src={blog.thumbnail}
            width="1000"
            height="800"
            alt={blog.title}
            className="aspect-square h-auto w-full bg-eerie-black object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-5">
          <h2 className="mb-6 text-lg font-medium md:mb-8">{blog.title}</h2>

          <div className="absolute left-0 bottom-4 flex w-full flex-col justify-between px-5 text-xs text-nickel md:flex-row">
            <span>Reading time 4 min</span>
            <span>Created at 2022-01-01</span>
          </div>
        </div>
      </Link>
    </CursorHover>
  );
}
