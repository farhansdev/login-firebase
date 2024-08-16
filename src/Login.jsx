import React, { useState } from 'react'
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, pswd)
      console.log("User logged in successfully!");
      window.location.href = "/Ourblog";
      // alert("User logged in successfully!")
     
    } catch (error) {
      console.log(error.message);
      // alert("Invalid email or password!");
    }

  };
  return (
   
    <section className="bg-gray-50 dark:bg-gray-900 h-screen" >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen sm:pt-20 lg:py-0" >
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-2xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Log in
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input onChange={(e) => setPswd(e.target.value)} type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <button onClick={handleLogin} className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log in</button>
              <p className='text-white pt-2'>Create your account ? <Link to="/Signup">Signup</Link></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login