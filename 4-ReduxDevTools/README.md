# 4. Redux DevTools

  * Integrate the Redux DevTools in our project
  
  
### Steps:

  * Install the `redux-devtools`, `redux-devtools-dock-monitor` and `redux-devtools-log-monitor`: `npm i -D redux-devtools redux-devtools-dock-monitor redux-devtools-log-monitor`
  
  * At `./src/containers/` folder create a `DevTools.jsx` container:
    * Import `React` from `react`
    * Import `createDevTools` from `redux-devtools`
    * Import `LogMonitor` from `redux-devtools-log-monitor`
    * Import `DockMonitor` from `redux-devtools-dock-monitor`
    * Export as default the result of:
    ```javascript
    createDevTools(
      <DockMonitor toggleVisibilityKey="ctrl-H" changePositionKey="ctrl-Q">
        <LogMonitor />
      </DockMonitor>
    );
    ```
    * Export it also at `./src/containers/index.js`
    
  * At `./src/redux/createStore.js` if we are in development env:
    * Import `compose` from `redux`
    * Import `persistState` from `redux-devtools`
    * Import our `DevTools` container
    * Add `Devtools.intrument` and `persistState` in composition to the other middleware when we declare the `finalCreateStore`:
    ```javascript
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(_createStore);
    ```
  
  * At `./src/client.jsx` if we are in development env:
    * Import our `DevTools` container
    * Wrap it inside the Provider
  
   
