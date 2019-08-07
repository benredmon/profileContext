import React, { useReducer } from 'react';
import ProfileContext from './profileContext';
import ProfileReducer from './profileReducer';
import { GET_ASSESSMENTS } from '../types';

const ProfileState = props => {
  const initialState = {
    assessments: {}
  };

  const [state, dispatch] = useReducer(ProfileReducer, initialState);

  // Get Assessments
  const getAssessments = () => {
    const sampleData = {
      Pizza: 'Pepperoni',
      Soda: 'Root Beer'
    };

    dispatch({
      type: GET_ASSESSMENTS,
      payload: sampleData
    });
  };

  return (
    <ProfileContext.Provider
      value={{
        assessments: state.assesments,
        getAssessments
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;
