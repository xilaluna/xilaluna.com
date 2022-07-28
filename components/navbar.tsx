import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <div className="py-2" />
      <div className="flex justify-between items-center py-2">
        <div className="w-full">
          <p>Status</p>
        </div>
        <div className="w-full flex justify-center">
          <h1>Xila Luna</h1>
        </div>

        <ul className="w-full flex justify-end">
          <li className="pr-1">LinkedIn</li>
          <li className="px-1">GitHub</li>
          <li className="pl-1">Twitter</li>
        </ul>
      </div>

      <div className="py-2" />

      <ul className="w-full flex justify-center items-center border-y border-black py-1">
        <li className="px-2">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="px-2">
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
