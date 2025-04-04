import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Text3 = () => {
  const [text, setText] = useState();
  const [todo, setTodo] = useState([]);
  // console.log(text);
  console.log(todo);
  const handleTodo = () => {
    setTodo([...todo, text]);
    setText("");
  };

  const handleRemove=(item)=>{
    setTodo(todo.filter((ind)=>item!=ind))
  }

  const handleDelete=()=>{
    setTodo([])
  }

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} type="text" />
      <button onClick={handleTodo}>Add</button>
      <button onClick={handleDelete}>Delete All</button>
      <div>
        {todo.map((item) => (
          <div><p>{item}</p><button onClick={()=>handleRemove(item)}>Delete</button></div>
        ))}
      </div>
    </>
  );
};

export default Text3;
