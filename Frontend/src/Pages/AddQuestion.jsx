import { Form, json, redirect, useActionData } from "react-router-dom";
import ErrorMessage from "../Components/small/ErrorMesssage";
import QuestionForm from "../Components/QuestionForm";
function getRandomDecimal() {
  return Math.random();
}
// This is a functional component that renders a form for adding a new question.
// It uses React Router DOM to handle routing and form submission.
export default function AddQuestion() {
  // Use the useActionData hook to get any error data from the server.
  let actionData = useActionData();

  // Render the form and display any error messages.
  return (
    <>
      <h1 className="text-3xl font-[sans-serif] text-center my-4">
        Add Question
      </h1>
      {actionData && actionData.errors.length > 0 && (
        <ErrorMessage key={getRandomDecimal()}>
          {actionData.errors[0].msg}
        </ErrorMessage>
      )}
      <Form
        className="max-w-md mx-auto space-y-4 font-[sans-serif] text-[#333] mt-4"
        method="post"
        encType="multipart/form-data"
      >
        <QuestionForm></QuestionForm>
      </Form>
    </>
  );
}

// This is an async function that handles form submission for the Addquestion component.
// It sends a POST request to the server with the form data and redirects to the home page if successful.
export async function action({ request }) {
  // Get the form data from the request.
  const formData = await request.formData();

  const questionAns = {
    question: formData.get("question"),
    answer: formData.get("answer"),
  };
  // Send a POST request to the server with the form data.
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/learn`, {
    method: "POST",
    body: JSON.stringify(questionAns),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // If the request is not successful, get the error data from the server and return it.
  if (!response.ok) {
    const errorData = await response.json();
    return errorData;
  }

  // If the request is successful, redirect to the home page.
  return redirect("/admin");
}
