import React, { useState } from 'react'
import { auth, db } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function Signup() {

  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');
  const [name, setName] = useState('');

  function handleSignup() {
    createUserWithEmailAndPassword(auth, email, pswd)
      .then((userCredential) => {
        addDoc(collection(db, "users"), { name, email });
        const user = userCredential.user.uid
        console.log(userCredential, "usercrandentials");
        console.log(user, "users")
        if(name && email !== userCredential.user.uid ) {
          console.log("logged in successfully!")
        }else (
          console.log("invalid email or password")
        )
      })
      .catch((error) => alert(error))
  };
  return (
   
    <section className="bg-gray-50 dark:bg-gray-900" >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0" >
        <a href="/" className="flex items-center mb-10 text-4xl font-semibold text-gray-900 dark:text-white">
          Piks.pixel
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create your account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                <input onChange={(event) => setName(event.target.value)} type="name" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input onChange={(event) => setEmail(event.target.value)} type="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input onChange={(event) => setPswd(event.target.value)} type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <button onClick={handleSignup} className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
               <p>Already have an account? <Link to="/Login">Log in</Link></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup