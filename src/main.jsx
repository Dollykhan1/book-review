import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Page/Home";
import BookList from "./Page/BookList";
import Page from "./Page/Page";
import Details from "./component/Details";
import { Toaster } from "react-hot-toast";
import Read from "./component/Read";
import Wish from "./component/Wish";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/book.json"),
      },
      {
        path: "/book/:id",
        element: <Details></Details>,
        loader: () => fetch("/book.json"),
      },
      {
        path: "/booklist",
        element: <BookList></BookList>,
        children: [
          {
            index: true,
            element: <Read></Read>,
          },
          {
            path: "wishlist",
            element: <Wish></Wish>,
          },
        ],
      },
      {
        path: "/page",
        element: <Page></Page>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </React.StrictMode>
);
