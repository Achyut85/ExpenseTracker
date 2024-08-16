import { menuItem } from "../utils/menu"
import { icons } from "../utils/icons"
const SignOut = icons.logout;

const Nav = ({active, setActive}) => {
  return (
    <div className="py-8 px-6 w-[300px] h-full bg-slate-100  border-[3px] border-white  rounded-[32px] backdrop-blur-[4.5px] flex flex-col justify-between gap-8 max-md:flex-row max-md:w-[100%] max-md:h-[100px] max-md:items-center">
        <div className="h-[100px] flex items-center gap-4 max-md:w-full max-md:justify-between ">
            <img src="#" alt=" " className="w-[80px] h-[80px] rounded-full object-cover border-[3px] border-white shadow-md"/> 
            <div>
                <h2 className="text-black font-bold">Achyut</h2>
                <p className="text-black text-opacity-[0.5]">Your Money</p>
            </div>
        </div>
        <ul className="flex flex-col flex-1 max-md:hidden">
            {
                menuItem.map((item) => (
                    <li key={item.id} className={`list ${active === item.id && '!text-gray-800 '}`} onClick={() =>{
                        setActive(item.id);
                    }}>
                   {
                    active === item.id &&
                    <div className="h-full w-[3px] bg-gray-800  absolute t-0 b-0 rounded-t-md rounded-b-md"></div>
                    }
                        <item.icon/>
                        <span>{item.title}</span>
                    </li>
                ))
            }
        </ul>
        <div className="max-md:hidden">
            <li className="list-none list " ><SignOut/> Sign Out</li>
        </div>
    </div>
  )
}

export default Nav