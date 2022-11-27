import "./Ho.css"
import React, { useContext, useReducer, useRef ,useState,useMemo,useCallback,createContext} from 'react'
import { useLocation, useNavigate,useParams } from 'react-router-dom'
import {vcontext} from '../App.js'
import Memocomponent from '../Memo/Memocomponent'
import Withoutmemo  from '../Memo/Withoutmemo'
import Callbackfunc from '../Memo/Callbackfunc'

export const child = createContext()
const Ho = () => {
  //useReducer
   const initialState={username:"" ,password:""}
   const reducer = (state, action) => {
    switch(action.type) {
      case 'userName':
        return {...state, username: action.valuesss}
      case 'passWord':
        return {...state, password: action.value}
      default:
        return state}}  
    const [formState,dispatch] =useReducer(reducer,initialState)

    //useRef
    const myRef=useRef();
    const foc=useRef();
    
    const Remove=()=>{
      myRef.current.remove()
    }
    const Focus=()=>{
        foc.current.focus();
             };

       //useContext
      const values =useContext(vcontext); 
      

      
      //useNavigate
      const history=useNavigate();
      const backward=()=>{   
        return(history(-1))
      }

      //React memo
      const [countone, setCountone] = useState(0)
      const counter=()=>{
        setCountone(countone+1)
      }
      const [counttwo, setCounttwo] = useState(0)
      const countertwo=()=>{
        setCounttwo(counttwo+1)
      }
     
      //usememo
      const [countthree, setCountthree] = useState(0);
      const [todos, setTodos] = useState([]);
  const increment = () => {
    setCountthree((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  }; 
  const calculation = useMemo(() => expensiveCalculation(countthree), [countthree]);

//useCallback
  const [countfour, setCountfour] = useState(0);
  const [todosfour, setTodosfour] = useState([]);
  const incrementfour = () => {
    setCountfour((c) => c + 1);
  };
  const addTodofour = useCallback(() => {
    setTodosfour((t) => [...t, "New Todo"]);
  }, [todosfour]);


  //useParams
  const {usernames} = useParams()

  //useLocation
  const location =useLocation()


  return (
    <>
    <div className="Hopage">
    <form>
     <label>useReducer:</label><br/>   
    <input type="text" autoFocus   name="username" placeholder="Username" value={formState.username} onChange={(e) => dispatch({type: 'userName', valuesss: e.target.value})}/><br/>
    <input type="password" name="password" placeholder="Password" value={formState.password} onChange={(e) => dispatch({type: 'passWord', value: e.target.value})}/>
    </form>
    
    {formState.username}<br/>
    {formState.password}<br/>
    <label>useRef:</label><br/>
    <input type="text" ref={foc} placeholder="colorchange" /><br/>
    <div ref={myRef} >Notok</div>
    <button onClick={Remove}>Remove</button>
    <button onClick={Focus}>Focus</button><br/><br/>
    <label>useContext:</label><br/>
    <p style={{color:"white",fontWeight:"bold"}}>{values}</p>
    <label>useParams:</label>{usernames}<br/><br/>
    <label>usenavigator:</label><br/>
    <button onClick={backward}>Move Last Page</button><br/><br/>
    <label>useLocation:</label>{location.pathname}<br/><br/>


    {/*React memo */}
    <label>React Memo:</label><br/>
    <label><Withoutmemo/></label><br/>   
    {countone}
    <button onClick={counter}>Counter</button> <br/> 
    <label><Memocomponent/></label><br/>  
    {counttwo}
    <button onClick={countertwo}>Countertwo</button> <br/><br/>

    {/*Usememo */}
    <label>useMemo:</label><br/>
    <div>
      <div>
        <h6>My Todos</h6>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>    
      <div>
        Count: {countthree}
        <button onClick={increment}>+</button>
        <h6>Expensive Calculation</h6>
        {calculation}
      </div>
    </div><br/>

   {/*useCallback */}
   <label>useCallback:</label><br/>
    <Callbackfunc todosfour={todosfour} addTodofour={addTodofour} />      
      <div>
        Count: {countfour}
        <button onClick={incrementfour}>+</button>
      </div><br/>

    {/*child to parent */}
   <label>child to parent:</label><br/>

   

   </div>

    </>
      )
}

export default Ho