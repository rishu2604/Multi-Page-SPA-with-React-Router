import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home";
import ProductsPage from "./Pages/Product";
import RootLayout from "./Pages/Root";

// import { RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage/>} />
//     <Route path="/product" element={<ProductsPage/>} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/product',
        element: <ProductsPage />
      }
    ]
  }
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
