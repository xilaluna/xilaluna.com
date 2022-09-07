const Copyright = () => {
  return (
    <p className="text-center text-neutral-400 dark:text-neutral-600">
      {'Copyright © '}
      {new Date().getFullYear()}
      {' Xila Luna'}
    </p>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="border-color container mt-auto border-t py-3 sm:py-5">
      <Copyright />
    </footer>
  );
};

export default Footer;
