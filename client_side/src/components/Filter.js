import React, {useState} from 'react'
import { FaFilter } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { filterPizza } from '../action/PizzaAction'

const Filter = () => {
    const dispatch = useDispatch()
    const [searchKey, setSearchKey] = useState("")
    const [category, setCategory] = useState("all")
  return (
    <div className="container mt-4">
        <div className="row justify-content-center shadow-lg mb-5 bg-white rounded" style={{padding: "1rem"}}>
            <div className="col-md-3">
                <input type="text" value={searchKey} onChange={(e)=>{setSearchKey(e.target.value)}}name="search" id="search" className="form-control mt-2 border border-primary" placeholder="search pizza" />
                
            </div>
            <div className="col-md-2">
                <select name="all" id="all" className="form-select mt-2" value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                    <option value="all">All</option>
                    <option value="veg">veg</option>
                    <option value="nonveg">non veg</option>
                </select>


            </div>
            <div className="col-md-3">
                <button className="btn btn-danger" onClick={()=>{dispatch(filterPizza(searchKey, category))}}>Filter <FaFilter/></button>
            </div>
            
        </div>
        
    </div>
  )
}

export default Filter