import { useState } from "react";

const Form = (handleSubmit) => {
  const [item, setItem] = useState({});

  const inputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value || "No One" });
  };

  const formHandleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    handleSubmit(item);
    const newItem = {};
    setItem({ newItem });
  };

  return [inputChange, formHandleSubmit];
};

export default Form;
