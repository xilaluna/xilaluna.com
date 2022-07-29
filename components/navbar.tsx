import Link from 'next/link';
import { GitHub, Linkedin, Twitter, Sun } from 'react-feather';

const Navbar = () => {
  return (
    <div>
      <div className="py-2" />
      <div className="flex items-center justify-between py-2">
        <div className="w-full">
          <p>Status</p>
        </div>
        <div className="flex w-full justify-center">
          <h1>Xila Luna</h1>
        </div>

        <ul className="flex w-full justify-end">
          <li className="pr-1">
            <Linkedin />
          </li>
          <li className="px-1">
            <GitHub />
          </li>
          <li className="pl-1">
            <Twitter />
          </li>
        </ul>
      </div>

      <div className="divider-y h-5" />

      <div className="flex items-center justify-between space-x-3 py-5">
        <Link href="/">
          <a>Home</a>
        </Link>

        <div className="divider" />

        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
