// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";
import Learn, { loader as allQuestionLoader } from "./Pages/Learn";
import Admin, { action as deleteQuestionAction } from "./Pages/Admin";
import AddQuestion, { action as addQuestionAction } from "./Pages/AddQuestion";
import EditQuestion, {
  action as editQuestionAction,
  loader as EditQuestionLoad,
} from "./Pages/EditQuestion";
import ErrorPage from "./Pages/ErrorPage";
import RootLayout from "./Pages/RootLayout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Learn></Learn>, loader: allQuestionLoader },
        {
          path: "/admin",
          children: [
            {
              index: true,
              element: <Admin></Admin>,
              loader: allQuestionLoader,
              action: deleteQuestionAction,
            },
            {
              path: "add-question",
              element: <AddQuestion></AddQuestion>,
              action: addQuestionAction,
            },
            {
              path: ":questionId",
              element: <EditQuestion></EditQuestion>,
              loader: EditQuestionLoad,
              action: editQuestionAction,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
