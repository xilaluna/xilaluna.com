const Copyright = () => {
  return (
    <p>
      {'Copyright © '}
      {new Date().getFullYear()}
      {' Xila Luna'}
    </p>
  );
};

const Footer = () => {
  return (
    <div className="flex items-center justify-center border-t border-neutral-600 py-5">
      <Copyright />
    </div>
  );
};

export default Footer;
