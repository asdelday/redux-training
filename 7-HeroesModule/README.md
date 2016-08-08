# 7. Heroes Module

  * Create a Heroes module with: 
    * a getHero Action - types[GET_HERO, GET_HERO_SUCCESS, GET_HERO_FAIL]
    * a selectHero Action
    * a state with:
      * a selectedHero<object>
      * a heroList<array>
      * isLoading<boolean>
      * error<object>
    
  
### Steps:

  * Create the `./src/redux/modules/heroes.js` module:
    * With the following actionTypes: `SELECT_HERO`, `GET_HEROES`, `GET_HEROES_SUCCESS` and `GET_HEROES_FAIL`
    * With a reducer which handle all the actionTypes
    * With two actions: `selectHero` and `getHeroes`
    
  * Import the new module at `./src/redux/modules/root.js` and combine it with the other reducers.
