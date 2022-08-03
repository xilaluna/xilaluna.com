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
    <div className="flex items-center justify-center border-t border-neutral-400 py-5 dark:border-neutral-600">
      <Copyright />
    </div>
  );
};

export default Footer;
