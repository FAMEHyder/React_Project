import React from 'react'


export const login = () => {


  return (
    <div className="mainclass">
    

    <div className="Login">
        <h2>Login Form</h2>

        <label htmlFor=""> Enter your Username<br/>

          <input type="text" placeholder='Username' />
        </label> 

        <label htmlFor=""> Enter your Password<br/>

          <input type="password" placeholder='XXXXXXXX'/>
        </label>

        <button>Login</button>


    </div>

    <div className="Register">
        <h2>Registration Form</h2>
            <label htmlFor=""> Enter First Name<br/>
                <input type="text" placeholder='First Name' />
            </label>

            <label htmlFor=""> Enter Last Name<br/>
                <input type="text" placeholder='Last Name' />
            </label>

            <label htmlFor=""> Enter Username<br/>
                <input type="text" placeholder='Username' />

            </label>

            <label htmlFor="">Date of Birth<br/>
                <input type="Date" placeholder='Date oF Birth'/>
            </label>

            <label htmlFor=""> Enter Password<br/>
                <input type="Password" placeholder='xxxxxxxx'/>

            </label>

            <label htmlFor=""> Confirm Password<br/>
                <input type="Password" placeholder='xxxxxxxx'/>

            </label>

            <button>Submit</button>
    </div>

</div>
  )
}

export default login