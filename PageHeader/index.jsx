function PageHeader(props) {
  const title = props.title,
    heading = props.heading,
    description = props.description,
    background = props.background;

  return (
    <section
      className="page-header"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="content">
        <div className="heading">{heading}</div>
        <h1>{title}</h1>
        <h4>{description}</h4>
      </div>
      <hr />
      <div className="breadcumbs">
        <a href="/"> Página inicial</a> → {title}
      </div>
    </section>
  );
}

export default PageHeader;
