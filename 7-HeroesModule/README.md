# 7. Heroes Module

  * Create a Heroes module with: 
    * a getHero Action - types[GET_HERO, GET_HERO_SUCCESS, GET_HERO_FAIL]
    * a selectHero Action
    * a state with:
      * a selectedHero<object>
      * a heroList<array>
      * isLoading<boolean>
      * isLoaded<boolean>
      * error<object>
    
  
### Steps:

  * Create the `./src/redux/modules/heroes.js` module:
    * With the following actionTypes: `SELECT_HERO`, `GET_HEROES`, `GET_HEROES_SUCCESS`, `GET_HEROES_FAIL`, `GET_HERO`, `GET_HERO_SUCCESS` and `GET_HERO_FAIL`
    * With a reducer which handle all the actionTypes
    * With two actions: `selectHero`, `getHeroes` and `getHero`
    
  * Import the new module at `./src/redux/modules/root.js` and combine it with the other reducers.
