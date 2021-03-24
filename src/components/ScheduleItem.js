import React from 'react';

const ScheduleItem = (props) => {
  const { time, name, topic } = props;
  return (
    <div className='flex mb-10'>
      <h1 className='w-1/5 underline text-4xl ml-auto'>{time}</h1>
      <div className='w-4/5 ml-10 text-center'>
        <h1 className='text-xl font-semibold '>{name}</h1>
        <h1 className='text-lg capitalize'>{topic}</h1>
      </div>
    </div>
  );
};

export default ScheduleItem;
