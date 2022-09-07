import { HandWaving } from 'phosphor-react';

const GetInTouch: React.FC = () => {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center space-y-5">
      <h2 className="sub-heading text-3xl">Get in Touch</h2>
      <p>Message me and say hello.</p>
      <a href="mailto:xilaluna1@gmail.com" className="btn">
        Contact Me{' '}
        <HandWaving className="mb-0.5 inline-block h-6 w-6 align-middle" />
      </a>
    </section>
  );
};

export default GetInTouch;
