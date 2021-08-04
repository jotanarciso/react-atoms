import React, { useState } from "react";
function ExpandItem(props) {
  const title = props.title || "Título",
    description = props.description || "Descrição",
    icon = props.icon || "",
    [expanded, setExpanded] = useState(false);

  return (
    <li className="expand-item">
      <div className="title" onClick={() => setExpanded(!expanded)}>
        <h2>{title}</h2>
        {icon && (
          <i className={`fa ${expanded ? "fa-angle-up" : "fa-angle-down"}`} />
        )}
      </div>
      <hr />
      <div className={`description ${expanded ? "-visible" : "-hidden"}`}>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default ExpandItem;
