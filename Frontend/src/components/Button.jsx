import Incomes from "../pages/Incomes"

const Button = ({ name, Icon, onClick, bg, bPad, color, bRad, hover, submit, full }) => {
  return (

    <button className={`${bg} ${bPad} ${bRad} ${color} outline-none border-none font-inherit flex items-center gap-1 transition-all cursor-pointer "shadow-md  ${hover} w-fit text-sm ${full&& 'w-full'} flex items-center justify-center`} onClick={onClick}  type = {submit?'submit':'button' }>
      {Icon && <Icon />}
      {name}
    </button>
  )
}

export default Button