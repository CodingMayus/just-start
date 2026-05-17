
import SideBar from "./sidebar";
function handleDarkMode(){


}

{/* <div className = "fixed top-0 left-0 h-screen w-screen m-0 flex flex-col dark:bg-gray-700 dark:text-white">
   this is the upload new job application*
  <i className= "relative flex items-center justify-center h-12 w-30 mt-2 mb-2 mx-auto shadow-lg dark:text-white hover:bg-green-600 hover:text-green-300 text-center rounded-3xl hover:rounded-xl transition-all duration-350 ease-linear">Upload Application </i>
  <i className = "relative flex items-center justify-center h-12 w-30 mt-2 mb-2 mx-auto shadow-lg text-center dark:text-white hover:bg-green-600 hover:text-green-300 rounded-3xl hover:rounded-xl transition-all duration-350 ease-in-out">Account</i>
  <i className = "relative flex items-center justify-center h-12 w-30 mt-2 mb-2 mx-auto shadow-lg text-center dark:text-white hover:bg-green-600 hover:text-green-300 rounded-3xl hover:rounded-xl transition-all duration-350 ease-out" onClick={handleDarkMode}> Dark Mode/Light Mode</i>
</div> 
*/}
export default function Home() {
  return (

<div className = "flex">
  <SideBar/>
</div>



  );

}