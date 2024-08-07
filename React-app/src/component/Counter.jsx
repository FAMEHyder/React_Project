import  { useState } from 'react'

export const Counter = () => {

    const [data ,setdata] = useState(0)

        const increase = ()=>{
            
                setdata(data+1)
                console.log(data)

        }

        const decrease = ()=>{
            setdata (data-1)
            console.log(data)
        }

  return (


    <div className="Counter">

        <h2>Counter</h2>
        <h3>count is : {data}</h3>

        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
    

    </div>

        


    


  )
}

export default Counter
