import React, { useState } from "react";
import "./assets/main.css";
import Card from "./components/card";
import { useForm } from "react-hook-form";

function App() {

  // React-Hook-Form handler
  const { register, handleSubmit, errors } = useForm();
  const [ username, setUsername ]= useState("");

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset()

    setUsername(data.searchUser)
  };

  return (
    <section className="gradient-bg min-h-screen text-white flex justify-center items-center flex-col">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="text-black"
            name="searchUser"
            type="text"
            placeholder="Search Github User"
            ref={register({ required: true})}
          />
          {errors.searchUser && errors.searchUser.type === "required" && (
            <p>This is Required</p>
          )}
        </form>
        {
          username ? <Card userName={username}/> : null
        }
      </div>
    </section>
  );
}

export default App;
