import React from 'react'

const profile = () => {
  return (

    // profile
    <div className='max-w-xl mx-auto my-[10px]'> 

        {/* profile-frame */}
        <div className="flex items-center justify-evenly">
              <div className="profile-pic">
                    <img src="https://media.istockphoto.com/id/1326417862/photo/young-woman-laughing-while-relaxing-at-home.jpg?s=612x612&w=0&k=20&c=cd8e6RBGOe4b8a8vTcKW0Jo9JONv1bKSMTKcxaCra8c=" alt=""  className='w-40 h-40 object-cover bg-center rounded-full'/>
              </div>

              {/* profile data */}
              <div className=" text-left ">
                 <h1 className='text-[30px] font-bold '>Canta Cion</h1>
                 {/* profile-info */}
                 <div className="flex space-x-4">
                     <p >40 posts</p>
                     <p>40 Followers</p>
                     <p>40 Following</p>
                 </div>
              </div>
        </div>

<hr  className='w-11/12 my-[25px] mx-auto '/>
        {/* gallery  */}
        <div className="grid grid-cols-3 gap-4 justify-evenly text-center ">
            <img src="https://img.freepik.com/free-photo/portrait-happy-woman-winter-outside_1303-13292.jpg" alt=""  className='    '/>
            <img src="https://img.freepik.com/free-photo/girl-winter_1157-5143.jpg" alt="" className=''/>
            <img src="https://img.freepik.com/free-photo/young-pretty-smiling-happy-woman-red-mittens-knitted-hat-wearing-winter-coat-walking-park-snow-warm-clothes-having-fun_285396-5147.jpg" alt="" className=''/>
            <img src="https://img.freepik.com/free-photo/portrait-happy-woman-winter-outside_1303-13292.jpg" alt="" className='' />
            <img src="https://img.freepik.com/free-photo/portrait-happy-woman-winter-outside_1303-13292.jpg" alt=""  className=''/>
            <img src="https://img.freepik.com/free-photo/girl-winter_1157-5143.jpg" alt="" className=''/>
            <img src="https://img.freepik.com/free-photo/young-pretty-smiling-happy-woman-red-mittens-knitted-hat-wearing-winter-coat-walking-park-snow-warm-clothes-having-fun_285396-5147.jpg" alt="" className=''/>
            <img src="https://img.freepik.com/free-photo/portrait-happy-woman-winter-outside_1303-13292.jpg" alt="" className='' />
        </div>
    </div>
  )
}

export default profile
