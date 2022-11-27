import React from "react"
import {useState,useEffect} from "react"
import './app.css'
import {NavLink, Outlet} from "react-router-dom"


function Blog() {

const MoveRight= function(){
  document.getElementById("moveR").style.transform="translate(500px)"
};
const Bcchange= function(){
  document.getElementById("Bcolorchange").classList.remove("Bcolor");
  document.getElementById("Bcolorchange").classList.add("Acolor")
};
var arry=[1,2,3,4]
var total=0
for(var y of arry){total+=y}
var arry1=[10,20,30,40]
var total1=1
for(var x in arry1){total1+=arry1[x]}
var arry2=[1,2,3,4]
var total2=0
for(var i=0;i<arry2.length;i++){total2=arry2[i]}

var num=0;
var num1=""
const count= function(){
  num+=1;
  if (num >5){
   num1="5 reached"}
  else 
   {num1="5 not reached"}
  alert(num1)}
 var day=""
 const date = new Date()
 switch (date.getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
let myWindow;
function openWin() {
  myWindow=window.open("", "", "width=200, height=100");
}
function closeWin() {
  myWindow.close();
}
function resizeWin() {
  myWindow.resizeTo(500,500);
}

const [visible,setVisible]=useState(true)
function showText(){
  setVisible(true)
}
function hideText(){
  setVisible(false)
}
// sync
let syncc=10
for(let i=0; i<100;i++){syncc+=i}

//async
const [asynn,setAsynn] =useState('')
const mess= function(){return(setAsynn('async message'))}
const asyncc= useEffect(()=>setTimeout(mess,4000))

  return (
<div>
<NavLink to="/blog/news1">News1</NavLink>{"  "}
<NavLink to="/blog/news2">News2</NavLink>
<Outlet/><br/><br/>
<b>{day}</b><br/><br/>

  

  <div id="with"  style={{width:"150px",height:"20px",backgroundColor:"yellow",cursor:"pointer"}} onClick={()=>{document.getElementById("with").style.width="600px"}}>Click me to Expand</div>
  <br/>
  <div title='show'>Title hover</div>
  <div id="moveR" onClick={MoveRight} style={{width:"150px",height:"50px",backgroundColor:"blueviolet",display:"grid",placeItems:"center",cursor:"pointer"}}>Move Rightside</div>
  <br/>
  <div className="Bcolor" id="Bcolorchange" onClick={Bcchange}>Background color change by click</div>

  <br/>
  {total}<br/>
  {total1}<br/>
  {total2}
  <br/>
  <button onClick={count}>Click count</button>
  <br/><br/>
  <div>Window innerWidth:{window.innerWidth}</div>  
  <div>Window innerHeight:{window.innerHeight}</div> 
  <button onClick={openWin}>Open new window</button>
  <button onClick={closeWin}>Close new window </button>
  <button onClick={resizeWin}>Resize current window </button><br/>
  <div>Screen width:{window.screen.width}</div>
  <div>Screen height:{window.screen.height}</div>
  <div>Window location href:{window.location.href}</div>
  <div>Window location hostname:{window.location.hostname}</div>
  <div>Window location pathname:{window.location.pathname}</div>
  <div>Window location protocol:{window.location.protocol}</div><br/>

  {visible? <div id="show">Show</div>:null}
  <button onClick={showText}>Show</button> <button onClick={hideText}>Hide</button><br/><br/>

  {/* Synchronous */}
  <div className="heading">Synchronous:</div>
  <div>letter</div>
  {syncc}
  <div>calculation late so app page load delay</div><br/><br/>

   {/* Asynchronous */}
  <div className="heading">Asynchronous:</div>
  <div>letter two</div>
  {asynn}
  <div>above message will show after 4000s</div>

 
  

</div>)

};


export default Blog;