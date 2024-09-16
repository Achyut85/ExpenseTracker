import { Link, useNavigate } from "react-router-dom"
import Button from "../components/Button"
import { ToastContainer } from "react-toastify"
import { authImg } from "../assets/images"
import { useState } from "react"
import { handleError, handleSuccess } from "../utils/authUtils"
import { useAuthContex } from "../components/AuthContext"


const Signin = () => {

  const { getUser,setLoggedInId,setLoggedInName } = useAuthContex();
  const [signinInfo, setSigninInfo] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const { email, password } = signinInfo;

  const handleInput = (name) => (e) => {
    setSigninInfo({ ...signinInfo, [name]: e.target.value }
    )
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return handleError("Email and Password are requried");
    }
    try {
      const result = await getUser(signinInfo);
      const { success, message, error, name, jwtToken, id } = result.data;
      console.log(result.data);
      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('userName', name);
        localStorage.setItem('userId', id);
        setLoggedInName(localStorage.getItem('userName'));
        setLoggedInId(localStorage.getItem('userId'));
      setTimeout(() => {
        navigate('/main');
      }, 2000);
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
        <h1 className="text-2xl font-bold">Signin</h1>

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
            name="Signin"
            bg="bg-color-accent"
            bPad="py-2 px-4"
            color="text-white"
            bRad="rounded-md"
            hover="hover:!bg-color-green"
            full
            submit
          />
          <span className="text-sm w-full text-black">Don't have an account ?
            <Link to="/signup" className="text-blue-600">Signup</Link>
          </span>
        </div>
      </form>
      <img src={authImg} alt="" width={400} className="h-[70vh] max-sm:hidden" />
      <ToastContainer />
    </div>
  )
}

export default Signin