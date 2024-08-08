import { Routes, Route } from 'react-router-dom';
import CompanyPage from './pages/companyPage/companyPage';
import ServicesPage from './pages/servicesPage/servicesPage';
import EquipmentPage from './pages/equipmentPage/equipmentPage';
import JobsPage from './pages/jobsPage/jobsPage';
import ContactPage from './pages/contactPage/contactPage';
import UserRegisterPage from './pages/userRegisterPage/UserRegisterPage';
import IntranetPage from './pages/intranetPage/IntranetPage';
import InvMovFormPage from './pages/invMovFormPage/InvMovFormPage';
import ArticleUpFormPage from './pages/articleUpFormPage/ArticleUpFormPage';
import LocationUpPage from './pages/locationUpPage/LocationUpPage';
import InquiryPage from './pages/inquiryPage/InquiryPage';
import UserLoginPage from './pages/userLoginPage/UserLoginPage';
import UserRoutesComp from './components/protectedRoutes/userRoutesComp/UserRoutesComp';


const App = () => {
  return (
    <div>
      <Routes>

        {/*General Routes*/}
        {/* <Route path="/" element={<LandingPage />} /> */}

        {/*Register Routes*/}
        <Route path='/tasks' element={<h1>tasks</h1>}/>
        <Route path='/add-task' element={<h1>add-task</h1>}/>
        <Route path='/task/:id' element={<h1>task/:id</h1>}/>
        <Route path='/profile' element={<h1>profile</h1>}/>
  
        {/* Free Routes*/}
        <Route path='/login' element={<UserLoginPage/>}/>
        <Route path="/" element={<CompanyPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/equipment" element={<EquipmentPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Admin & user Routes*/}
        <Route element={<UserRoutesComp/>}>
          <Route path='/intranet' element={<IntranetPage/>} />
        </Route>
    
        {/* Admin Routes*/}
        <Route path='/inquiry' element={<InquiryPage/>}/>
        <Route path='/location-up-form' element={<LocationUpPage/>} />
        <Route path='/article-up-form' element={<ArticleUpFormPage/>} />
        <Route path='/inventory-movement' element={<InvMovFormPage/>} />
        <Route path='/register' element={<UserRegisterPage/>} />
  
      </Routes>
    </div>
  )
}

export default App
