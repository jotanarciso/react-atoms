function OptionBox(props) {
  const title = props.title || "Título";
  const icon = props.icon || "";
  const tooltip = props.tooltip || false;

  return (
    <div className="option-box">
      {tooltip && (
        <span
          className="obs"
          data-toggle="tooltip"
          data-placement="top"
          title={tooltip}
        >
          ?
        </span>
      )}
      <i className={`fa ${icon}`} />
      <span>{title}</span>
    </div>
  );
}

export default OptionBox;
