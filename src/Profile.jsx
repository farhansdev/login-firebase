import React from 'react';
import { auth } from './firebase';
// import { doc, getDoc } from 'firebase/firestore';

function Profile() {

    // const [userDetails, setUserDetails] = useState();

    // const fetchUserData = async () => {
    //     auth.onAuthStateChanged(async (user) => {
    //         console.log(user);
    //         const docRef = doc(db, "Users", user.uid);
    //         const docSnap = await getDoc(docRef);
    //         if (docSnap.exists()) {
    //             setUserDetails(docSnap.data());
    //             console.log(docSnap.data())
    //         } else {
    //             console.log("User is not logged in!");
    //             // alert("User is not logged in!")
    //         }
    //     });
    // };

    // useEffect(() => {
    //     fetchUserData();
    // }, [])
  
    async function handleLogOut() {
        try {
            await auth.signOut();
            window.location.href = "/Login";
            console.log("User logged out successfully!");
            // alert("User logged out successfully!")
        } catch (error) {
            console.error(error.message);
            // alert("User logged out successfully!")

        }
    }

  return (
    <section className="bg-gray-50 dark:bg-gray-900" >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0" >
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-2xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Profile 
            </h1>
              <div>
                <h3>Wellcome  </h3>
                <p>Email:  </p>
                <p>Last Name:  </p>
              </div>
              <button onClick={handleLogOut} className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log Out</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile