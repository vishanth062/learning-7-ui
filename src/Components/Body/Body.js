import Data from "./Data";
import {useState,useEffect} from "react"

const Body=()=>{

    const [data,setdata]=useState([])

    useEffect(()=>{
        setdata([...Data])
    },[])

    return(
        <div className="pt-20 pb-20 grid lg:grid-cols-3 gap-6 md:grid-cols-2   ">

{[...Array(2)].map((_,loopindex)=>(

data.map((items,index)=>(
    <div id={index} className="flex flex-col rounded-lg border-2 border-[#33333366] shadow-md p-2 gap-4 max-w-[390px] ">
    <img src={items.Image} className="w-[389px] h-[240px] object-cover" />
    <h1 className="text-xl font-bold text-[#333333]">{Data[0].Title}</h1>
    <p className="text-[#585858]">{items.Discription}</p>
    <div className="text-[#333333] flex justify-between border-t-2 items-center">
        <div className="flex justify-between gap-3">
        <div>{items.Name}</div>
        <div>{items.Date}</div>
        </div>
        <div className="text-xl w-5">&#8594;</div>

    </div>
    </div>

))


))}

           
             
             
            
        </div>
    )

}

export default Body