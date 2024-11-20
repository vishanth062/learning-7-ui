import { useState } from "react"

const ExploreButton=()=>{
    const [buttonStyle,setButtonStyle]=useState('')

    const handleButton=(buttonName)=>{
        setButtonStyle((prev)=>prev===buttonName?'':buttonName)
    }

    return(
        < div className="flex justify-between p-3 mt-4 items-center flex-wrap gap-2">

        <div className="flex gap-4 text-sm font-thin">
        <button className={`border-b-2 ${buttonStyle==="TopHeadlines" ?'border-b-black':'border-b-white'}`} onClick={()=>handleButton('TopHeadlines')}>
  Top Headlines
</button>

<button className={`border-b-2 ${buttonStyle==="MostViewed" ?'border-b-black':'border-b-white'}`} onClick={()=>handleButton('MostViewed')}>Most Viewed</button>
        </div>


        <div className="flex items-center gap-4 font-thin">
<button className="border-2 pb-2 pt-2 pr-6 pl-6 rounded-md border-[#A1A1A1]">Filter</button>


<div> 
  <form class="relative mx-auto  flex w-full max-w-2xl items-center justify-between rounded-md border shadow-lg"> 
    <svg class="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8" class=""></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
    </svg>
    <input type="name" name="search" class="h-10 w-full rounded-md py-4 pr-40 pl-12 outline-none border-2 border-[#A1A1A1] " placeholder="Search..." />
  </form>
</div>


        </div>
        </div>
    )

}

export default ExploreButton