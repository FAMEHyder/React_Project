import React, { useState } from 'react'

export const Sign_in = () => {
    const [name ,setname] = useState('')
    const [Password ,setpassword] = useState('')

        const handlesubmit = (event)=>{
            event.preventDefault();

            alert(`
                Username: ${name}
                Password: ${Password}
              `);

        }
  
  return (
    <div className="signin">
        <form onSubmit={handlesubmit}>

        <h2>Signing In</h2>
        <label htmlFor="">User Name <br />
            <input 
            type="text"
            placeholder='User Name'
            id = 'first'
            value = {name}
            onChange={(e)=>setname(e.target.value)}
            
            />

        </label>

        <label htmlFor=""> <br /> Enter Password <br />
            <input 
            type="password"
             placeholder='xxxxxxxx'
             id = 'password'
             value = {Password}
             onChange={(e)=>setpassword(e.target.value)}
             />
        </label> <br />

        <button onClick={handlesubmit}>Done</button> <br />
        <button type='Submit'>Submit</button>

        </form>
            


    </div>
  )
}

export default Sign_in;
