import React, { useState } from "react";

function Form(props) {
  const email = props.email;

  return (
    <form action={`mailto:${email}`} method="GET">
      <div className="form-group">
        <input
          placeholder="Assunto"
          className="form-control"
          aria-describedby="emailHelp"
          name="subject"
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Sua mensagem"
          rows="5"
          name="body"
        ></textarea>
      </div>
      <button type="submit" value="send" className="btn-send">
        Enviar mensagem <i className="fa fa-paper-plane"></i>
      </button>
    </form>
  );
}

export default Form;
