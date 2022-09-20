import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import {
  Brain,
  MoonStars,
  RocketLaunch,
  PaperPlaneTilt,
  Sun,
  House,
  Link as LinkIcon,
} from 'phosphor-react';

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMount] = useState(false);
  const [navStyles, setNavStyles] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setMount(true);
    const handleNavStyles = () => {
      if (window.scrollY > 45) {
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
          className="icon-style active:animate-spin"
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <Sun
          className="icon-style active:animate-spin"
          role="button"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  return (
    <header className="sticky top-0 z-10 backdrop-blur-md">
      <nav
        className={`container flex items-center justify-between space-x-3 py-3 sm:py-5 ${
          navStyles ? 'border-color border-b' : ''
        }`}
      >
        <Link href={'/'} aria-label="Home Page">
          <House
            className={`icon-style cursor-pointer ${
              router.pathname === '/' ? 'highlight' : ''
            }`}
          />
        </Link>
        <Link href={'/projects'} aria-label="Projects">
          <RocketLaunch
            className={`icon-style cursor-pointer ${
              router.pathname === '/projects' ||
              router.pathname === '/projects/[id]'
                ? 'highlight'
                : ''
            }`}
          />
        </Link>
        <Link href={'/skills'} aria-label="Skills">
          <Brain
            className={`icon-style cursor-pointer ${
              router.pathname === '/skills' ? 'highlight' : ''
            }`}
          />
        </Link>
        <Link href={'/links'} aria-label="Links">
          <LinkIcon
            className={`icon-style cursor-pointer ${
              router.pathname === '/links' ? 'highlight' : ''
            }`}
          />
        </Link>

        <a href="mailto:xilaluna2@gmail.com" aria-label="Send Email">
          <PaperPlaneTilt className="icon-style" />
        </a>

        {handleThemeChange()}
      </nav>
    </header>
  );
};

export default Navbar;
