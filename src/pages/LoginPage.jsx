import {useState} from "react";
import axios from "axios";

export default function LoginPage(){
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("Please enter your credentials.");

  const submitHandler = e => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_BASE_URL}/login`, {email, password})
      .then(res => setLoginMessage(res.data.message))
      .catch(err => setLoginMessage(err));
  };

  return (
    <div className="flex flex-col items-center justify-start p-4 m-auto w-full md:w-[40rem] lg:w-[50rem] xl:w-[60rem] bg-white rounded shadow-lg border-gray-200 dark:bg-slate-900 dark:border-black">
      <form onSubmit={submitHandler}>
        <label>Email</label>

        <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-2 m-2 border border-gray-200 rounded"
        />
        <label>Password</label>
        <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full p-2 m-2 border border-gray-200 rounded"
        />
        <button
            type="submit"
            className="w-full p-2 m-2 bg-blue-500 text-white rounded"
        >
            Login
        </button>
        <p>{loginMessage}</p>
        </form>

    </div>

    );
};