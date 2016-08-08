# 5. React Router

  * Integrate the React Router in the project
  
  
### Steps:

  * Install the `react-router` and `react-router-redux`: `npm i -S react-router react-router-redux`
  
  * Create `HeroList` Container and `HeroList` Component
    * At them to their respective index.js at `./src/components/` and `./src/containers/`
  
  * Create `HeroDetails` Container and `HeroDetails` Component
    * At them to their respective index.js at `./src/components/` and `./src/containers/`

  * Create a `routes.jsx` file at `./src/`:
    * Import `React` from `react`
    * Import `IndexRoute` and `Route` from `react-router`
    * Import `App`, `HeroList` and `HeroDetails` from `./src/containers`
    * Export as default a function which return a JSX with all the routes
    
  * At `./src/client.jsx`:
    * Import `Router` and `hashHistory` from `react-router`
    * Import `syncHistoryWithStore` from `react-router-redux`
    * Import `getRoutes` from `./src/routes.jsx`
    * Create a `history` by this way: `const history = syncHistoryWithStore(hashHistory, store);`
    * At the component variable, replace `App` by `<Router history={history}>{getRoutes()}</Router>`

  * At `./src/redux/modules/root.js`:
    * Import `routerReducer` as `routing`
    * Pass routing to the combineReducers
    
  * At `./src/components/App` component:
      * Add children to propTypes
      * Render `this.props.children` into it
      * Import `Link` and `IndexLink` from `react-router` and add into the render method the links to our routes
