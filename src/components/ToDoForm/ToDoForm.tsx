import React from "react";

const ToDoForm = (setInput: any, input: string) => {
  const handleForm = () => {};

  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text"></input>
        <button>submit</button>
      </form>
    </div>
  );
};

export default ToDoForm;
