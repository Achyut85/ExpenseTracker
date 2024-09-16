import { Link, useNavigate } from "react-router-dom"
import Button from "../components/Button"
import { ToastContainer } from "react-toastify"
import { authImg } from "../assets/images"
import { useState } from "react"
import { handleError, handleSuccess } from "../utils/authUtils"
import { useAuthContex } from "../components/AuthContext"


const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const { name, email, password } = signupInfo;
  const handleInput = (name) => (e) => {
    setSignupInfo({ ...signupInfo, [name]: e.target.value }
    )
  }

  const { setUser } = useAuthContex();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      return handleError("Name, Email and Password are requried");
    }
    try {
      const result = await setUser(signupInfo);
      const { success, message, error } = result.data;
      console.log(result.data);
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/signin');
        }, 1000)
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (error) {
      handleError(error)
    }

  }

  return (
    <div className="backdrop-blur-[4.5px] w-full h-full flex justify-center items-center  max-sm:justify-around  max-sm:flex-col">
      <form className="flex flex-col gap-5 w-80 background-style !rounded-none h-[70vh]" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold">Signup</h1>
        <div className="flex flex-col">
          <label htmlFor='name'>Name</label>
          <input
            value={name}
            type="text"
            name='name'
            autoFocus
            placeholder='Enter your name'
            className="input"
            onChange={handleInput('name')}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor='email'>Email</label>
          <input
            value={email}
            type="email"
            name='email'
            placeholder='Enter your email'
            className="input"
            onChange={handleInput('email')}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor='password'>Password</label>
          <input
            value={password}
            type="password"
            name='password'
            placeholder='Enter your password'
            className="input"
            onChange={handleInput('password')}
          />
        </div>
        <div>
          <Button
            name="Signup"
            bg="bg-color-accent"
            bPad="py-2 px-4"
            color="text-white"
            bRad="rounded-md"
            hover="hover:!bg-color-green"
            full
            submit
          />
          <span className="text-sm w-full text-black">Alredy have an account ?
            <Link to="/signin" className="text-blue-600">Signin</Link>
          </span>
        </div>
      </form>
      <img src={authImg} alt="" width={400} className="h-[70vh] max-sm:hidden" />
      <ToastContainer

      />
    </div>
  )
}

export default Signup