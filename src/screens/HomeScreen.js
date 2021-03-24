import React from 'react';
import EventHeader from '../components/EventHeader';
import SpeakerList from '../components/SpeakerList';

const HomeScreen = () => {
  return (
    <div>
      <EventHeader />
      <SpeakerList />
      {/* TODO: Add schedule */}
      {/* TODO: Add location */}
      {/* TODO: Add footer */}
    </div>
  );
};

export default HomeScreen;
