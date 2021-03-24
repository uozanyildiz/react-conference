import React from 'react';
import ScheduleItem from '../components/ScheduleItem';
import faker from 'faker';
const ScheduleScreen = () => {
  return (
    <div className='mt-16 flex min-w-full'>
      <div className='mx-auto'>
        <h1 className='text-5xl text-center'>Schedule</h1>
        <div className='mt-10 text-center'>
          <ScheduleItem
            time='09.00'
            name={`${faker.name.firstName(0)} ${faker.name.lastName(0)}`}
            topic={faker.hacker.adjective() + ' in React'}
          />
          <ScheduleItem
            time='12.00'
            name={`${faker.name.firstName(1)} ${faker.name.lastName(1)}`}
            topic={faker.hacker.adjective() + ' in React'}
          />
          <ScheduleItem
            time='14.00'
            name={`${faker.name.firstName(0)} ${faker.name.lastName(0)}`}
            topic={faker.hacker.adjective() + ' in React'}
          />
          <ScheduleItem
            time='16.00'
            name={`${faker.name.firstName(0)} ${faker.name.lastName(0)}`}
            topic={faker.hacker.adjective() + ' in React'}
          />
          <ScheduleItem
            time='18.00'
            name={`${faker.name.firstName(1)} ${faker.name.lastName(1)}`}
            topic={faker.hacker.adjective() + ' in React'}
          />
        </div>
      </div>
    </div>
  );
};

export default ScheduleScreen;
