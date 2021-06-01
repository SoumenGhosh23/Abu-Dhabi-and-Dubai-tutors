import React from 'react';
import html from './image/html.png';
import Button from '@material-ui/core/Button'
const Card=(props)=>
{
    return(
        <>
         
           
               <div className="card">
                   <div className="imgbx">
                       <img src ={props.image}/>
                   </div>
                   <div className="content">
                       <h2 style={{color:"yellowgreen"}}><u>{props.subject}</u></h2>
                       <p> {props.details}</p>
                       <Button variant="contained" color="primary" href="#">
                                Hire
                        </Button>
                        
                   </div>
               </div>
              
           

        
        </>
    )
}
export default Card;