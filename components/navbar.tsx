import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <div className="p-2" />
      <div className="flex justify-between items-center border-b border-black py-2">
        <div className="flex-1">
          <p>Status</p>
        </div>
        <div className="flex-1 flex justify-center">
          <h1>Xila Luna</h1>
        </div>

        <ul className="flex-1 flex justify-end">
          <li className="px-1">LinkedIn</li>
          <li className="px-1">GitHub</li>
          <li className="px-1">Twitter</li>
        </ul>
      </div>

      <div className="py-2" />

      <div className="flex items-center">
        |
        <Link href="/">
          <a>Home</a>
        </Link>
        |
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        |
      </div>
    </div>
  );
};

export default Navbar;
