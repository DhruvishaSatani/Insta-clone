import React, { useState ,useEffect } from 'react'

const CreatPost = () => {
  const[body ,setBody]=useState('');
  const[image ,setImage]=useState('');
  const [url, setUrl] = useState("");


  useEffect(() => {
    // saving post to mongodb
    if (url) {

      fetch("http://localhost:5000/createPost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt")
        },
        body: JSON.stringify({
          body,
          pic: url
        })
      }).then(res => res.json())
        .then(data => {
          if (data.error) {
            notifyA(data.error)
          } else {
            notifyB("Successfully Posted")
            navigate("/")
          }
        })
        .catch(err => console.log(err))
    }

  }, [url])


    // posting image to cloudinary
const postDetails = () => {
  console.log(body, image)
  const data = new FormData()
  data.append("file", image)
  data.append("upload_preset", "insta-clone")
  data.append("cloud_name", "clone00project")
  fetch("https://api.cloudinary.com/v1_1/cantacloud2/image/upload", {
    method: "post",
    body: data
  }).then(res => res.json())
    .then(data => setUrl(data.url))
    .catch(err => console.log(err))
  console.log(url)
}


    
  const loadfile = (event) => {
    var output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };
  return (
    <div className='max-w-lg    mx-auto my-[20px] border border-gray-200 rounded-md '>

        {/* post-header */}
      <div className=" flex justify-between items-center p-[10px]">
        <h2 className='text-xl font-semibold mx-auto '>Create New Post</h2>
        <button  id="post-btn"  onClick={() => { postDetails() }}  className='border-none text-[#339ce3] font-bold cursor-pointer'> Share</button>
      </div>


      {/* main-div */}
      <div className="border-t-2  border-gray-200 p-[10px]">
      <img className='w-80 mt-3 border-nopne outline-none mx-auto'
          id="output"
          src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
        />
        <input type="file" accept='image/*'  onChange={(event) => {
            loadfile(event);
            setImage(event.target.files[0])
          }} />
      </div>

      <div className="border-t-2  border-gray-200 p-[10px]">
          <div className="flex items-center gap-3">
              <div className="card-pic">
              <img src="https://img.freepik.com/free-photo/young-pretty-smiling-happy-woman-red-mittens-knitted-hat-wearing-winter-coat-walking-park-snow-warm-clothes-having-fun_285396-5147.jpg" alt=""  className='w-14 rounded-full h-14'/>
              </div>

              <h5 className='font-semibold text-lg'>celina</h5>
          </div>

          <textarea value={body} onChange={(e)=>{setBody(e.target.value)}} type="text" placeholder="Write a caption...." className='w-11/12 border-none outline-none'></textarea>
      </div>
    </div>
  )
}

export default CreatPost
