import './App.css'
import EmployeeComponent from './Components/EmployeeComponent'
import FooterComponent from './Components/FooterComponent'
import HeaderComponent from './Components/HeaderComponent'
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import {BrowserRouter,  Routes, Route,} from 'react-router-dom'




function App() {
  
  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
        <Routes>
           {/* //http://localhost:3000 */}
           <Route path='/' element = {<ListEmployeeComponent/>}></Route> 
           {/* //http://localhost:3000 */}
           <Route path='/employees' element = { <ListEmployeeComponent/>}> </Route>   
            {/* //http://localhost:3000/add-employee */}
           <Route path='/add-employee' element ={<EmployeeComponent/>}></Route>            
        </Routes>
      <FooterComponent/>
    </BrowserRouter>
      
    </>
  )
}

export default App
