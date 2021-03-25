import React from 'react';
import faker from 'faker';
const Speaker = () => {
  const firstName = faker.name.firstName(0);
  const lastName = faker.name.lastName(0);
  return (
    <div className='text-center m-5'>
      <img
        className='mx-auto rounded-full border-2 border-indigo-500'
        src={
          //
          faker.image.people(150, 150).replace('http', 'https') +
          `?random=${faker.random.word('randomtext')}`
        }
        alt=''
        srcset=''
      />
      <h2 className='text-4xl mt-2'>{`${firstName}  ${lastName}`}</h2>
      <h2 className='text-lg mt-2'>{faker.company.companyName(0)}</h2>
      <h2 className='text-lg'>{faker.commerce.department()}</h2>
      <h2 className='text-lg text-gray-700'>{faker.address.country()}</h2>
      <div className='flex space-x-2 justify-center mt-2'>
        <a
          href={`https://www.twitter.com/${faker.internet
            .userName(firstName, lastName)
            .toLowerCase()}`}
        >
          <i className='fab fa-twitter text-2xl hover:text-indigo-500'></i>
        </a>
        <a
          href={`https://www.github.com/${faker.internet
            .userName(firstName, lastName)
            .toLowerCase()}`}
        >
          <i className='fab fa-github text-2xl hover:text-indigo-500'></i>
        </a>
        <a href={faker.internet.url()}>
          <i className='fas fa-globe text-2xl hover:text-indigo-500'></i>
        </a>
      </div>
    </div>
  );
};

export default Speaker;
