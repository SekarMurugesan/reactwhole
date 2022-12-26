import React from "react"
import './Forms.css';
import {useForm} from "react-hook-form";
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai";
import {useState,useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';


function Contact() {
  const {register,handleSubmit,formState:{errors}} = useForm();
  const onSubmit= (values)=>console.log(values);
  const [passwordShown, setPasswordShown] = useState(false);
  const [show,setShow] = useState(true);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
    setShow(!show);
  };
  const togglePasswordunVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
    setShow(!show);
  };

  const [dropdown,setDropdown] = useState("");
  const [radio,setRadio] = useState("");
  const [check,setCheck] =useState(false);
  

  //dynamic forms
  //checkbox
  const [dynacheckedcount,setDynacheckedcount]=useState(0);
  const [obj, setobj] = useState([]);
  const [disable, setdisable] = useState('');
  const array =[{name:"checkone",labels:"one"},{name:"checktwo",labels:"two"},{name:"checkthree",labels:"three"},{name:"checkfour",labels:"four"}];
  const disabledcount = dynacheckedcount >= 3;  
  
function Changecheck(e,i) { 
//checked values
let checkedval=[...document.querySelectorAll('.check:checked')].map((e)=>e.value); 
let notcheckedval=[...document.querySelectorAll('.check:not(:checked)')].map((e)=>e.value);
//
let key=e.target.name;
if(e.target.checked) {
setobj([...obj,key]);setDynacheckedcount(prev=>prev+1)}
else {setobj(obj.filter(CheckedId=>CheckedId !== key));setDynacheckedcount(prev=>prev-1)}
} 
 useEffect(() => { 
  let a=array.map((e)=>e.name);
  let b1=new Set(obj);
  let arrayresult=[...new Set(a.filter((e)=>!b1.has(e)))];
  let resultid=arrayresult.toString(); 
  if(disabledcount) {setdisable(resultid)}
 }, [dynacheckedcount]);  


 //dynamic radio
   const [radiodyna, setradiodyna] = useState('');
   function Changeradio(e) {
    setradiodyna(e.target.value);
    }
   
  //dynamic dropdown
  //mutiple dropdown select value
  //let mutipleselectdrop=[...e.target.options].filter(o => o.selected).map(o => o.value);
  //
  const [dropdyna, setdropdyna] = useState("");
  function Changedrop(e) {
    setdropdyna(e.target.value)
    
  }  
  
  return (
  <div className="container-sm">
  <div className="log">
<p><h1 className="forms">Login</h1></p>
<form onSubmit={handleSubmit(onSubmit)}>
  <label className="user">Username: </label>
   <input style={{ border: errors.user ? '1px solid red' : ''}} className="input" type="text" name="user" {...register("user",{required:"username is required"})} placeholder="Enter name"  />
   <p className="error" style={{color:"red",fontSize:"13px"}}>{errors.user?.message}</p>
   <label className="user">Date of Birth: </label>
   <input style={{ border: errors.dates ? '1px solid red' : ''}} className="input" type="date" name="dates" {...register("dates",{required:"Date of birth is required"})} placeholder="Enter name"  />
   <p className="error" style={{color:"red",fontSize:"13px"}}>{errors.dates?.message}</p>
   <label className="user">Email: </label>
   <input style={{ border: errors.email ? '1px solid red' : ''}} className="input"  type="email" name="email" {...register("email",{required:"username is required"})} placeholder="Enter name"  />
   <p className="error" style={{color:"red",fontSize:"13px"}}>{errors.email?.message}</p>
   <label className="user">Gender: </label>
    <select name="option" className="input" {...register("option",{required:"select gender"})} >
      <option className="input" style={{color:"blue", backgroundColor:"violet",borderRadius:"50px",height:"25px"}}>Male</option>
      <option className="input" style={{color:"blue", backgroundColor:"violet",borderRadius:"50px",height:"25px"}}>Female</option>
    </select><br/><br/>
    <label className="user">Password: </label>
   <input style={{ border: errors.pwd ? '1px solid red' : ''}} className="input" type={passwordShown ? "text" : "password" } name="pwd" {...register("pwd",{required:"password is required",pattern:{value:/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}/ ,message:"At least one lowercase,one uppercase,one number,one special letter with minimum 8 characters required"}})} placeholder="Enter password"   />
     {show?null:<span onClick={togglePasswordunVisiblity} className="eyeone"><AiFillEyeInvisible/></span>}
     {show?<span onClick={togglePasswordVisiblity} className="eye"><AiFillEye/></span>:null}     
     <p className="error" style={{color:"red", fontSize:"13px", height:"15px",width:"400px",marginLeft:"330px"}}>{errors.pwd?.message}</p>
     <p className="please">
       <br/>
  <button type="submit" style={{height:"30px", textAlign:"right"}}>LogIn/SignIn</button></p>
