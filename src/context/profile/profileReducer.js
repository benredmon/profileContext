import { GET_ASSESSMENTS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ASSESSMENTS:
      console.log('GET ASSESSMENTS', action.payload);
      console.log('STATE', state);
      return {
        ...state,
        assessments: action.payload
      };
    default:
      return state;
  }
};
