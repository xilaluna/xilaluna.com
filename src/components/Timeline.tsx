const Timeline: React.FC = () => {
  return (
    <section className="flex min-h-screen flex-col">
      <div className="flex space-x-2 sm:space-x-4">
        <div className="flex flex-col items-center justify-center">
          <p>2022</p>
          <div className="border-color h-full w-px border-l" />
        </div>
        <div className="flex flex-col space-y-5 pb-5">
          <p>
            Developed the project LendA as a part of the{' '}
            <a href="https://www.joincolab.io/" className="link-style">
              Co.Lab
            </a>{' '}
            8 week program.
          </p>
          <p>
            Graduated from{' '}
            <a className="link-style" href="https://www.dominican.edu/">
              Dominican University of California
            </a>{' '}
            with a bachelor&apos;s degree in computer science.
          </p>
        </div>
      </div>
      <div className="flex space-x-2 sm:space-x-4">
        <div className="flex flex-col items-center justify-center">
          <p>2020</p>
          <div className="border-color h-full w-px border-l" />
        </div>
        <div className="flex flex-col space-y-5 pb-5">
          <p>Graduated from Berkeley High School.</p>
          <p>
            Completed{' '}
            <a className="link-style" href="https://codenation.org/">
              Code Nation
            </a>{' '}
            Pandora program.
          </p>
          <p>
            Participant of{' '}
            <a
              className="link-style"
              href="https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute"
            >
              Google&apos;s Computer Science Summer Institute
            </a>
            .
          </p>
        </div>
      </div>
      <div className="flex space-x-2 sm:space-x-4">
        <div className="flex flex-col items-center justify-center">
          <p>2019</p>
          <div className="border-color h-full w-px border-l" />
        </div>
        <div className="flex flex-col space-y-5 pb-5">
          <p>
            Joined my High School&apos;s Robotics Club{' '}
            <a className="link-style" href="https://team5419.org/">
              Team 5419 Berkelium
            </a>
            .
          </p>
        </div>
      </div>
      <div className="flex space-x-2 sm:space-x-4">
        <div className="flex flex-col items-center justify-center">
          <p>2018</p>
          <div className="border-color h-full w-px border-l" />
        </div>
        <div className="flex flex-col">
          <p>Wrote my first line of code.</p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
