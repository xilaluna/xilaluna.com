const Heading = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="pb-5">{title}</h1>
      <p>{subtitle}</p>
      <div className="border-color my-5 w-12 border-b" />
    </div>
  );
};

export default Heading;
