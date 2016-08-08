# 8. Connect Heroes Module

  * Connect Heroes module with:
    * HeroDetails container
    * HeroList container
    
  
### Steps:

  * At `./src/containers/HeroList.jsx` container:
    * Map to props the `heroList`, `heroSelected`, `isLoading` and `error` from the Heroes module.
    * Import and pass into the connect the following actions from the heroes module: `selectHero` and `getHeroes`.
    * Add to its respective `./src/components/HeroList.jsx` component the PropTypes.
  
  * At `./src/containers/HeroDetails.jsx` container:
    * Map to props the `heroSelected` from the Heroes module.
    * Add to its respective `./src/components/HeroDetails.jsx` component the PropTypes.
