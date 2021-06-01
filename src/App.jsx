import React, { useState } from 'react'
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom'
import {Route, Switch} from 'react-router';
import MenuIcon from '@material-ui/icons/Menu';
import Home from './Home';
import Contact from './Contact';
import { Menu } from '@material-ui/core';
import SimpleReactFooter from "simple-react-footer";
import '../node_modules/share-buttons/dist/share-buttons'
import ChatBox from './ChatBox';
const App=(()=>
{
   
    const description = "We understand that each student's situation and needs are unique to them.contact us for what tou're lookong for,and we wil get back to you soon with the best solution with our native private tutors for all languages and professional tutors for all subjects.";
    const title = "AL QUA EDUCATION";
    const columns = [
      {
          title: "Resources",
          resources: [
              {
                  name: "About",
                  link: "/about"
              },
              {
                  name: "Careers",
                  link: "/careers"
              },
              {
                  name: "Contact",
                  link: "/contact"
              },
              {
                  name: "Admin",
                  link: "/admin"
              }
          ]
      },
      {
          title: "Legal",
          resources: [
              {
                  name: "Privacy",
                  link: "/privacy"
              },
              {
                  name: "Terms",
                  link: "/terms"
              }
          ]
      },
      {
          title: "Visit",
          resources: [
              {
                  name: "Locations",
                  link: "/locations"
              },
              {
                  name: "Culture",
                  link: "/culture"
              },
              {
                  name: "Reviews",
                  link: "/reviews"
              }
          ]
      }
   ];

    return(
        <>
        <Navbar/>
     
     <div className="footer" style={{marginTop:"-30px"}}>
    
     <SimpleReactFooter 
    description={description} 
    title={title}
    columns={columns}
    
    copyright="2019 AL QUA EDUCATION Right Reserved"
    iconColor="black"
    backgroundColor="bisque"
    fontColor="black"
    copyrightColor="darkgrey"
 />;
 <ChatBox/>
 <a href="https://wa.me/919064098848" class="whatsapp_float" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
 </div>

        </>
    )
   
})
export default App;