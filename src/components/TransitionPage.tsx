import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Footer from "@/components/Footer";

interface TransitionPageProps {
  children: React.ReactNode;
  className?: string;
}

const TransitionPage: React.FC<TransitionPageProps> = ({ children }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <Transition
      show={show}
      enter="transition-all duration-700 ease-out"
      enterFrom="opacity-0 translate-y-10"
      enterTo="opacity-100 translate-y-0"
      leave="transition-all duration-700 ease-in"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-10"
      className="flex min-h-screen flex-col "
    >
      {children}
      <Footer />
    </Transition>
  );
};

export default TransitionPage;
