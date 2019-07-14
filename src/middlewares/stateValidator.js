import tv4 from 'tv4';
import stateSchema from 'middlewares/stateSchema';

export default ({ getState }) => next => action => {
  next(action);
  const valid = tv4.validate(getState(), stateSchema);
  if (!valid) {
    console.error(tv4.error.message);
  }
};
