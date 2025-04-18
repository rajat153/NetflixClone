// import React from 'react'
import Browse from "./Browse";
import SignIn from "./SignIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./Footer";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
      <Footer/>
    </div>
  );
};

export default Body;
