import React from 'react';

const LocationScreen = () => {
  return (
    <div className='mt-16 flex flex-col h-screen'>
      <h1 className='text-5xl text-center text-indigo-900'>Location</h1>

      <div className='mx-10 sm:mx-20 lg:mx-40 mt-16 flex flex-col pb-10'>
        <p className='text-xl mt-5 text-center'>
          Our conference takes place at Mediterranean University in Antalya, 20
          minutes walk from beautiful Konyaalti Beach.
        </p>
        <iframe
          className='mx-auto mt-16 w-full'
          title='location'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12763.33604840477!2d30.646694827956296!3d36.894318972131394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c391cd6e38486d%3A0xfbd4e14587332eeb!2sMediterranean%20University!5e0!3m2!1sen!2str!4v1616617234919!5m2!1sen!2str'
          height='450'
          style={{ border: 0 }}
          allowfullscreen=''
          loading='lazy'
        ></iframe>
      </div>
    </div>
  );
};

export default LocationScreen;
