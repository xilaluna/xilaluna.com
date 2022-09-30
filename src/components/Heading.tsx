interface HeadingProps {
  title: string;
  subtitle: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 ">
      <h1 className="heading-color text-center text-3xl font-bold sm:text-4xl">
        {title}
      </h1>
      <p className="sub-color text-center">{subtitle}</p>
    </div>
  );
};

export default Heading;
