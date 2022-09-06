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
  PaperPlaneTilt,
  Sun,
  UserCircle,
} from 'phosphor-react';

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMount] = useState(false);
  const [navStyles, setNavStyles] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setMount(true);
    const handleNavStyles = () => {
      if (window.scrollY > 80) {
        setNavStyles(true);
      } else {
        setNavStyles(false);
      }
    };
    window.addEventListener('scroll', handleNavStyles);
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
    <header className="sticky top-0 z-10 backdrop-blur-md ">
      <nav
        className={`mx-auto flex max-w-screen-sm items-center space-x-3 py-3 px-4 sm:py-5 sm:px-0 ${
          navStyles ? 'border-color border-b' : ''
        }`}
      >
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
        <a href="mailto:xilaluna1@gmail.com">
          <PaperPlaneTilt className="icon-style" />
        </a>

        <div className="border-color h-5 border-l"></div>

        {handleThemeChange()}
      </nav>
    </header>
  );
};

export default Navbar;
