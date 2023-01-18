import React,{useEffect, useState} from 'react';
import './JSII.css'

const JSII = () => {
    //setTimeout
    const [time,setTime]=useState('')
   useEffect(()=>setTimeout(funcs,3000))
   function funcs() {
    return setTime("message")
   }
   function funcClear() {
     clearTimeout(funcs())
        }
      //setInterval     
   const [timeinterval,setTimeinterval]=useState('')
   useEffect(()=>setTimeout(funcsinterval,4000))
   function funcsinterval() {
    return setTimeinterval("message")
   }
   function funcClearInterval() {
     clearInterval(funcsinterval())
        }

  //duplicate counting
  let arrayduplicate=[1,2,3,1,3,4,2,1,45,45];
  var count={};
  let counting = arrayduplicate.forEach((i)=> { count[i] = (count[i]||0) + 1;});


//join mutiple array
let arraymutiple=[[1,2],[3,4],[5,6]];
let arrayflat=arrayduplicate.flat();
let arraymutipleone=arraymutiple.reduce((e,i)=>e.concat(i),[])
let newarraymutiple=[...arraymutiple[0],...arraymutiple[1], ...arraymutiple[2]]

//Rearrange string without duplicate
let text = 'this is my job'
let newtext =text.split(" ")
let changetext = [newtext[0],newtext[1],newtext[2],newtext[3]]=[newtext[2],newtext[3],newtext[1],newtext[0]]
let newchangetext=changetext.join(" ")
let textone=[];
let arrayone=[1,2,3,4,5];
arrayone.forEach((e,i)=>textone[e]=arrayone[(arrayone.length)-i-1]);
//rearrange string with duplicate
let string='Google';
let emptyarrayss=[];
let newarrayss=Array.from(string);
for(let i=0;i<newarrayss.length;i++){
let newarrayoness=emptyarrayss.push(newarrayss[(newarrayss.length)-i-1])};
let resultss=Object.values(emptyarrayss).join('');


//number filter with string
let numstring =[1,2,'str',3,'num'];
let num=numstring.filter((e)=>{return typeof e=== "number"});

//compare two array and extract different values
let compareA= [1,2,3,4,5,6,7];
let compareB= [1,2,3,4];
let b1=new Set(compareB);
let comparearrayresult=[...new Set(compareA.filter((e)=>!b1.has(e)))];



//var,let,const
var x = 12
let y=13
const z=14
var x =15
 y=16

function variableX(){  
  return x}
function variableY(){ 
  return y}
function variableZ(){ 
  return z}

//string and number  
let stringplusnumber ="a"+10;
let numberplusstring =10+"a";
let numberminusstring =10-"a";
let stringminusnumber ="a"-10;  
let stringnumberminusnumber ="20"+10 ;
let numberminusstringnumber =10-"20" ;

//find key from value
let arraykey={id:'one',name:'two'};
let newarraykey=Object.keys(arraykey).find((e)=>{return arraykey[e]==="two"});
let mutipleobjinarray=[{id:'one',name:'two'},{id:'three',name:'four'},{id:'five',name:'six'}];
let newmutipleobjinarray=mutipleobjinarray.filter((e)=>{return e.id==="one"});

//creating array
let createarray=Array.from(Array(30).keys()).map((e)=>e+1);
let newcreatearray=[...Array(30).keys()].map((e)=>e+1)

//generator
let generatorarray=[1,2,3,4,5,6,7,8,9,10];
const [first, setfirst] = useState('')
let j=0; 
function* generators() {   
    while(j<generatorarray.length) {    
     yield generatorarray[j];
     j++  }}
var generatorval=generators();
function onclickgenerator(event) {
  event.preventDefault();

console.log(generatorval.next().value)}

//prototype
Array.prototype.mapArray=function(callback) {let newarray=[];
  for(let i=0;i<this.length;i++){newarray.push(callback(this[i]))}
return newarray}

//alert
function alerts() {alert('alert message')};
//confirm
let confirmboolean=""
function myFunctionconfirm() {
 let confirmresult= window.confirm("Press a button!");
if(confirmresult){confirmboolean="true"}
else confirmboolean='false';
console.log(confirmboolean)}
//prompt
function promptbox() {let promptvalue=prompt('peompt message');
console.log(promptvalue)}

//move top when onclick the list of button
const [arraybutton,setarraybutton]=useState(['A','B','C']);
function clickbutton(e) {
  console.log(e.target.value);
  if(e.target.value){
    let newarraybutton=[e.target.value,...arraybutton];
    let result=[...new Set(newarraybutton)];
    setarraybutton(result)
    console.log(arraybutton)
     }
}

//padStart
let padstarttext='5';
let padstarttextnew=padstarttext.padStart(3,'0');

//decimal to binary
let decimal=50;
let binary=decimal.toString(2);
//binary to decimal
let newbinary=110010;
let newdecimal=parseInt(newbinary,2)

//get last digit
let numberdigit=53;
let lastdigit=53%10;
let lastdigitslice=numberdigit.toString().slice(-1);
let lastdigitlength=numberdigit.toString().charAt((numberdigit.toString().length)-1);

//ternary operator
let terA=1;
let terB=2;
let terC=3;
let terD=true;
let terE=false;
let terF=false;
let terG=true;
let terH=true;
let terI=true;

//star func
const Starfunc=()=>{
  let n = 5;
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      string += "*";
    }
    string +=' ' 
  }
  return string.split(' ').map((e)=><div>{e}</div>)
}
  return (<>
{/*setTimeout*/}
<div className='heading' >setTimeout</div>
<label><ins>setTimeout:</ins></label>{time}<br/>
<button onClick={funcClear}>Timeout message stop</button><br/><br/>
{/*setInterval*/}
<div className='heading' >setInterval</div>
<label><ins>setInterval:</ins></label>{timeinterval}<br/>
<button onClick={funcClearInterval}>Interval message stop</button><br/><br/>

{/*Duplicate counting*/}
<div className='heading' >Duplicate counting</div>
<label><ins>Duplicate counting:</ins></label>{JSON.stringify(count)}<br/><br/>

{/*Join mutiple array*/}
<div className='heading' >Join mutiple array</div>
<label><ins>Join mutiple array(using spread operator):</ins></label>{newarraymutiple}<br/>
<label><ins>Join mutiple array(using reduce):</ins></label>{arraymutipleone}<br/>
<label><ins>Join mutiple array(using flat):</ins></label>{arrayflat}<br/><br/>

{/*Rearrange text*/}
<div className='heading' >Rearrange text</div>
{text}{"-"}{newchangetext}<br/>
<label><ins>Rearrange number(1,2,3,4,5):</ins></label>{textone}<br/>
<label><ins>Rearrange string(Google):</ins></label>{resultss}<br/><br/>

{/*filter number with string*/}
<div className='heading' >filter number with string</div>
<label><ins>number filter:</ins></label>{num}<br/><br/>

{/*compare two array and extract different*/}
<div className='heading' >compare two array and extract different</div>
<label><ins>compare array:</ins></label>{comparearrayresult+''}<br/><br/>

{/*var let const*/}
<div className='heading' >var,let,const</div>
<label><ins>var x:</ins></label>{variableX()}<br/>
<label><ins>let y:</ins></label>{variableY()}<br/>
<label><ins>const z:</ins></label>{variableZ()}<br/><br/>

{/*string and number*/}
<div className='heading' >string and number</div>
<label><ins>string + number:</ins></label>{stringplusnumber}<br/>
<label><ins>number + string:</ins></label>{numberplusstring}<br/>
<label><ins>number - string:</ins></label>{numberminusstring}<br/>
<label><ins>string - number:</ins></label>{stringminusnumber}<br/>
<label><ins>stringnumber - number:</ins></label>{stringnumberminusnumber}<br/>
<label><ins>number-stringnumber:</ins></label>{JSON.stringify(numberminusstringnumber)}<br/><br/>

{/*find key from value*/}
<div className='heading' >find key from value</div>
<label><ins>key from value from single object:</ins></label>{newarraykey}<br/>
<label><ins>value from key from single object:</ins></label>{arraykey['id']}<br/>
<label><ins>value from key from mutiple object:</ins></label>{JSON.stringify(newmutipleobjinarray)}<br/><br/>

{/*create array*/}
<div className='heading' >create array</div>
{createarray+""}<br/>
{newcreatearray+''}<br/><br/>


{/*generator*/}
<div className='heading' >generator function</div>
<button onClick={onclickgenerator}>generator-console.log</button><br/>
{first}<br/>

{/*prototype*/}
<div className='heading' >prototype</div>
<label><ins>Array.prototype.mapArray:</ins></label>{[1,2,3].mapArray((e)=>e+1)}<br/><br/>

{/*alert,confirm,prompt*/}
<div className='heading' >alert,confirm,prompt</div>
<label><ins>alert:</ins></label><button onClick={alerts}>alert box</button><br/><br/>
<label><ins>confirm:</ins></label><button onClick={myFunctionconfirm}>confirm box</button><br/><br/>
<label><ins>prompt:</ins></label><button onClick={promptbox}>prompt box</button><br/><br/>

{/*move top when onclick the list of button*/}
<div className='heading' >move top when onclick the list of button</div>
{arraybutton.map((e)=>{return(
<ul className='move'>
  <li><button value={e} onClick={(e)=>clickbutton(e)}>{e}</button></li><br/>
</ul>)})}

{/*padStart to add zero infront*/}
<div className='heading' >padStart to add zero infront</div>
<label><ins>padStart:</ins></label>{padstarttextnew}<br/><br/>

{/*decimal to binary*/}
<div className='heading' >Decimal to binary</div>
<label><ins>Decimal to binary(50):</ins></label>{binary}<br/>
{/*binary to decimal*/}
<div className='heading' >Binary to decimal</div>
<label><ins>Binary to decimal(110010):</ins></label>{newdecimal}<br/><br/>

{/*get last digit*/}
<div className='heading' >Get last digit</div>
<label><ins>Get last digit(by modulus):</ins></label>{lastdigit}<br/>
<label><ins>Get last digit(by slice):</ins></label>{lastdigitslice}<br/>
<label><ins>Get last digit(by string length):</ins></label>{lastdigitlength}<br/><br/>

{/*ternary*/}
<div className='heading' >Ternary operator</div>
<label><ins>D true E false : </ins></label>{terD?terE? terA:terB:terC}<br/>
<label><ins>F false G false(or)true : </ins></label>{terF?terG? terA:terB:terC}<br/>
<label><ins>H true I true : </ins></label>{terH?terI? terA:terB:terC}<br/><br/>

{/*star func*/}
{Starfunc()}

</>
  )
}

export default JSII