## ```react-router-dom``` listens and watch to URL changes and load different content
---
## Routes are simply path<=>components mapping.
### It includes mainly three steps: 
1. Define the routes and the components which should be loaded for different paths.
2. Activate our router and load the route definitions that we defined in the first step.
3. Make sure we have all the components that we do wanna load and that we maybe also provide some means of navigation between those pages.
<br/>

### ```createBrowserRouter``` is a function provided by this package which allows us to define our routes.
- We call this function and to this function we pass an array of route definition objects.
- We must store the returned value of ```createBrowserRouter``` function to a variable or constant.
- We need this constant to then tell React that this router should be rendered to the screen.
- And to tell React that this router should be used, we need to import another thing from ```react-router-dom``` and that's the ```RouterProvider``` component.


### Activate the router
- This ```RouterProvider``` component has a special prop which we must set, the ```router``` prop.
- And the value we pass to the ```router``` prop should be a router created with ```createBrowserRouter```.

### ```Link``` 
- ```Link``` is a special component provided by ```react-router-dom```.
- It just changes the URL and set it to the URL we're trying to navigate to but it then prevent the default of sending a request.
- And instead let ```React Router``` know about the new URL and ensures that the ```React Router``` loads the appropriate element.
- Now, what the ```Link``` component does under the hood is it does render an `<a>` anchor element, but it basically listens for clicks on that element, prevents the browser default of sending HTTP request if the link clicked and instead simply takes a look at the route definitions to update the page accordingly.
<br/>

### ```NavLink```
- `NavLink` is used just like the `Link` Component, but `NavLink` has one special behaviour.
- If you add the `className` prop to it, it's actually not the regular `className` prop which takes a string, but instead it is a prop that takes a function.
- And that function should return the class name.
- Now that function also automatically receives an object from which we can de-structure the `isActive` property.
- And this object with `isActive` property is provided by `react-router-dom` and `isActive` is a boolean, that's true if the link is currently active
<br/>

### `useNavigate`
- `useNavigate` is a hook provided by `react-router-dom` which is used for imperative routing.
- In some situations, maybe some form was submitted or because some timer expired, you might want to trigger a navigation action from inside code, and you can do this with the help of `useNavigate` hook.