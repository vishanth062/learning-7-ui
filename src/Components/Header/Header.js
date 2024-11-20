import logo from '../../Resources/logo.png'
import Explorebutton from './ExploreButton.js'

const Header=()=>{
    return(
        <>
        <div className='flex justify-between border-b-solid border-b-2 pb-4 border-b-black'>
            <div></div>
<img src={logo} className='w-14 h-14'/>
<button className='border-solid border-2 font-thin text-sm pr-6 pl-6 rounded-md border-[#33333366]'>Subcribe</button>
        </div>
       
        <div className="mt-28">
        <h1 className="text-[#B76E79] text-sm">DISCOVER . LEARN . GROW</h1>
        <h1 className="text-4xl">Your Personalized Gateway <br></br> to Global News</h1>
        </div>

        <Explorebutton></Explorebutton>
        </>
    )

}

export default Header