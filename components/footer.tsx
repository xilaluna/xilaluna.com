const Copyright = () => {
  return (
    <p className="text-neutral-400 dark:text-neutral-600">
      {'Copyright © '}
      {new Date().getFullYear()}
      {' Xila Luna'}
    </p>
  );
};

const Footer = () => {
  return (
    <footer className="border-color flex items-center justify-center border-t py-5">
      <Copyright />
    </footer>
  );
};

export default Footer;
