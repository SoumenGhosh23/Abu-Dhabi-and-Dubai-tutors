
import React from 'react'
import img1 from './image/img1.jpg';
import img2 from './image/img2.jpg';
import img3 from './image/img3.jpg';

import CardData from './CardData';
import html from './image/html.png'
import Card from './Card';
import Contact from './Contact'
import Social from './Social';
import ChatBox from './ChatBox'
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'


const Home = () => {
    var counter = 1;
    setInterval(function () {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4) {
            counter = 1;
        }
    }, 5000);


    return (
        <>
            <div className="home_body">
                <div className="slider">
                    <div className="slides">

                        <input type="radio" name="radio-btn" id="radio1" />
                        <input type="radio" name="radio-btn" id="radio2" />
                        <input type="radio" name="radio-btn" id="radio3" />
                        <input type="radio" name="radio-btn" id="radio4" />

                        <div className="slide first">
                            <img src={img1} alt="1" />
                        </div>
                        <div className="slide">
                            <img src={img2} alt="2" />
                        </div>
                        <div className="slide">
                            <img src={img3} alt="3" />
                        </div>
                        <div className="slide">
                            <img src={img1} alt="4" />
                        </div>

                        <div className="navigation-auto">
                            <div className="auto-btn1"></div>
                            <div className="auto-btn2"></div>
                            <div className="auto-btn3"></div>
                            <div className="auto-btn4"></div>
                        </div>

                    </div>

                    <div className="navigation-manual">
                        <label for="radio1" className="manual-btn"></label>
                        <label for="radio2" className="manual-btn"></label>
                        <label for="radio3" className="manual-btn"></label>
                        <label for="radio4" className="manual-btn"></label>
                    </div>


                    <div className="container"></div>
                </div>

 

            </div>
            <h2 style={{textAlign:"center",background:"#23e3c9"}}>Learn from expert tutors,one to one or online</h2>
            
            <div className="card_body">
           
                {/* <h1 style={{textAlign:"center"}}>Learn from expert tutors,one to one online</h1> */}
                <div className="container">
                    {CardData.map((val) => {
                        return (
                            <Card
                                image={val.image_source}
                                subject={val.subject}
                                details={val.details}
                            />
                        )

                    })
                    }

                </div>

            </div>
            {/* <ChatBox /> */}

            <div className="Social" style={{ textAlign: "center", background: "#23E3C9" }}><Social />
                <div>
                    <br />

                    <h2>REGISTRER NOW</h2>
                    <br />

                    <h4>Details</h4>
                </div>
                <div className="contact_body"><div className="contact" style={{ margin: "20px 20px", textAlign: "center", marginBottom: "30px", backgroundColor:"rgba(0,0,0,0.45)",boxShadow:"rgba(0,0,0,0.13)",padding:"10px 10px",marginBottom:"20px" }}> <Contact /></div></div>

                               {/* <ChatBox/> */}
               
            </div>
          
        </>
    )
}
export default Home;