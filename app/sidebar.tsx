"use client"
import useDarkMode from "./hooks/useDarkMode";


const ModeIcon = ({icon,text})=>
    
{

const [darkTheme,setDarkTheme] = useDarkMode();
const handleMode = ()=>setDarkTheme(!darkTheme);

return (
<div className = 'sidebar-icon group' onClick = {handleMode}>
{icon}
<span className ='sidebar-tooltip group-hover:scale-100'>
{text}
</span>
</div>
)
}
  
const SideBarIcon = ({icon, text})=>(
<div className = "sidebar-icon group">
    {icon}
    <span className = "sidebar-tooltip group-hover:scale-100">
        {text}
    </span>
</div>
);
const SideBar = () => {
// what's the alternative to this? for DEFAULT exports?
return (
<div className = "fixed top-0 left-0 h-screen w-50 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
    <SideBarIcon icon="Upload Application" text ="Copy and Paste entire JOB applications here." />
    < SideBarIcon icon = "Account" text = "Details about your account" />
    <ModeIcon icon ="Dark/Light Mode" text = "Convert between light and dark mode!" />

    </div>
);

}
export default SideBar;