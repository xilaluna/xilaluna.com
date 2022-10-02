import type { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Layout from "@/components/Layout";

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
      <Layout title={post.title} description={post.description}>
        <section className="prose prose-neutral dark:prose-invert">
          <MDX />
        </section>
      </Layout>
    </>
  );
};

export default BlogPost;
