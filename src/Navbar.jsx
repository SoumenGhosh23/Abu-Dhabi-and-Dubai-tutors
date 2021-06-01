import { Exposure, SportsEsports } from "@material-ui/icons"
import logo from './image/logo.png'
import Home from './Home'
import Contact from './Contact';
import { NavLink } from "react-router-dom";
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Findtutors from './Findtutors';
import FindAcademicTutors from './FindAcademicTutors';
import FindLanguageTutors from './FindLanguageTutors';
import TutorJob from './TutorJob';
import TutorJobAny from './TutorJobAny';
import TutorJobDubai from './TutorJobDubai';
import TutorJobAbuDhabi from './TutorJobAbuDhabi';
import SignIn from './SignIn';
import Myaccount from './Myaccount';
import Support from './Support';

const Navbar=({show})=>
{
  return(
    <>
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/findtutors' exact component={Findtutors} />
        <Route path='/findtutors/academic_tutors' exact component={FindAcademicTutors} />
        <Route path='/findtutors/language_tutors' exact component={FindLanguageTutors} />
        <Route path='/tutor_jobs' exact component={TutorJob} />
        <Route path='/tutor_jobs/tutor' exact component={TutorJobAny} />
        <Route path='/tutor_jobs/dubai' exact component={TutorJobDubai} />
        <Route path='tutor_jobs/abu_dhabi' exact component={TutorJobAbuDhabi} />
        <Route path='/signin' exact component={SignIn} />
        <Route path='/myaccount' exact component={Myaccount} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/support' exact component={Support} />
      </Switch>
    </Router>
    </>
  )
}
export default Navbar;