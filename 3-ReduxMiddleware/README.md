# 3. Redux Middleware

  * Create and use a redux middleware - a loggerMiddleware
  
  
### Steps:

  * At `./src/redux/middleware` create a `loggerMiddleware.js`:
    * It will export as default a function which receive a store (injected by redux by default) as argument.
    * A middleware is a function which return a double currying function as `middleware = store => next => action => {...}`
    * Print the action in the console
    * Let the action continue its flow with `next`
    * Print the new state
    * [OPTIONAL] Return it.
    
  * At `./src/redux/createStore`:
    * Import our `loggerMiddleware` and add it to our middlewares into the store.
    
  * Now it's ready to use'
        
  
   
