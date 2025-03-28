import React , {useState} from "react";
function Counter(){
    const [count , setCount] = useState(0);
    const plus = () => setCount(count + 1);
    const minus = () => setCount(count - 1);
    const reset = () => setCount(0);
    const buttonStyle = {
        fontWeight: "bold",  
        fontSize: "18px",    
        padding: "10px 20px", 
        margin: "5px",      
        cursor: "pointer",  
      };
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={plus} style= {buttonStyle}>+</button>
            <button onClick={minus} style= {buttonStyle} disabled = {count === 0} >-</button>
            <button onClick={reset} style= {buttonStyle}>Reset</button>
        </div>
    )

}   
export default Counter;
