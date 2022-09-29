import { Star } from "phosphor-react";

const Copyright = () => {
  return (
    <p className="pb-2 text-neutral-400 dark:text-neutral-600">
      {"Copyright © "}
      {new Date().getFullYear()}
      {" Xila Luna"}
    </p>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="border-color container mt-auto flex flex-col items-center justify-center border-t py-3 sm:py-5">
      <Copyright />
      <a
        className="text-neutral-400 hover:text-pink-400 hover:underline dark:text-neutral-600 dark:hover:text-indigo-400"
        href="https://github.com/xilaluna/xilaluna.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source Code
        <Star className="mb-0.5 ml-2 inline-block h-4 w-4 align-middle" />
      </a>
    </footer>
  );
};

export default Footer;
