import React, { useContext } from "react"
import {useState,useEffect,useRef,useReducer} from "react"
import {vcontext} from "../App.js"
import data from './data';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import {DebounceInput} from 'react-debounce-input'
import './Article.css'





function Article() {
  const [show,setShow] = useState(true);
  const view = () => {setShow(!show )};
  const [count,setCount] = useState(0);
  function see(){setCount(precount=>precount+1)};
  const [but,setBut] = useState("Delete article viewed");
  const values=useContext(vcontext);

  const [filter,setFilter]=useState("")
 const Search =(e)=>{setFilter(e.target.value)}
 let dataSearch=data.cardData.filter(item=>{
   return Object.keys(item).some(keys=>item[keys].toString().toLowerCase().includes(filter.toString().toLowerCase()))
 })
  
  function Timer() {
    function handleCancelClick() {
      clearInterval(intervalRef.current);
    }  
  const intervalRef = useRef();
  const [clockState, setClockState] = useState();
  useEffect(() => {
    const id = setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    },100 );
   
    intervalRef.current = id;
    return () => {
      handleCancelClick();
    };
  });


  return ( <div>{clockState} 
  <button onClick={handleCancelClick}>Stop</button>
  </div>)
}


 

  const [clockStateen, setClockStateen] = useState(1);
 
  function Clockss() {    
        setClockStateen(3);
       
  }  


  function seen(){
    return(<>
   
    {count % 2===0 ? setBut("Show article viewed"):setBut("Delete article viewed")}</>) 
      };
      let yarn = [2,3,4,5,6];
      let num = [1,2,3,4,5];
      const yark = yarn.map((e)=>e===2? "two ":e===3? "three ":e===4? "four ": "numbers ")
      const yast = yarn.filter((e)=>" "+ e > 5)
      const yam = yarn.reduce((acc,e)=>acc+e,0)
      
      const fame = [...yarn,14]
      const york = ["namaste","good morning","vanakkam","salute"]
      
      let text=""
      let text1=""
      let text2=""
      let text3=""
      let num4=""
      let i=0;
      for(let i=0; i<york.length;i++){text+=" "+york[i]};
      for(let x in york){text1+=" "+york[x]};
      for(let x of york){text2+=" "+x};
      while(i<3){text3+=" "+york[i]+ "";i++}
      function Fox(value) {
        num4 +=" "+ value  }
     
      let num1=4
      let num2=6
      let result = num1 + num2
      const slices = yarn.slice(1,4)


      class Car extends React.Component {
        constructor(props) {
          super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
          }
          
        }
        changeColor = () => {
          this.setState({color: "blue"});
          console.log("tex1");
        }
        
        render() {
          return (
            <div>
              
              <p >
                It is a {this.state.color}
                
              </p>
              <button type='button' onClick={this.changeColor}>Text Change</button>
              </div>)}};


               let initialState=0;
               const reducer=(state,action)=>{switch(action){
                 case "Increment":return state+1;
                 case "Decrement":return state-1;
                 case "Reset": return initialState;
                 case "default": return state
               }}
               const [count1,dispatch]=useReducer(reducer,initialState) 
               
             

  return (
    <div>
      {Timer()}
    
      <br/>
      
    <h3>I am {values}</h3>
     
      
{show?<h5>Article viewed</h5>:null}

<button type="submit" onClick={()=>{see();view();seen()}}>{but}</button>
<br/><br/>
<marquee direction="right" style={{border:"BLACK",borderHeight:"2px",border:"SOLID"}} >
        I am moving
    </marquee>

<button type="submit">Submit</button>
<div>{but}</div>
<>[{yark}]<br/>
{yast}<br/>
{num.forEach(Fox)}{num4}<br/>
{yam}<br/>

{fame}<br/>

{yarn[3]}<br/>
{yarn.slice(1,4)}<br/>
{yarn.slice(0,3)}<br/>
{slices[0]}

</>
<ol>
  <li className="list">jack</li>
  <li className="list">jill</li>
  <li className="list">juck</li>
</ol>
<div>{text}</div>
<div>{text1}</div>
<div>{text2}</div>
{text3}
<pre>{`Before
After`}</pre>
<pre>The addition of {num1} and {num2} is {result}</pre>
<div>yarn(1)</div> <br/>
<Car/>
<br/>
<div  className={clockStateen===1? "text-danger":clockStateen===2? "text-white":"text-warning"}>Text</div>
<button onClick={Clockss}>Color Change</button>
<br/>
{count1}<br/>
<button onClick={()=>dispatch("Increment")}>Increment</button>
<button onClick={()=>dispatch("Decrement")}>Decrement</button> 
<button onClick={()=>dispatch("Reset")}>Resset</button>
<br/><br/>
<DebounceInput minLength={2} debounceTimeout={500}  type="text" placeholder='Search...'value={filter} onChange={Search}/>
   <br/><br/>
   <section className='p-4 container'>
     <div className='row justify-content-center'>
{dataSearch.map((item,index)=>{
  return(
    <Card style={{ width: '18rem' }}>
    <Card.Img  variant="top" src={item.img} style={{ height: '15rem' }} />
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <button variant="primary">Go somewhere</button>
    </Card.Body>
  </Card>
  )}  
)}
</div>
</section>

</div>
)};


export default Article;