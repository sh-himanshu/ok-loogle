const GroupHover = () => {
  return (
    <div className="group hover:bg-white border px-6 py-4 border-indigo-500 rounded-lg max-w-xs space-y-2 hover:border-white hover:shadow-lg">
      <p className="font-bold text-lg text-indigo-600 group-hover:text-gray-900">
        New Project
      </p>
      <p className="text-indigo-500 group-hover:text-gray-500">
        Create a new project from a variety of starting templates.
      </p>
    </div>
  );
};

export default GroupHover;
