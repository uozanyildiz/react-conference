import React from 'react';
import Speaker from './Speaker';
const SpeakerList = () => {
  return (
    <div className=''>
      <h1 className='text-center text-3xl sm:text-5xl mt-10 pb-10'>Speakers</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-items-center m-5 sm:m-10'>
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
      </div>
    </div>
  );
};

export default SpeakerList;
