import React from 'react'

const Home = () => {
  return (
    <div className='home'>
      {/* card  */}
       <div className='max-w-[500px] h-max my-[25px] mx-auto border border-gray-200 rounded-md' >
            {/* card header  */}
            <div className=' flex items-center'> 
               <div className="w-16 h-16 overflow-hidden   p-[5px]  object-cover">  
                <img src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=" alt=""  className='w-full rounded-full h-full'/>
               </div>

               <h5 className='m-0 p-[11px] text-lg font-semibold'>Riyna sharma</h5>
            </div>

            {/* card-img  */}
            <div className="w-full">
               <img src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full' />
            </div>

            {/* card-content */}
          <div className='leading-6  text-left  border-b-2  border-gray-200 py-[3px] px-[10px]'>
            <i  className="fa-regular fa-heart text-xl" ></i>
            <p>1 like</p>

          </div>

          {/* add-comment */}
          <div className="flex items-center px-2">
          <i  className="fa-regular fa-face-smile"></i>
          <input type="text"  placeholder='Add to comment' className='m-0 outline-none border-none p-[10px] w-full'/>
          <button className='bg-none  cursor-pointer font-bold text-[#339ce3]'>Post</button>
          </div>
       </div>
    </div>
  )
}

export default Home
