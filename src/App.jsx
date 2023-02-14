import './App.css'
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './components/requireAuth';
import Login from './components/login'
import Layout from './components/layout';
import Unauthorized from './components/unathorized';
import Portal from './components/portal'
import Settings from './loyalty/settings';
import Home from './components/home';
import Missing from './components/missing';
import Admin from './components/admin';


function App() {

const ROLES = {
  
}

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>} />
        <Route path='unauthorized' element={<Unauthorized/>}/>
      </Route>

      <Route element={<RequireAuth allowedRoles={[2001, 3001, 4001, 5001]}/>}>
        <Route path='portal' element={<Portal/>}/>
      </Route>

      <Route element={<RequireAuth allowedRoles={[2001, 3001]}/>}>
        <Route path='portal/settings' element={<Settings/>}/> 
      </Route>

      <Route element={<RequireAuth allowedRoles={[2001]}/>}>
        <Route path='admin' element={<Admin/>}/>
      </Route>

      <Route path='*' element={<Missing/>}/>
    </Routes>
  )
}

export default App


  // <div className="App">
    //   <h1>Casual Ride Loyalty Program</h1>
    //   <h2>Local Bike Shop NFK</h2>
    //   <div>
    //     <SearchCustomer/>
    //     <Login/>
    //   </div>
    //             </div>