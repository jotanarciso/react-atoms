function BrandItem(props) {
  const title = props.title || "Título",
    description = props.description || "Descrição",
    image = props.image || null,
    icon = props.icon || "",
    alignLeft = props.alignLeft,
    footer = props.footer,
    footerLink = props.footerLink,
    dark = props.dark;

  return (
    <>
      <li
        className={`brand-item ${alignLeft ? "align-left" : ""} ${
          dark ? "dark" : ""
        }`}
        key={title}
      >
        {image ? (
          <img src={image} />
        ) : icon ? (
          <i className={`fa ${icon}`} />
        ) : (
          <img />
        )}
        <h6>{title}</h6>
        <p>{description}</p>
        {footer && (
          <div className="footer">
            <a href={footerLink}>{footer}</a>
          </div>
        )}
      </li>
    </>
  );
}

export default BrandItem;
