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
    <header className="flex items-center justify-between py-5">
      <Link href={'/'}>
        <a className={`hover:text-pink-400 dark:hover:text-indigo-400 `}>
          Xila Luna
        </a>
      </Link>

      <nav className="flex items-center">
        <div className="flex items-center space-x-3 pr-3">
          <Link href={'/projects'}>
            <RocketLaunch
              className={`icon-style cursor-pointer ${
                router.pathname === '/projects' ||
                router.pathname === '/projects/[id]'
                  ? 'highlight-color'
                  : ''
              }`}
            />
          </Link>
          <Link href={'/skills'}>
            <Brain
              className={`icon-style cursor-pointer ${
                router.pathname === '/skills' ? 'highlight-color' : ''
              }`}
            />
          </Link>
        </div>

        <div className="border-color flex items-center space-x-3 border-l pl-3 pr-3">
          <a href="https://github.com/xilaluna">
            <GithubLogo className="icon-style" />
          </a>

          <a href="https://linkedin.com/in/xilaluna">
            <LinkedinLogo className="icon-style" />
          </a>

          <a>
            <TwitterLogo className="icon-style" />
          </a>
        </div>

        <div className="border-color flex items-center space-x-3 border-l pl-3">
          {handleThemeChange()}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
