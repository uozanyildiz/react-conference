import React from 'react';

const EventHeader = () => {
  return (
    <div className='m-16'>
      <div className='flex flex-col pt-10 pb-24 p-10 bg-conference bg-fixed bg-center bg-cover bg-no-repeat'>
        <div className='bg-gradient-to-t from-indigo-700 to-indigo-900 opacity-90 text-indigo-100 mb-auto bg-opacity-80 p-10 rounded-3xl shadow-xl '>
          <h3 className='text-3xl'>ReactJS Antalya</h3>
          <h3 className='text-xl mt-5'>24 March 2021</h3>
          <p className='text-lg mt-10'>
            For 4 years in a row, ReactJS Antalya has been Turkey's largest and
            most prestigious conference for the React© framework. The all
            technical conference brings top local and international speakers to
            share their experiences with over 1,000 developers in Turkey and
            from all over the world. The conference features advanced topics
            aimed for experienced developers, team leaders, and consultants. And
            a great oppurtinuty R&D and product managers to evaluate the
            business advantages of React.
          </p>
        </div>
        <a
          href='/'
          className='mx-auto mt-10 p-2 bg-white bg-opacity-80 rounded-lg text-2xl text-indigo-900 hover:text-indigo-500'
        >
          Buy a ticket!
        </a>
      </div>
    </div>
  );
};

export default EventHeader;
