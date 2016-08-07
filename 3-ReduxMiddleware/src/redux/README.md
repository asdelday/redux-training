# Ducks Modular Redux

**Ducks: Redux Reducer Bundles**


### Rules:

A module...

  * MUST export default a function called reducer()
  * MUST export its action creators as functions
  * MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE
  * MAY export its action types as UPPER_SNAKE_CASE, if an external reducer needs to listen for them, or if it is a published reusable library


[ducks-modular-redux](https://github.com/erikras/ducks-modular-redux) by Erikras
