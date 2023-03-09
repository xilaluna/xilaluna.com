import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import {
  PaperPlaneTilt,
  House,
  GithubLogo,
  LinkedinLogo,
  StackOverflowLogo,
  Coffee,
} from "phosphor-react";
import Layout from "@/components/Layout";

const Links: NextPage = () => {
  return (
    <>
      <Head>
        <title>Links - Xila Luna</title>
        <meta name="description" content="Xila Luna's links" />
        <meta property="og:title" content="Links - Xila Luna" />
        <meta property="og:url" content="https://xilaluna.com/links" />
        <meta
          property="og:image"
          content="https://paydmgjryegxnlsxvqke.supabase.co/storage/v1/object/public/public/images/links-page.png?t=2022-09-19T09%3A43%3A20.435Z"
        />
      </Head>

      <Layout title="Links" description="@xilaluna">
        <section className="flex flex-col items-center justify-center space-y-5">
        
          <ButtonLink
            href="mailto:xilaluna2@gmail.com"
            Icon={<PaperPlaneTilt />}
            text="Email"
          />
          <ButtonLink
            href="https://github.com/xilaluna"
            Icon={<GithubLogo />}
            text="GitHub"
          />
          <ButtonLink
            href="https://www.linkedin.com/in/xilaluna/"
            Icon={<LinkedinLogo />}
            text="LinkedIn"
          />
          <ButtonLink
            href="https://www.buymeacoffee.com/xilaluna"
            Icon={<Coffee />}
            text="Buy Me A Coffee"
          />
        </section>
      </Layout>
    </>
  );
};

export default Links;

interface ButtonLinkProps {
  href: string;
  Icon: React.ReactElement;
  text: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, Icon, text }) => {
  return (
    <a
      className="btn w-full px-6 py-4"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {React.cloneElement(Icon, {
        className: "mb-0.5 mr-2 inline-block h-5 w-5 align-middle",
      })}
      {text}
    </a>
  );
};
