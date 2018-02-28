# Shop react workshop exercises

To learn and experiment with React this small project was created.
[Workshop exercises](#workshop-exercises) explain tasks that have to be carried out. This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). 

## Workshop exercises

### Getting started
Install the dependencies with `$ npm install`.
You can start the development server with `$ npm start` and run the tests 
with `$ npm run test`. Happy coding! 😄🎉

### Optional (TTD flow)

In `src/enabled-exercises.js` you'll can switch the premade test, 
which can help you thrue the exercises flip the booleans at the top to enable each test at a time. So change `const ENABLE_EXERCISE_1 = false;` to `const
ENABLE_EXERCISE_1 = true;`.

### Exercises

1. Lets start by implementating the basics for the basket reducer, open `src/store/modules/basket.js`. 
  * (Optional) Enabled `const ENABLE_EXERCISE_1 = true;`
  *  Implement the tasks for adding and removing a product from the basket?
2. In  `src/store/modules/products.js` we added a basic reducer but right now it does nothing yet. Update the implementation for the products reducer so adding products in our app works.
1. Now we like to add the connect the product tiles container (`src/containers/product-tiles`) to our store, this way we don't need to keep this in our local `<App />` state. Switching `const ENABLE_EXERCISE_3` will prevent adding the products to local state. Connect the product-tiles container to the store to render products again.
1. Dispatch events to the basket reducer by adding this to the connect of `src/containers/product-tiles`.
1. Lets enable our basket now.
  *  Create a shopping card container in `src/containers`
  *  Let this container wrap the basket container and connect
  *  Implement this in the `<App />`
  *  Seperate the Header component from the basket button (`src/components/header`), let the header connect with the store and pass the amount of basket products to this button.

