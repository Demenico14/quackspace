import React from "react";
import MeetingTypeList from '../../../components/MeetingTypeList';

const Home = () => {
  const currentDateTime = new Date();
  
  // Format the time as HH:MM am/pm
  const formattedTime = currentDateTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  // Format the date as a string (e.g., August 16, 2024)
  const formattedDate = currentDateTime.toLocaleDateString([], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div
          className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8
        lg:p-11"
        >
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: {formattedTime}
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-extrabold lg:text-6xl">
              {formattedTime}
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">
              {formattedDate}
            </p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
