import React, { useState } from "react";
import "./assets/main.css";
import Card from "./components/card";
import { useForm } from "react-hook-form";

function App() {
  // React-Hook-Form handler
  const { register, handleSubmit, errors } = useForm();
  const [username, setUsername] = useState("");

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();

    setUsername(data.searchUser);
  };

  return (
    <section className="gradient-bg min-h-screen text-white flex justify-center items-center flex-col">
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="text-center">
          {errors.searchUser && errors.searchUser.type === "required" && (
            <p>It's Required some text to find User!</p>
          )}
          <input
            className="text-black input-key-search text-white"
            name="searchUser"
            type="text"
            placeholder="Search Github User"
            ref={register({ required: true })}
          />
        </form>
        {username === "" ? null : <Card userName={username} />}
      </div>
    </section>
  );
}

export default App;
