import { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import { useGlobalContext } from "./GlobalContext"
import 'react-datepicker/dist/react-datepicker.css';
import Button from "./Button";
import { icons } from "../utils/icons";
const IncomeForm = () => {
    const {addIncome,error,setError,loggedInId} = useGlobalContext();
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: null,
        category: '',
        description: '',
        user_id:''
    })
    useEffect(() =>{
        setError('');
    },[])
    
    useEffect(() => {
       
            setInputState(prevState => ({
                ...prevState,
                user_id: Number(loggedInId)
            }));
        }
        
    , [loggedInId]);
    const {title, amount, date , category, description} = inputState;
    const handleInput = (name) => (e) =>{
        setInputState({...inputState, [name]: e.target.value})
        setError(''); 
    }
    
    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log("Form data before submission:", inputState);
        const result = await addIncome({
            ...inputState,
            amount: Number(amount),
             // Ensure amount is a number
        });
       
            setInputState({
                title: '',
                amount: '',
                date: null,
                category: '',
                description: '',
                user_id: Number(loggedInId) 
            });
        
     

    }
  return (
    <form onSubmit={handleSubmit }
        className="flex flex-col gap-6"
    >
        <div >
        {
            error && <p className="error ">{error}</p>
        }
            <input 
                type="text"
                value={title}
                name={'title'}
                placeholder="Salary Title"
                onChange={handleInput("title")}
                className="input w-full"
            />
        </div>
        <div >
            <input 
                type="text"
                value={amount}
                name={'amount'}
                placeholder="Salary Amount"
                onChange={handleInput("amount")}
                className="input w-full"

            />
        </div>

        <div >
                <DatePicker
                    id="date"
                    placeholderText="Enter A Date"
                    dateFormat="dd/MM/yyyy"
                    onChange={(date)=>{
                        date.setHours(12, 0, 0, 0);
                        setInputState({...inputState, date:date})
                        setError('');
                    }}
                    selected={date}
                    className="input"
                />
        </div>

        <div className="w-full flex justify-end"  >
            <select 
            name="category" 
            id="category"
            required
            value={category}
            onChange={handleInput("category")}
            className="input focus:text-primary-2  active:text-primary-2"
             >
                <option value="" disabled>Select Option</option>
                <option value="salary">Salary</option>
                <option value="freelancing">Freelancing</option>
                <option value="investiments">Investiments</option>
                <option value="stocks">Stocks</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="bank">Bank</option>
                <option value="youtube">Youtube</option>
                <option value="other">Other</option> 
            </select>
        </div>
        <div>
            <textarea
                name="description" 
                value={description}
                placeholder="Add a Reference"
                id="description"
                cols="30"
                rows="4"
                onChange={handleInput("description")}
                className="input"
            >
            </textarea>
        </div>

          <Button
            name="Add Income"
            Icon={icons.plus}
            bg="bg-color-accent"
            bPad="py-2 px-4"
            color ="text-white"
            bRad = "rounded-3xl"
            hover= "hover:!bg-color-green"
            submit
          />
       
    </form>
  )
}

export default IncomeForm