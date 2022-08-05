const Heading = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="pb-2">{title}</h1>
      <p className="px-20 pb-10 text-center">{subtitle}</p>
      <div className="border-color w-12 border-b" />
    </div>
  );
};

export default Heading;
