import React, { useState } from "react";
import { SlMagnifier } from "react-icons/sl";

const FormSearch = () => {
  const [input, setInput] = useState("");

  const handleChangeInput = (event) => {
    setInput(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busca un producto"
          name="search"
          value={input}
          onChange={handleChangeInput}
        />
        <button>
          <SlMagnifier />
        </button>
      </form>
    </div>
  );
};

export default FormSearch;

