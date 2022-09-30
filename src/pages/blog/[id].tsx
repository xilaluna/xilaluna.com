import type { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from "next";
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import TransitionPage from "@/components/TransitionPage";
import Heading from "@/components/Heading";

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

const Post: NextPage<{ post: Post }> = ({ post }) => {
  const MDX = useMDXComponent(post.body.code);
  return (
    <>
      <TransitionPage className="secondary-page">
        <Heading title={post.title} subtitle={post.description} />
        <div>
          <MDX />
        </div>
      </TransitionPage>
    </>
  );
};

export default Post;
