import React, { useState } from "react";

export default function TextFrom(props) {
  const uppercasehandle = (event) => {
    event.preventDefault();
    let newText = text.toUpperCase();
    setText(newText);
    setOrigignaltext(newText);
  };
  const lowercasehandle = (event) => {
    event.preventDefault();
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handle = (event) => {
    event.preventDefault();
    setText(event.target.value);
  };
  const cleare = (event) => {
    event.preventDefault();
    let newText = "";
    setText(newText);
  };
  const removeSpace = (event) => {
    event.preventDefault();
    let trimmed = text.split(/\s+/);
    setText(trimmed.join(" "));
  };
  const backSpace = (event) => {
    event.preventDefault();
    setText(originaltext);
  };
  const [text, setText] = useState("");
  const [originaltext, setOrigignaltext] = useState("");
  return (
    <>
      <div className="container my-4">
        <h1 className="text-center mb-4">{props.heading}</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Enter your text below:
            </label>
            <textarea
              name="text"
              id="text"
              rows={8}
              cols={70}
              className="form-control"
              value={text}
              onChange={handle}
            ></textarea>
          </div>
          <div className="d-flex flex-wrap gap-3">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ backgroundColor: "#007bff" }}
              onClick={uppercasehandle}
            >
              Convert to Uppercase
            </button>
            <button
              type="submit"
              className="btn btn-secondary"
              style={{ backgroundColor: "#6c757d" }}
              onClick={lowercasehandle}
            >
              Convert to Lowercase
            </button>
            <button
              type="submit"
              className="btn btn-danger"
              style={{ backgroundColor: "#dc3545" }}
              onClick={cleare}
            >
              Clear
            </button>
            <button
              type="submit"
              className="btn btn-warning text-dark"
              style={{ backgroundColor: "#ffc107" }}
              onClick={removeSpace}
            >
              Remove Extra Spaces
            </button>
            <button
              type="submit"
              className="btn btn-success"
              style={{ backgroundColor: "#28a745" }}
              onClick={backSpace}
            >
              Restore Original Text
            </button>
          </div>
        </form>
      </div>
      <div className="container my-4 d-flex flex-column align-items-center">
  <h2 className="mb-3 text-center">Your text summary</h2>
  <p className="text-center">
    <strong>{text.split(/\s+/).filter((word) => word).length}</strong> words,{" "}
    <strong>{text.length}</strong> characters
  </p>
  <p className="text-center">
    Estimated reading time:{" "}
    <strong>{(0.008 * text.split(/\s+/).filter((word) => word).length).toFixed(2)}</strong>{" "}
    minutes
  </p>
  <h3 className="text-center">Preview of your text:</h3>
  <p
    className="border p-3 rounded text-center"
    style={{ backgroundColor: "#f8f9fa", width: "100%" }}
  >
    {text || "Nothing to preview here!"}
  </p>
</div>
    </>
  );
}