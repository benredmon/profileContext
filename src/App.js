import React from 'react';
import Assessments from './components/profile/Assessments';
import ProfileState from './context/profile/ProfileState';
import './App.css';

const App = () => {
  return (
    <ProfileState>
      <div className='App'>
        <h1>Hello!</h1>
        <Assessments />
      </div>
    </ProfileState>
  );
};

export default App;
