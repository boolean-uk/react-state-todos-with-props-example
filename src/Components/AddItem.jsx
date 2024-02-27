import { useState } from "react";
import PropTypes from "prop-types";

function AddItem(props) {
  const [todoInput, setTodoInput] = useState("");

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(todoInput);
    setTodoInput("");
  };

  return (
    <section>
      <h2 className="title">ADD ITEM</h2>
      <form className="add-item" onSubmit={handleSubmit}>
        <input
          className="text-input"
          type="text"
          name="text"
          required
          minLength="3"
          onChange={handleChange}
          value={todoInput}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
}

AddItem.propTypes = {
  addTodo: PropTypes.func,
};

export default AddItem;
