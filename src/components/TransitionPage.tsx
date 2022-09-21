import { Transition } from '@headlessui/react';

interface TransitionPageProps {
  children: React.ReactNode;
  className?: string;
}

const TransitionPage: React.FC<TransitionPageProps> = ({
  children,
  className,
}) => {
  return (
    <Transition
      appear={true}
      show={true}
      as="main"
      enter="transition-all duration-700 ease-out"
      enterFrom="opacity-0 translate-y-10"
      enterTo="opacity-100 translate-y-0"
      leave="transition-all duration-700 ease-in"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-10"
      className={className}
    >
      {children}
    </Transition>
  );
};

export default TransitionPage;
