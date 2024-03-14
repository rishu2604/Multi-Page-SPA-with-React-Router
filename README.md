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
This ```RouterProvider``` component has a special prop which we must set, the ```router``` prop.
And the value we pass to the ```router``` prop should be a router created with ```createBrowserRouter```.