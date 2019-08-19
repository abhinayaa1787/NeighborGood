import React from "react";

function EventsForm(props) {
  const formStyle = {
    width: "500px"
  };
  return (
    <form className="form">
      <h3>Post Events of your own!</h3>
      <input
        name="title"
        onChange={props.inputChange}
        type="text"
        placeholder="Title"
      />
      <input
        style={formStyle}
        name="description"
        onChange={props.inputChange}
        type="text"
        placeholder="Description"
      />
      <input
        name="price"
        onChange={props.inputChange}
        type="text"
        placeholder="Price (Needs to be a number)"
      />
      <input type="date" name="date" onChange={props.inputChange} />
      <button onClick={props.formSubmit}>Submit</button>
    </form>
  );
}

export default EventsForm;
