const Accordian = ({ eachCourseSyllabus }) => {
  const { topicName, content } = eachCourseSyllabus;
  return (
    <div className="collapse my-3 collapse-plus bg-base-200">
      <input type="radio" name="my-accordion-3" defaultChecked />
      <div className="collapse-title text-xl font-medium">{topicName}</div>
      <div className="collapse-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Accordian;
