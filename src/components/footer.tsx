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
    <footer className="absolute bottom-0 w-full">
      <div className="border-color mx-auto max-w-screen-sm border-t py-3 sm:py-5">
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
