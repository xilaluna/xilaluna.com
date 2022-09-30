import type { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from "next";
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import TransitionPage from "@/components/TransitionPage";
import Heading from "@/components/Heading";
import Head from "next/head";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const post = allPosts.find((post) => post._raw.flattenedPath === id);
  return {
    props: {
      post,
    },
  };
};

const BlogPost: NextPage<{ post: Post }> = ({ post }) => {
  const MDX = useMDXComponent(post.body.code);
  return (
    <>
      <Head>
        <title>{`${post.title} - Xila Luna`}</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={`${post.title} - Xila Luna`} />
        <meta property="og:url" content={`https://xilaluna.com/${post.url}`} />
      </Head>
      <TransitionPage className="secondary-page">
        <Heading title={post.title} subtitle={post.description} />
        <div className="prose prose-neutral dark:prose-invert">
          <MDX />
        </div>
      </TransitionPage>
    </>
  );
};

export default BlogPost;
