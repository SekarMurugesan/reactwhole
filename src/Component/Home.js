import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from "react"
import "./Home.css"
import {useSelector,useDispatch} from 'react-redux'
import {ordered} from '../Redux/Login/countSlice'
import eye from './Image/eye.png';
import eyehidden from './Image/eyehidden.png';
import {useForm} from "react-hook-form";






function Home() {
  
const numOfCount=useSelector((state)=>state.count.numOfCount)
const dispatch=useDispatch()
const [passwordshow, setpasswordshow] = useState(false)
const [show, setshow] = useState(true)
const {register,handleSubmit,formState:{errors,}} = useForm();
const onSubmit= (values)=>console.log(values);



  return (<div>
    <div className="container">
    <div className="row">
    <div className="col-sm-5 mx-auto">
    <div className="card">
    <div className="card-body">
      <h1 className="text-center pb-4 text-primary">Login page</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-group row">
    <label for="classname" className="col-sm-4 text-end">Username<span className="text-danger">*</span></label>
    <input style={{ border: errors.user ? '1px solid red' : ''}} type="text" id="classname" className="col-sm-8 " name="user" {...register("user",{required:"password is required"})}/></div>
    <div className="form-group row mt-2">
    <label for="pass" className="col-sm-4 text-end">Password<span className="text-danger">*</span></label>
    <input style={{ border: errors.pwd ? '1px solid red' : ''}} type={passwordshow?"text":"password"} id="pass" name="pwd" className="col-sm-8 " {...register("pwd",{required:"password is required"})}/></div>
    {passwordshow?<img className='eyes' src={eye} alt="eyes" onClick={(e)=>{setshow(!show);setpasswordshow(false)}}/>:<img className='eyehidden' alt='eyehidden' src={eyehidden} onClick={(e)=>{setshow(!show);setpasswordshow(true)}}/> }
     
    <div className="form-group row">
    <div className="col-sm-6"></div>  
    <button type ="submit" className="col-sm-4 mt-2 text-center">Submit</button>
    <div className="col-sm-6"></div>  
    <input type='reset' className="col-sm-4 mt-2 text-center"/></div>
    <div className="col-sm-2"></div>
    <div  style={{height:"150px"}}></div><br/>
    </form> 
    
    <div>Redux count:{numOfCount}</div>
    <button onClick={()=>dispatch(ordered())}>Redux Button</button>


       
    </div>      
    </div> 
    </div>
    </div>
    </div>
   
      
   
    
    </div>
    
    )
};


export default Home