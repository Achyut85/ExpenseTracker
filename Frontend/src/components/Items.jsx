import dateformat from "../utils/dateformat"
import { icons } from "../utils/icons"
import Button from "./Button"
const Items = ({
    id,
    title,
    amount,
    date,
    category,
    description,
    indicatorColor,
    type,
    deleteItem,
}) => {
    const categoryIcons = () =>{
        switch (category) {
            case "salary":
                return <icons.salary/>
            case "freelancing":
                return <icons.freelance/>
            case "investiments":
                return <icons.investment/>
            case "stocks":
                return <icons.stocks/>
            case "bitcoin":
                return <icons.bitcoin/>
            case "bank":
                return <icons.bank/>
            case "youtube":
                return <icons.youtube/>
            case "clothing":
                return <icons.cloths/>
            case "groceries":
                return <icons.groceries/>
            case "groceries":
                return <icons.groceries/>
            case "health":
                return <icons.health/>
            case "subscription":
                return <icons.subscription/>
            case "travelling":
                return <icons.travelling/>
            case "education":
                return <icons.education/>
            case "takeways":
                return <icons.takeway/>

            default:
               return <icons.circle/>
        }
    }
  return (
    <div className="flex items-center gap-4 mb-4 p-2 rounded-2xl w-full text-primary shadow-md border-2 border-white text-sm ">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center border-2 border-white text-4xl ">
                {categoryIcons()}
        </div>
        <div className="flex flex-1 flex-col gap-1">
            {/* content */}
            <h5 className="text-xl pl-8 relative flex items-center">
                <div className={`absolute left-0   w-3 h-3 rounded-full ${indicatorColor}`}></div>{title}</h5>
            <div className="flex items-end justify-between">
                
       {/* inner-content */}
                    <div className="flex items-center gap-6">
                    {/* text */}
                        <p className="p"><icons.rupee/> {amount}</p>
                        <p className="p "><icons.calender/>{dateformat(date)}</p>
                        <p className="p">
                        <icons.comment/>
                        {description}
                        </p>
                
                    </div>
                
                <div>
                {/* btn-con */}
                    <Button
                        Icon = {icons.trash}
                        bPad="p-3"
                        bRad = "rounded-full"
                        color="text-white"
                        bg="bg-primary"
                        onClick={()=>{
                            deleteItem(id)
                        }}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Items