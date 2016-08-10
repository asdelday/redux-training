# 9. API Services

  * Create API REST Services to connect with Marvel API
    
  
### Steps:

  * Install `fetch`: `npm i -S whatwg-fetch`
  
  * At `./src/client.jsx` file, import `whatwg-fetch` at the beginning of the file
  
  * At `./src/config.js` file, export your Marvel API `API_KEY`

  * At `./src/api.js` file:
    * Import the API_KEY from the `config.js` file
    * Export the method `getHeroes`, which can receive an object with params and returns a Promise
    * Export the method `getHero`, which can receive an object with params and returns a Promise

  * At `./src/redux/modules/heroes.js` module:
    * Import our API's methods and use them in our actions `getHeroes as getHeroesRequest` and `getHero as getHeroRequest`
