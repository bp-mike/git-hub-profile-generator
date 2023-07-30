import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Input } from '@mantine/core';
import { FaGithubAlt } from "react-icons/fa";

function App() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setUserName(e.target.value);
  }

  function onSubmit(e) {
    if (e.key === "Enter") {
      navigate(`${userName}`);
    }
  }

  return (
    <>
      <div className="w-auto h-auto m-auto p-10 text-center">
        <FaGithubAlt className="mb-8 m-auto text-5xl text-gray-400"/>
        <h1 className="text-3xl">Find your Git Profile</h1>
        <input
          className="bg-transparent text-white mt-3 p-1 border border-[#4ee171] focus:outline-none w-full"
          value={userName}
          onChange={handleChange}
          onKeyDown={onSubmit}
          placeholder="Enter git username"
          autoFocus
        />
      </div>
    </>
  );
}

export default App;