</form>

<div className="forms">
<h1>Dropdown is {dropdown}</h1>
<select value={dropdown} onChange={(e)=>{setDropdown(e.target.value)}}>
  <option value="one">one</option>
  <option value="two">two</option> 
  <option value="three">three</option>
</select>
<br/>
<h1>Radio button is {radio} checked</h1>
  <label className="radio">Tv</label>
  <input type="radio" onChange={(e)=>{setRadio(e.target.value)}} checked={radio==="tv"} value="tv"/><br/>
  <label className="radio">Mobile</label>
  <input type="radio" onChange={(e)=>{setRadio(e.target.value)}} checked={radio==="mobile"} value="mobile"/><br/>
  <label className="radio">Tablet</label>
  <input type="radio" onChange={(e)=>{setRadio(e.target.value)}} checked={radio==="tablet"} value="tablet"/><br/>
  <input type="checkbox" value={check} onChange={(e)=>{setCheck(!check)}}/>
  <br/>{check.toString()}<br/><br/>

  {/*dynamic form*/}
   {/*dynamic checkbox*/}
  <div><ins>Dynamic checkbox</ins></div>
  {array.map((e,i)=>{return (<div className="checkdynamic"><form><input type="checkbox" id={e.name} name={e.name}  value={e.labels} disabled={e.name==disable}  onChange={(e)=>Changecheck(e)}/><label key={i}>{e.labels}</label></form></div>)})}<br/>
 
  {/*dynamic radiobutton*/}
  <div><ins>Dynamic Radio button</ins></div>
  {array.map((e,i)=>{return (<div className="checkdynamic"><form><input type="radio" id={e.name} name={e.name}  value={e.labels} checked={radiodyna===e.labels} onChange={(e)=>Changeradio(e)}/><label key={i}>{e.labels}</label></form></div>)})}<br/>
  
  {/*dynamic dropdown*/}
  <div><ins>Dynamic dropdown</ins></div>
  <select value={dropdyna} onChange={(e)=>Changedrop(e)} >
  {array.map((e)=><option>{e.labels}</option>)}  
  </select><br/><br/><br/><br/>
  
  {/*dynamic dropdown on click and then hover*/}
  <div><ins>Dynamic dropdown onclick and then hover</ins></div>
  <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {array.map((e)=>(<Dropdown.Item href="#/action-1">{e.labels}</Dropdown.Item>))}
      </Dropdown.Menu>
    </Dropdown><br/>

   {/*dynamic dropdown on hover*/}
  <div><ins>Dynamic dropdown on hover</ins></div>
  <li className="dropdowns">
    <div>Dropdown</div>
    <div className="dropdown-menu">
      <a className="dropdown-item">one</a>
      <a className="dropdown-item">two</a>
      <a className="dropdown-item">three</a>
    </div>
  </li>
  <br/><br/><br/><br/>
  </div>
</div>
</div>)
};


export default Contact;