import Image from "next/image";
import Link from "next/link";
import { CaretRight } from "phosphor-react";

const Hero: React.FC = () => {
  return (
    <section className="flex min-h-[95vh] flex-col items-center justify-center space-y-2 pb-12 sm:space-y-4 sm:pb-28">
      <div className="relative h-44 w-44 sm:h-64 sm:w-64">
        <Image
          src="https://paydmgjryegxnlsxvqke.supabase.co/storage/v1/object/public/public/images/profile-picture.jpg?t=2022-10-02T06%3A04%3A50.610Z"
          alt="Profile Image"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
          priority={true}
        />
      </div>
      <h1 className="main-heading">Xila Luna</h1>
      <p className="max-w-xl text-center">
        Xila Luna is a creative full-stack engineer who is willing and able to
        find solutions when there are none.
      </p>
      <div className="flex space-x-3 pt-4 sm:pt-5">
        <Link href={"/links"}>
          <button className="btn ">
            Links
            <CaretRight className="mb-0.5 inline-block align-middle" />
          </button>
        </Link>
        <Link href={"/projects"}>
          <button className="secondary-btn ">
            Projects
            <CaretRight className="mb-0.5 inline-block align-middle" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
