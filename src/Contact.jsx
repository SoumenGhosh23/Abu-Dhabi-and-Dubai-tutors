import React, { useState } from 'react'
import emailjs from 'emailjs-com';

import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
const Contact = () => {
  const [open, setOpen] = useState(false);
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

  // const [contact, setcontact] = useState(
  //   {
  //     fullname: "",
  //     number: "",
  //     email: "",
  //     message: "",
  //   }
  // )
  // const [dis_contact, dis_setcontact] = useState(
  //   {
  //     dis_fullname: "",
  //     dis_number: "",
  //     dis_email: "",
  //     dis_message: "",
  //   }
  // )

  // const input_contact = (event) => {
  //   const { name, value } = event.target;
  //   setcontact((prevalue) => {
  //     return {
  //       ...prevalue,
  //       [name]: value,
  //     }
  //   })
  // }
  // const send = (event) => {
  //   event.preventDefault();
  //   dis_setcontact(() => {
  //     return {
  //       dis_fullname: contact.fullname,

  //       dis_number: contact.number,
  //       dis_email: contact.email,
  //       dis_message: contact.message,


  //     }
  //   })
  // }
  const send=(event)=>
  {
    event.preventDefault();
    emailjs.sendForm('gmail', 'template_ktpb7vk', event.target, 'user_kUwwdda2Axcvp9pvEduMd')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    
    event.target.reset();
    // alert("WE WILL CONTACT YOU SOON")
    // <Alert variant="filled" severity="success">
    //     This is a success alert — check it out!
    //   </Alert>
      setOpen(true);
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    return (
      <>

        <form className="row g-3 needs-validation" novalidate onSubmit={send}>
          <div className="col-md-4 position-relative">
          <label for="validationTooltip01" className="form-label" style={{color:"white"}}>Firstname</label>
            <input type="text" className="form-control" id="validationTooltip01" name="firstname" autoComplete="off" required />
            <div className="invalid-tooltip">
              Please provide a valid Firstname.
    </div>
          </div>
          <div className="col-md-4 position-relative">
          <label for="validationTooltip02" className="form-label" style={{color:"white"}}>Last Name</label>
            <input type="text" className="form-control" id="validationTooltip02" name="lastname" autoComplete="off" required />
            <div className="invalid-tooltip">
              Please provide a valid Lastname.
    </div>
          </div>
          <div className="col-md-4 position-relative">
            <label for="validationTooltip03" className="form-label" style={{color:"white"}}>Email</label>
            <input type="email" className="form-control" id="validationTooltip03" name="email" autoComplete="off" required />
            <div className="invalid-tooltip">
              Please provide a valid email.
    </div>
          </div>
          <div className="col-md-4 position-relative">
            <label for="validationTooltip04" className="form-label" style={{color:"white"}}>Location</label>
            <input type="text" className="form-control" id="validationTooltip04" name="location" autoComplete="off" required />
            <div className="invalid-tooltip">
              Please provide a valid Location.
    </div>
          </div>
          <div className="col-md-4 position-relative">
            <label for="validationTooltip05" className="form-label" style={{color:"white"}}>Phone</label>
            <input type="number" className="form-control" id="validationTooltip04" name="phone" autoComplete="off" required />
            <div className="invalid-tooltip">
              Please provide a valid Phone number.
    </div>
          </div>
          <div className="col-md-4 position-relative">
            <label for="validationTooltip06" className="form-label" style={{color:"white"}}>Looking for</label>
            <input type="text" className="form-control" id="validationTooltip06" name="subject"autoComplete="off"  required />
            <div className="invalid-tooltip">
              Please provide a subject tutors.
    </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit" style={{marginBottom:"10px"}}>REGISTRER</button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                 <Alert onClose={handleClose} severity="success">
               This is a success message!
                     </Alert>
             </Snackbar>
          </div>
        </form>
      </>
    )
  }
  export default Contact;