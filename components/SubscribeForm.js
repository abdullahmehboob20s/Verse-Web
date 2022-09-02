import React from "react";

function SubscribeForm() {
  return (
    <form className="bg-darkPurple py-6 xl:py-10 px-9 rounded-lg xl:rounded-[30px] w-full flex flex-col sm:flex-row text-center sm:text-left items-center justify-between space-y-6 sm:space-y-0 sm:space-x-6 lg:space-x-12 max-w-[40rem] lg:max-w-none">
      <h1 className="text-base sm:text-lg lg:text-xl xl:text-3xl font-bold text-white max-w-[14em]">
        Subscribe to our newsletter and receive updates!
      </h1>

      <div className="flex space-x-2 sm:max-w-[16rem] lg:max-w-[40%] w-full">
        <input
          type="text"
          placeholder="Enter e-Mail"
          className="flex-1 w-full bg-purple text-white text-sm xl:text-base font-light py-2 px-4 rounded-md"
        />
        <button
          type="submit"
          className="bg-purple-2 py-2 px-4 text-sm xl:text-base font-medium uppercase rounded-md flex-[.1]"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default SubscribeForm;
