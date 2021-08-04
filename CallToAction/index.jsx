function CallToAction(props) {
  const text = props.text || "Chamada para Ação",
    route = props.route || "#",
    icon = props.icon,
    { light, dark, invert, large, long } = props;

  return (
    <a
      className={
        "call-to-action " +
        (dark ? "-dark" : light ? "-light " : "") +
        (large ? " -large" : "") +
        (long ? " -long" : "")
      }
      href={route}
    >
      {icon && <i className={`fa ${icon} ${invert && "-invert"}`} />}
      {text}
    </a>
  );
}

export default CallToAction;
