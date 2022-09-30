import type { NextPage } from "next";
import TransitionPage from "@/components/TransitionPage";
import Heading from "@/components/Heading";
import { allPosts, Post } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";

export const getStaticProps = async () => {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
};

const Blog: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <TransitionPage className="secondary-page">
        <Heading title="Blog" subtitle="My personal blog" />
        <div className="flex flex-col space-y-5">
          {posts.map((post) => (
            <div
              key={post.url}
              className="border-color space-y-2 rounded-md border p-5"
            >
              <Link href={post.url}>
                <h2 className="heading-color link-style  text-xl hover:cursor-pointer">
                  {post.title}
                </h2>
              </Link>

              <p>{post.description}</p>

              <div>
                <time dateTime={post.date} className="sub-color">
                  {format(parseISO(post.date), "LLLL d, yyyy")}
                </time>
              </div>
            </div>
          ))}
        </div>
      </TransitionPage>
    </>
  );
};

export default Blog;
