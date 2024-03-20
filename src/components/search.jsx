import {useState} from "react";
import FoodData from "/resources/FoodData.js"
import FoodBox from './foodbox'

function Search(){
    const [search, setSearch] = useState()

    function updateInput(e){
        setSearch(e.target.value)
    }

    let Food = FoodData

    Food = Food.filter((ele,i)=>{
       return  ele.name.includes(search)
    })
        console.log(Food)
    return(
        <>
        <div className="search_container">
            <h1>Search</h1>
            <input type="text" value={search} onChange={updateInput}/>
        </div>

        {
            Food.map((ele, i)=>{
                return <FoodBox key={i} e={ele} search={search}/>
            })
        }

        </>
    )
}

export default Search