import Input from "./small/Input";
import { Link } from "react-router-dom";
export default function QuestionForm({ question, answer }) {
  return (
    <>
      <Input
        type="text"
        name="question"
        label="Question*"
        placeholder="Enter Question"
        required={true}
        isRequired={true}
        defaultValue={question ? question : null}
      ></Input>
      <Input
        type="text"
        name="answer"
        label="Answer*"
        placeholder="Enter Answer"
        required={true}
        isRequired={true}
        defaultValue={answer ? answer : null}
      ></Input>
      <button
        type="submit"
        className="!mt-8 px-6 py-2.5 text-sm bg-[#333] hover:bg-[#222] text-white rounded-sm"
      >
        {answer ? "Update" : "Save"}
      </button>
      <button
        type="reset"
        className="m-5 px-5 py-2.5 text-sm tracking-wider font-medium border border-black outline-none bg-transparent hover:bg-black text-black hover:text-white transition-all duration-300"
      >
        Reset
      </button>
      <Link to="/admin">
        <button
          type="submit"
          className="!mt-8 px-6 py-2.5 text-sm bg-[rgba(51,51,51,0.8)] hover:bg-[#222] text-white rounded-sm"
        >
          Cancel
        </button>
      </Link>
    </>
  );
}
