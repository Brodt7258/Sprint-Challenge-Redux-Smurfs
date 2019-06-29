1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
- Array.map, Array.filter, Object.assign
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- Actions describe a desired state change, and act as interface with which the rest of the app can change the state.  Reducers are used to interpret actions, and the current state into a new state.  The store is the centralized global collection of state in an app using redux.  It's seen as the 'single source of truth' because in a well-designed app, it's typically the only place in the app where global-level data exists.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
- App-level is global.  Component level is local to the component and its children.  App-level makes the most sense for data that might need to be read into, or changed from many different places in the application.  Component-level is best for cases for either (very) temporary storage, for example form data, or purely visual state, for example tabs or accordians.
1.  What is middleware?
- functions that are executed between the action call, and the reducer, that can either alter the behavior of certain actions, or produce side-effects.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
- redux-thunk allows for the dispatching of action-creators that return a function, rather than a place object.  It allows for async code, such as network calls, within the redux flow.
1.  Which `react-redux` method links up our `components` with our `redux store`?
- React-redux provides helper that make it more convenient to integrate redux with a react app.  Mainly, the Provider component that makes store info available to children via React-context, and the connect HOC that offers a convenient was for those child components to consume the context.
