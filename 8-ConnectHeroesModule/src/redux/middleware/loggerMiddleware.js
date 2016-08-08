/* eslint-disable no-console */
export default function loggerMiddleware(store) {
  return next => action => {
    console.group(action.type);
    console.info('dispatching', action);

    const result = next(action);

    console.log('next state', store.getState());
    console.groupEnd(action.type);

    return result;
  };
}
/* eslint-enable no-console */
