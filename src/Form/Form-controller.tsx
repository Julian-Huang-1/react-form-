import "../index.css";
import { FormEvent, useState } from "react";

//使input变成受控组件 使用状态钩子
export const Form = () => {
  const [person, setPerson] = useState({ name: "", age: 0 });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(person);
  };
  console.log("rerender");

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          value={person.name}
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          age
        </label>
        <input
          value={person.age}
          onChange={(e) =>
            setPerson({ ...person, age: parseInt(e.target.value) })
          }
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">submit</button>
    </form>
  );
};
