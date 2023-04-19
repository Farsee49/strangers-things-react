import React from "react";


export default function Form() {

    return(
    <>
     <ul>
        {
           <form action="" method="get" className="form-example">
           <div className="form-example">
             <label htmlFor="name">Enter your name: </label>
             <input type="text" name="name" id="name" required></input>
           </div>
           <div className="form-example">
             <label htmlFor="email">Enter your email: </label>
             <input type="email" name="email" id="email" required></input>
           </div>
           
         </form>
         
        }
     </ul>
</>
    )
}