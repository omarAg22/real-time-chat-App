import { BsSend } from "react-icons/bs";

const WriteMsg = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Write a message..."
          className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <BsSend className="text-white" />
        </button>
      </div>
    </form>
  );
};

export default WriteMsg;

