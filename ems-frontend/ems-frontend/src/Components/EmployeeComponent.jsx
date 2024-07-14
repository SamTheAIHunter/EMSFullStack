import React,{useEffect, useState} from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeServivce';
import { useNavigate, useParams } from 'react-router-dom';


const EmployeeComponent = () => {

   const[firstName, setFirstName]  = useState("");
   const[lastName, setLastName] = useState('');
   const[email, seteMail] = useState('');
   const[password,setPassword] = useState('');
   const {id} = useParams();

   const[errors, setErrors] = useState({
        firstName :'',
        lastName :'',
        email: '',
        password:'' 

 } )

   const navigator = useNavigate();

   useEffect(()=>{
    if(id){
      getEmployee(id).then((response)=>{
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        seteMail(response.data.email);
        setPassword(response.data.password);
      }).catch(error =>{
        console.error(error);
      })
    }

   },[id])

 
    function saveOrUpdateEmployee(e){
      e.preventDefault();

      if(validateForm()){

        const employee ={firstName, lastName, email,password }
        console.log(employee)

        if(id){
          updateEmployee(id, employee).then((response)=>
          {
            console.log(response.data);
            navigator('/employees');
          }).catch(error => {
            console.error(error);
          })
        }else{

          createEmployee(employee).then((response)=>{
            console.log(response.data);
            navigator('/employees');
          }).catch(error => {
            console.error(error);
          })
        }

      }

     
    }

    function validateForm(){
      let valid = true;
      const errorsCopy ={...errors}

      if(firstName.trim()){
        errorsCopy.firstName='';

      }else{
        errorsCopy.firstName='first Name is required';
        valid = false;
      }

      if(lastName.trim()){
        errorsCopy.lastName='';
      }else{
        errorsCopy.lastName='Last name is required';
      }

      if(email.trim()){
        errorsCopy.email='';
      }else{
        errorsCopy.email='Email is required';
      }

      if(password.trim()){
        errorsCopy.password='';
      }else{
        errorsCopy.password="Password is required";
      }
      setErrors(errorsCopy);
      return valid;
    }

    function pageTitle(){
      if(id){
        return <h2 className='text-center'> Update Employee</h2>
      }else{
        return <h2 className='text-center'> Add Employee</h2>
      }
    }
  return (

    // using Bootstrap
    <div className='container'>
      <br /><br/>
      <div className='row justify-content-center'>
        <div className='card col-md-6 offset-md-3  offset-md-3'>
          {
            pageTitle()
          }
          <div className='card-body'>
            <form >
              <div className='form-group mb-2'>
                <label className='form-label'>First Name</label>
                <input
                  type='text'
                  placeholder='Enter Employee First Name'
                  name='firstName'
                  value={firstName}
                  className={`form-control ${errors.firstName? 'is-invalid':''}`}
                  onChange={(e)=>setFirstName(e.target.value)}

                ></input>
                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}

              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Last Name</label>
                <input
                  type='text'
                  placeholder='Enter Employee Last Name'
                  name='lastName'
                  value={lastName}
                  className={`form-control ${errors.lastName? 'is-invalid':''}`}
                  onChange={(e)=> setLastName(e.target.value)}

                ></input>
                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}

              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Email</label>
                <input
                  type='text'
                  placeholder='Enter Employee Email'
                  name='email'
                  value={email}
                  className={`form-control ${errors.email? 'is-invalid':''}`}
                  onChange={(e)=> seteMail(e.target.value)}

                ></input>
                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}

              </div>

              <div className='form-group mb-2'>
                <label className='form-control'>Password</label>
                <input
                  type='password'
                  placeholder='Enter Password'
                  name='password'
              
                  value={password}
                  className={`form-control ${errors.password? 'is-invalid':''}`}
                  onChange={(e)=>setPassword(e.target.value)}

                ></input>
                {errors.password && <div className='invalid-feedback'>{errors.password}</div>}

              </div>
              <button className = 'btn btn-success' onClick={saveOrUpdateEmployee}> Submit</button>
            </form>
          </div>

        </div>

      </div>

    </div>
  )
}

export default EmployeeComponent