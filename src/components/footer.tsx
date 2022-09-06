const Copyright = () => {
  return (
    <p className="text-neutral-400 dark:text-neutral-600">
      {'Copyright © '}
      {new Date().getFullYear()}
      {' Xila Luna'}
    </p>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="border-color mx-auto flex max-w-screen-sm items-center justify-center border-t py-3 sm:py-5">
      <Copyright />
    </footer>
  );
};

export default Footer;
