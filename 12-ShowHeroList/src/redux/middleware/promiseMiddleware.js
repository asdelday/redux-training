export default function loggerMiddleware() {
  return next => action => {
    const { promise, types, ...rest } = action;

    if (!promise) return next(action);

    const [REQUEST, SUCCESS, FAIL] = types;
    next({ ...rest, type: REQUEST });

    const actionPromise = promise();
    actionPromise.then((result) => next({ ...rest, result, type: SUCCESS }));
    actionPromise.catch((error) => next({ ...rest, error, type: FAIL }));

    return actionPromise;
  };
}
