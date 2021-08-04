function Step(props) {
  const index = props.index || 1,
    title = props.title || "Título",
    { active } = props;

  return (
    <div className={`step ${active ? "active" : ""}`}>
      <span className="index">{index}</span>
      <span className="title">{title}</span>
    </div>
  );
}

export default Step;
