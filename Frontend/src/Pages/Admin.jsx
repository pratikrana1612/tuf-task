// import { fetchData } from "../../util/fetcher";
import {
  Link,
  json,
  redirect,
  useLoaderData,
  useSubmit,
} from "react-router-dom";
import DeleteModel from "../Components/small/DeleteModel";
import { useState } from "react";
import Row from "../Components/small/Row";

const headings = ["Question", "Answer", "Actions"];
// Admin component is the main page of the application. It renders a table
// of questions and allows to add new questions. It uses the useSubmit and useLoaderData
// hooks from react-router-dom to handle form submission and data loading.
export default function Admin() {
  const [isOpen, changeOpen] = useState({ open: false, id: null });
  // useSubmit hook is used to submit form data to the server. It returns a
  // function that can be called with the form data and additional options.
  const qaArray = useLoaderData();

  const submit = useSubmit();

  // useLoaderData hook is used to load data from the server. It returns the
  // data loaded from the server.

  // startDeleteHandler is a function that is called when the delete button in
  // the question row is clicked. It prompts the question for confirmation and if
  // confirmed, submits a delete request to the server.
  function closeModel() {
    changeOpen({ open: false, id: null });
  }
  function openModel(id) {
    changeOpen({ open: true, id: id });
  }
  function startDeleteHandler() {
    submit(
      { id: isOpen.id },
      {
        method: "delete",
        encType: "application/json",
      }
    );
    closeModel();
  }

  return (
    <>
      {/* Link component is used to create a link to another page. In this case,
          it creates a link to the add-question page. */}
      <div className="w-screen flex justify-center items-center my-4">
        <Link to="/admin/add-question">
          <button
            type="button"
            className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-black hover:bg-transparent text-white hover:text-black transition-all duration-300"
          >
            Add Question
          </button>
        </Link>
      </div>
      {isOpen.open && (
        <DeleteModel
          closeModel={closeModel}
          startDeleteHandler={startDeleteHandler}
        ></DeleteModel>
      )}
      {/* The main table of questions is rendered here. If there are questions, a table
          is rendered with the questions data. If there are no questions, a message is
          displayed. */}
      <div className="w-screen flex justify-center items-center px-5">
        <div className="font-[sans-serif] overflow-x-auto w-screen">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 whitespace-nowrap">
              <tr>
                {/* The headings of the table are rendered here. */}
                {headings.map((heading) => (
                  <th
                    key={heading}
                    className="p-4 text-left text-sm font-medium text-white"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="whitespace-nowrap">
              {/* If there are questions, a questionRow component is rendered for each
                  question. The questionRow component receives the question data and the
                  startDeleteHandler function as props. */}
              {qaArray.length > 0 &&
                qaArray.map((question) => (
                  <Row
                    key={question.id}
                    {...question}
                    openModel={openModel}
                    startDeleteHandler={startDeleteHandler}
                  />
                ))}
            </tbody>
          </table>
          {/* If there are no questions, a message is displayed. */}
          {qaArray.length <= 0 && (
            <p className="p-4 text-lg text-black font-bold text-center">
              No Question Found
            </p>
          )}
        </div>
      </div>
    </>
  );
}

// loader function is used to load data from the server. It returns the data
// loaded from the server.
export async function loader() {
  //   return fetchData("http://localhost:8081/api/questions");
  return;
}

// action function is used to handle form submission. It receives the request
// object and extracts the form data from it. It then submits a delete request
// to the server and redirects to the main page if the request is successful.
export async function action({ request }) {
  const data = await request.json();
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/learn/` + data.id,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw json(
      { message: "Could not delete stu." },
      {
        status: 500,
      }
    );
  }
  return redirect("/admin");
}
