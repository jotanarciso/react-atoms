function Actions(props) {
  const items = props.items || [];
  const light = props.light;
  const dark = props.dark;

  return (
    <>
      <div
        className={`actions ${light ? "light" : "default"} ${
          dark ? "dark" : ""
        }`}
      >
        <ul>
          {items?.map((item, i) => (
            <li key={item.title} className={i === 2 ? "featured" : ""}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Actions;
