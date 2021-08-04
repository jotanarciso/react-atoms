function Divider(props) {
  const { visible, size, light, thin } = props;
  return (
    <hr
      id="divider"
      className={`${size ? "size-" + size : "size-1"} ${
        visible ? "visible" : ""
      } ${light ? "light" : ""} ${thin ? "thin" : ""}`}
    />
  );
}

export default Divider;
