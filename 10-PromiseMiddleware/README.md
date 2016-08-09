# 10. Promise Middleware

  * Create a middleware to handle Promises
    
  
### Steps:

  * At `./src/redux/middleware` create a `promiseMiddleware.js` file:
    * Get `promise`, `types` and the `rest` of the action properties
    * If there is no `promise` go to the return the next middleware
    * Get `REQUEST`, `SUCCESS` and `FAIL` from types.
    * Fire the `REQUEST` action.
    * Call the promise and handle its result. Dispatching `SUCCESS` or `FAIL` actions.
    * Return the fired promise [OPTIONAL]
  
  * At `./src/redux/createStore.js`:
    * Import our `promiseMiddleware`
    * Add it before our `loggerMiddleware` into our middleware list
