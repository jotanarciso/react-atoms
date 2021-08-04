import React, { useState } from "react";

function Timeline(props) {
  const [items, setItems] = useState([...props.items]);

  function handleActive(i) {
    const newArr = [...items];
    newArr.forEach((item) =>
      item !== newArr[i] ? (item.active = false) : (item.active = true)
    );
    setItems(newArr);
  }

  return (
    <div className="timeline">
      {items?.map((item, i) => (
        <div className={`item ${item.active ? "active" : ""}`}>
          <span className="year">{item.year}</span>
          {item.active ? <h3>{item.title}</h3> : <span className="space" />}
          <span className="circle" onClick={() => handleActive(i)}></span>
          <span className="line"></span>
          {item.active && <div className="content">{item.text}</div>}
        </div>
      ))}
    </div>
  );
}

export default Timeline;
