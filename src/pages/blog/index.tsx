import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import { allPosts, Post } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Layout from "@/components/Layout";

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
};

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Link href={post.url}>
      <div className="border-color space-y-2 rounded-md border p-5 transition-colors hover:cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800">
        <h2 className="heading-color link-style text-xl hover:cursor-pointer">
          {post.title}
        </h2>
        <p>{post.description}</p>

        <div>
          <time dateTime={post.date} className="sub-color">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
      </div>
    </Link>
  );
};

const Blog: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog - Xila Luna</title>
        <meta name="description" content="Xila Luna's Blog" />
        <meta property="og:title" content="Blog - Xila Luna" />
        <meta property="og:url" content="https://xilaluna.com/blog" />
      </Head>
      <Layout title="Blog" description="My personal blog">
        <section className="flex flex-col space-y-5">
          {posts.map((post) => (
            <PostCard key={post.url} post={post} />
          ))}
        </section>
      </Layout>
    </>
  );
};

export default Blog;
