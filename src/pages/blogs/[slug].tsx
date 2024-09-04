import Head from "next/head";
import Image from "next/image";
import Markdown from "react-markdown";
import BlogList from "@/components/blogList";
import HeaderBar from "@/components/headerBar";
import { Blog, blogs } from "@/utils/data";

export async function getStaticPaths() {
  const blogsList = blogs;
  const paths = blogsList.map((blog) => ({ params: { slug: blog.slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const blogDetail = blogs.find((blog) => blog.slug === params.slug);

  return {
    props: { blogDetail },
  };
}

export default function BlogDetail({ blogDetail }: { blogDetail: Blog }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{blogDetail.title}</title>
      </Head>

      <header className="w-full bg-white p-3">
        <HeaderBar />
      </header>

      <main className="min-h-screen space-y-20 bg-white pb-10">
        <section>
          <div className="relative flex h-screen max-h-96 items-center justify-center bg-dynamic-black/50">
            <Image src={blogDetail.coverImageUrl} alt="" width="500" height="500" className="h-full w-full object-cover" priority />

            <h1 className="absolute text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">{blogDetail.title}</h1>
          </div>
        </section>

        <section>
          <div className="prose mx-auto max-w-screen-md p-4 font-charter md:p-0">
            <Markdown>{blogDetail.content}</Markdown>
          </div>
        </section>

        <section className="mb-8 p-4">
          <BlogList blogs={blogs.filter((blog) => blog.slug !== blogDetail.slug)} />
        </section>
      </main>
    </>
  );
}
