import { useState } from "react";


function Food(props){

    let {e, search} = props
    let {name, cal, img} = e

    const [count, setCount] = useState()
    const [quantity, setQuantity] = useState(0)

    function updateCalories(){
        setQuantity(count)
    }

    function resetIt(){
        setCount(" ");
        setQuantity(0)
    }

    return(

        <>
        <div className="main_container">

            <div className="main_container bg">
                <div>
                    <img src={img} alt=""/>
                </div>
                <div>
                    <p>{name}</p>
                    <p>{cal}</p>
                </div>
                <div className="inp">
                    <input type="number" placeholder="Enter quantity" value={count} onChange={(e)=>{setCount(e.target.value)}}/>
                    <button onClick={updateCalories}>+</button>
                </div>
            </div>
            <div className="result_container">
                <span>{quantity} {name} = </span> 
                <span>{quantity*cal} calories</span>
                <span><button onClick={resetIt}> Reset </button></span>
            </div>

        </div>        
        </>
    )
}

export default Food