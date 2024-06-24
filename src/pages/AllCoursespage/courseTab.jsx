const courseTab = ({ courseItem }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
          <img
            src="https://source.unsplash.com/random/300x300/?1"
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
              Quisque
            </span>
            <h2 className="text-xl font-semibold tracking-wide">
              Nam maximus purus
            </h2>
          </div>
          <p className="dark:text-gray-800">
            Mauris et lorem at elit tristique dignissim et ullamcorper elit. In
            sed feugiat mi. Etiam ut lacinia dui.
          </p>
        </div>
      </div>
    </>
  );
};

export default courseTab;
