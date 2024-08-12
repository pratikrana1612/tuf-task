import { Form, redirect, useActionData, useLoaderData } from "react-router-dom";
import ErrorMessage from "../Components/small/ErrorMesssage";
import QuestionForm from "../Components/QuestionForm";
import { fetchData } from "../Util/fetcher";
function getRandomDecimal() {
  return Math.random();
}
// This component is used to edit question details. It renders a form to edit question details.
// It also handles errors returned by the server.
export default function EditQuestion() {
  // Get action data from the server
  let actionData = useActionData();
  // Get question data from the server
  const question = useLoaderData();
  return (
    <>
      <h1 className="text-3xl font-[sans-serif] text-center my-4">
        Edit Question
      </h1>
      {/* Render any error messages returned by the server */}
      {actionData && actionData.errors.length > 0 && (
        <ErrorMessage key={getRandomDecimal()}>
          {actionData.errors[0].msg}
        </ErrorMessage>
      )}
      {/* Render the question form */}
      <Form
        className="max-w-md mx-auto space-y-4 font-[sans-serif] text-[#333] mt-4"
        method="post"
        encType="multipart/form-data"
      >
        <QuestionForm
          question={question.question}
          answer={question.answer}
        ></QuestionForm>
      </Form>
    </>
  );
}

// This function is used to fetch question data from the server before rendering the Editquestion component.
// It takes the question id as a parameter and returns the question data.
export async function loader({ params }) {
  return fetchData(
    `${import.meta.env.VITE_API_URL}/api/learn/${params.questionId}`
  );
}

// // This function is used to handle form submission for the Editquestion component.
// // It sends a PUT request to the server with the form data and redirects to the home page if successful.

export async function action({ request, params }) {
  // Get the form data from the request.
  const formData = await request.formData();

  const questionAns = {
    question: formData.get("question"),
    answer: formData.get("answer"),
  };
  console.log(JSON.stringify(questionAns));
  // Send a POST request to the server with the form data.
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/learn/${params.questionId}`,
    {
      method: "PUT",
      body: JSON.stringify(questionAns),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  // If the request is not successful, get the error data from the server and return it.
  if (!response.ok) {
    const errorData = await response.json();
    return errorData;
  }

  // If the request is successful, redirect to the home page.
  return redirect("/admin");
}
