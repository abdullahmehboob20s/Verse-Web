import React from "react";

function SubscribeForm() {
  return (
    <form className="bg-darkPurple py-10 px-9 rounded-[30px] w-full flex items-center justify-between space-x-12">
      <h1 className="text-3xl font-bold text-white max-w-[14em]">
        Subscribe to our newsletter and receive updates!
      </h1>

      <div className="flex space-x-2 max-w-[40%] w-full">
        <input
          type="text"
          placeholder="Enter e-Mail"
          className="flex-1 w-full bg-purple text-white text-base font-light py-2 px-4 rounded-md"
        />
        <button
          type="submit"
          className="bg-purple-2 py-2 px-4 text-base font-medium uppercase rounded-md flex-[.1]"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default SubscribeForm;
