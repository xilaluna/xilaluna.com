import Link from 'next/link';
import {
  Brain,
  GithubLogo,
  LinkedinLogo,
  Moon,
  Notebook,
  TwitterLogo,
} from 'phosphor-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-5">
      <Link href={'/'}>
        <a className="text-lg font-bold">Xila Luna</a>
      </Link>

      <div className="flex items-center">
        <div className="flex items-center space-x-3 pr-3">
          <Link href={'/projects'}>
            <a>
              <Notebook className="h-5 w-5" />
            </a>
          </Link>
          <Link href={'/skills'}>
            <a href="">
              <Brain className="h-5 w-5" />
            </a>
          </Link>
        </div>

        <div className="flex items-center space-x-3 border-l border-neutral-600 pl-3 pr-3">
          <a>
            <GithubLogo className="h-5 w-5" />
          </a>

          <a>
            <LinkedinLogo className="h-5 w-5" />
          </a>

          <a>
            <TwitterLogo className="h-5 w-5" />
          </a>
        </div>

        <div className="flex items-center space-x-3 border-l border-neutral-600	 pl-3">
          <Moon className="h-5 w-5" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
