import React from 'react'

const FormHandling = () => {
    const [title, setTitle] = React.useState("");
    const submithandler = (e) => {
        e.preventDefault();
        console.log("Form Submitted by", title);
        setTitle("");
    }
  return (
    
    <div>
      <form onSubmit={(e)=>{
        submithandler(e);
      }} >
        <input className=" bg-black text-white mr-2" type="text" 
        placeholder="Enter Your Name"
          value ={title}
          onChange ={(e) => {
            setTitle(e.target.value);
          }}
        >
        </input>
        <button className='bg-amber-400 '>Submit</button>
      </form>
    </div>
  )
}

export default FormHandling
