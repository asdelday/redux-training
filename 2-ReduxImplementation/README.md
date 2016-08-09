# 2. Redux Implementation

  * Intall Redux and react-redux bindings
  * Create a Redux store
  * Create and action
  * Create a reducer
  * Dispatch an action
  * Handle an action in the reducer
  * Connect our containers
  
  
### Steps:

  * Intall redux and react-redux: `npm i -S redux react-redux`
  
  * Create a `./src/redux/` folder
  
  * Create a `./src/redux/modules/` folder to store our redux reducer bundler. See [Ducks](https://github.com/erikras/ducks-modular-redux)
  
  * Create a `./src/redux/middlewares/` folder to store our redux middlewares
    
  * Create a `./src/redux/modules/app.js` file. Reducer bundler for App settings:
    * Create a `CHANGE_FONT_SIZE` exportable constant
    * Set an `initialState`
    * Export as default a function called `reducer` which handle CHANGE_FONT_SIZE action
    * Export `changeFontSize` action creator
    
  * Create a `./src/redux/modules/root.js` to wrap all our other redux reducers.
    * Import `combineReducers` from `redux`
    * Import our `app` reducer
    * Export as default a `combineReducers({ /* REDUCERS */ })`
    
  * Create a `./src/redux/createStore.js` file - Here we're going to create the redux store:
    * Import `createStore` and `applyMiddleware` from `redux`
    * Import our `root` reducer
    * Export as default a `createStore` function which receives an `initialState` as argument
      * Using `applyMiddleware` function create a `finalCreateStore` variable
      * Create the `store` using `finalCreateStore` and passing it the `rootReducer` and the `initialState`
      * Make Redux reducers hot-loadable in development:
      ```javascript
      if (process.env.NODE_ENV === 'development' && module.hot) {
        module.hot.accept('./modules/root', () => {
          store.replaceReducer(require('./modules/root').default);
        });
      }
      ```
      * Return the store
        
  * At `./src/client.js` file:
    * Import `Provider` from `react-redux`
    * Import our `createStore.js` and create the store with it
    * Embed our `App` container inside `Provider`. Don't forget to pass the store to the Provider as prop
      
  * At `./src/containers/App.jsx` file:
    * Import `connect` from `react-redux`
    * Import our `changeFontSize` action from the app module.
    * Connect the container to Redux passing the `fontSize` and the `changeFontSize`
    
  * At `./src/components/App.jsx` file:
    * Write propTypes for `fontSize` and `changeFontSize`
    * Create the style with the `fontSize` passed.
    * Create two buttont to increment and decrement the `fontSize`
    * Call the action to change the fontSize
        
  
   
