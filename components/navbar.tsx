import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import {
  Brain,
  GithubLogo,
  LinkedinLogo,
  Moon,
  Notebook,
  TwitterLogo,
  Sun,
} from 'phosphor-react';

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  const handleThemeChange = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
      return (
        <Sun
          className="h-5 w-5"
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <Moon
          className="h-5 w-5"
          role="button"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  return (
    <nav className="flex items-center justify-between py-5">
      <Link href={'/'}>
        <a className="">Xila Luna</a>
      </Link>

      <nav className="flex items-center">
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

        <div className="flex items-center space-x-3 border-l border-neutral-400 pl-3 pr-3 dark:border-neutral-600">
          <a href="https://github.com/xilaluna">
            <GithubLogo className="h-5 w-5" />
          </a>

          <a href="https://linkedin.com/in/xilaluna">
            <LinkedinLogo className="h-5 w-5" />
          </a>

          <a>
            <TwitterLogo className="h-5 w-5" />
          </a>
        </div>

        <div className="flex items-center space-x-3 border-l border-neutral-400 pl-3 dark:border-neutral-600">
          {handleThemeChange()}
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
