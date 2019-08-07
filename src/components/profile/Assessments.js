import React, { Fragment, useEffect, useContext } from 'react';
import ProfileContext from '../../context/profile/profileContext';

// https://github.com/bradtraversy/github-finder

const Assessments = () => {
  const profileContext = useContext(ProfileContext);
  console.log('profileContext', profileContext);

  const { getAssessments, assessments } = profileContext;
  console.log('assessments', assessments);

  useEffect(() => {
    console.log('Get Assessments');
    getAssessments();
    console.log('assessments', assessments);
    //eslint-disable-next-line
  }, []);

  console.log('assessments', assessments);

  //   const { Pizza, Soda } = assessments;

  //   console.log('Pizza & Soda', Pizza, Soda);

  return (
    <Fragment>
      <h1>Test</h1>
    </Fragment>
  );
};

export default Assessments;
