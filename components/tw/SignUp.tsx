const SignUp = () => {
  return (
    <form className="sm:w-full max-w-lg space-x-2 sm:space-x-3 flex justify-center">
      <input
        type="text"
        name="Text Input"
        id="text-input"
        placeholder="Your Email"
        className="sm:w-full max-w-sm  py-2 px-4 rounded-lg shadow-md focus:ring-2 focus:ring-purple-600 focus:outline-none focus:border-transparent border-transparent border "
      />
      <div className="">
        <button
          type="submit"
          className="font-bold shadow-md bg-purple-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-600 focus:outline-none focus:ring-offset-2 border-transparent border focus:border-transparent"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default SignUp;
