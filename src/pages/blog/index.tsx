import type { NextPage } from "next";
import TransitionPage from "@/components/TransitionPage";
import Heading from "@/components/Heading";

const Blog: NextPage = () => {
  return (
    <>
      <TransitionPage className="secondary-page">
        <Heading title="Blog" subtitle="My personal blog" />
      </TransitionPage>
    </>
  );
};

export default Blog;
