import { useState } from "react";


const Filter = () => {
    const [List, setList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const data =["apple","banana","mango","orange"]

    const chageInput = (event) => {
        setInputValue(event.target.value)

    }
    
    
    return (
        <>

            <h3>Filter List</h3>
            <input type="text" onChange={chageInput} value={inputValue} />
            <ul>
                {data.map((item)=>(
                    <li>{item}</li>
                ))}


            </ul>
        </>
    )
}
export default Filter;