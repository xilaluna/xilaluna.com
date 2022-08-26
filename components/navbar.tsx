import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import {
  Brain,
  GithubLogo,
  LinkedinLogo,
  MoonStars,
  RocketLaunch,
  TwitterLogo,
  Sun,
  UserCircle,
} from 'phosphor-react';

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMount] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMount(true);
  }, []);

  const handleThemeChange = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
      return (
        <MoonStars
          className="icon-style"
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <Sun
          className="icon-style"
          role="button"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  return (
    <header className="sticky top-0 z-10 py-5 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-screen-sm items-center space-x-3">
        <div className="grow">
          <Link href={'/'}>
            <UserCircle className="icon-style h-6 w-6 cursor-pointer" />
          </Link>
        </div>

        <Link href={'/projects'}>
          <RocketLaunch
            className={`icon-style cursor-pointer ${
              router.pathname === '/projects' ||
              router.pathname === '/projects/[id]'
                ? 'active-link'
                : ''
            }`}
          />
        </Link>
        <Link href={'/skills'}>
          <Brain
            className={`icon-style cursor-pointer ${
              router.pathname === '/skills' ? 'active-link' : ''
            }`}
          />
        </Link>

        <div className="border-color h-5 border-l"></div>

        <a href="https://github.com/xilaluna">
          <GithubLogo className="icon-style" />
        </a>
        <a href="https://linkedin.com/in/xilaluna">
          <LinkedinLogo className="icon-style" />
        </a>
        <a>
          <TwitterLogo className="icon-style" />
        </a>

        <div className="border-color h-5 border-l"></div>

        {handleThemeChange()}
      </nav>
    </header>
  );
};

export default Navbar;
