import TransitionPage from "@/components/TransitionPage";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <TransitionPage>
      <main className="container space-y-8 py-10 sm:space-y-10 sm:py-20">
        <section className="flex flex-col items-center justify-center space-y-2 ">
          <h1 className="heading-color text-center text-3xl font-bold sm:text-4xl">
            {title}
          </h1>
          <p className="sub-color text-center">{description}</p>
        </section>
        {children}
      </main>
    </TransitionPage>
  );
};

export default Layout;
