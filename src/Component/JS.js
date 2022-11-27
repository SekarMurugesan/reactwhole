import React, { Component } from 'react'
import { useState,useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner';

const JS = () => {
    //Sorting
    const sortingStringarray=['apple','orange','banana','mango','grape']
    const sortingnumberarray=[3,9,43,70,21,5,100]
    //sortingStringobject by number
    const sortingStringobjectN=[{name:'apple',weight:30},{name:'orange',weight:24},{name:'banana',weight:21},{name:'mango',weight:10},{name:'grape',weight:13}]
    sortingStringobjectN.sort(function(a, b){return a.weight - b.weight})
    //sortingStringobject by string
    const sortingStringobjectS=[{name:'apple',weight:30},{name:'orange',weight:24},{name:'banana',weight:21},{name:'mango',weight:10},{name:'grape',weight:13}]
    sortingStringobjectS.sort(function(a, b){let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;})


    //Remove duplicate
    //Remove duplicate by set
    const Removeduplicate = [2,5,1,8,1,2,3,6]
    function removeDuplicatesbyset(arr) {
        return [...new Set(arr)];} 
    //Remove duplicate using foreach
    let newremoveduplicate=[];
    let resultduplicate=Removeduplicate.forEach((e,i)=>newremoveduplicate[e]=Removeduplicate[i])           
    //Remove duplicate by filter    
    function removeDuplicatesbyfilter(arr) {
            return arr.filter((item,
                index) => arr.indexOf(item) === index); }

     //indexOf
     const indexofnumber = [4,3,4,3]  
     
     //replace
     //captilize
     const str = 'i_have_learned_something_new_today'
     const Captilize = str.split("_");
     for (var i = 0; i < Captilize.length; i++) {
        Captilize[i]= Captilize[i].charAt(0).toUpperCase() + Captilize[i].slice(1)
      /* if (arr[i% 2 === 0]) {arr[i]= arr[i].charAt(0).toLowerCase() + arr[i].slice(1)}
     else {arr[i]= arr[i].charAt(0).toUpperCase() + arr[i].slice(1)} */ }
     const str2 = Captilize.join(" ")
     //camelcase
     const CamelCase = str.split("_")  
     for (let i = 0; i < Captilize.length; i++) {
      if(i%2===0){CamelCase[i]= CamelCase[i].charAt(0).toLocaleLowerCase() + CamelCase[i].slice(1)}
      else{CamelCase[i]= CamelCase[i].charAt(0).toUpperCase() + CamelCase[i].slice(1)}
     }
     const camelcasestr2 = CamelCase.join("")
     //replace
     const replaces ='i have learned something new today'
     const replacetext= replaces.replace("have","had")
     
     //splice,slice,pop,push
     var slice = ["apple","orange","mango","grape"]
     var splice = ["apple","orange","mango","grape"]
     var pop = ["apple","orange","mango","grape"]
     pop.pop()
     var push = ["apple","orange","mango","grape"]
     push.push("pumpkin" )
     var shift = ["apple","orange","mango","grape"]
     shift.shift()
     var unshift = ["apple","orange","mango","grape"]
     unshift.unshift("pinapple")

     //local,session,cookie
     const [local, setlocal] = useState("")
     const [session, setsession] = useState('')
     const [cookies, setcookies] =useState("")
     {document.cookie="name="+cookies+";"+"expires="+new Date(2022,9,22)}

     //shallow copy ,deep copy
     var arraycopy= [1,3,5,7,9,11]
     var newarraycopy=arraycopy
     arraycopy[0]=2
     newarraycopy[1]=4
     var deepcopy=[1,2,3,4,5]
     var newdeepcopy=JSON.parse(JSON.stringify(deepcopy))
     var newdeepcopyone=[...deepcopy]
     deepcopy[0]=3
     newdeepcopy[0]=2
     newdeepcopyone[0]=4

     //JSON parse ,JSON stringify
     const parseobj = {name: "John", age: 30, city: "New York"}
     const stringifyobj='{"name":"John","age":30,"city":"New York"}'
     const parseconvert=JSON.parse(stringifyobj)

     //js methods
     var foreach= [1,2,3,4,5,6]
     var oneforeach=[]
     foreach.forEach((e)=>{return(oneforeach.push(e+1))})
     var twoforeach = [1,2,3,4]
     twoforeach.forEach((e,i)=>{return(twoforeach[i]=e*e)})
     const concatone =['one','two']
     const concattwo =['three','four']
     const concattotal =concatone.concat(concattwo)
     const copywithin =['one','two','three','four','five']
      var everyarr = [56, 92, 18, 88, 12];
      var everyvalue = everyarr.every((e)=>{return(e>11)})
      var somearr = [56, 92, 18, 88, 12]
      var somevalue = somearr.some((e)=>{return(e>31)})
      const fillarr = ["Banana", "Orange", "Apple", "Mango"];
      fillarr.fill("Kiwi", 2, 4);
      const filterarr = [32, 33, 16, 40];
      const filterresult = filterarr.filter((e)=>{return(e>20)});  
      const findarr = [32, 33, 16, 40]
      const findresult=findarr.find((e)=>e>30)
      const findindexarr = [32, 33, 16, 40]
      const findindexresultone=findindexarr.findIndex((e)=>e>43)
      const findindexresulttwo=findindexarr.findIndex((e)=>e>32)
      const fromstring = "ABCDEFG"
      const fromstringarr = Array.from(fromstring);
      const tostring = ["Banana", "Orange", "Apple", "Mango"];
      let tostringtext = tostring.toString();
      const includearr = ["Banana", "Orange", "Apple", "Mango"]
      const isarrays = ["Banana", "Orange", "Apple", "Mango"];
      const joinarr = ["Banana", "Orange", "Apple", "Mango"]
      let jointext = joinarr.join(" and ")
      const Entries =["Banana", "Orange", "Apple", "Mango"]
      let f = Entries.entries()
      let Entriesarr=""
      for(let x of f){Entriesarr+=x}
      const keysarr = ["Banana", "Orange", "Apple", "Mango"];
      const keys = keysarr.keys();
      let keystext = "";
      for (let x of keys) {
       keystext += x+"," }
       const valuesarr = ["Banana", "Orange", "Apple", "Mango"];
       const values = valuesarr.values();
       let valuestext = "";
       for (let x of values) {
        valuestext += x + ","} 
      const lastindexof = ["Apple", "Orange", "Apple", "Mango"];
      let lastindex = lastindexof.lastIndexOf("Apple"); 
      const lengthone = ["Banana", "Orange", "Apple", "Mango"];
      const lengthtwo="length"
      const reducearr = [175, 50, 25]
      const reducetotal=reducearr.reduce((acc,e,i)=>{return(acc+e)},0)
      const reversearr = ['one','two','three','four','five']
      const charat="charAt"
      const charattext=charat.charAt(5).toUpperCase()
      const touppercase="touppercase"
      let splitarr = "How are you doing today?";
      let matchtext = "The rain in SPAIN stays mainly in the plain";
      let repeattext = "Hello world!"
      let searchtext = "Mr. Blue has a blue house"
      let trimtext = "       Hello World!        ";

     //iteration
     var iteration = {name:"shankar",age:"21",gender:"male",arrayiteration:[1,2,3,4,5]}
     var iterationarr=[1,2,3,4,5]
     var jsonplace=[
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
            }
          },
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
          "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
          }
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
          "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
              "lat": "-68.6102",
              "lng": "-47.0653"
            }
          },
          "phone": "1-463-123-4447",
          "website": "ramiro.info",
          "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
          }
        },
        {
          "id": 4,
          "name": "Patricia Lebsack",
          "username": "Karianne",
          "email": "Julianne.OConner@kory.org",
          "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
              "lat": "29.4572",
              "lng": "-164.2990"
            }
          },
          "phone": "493-170-9623 x156",
          "website": "kale.biz",
          "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
          }
        },
        {
          "id": 5,
          "name": "Chelsey Dietrich",
          "username": "Kamren",
          "email": "Lucio_Hettinger@annie.ca",
          "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
              "lat": "-31.8129",
              "lng": "62.5342"
            }
          },
          "phone": "(254)954-1289",
          "website": "demarco.info",
          "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
          }
        },
        {
          "id": 6,
          "name": "Mrs. Dennis Schulist",
          "username": "Leopoldo_Corkery",
          "email": "Karley_Dach@jasper.info",
          "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
              "lat": "-71.4197",
              "lng": "71.7478"
            }
          },
          "phone": "1-477-935-8478 x6430",
          "website": "ola.org",
          "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
          }
        },
        {
          "id": 7,
          "name": "Kurtis Weissnat",
          "username": "Elwyn.Skiles",
          "email": "Telly.Hoeger@billy.biz",
          "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
              "lat": "24.8918",
              "lng": "21.8984"
            }
          },
          "phone": "210.067.6132",
          "website": "elvis.io",
          "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
          }
        },
        {
          "id": 8,
          "name": "Nicholas Runolfsdottir V",
          "username": "Maxime_Nienow",
          "email": "Sherwood@rosamond.me",
          "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
              "lat": "-14.3990",
              "lng": "-120.7677"
            }
          },
          "phone": "586.493.6943 x140",
          "website": "jacynthe.com",
          "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
          }
        },
        {
          "id": 9,
          "name": "Glenna Reichert",
          "username": "Delphine",
          "email": "Chaim_McDermott@dana.io",
          "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
              "lat": "24.6463",
              "lng": "-168.8889"
            }
          },
          "phone": "(775)976-6794 x41206",
          "website": "conrad.com",
          "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
          }
        },
        {
          "id": 10,
          "name": "Clementina DuBuque",
          "username": "Moriah.Stanton",
          "email": "Rey.Padberg@karina.biz",
          "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
              "lat": "-38.2386",
              "lng": "57.2232"
            }
          },
          "phone": "024-648-3804",
          "website": "ambrose.net",
          "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
          }
        }
      ]
      var foreacharr=[]
      iterationarr.forEach((e)=>{foreacharr.push(e)})

     //AND OR NOT
     //OR
      const animals=["dog","cat"]
      const [animalOR, setanimalOR] = useState("")
      const [showOR, setshowOR] = useState(false)      
      const or=() => {
        for(let i=0;i<animals.length;i++){
        /*animal===animals[0]?setshow(false):animal===animals[1]?setshow(false):setshow(true)*/
        (animalOR===animals[0] || animalOR===animals[1])?setshowOR(false):setshowOR(true)
      }}
      //AND
      const [animalAND, setanimalAND] = useState("")
      const [showAND, setshowAND] = useState(false)  
      const and=() => {
        for(let i=0;i<animals.length;i++){
         (animalAND===animals[0] && animalAND===animals[1])?setshowAND(false):setshowAND(true)
      }}
      //NOT
      const [animalNOT, setanimalNOT] = useState("")
      const [showNOT, setshowNOT] = useState(false)  
      const not=() => {
        for(let i=0;i<animals.length;i++){
         !(animalNOT===animals[0] || animalNOT===animals[1])?setshowNOT(false):setshowNOT(true)
      }}
    
      //this and new  
     class JSC extends Component {
      constructor() {
        super();
        this.state = {color: "red"};
          }
      changeColor = () => {
        this.setState({color: "blue"});
      } 
            render() {                
        return (
          <>
          <div>Color change:{this.state.color}<input type="submit" onClick={this.changeColor} /></div>
          
          </>
        )
      }
    }
    
      //object display in view
      const object= {one:"1",two:"2",three:"3"}
      let obj=""
      for (let item in object){obj+=object[item]}

      //callbacks ,promises and curry
      //callbacks
    callbackone(2,function(firstvalue){callbacktwo(firstvalue,function(secondvalue){      
      console.log(secondvalue)
         })})
      function callbackone(value,callback){
       callback(value+2)}
      function callbacktwo(value,callback){
        callback(value+2)}
//promise
      let promises=new Promise(function(resolve,reject){
        resolve(2) });
     promises.then(callbackthree).then(callbackfour).then(function(response) { document.getElementById("promise").innerHTML =response}) 
      function callbackthree(value){
      return value+2}
      function callbackfour(value){
      return value+2} 
      //promise all
      let fetchone=useEffect(() => {fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))});
      let fetchtwo=useEffect(() => {fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))});      
     Promise.all([fetchone,fetchtwo]).then((response)=>{return console.log(response)})
      //(Promise.all(response.map(r=>r.json())))}).then(([one,two])=>{console.log(one);console.log(two)})
      //curry
      const curry =(a)=>{return (b)=>{return (c)=>{return (a*b*c)}}}
      const curryone =(a)=>(b)=>(c)=>a*b*c
    

      //call,apply,bind 
      //call
      const person = {
        firstName:"Johny",
        lastName: "Doen",
        fullName: function() {
          return this.firstName + " " + this.lastName; }}
        const personone = {
          fullName: function(lastName) {
            return this.firstName + " " + lastName;}}
      const call1 = {
        firstName:"John",
        lastName: "Doe" }
      const call2 = {
        firstName:"Mary",}
        //apply
        const personapply = {
          fullName: function(city, country) {
            return this.firstName + " " + this.lastName + "," + city + "," + country; }}
        const applys = {
              firstName:"John",
              lastName: "Doe" }
        //bind
        let fullNames = person.fullName.bind(applys)
        let fullnamebind =person.fullName.bind(person)
       console.log(fullNames())

//Spread operator
let arrayspread=[1,2,3,4,5]
let arrayspreadoperator=[...arrayspread]
//Rest operator
let [one,two,...three]=[1,2,3,4,5]

//Closure
function Closure() {
  let x=0;
 function Closureresult() {return x+=1 }
 return {increment:Closureresult} }
var objectinc=Closure();





    return (
 <>
   {/*Sorting*/}
<div className='heading' >Sort</div>
<label><ins>Sorting-string-array:</ins></label>{sortingStringarray.sort()+' '}<br/>
<label><ins>Sorting-number-array:</ins></label>{sortingnumberarray.sort((a,b)=>{return a-b})+''}<br/>
<label><ins>Sorting-array-object by number:</ins></label>{sortingStringobjectN.map((e)=>{return(e.name +" "+ e.weight)})+""}<br/>
<label><ins>Sorting-array-object by string:</ins></label>{sortingStringobjectS.map((e)=>{return(e.name +" "+ e.weight)})+""}<br/><br/>

    {/*Remove duplicate*/}
<div className='heading' >Remove Duplicate</div>
<label><ins>Remove duplicate by Set:</ins></label>{removeDuplicatesbyset(Removeduplicate)+''}<br/>
<label><ins>Remove duplicate by forEach:</ins></label>{newremoveduplicate}<br/>
<label><ins>Remove duplicate by filter:</ins></label>{removeDuplicatesbyfilter(Removeduplicate)+''}<br/><br/>

    {/*IndexOf*/}
<div className='heading' >indexOf</div>
<label><ins>IndexOfnumber:</ins></label>{indexofnumber.indexOf(3)}<br/><br/>

 {/*Replace*/}
  {/*Captilize first letter*/}
 <div className='heading' >Replace</div>
 <label><ins>Captilize:</ins></label>{str2}<br/>
 <label><ins>camelCase:</ins></label>{' '+camelcasestr2}<br/>
 <label><ins>replace:</ins></label>{replacetext}<br/><br/>

 {/*splice,slice,pop,push*/}
 <div className='heading' >splice,slice,pop,push,shift,unshift</div>
 <label><ins>slice:</ins></label>{slice.slice(1)+""}<br/>
 <label><ins>splice:</ins></label>{splice.splice(1, 0, "quava")}{splice+""}<br/>
 <label><ins>pop:</ins></label>{pop}<br/>
 <label><ins>push:</ins></label>{push +""}<br/>
 <label><ins>shift:</ins></label>{shift +""}<br/>
 <label><ins>unshift:</ins></label>{unshift +""}<br/>
 <br/> <br/>

 {/*local storage vs session storage vs cookies*/}
 <div className='row'>
 <div className='heading'>localStorage,sessionStorage,cookies</div>
 <label className='col-2 text-end'><ins>localStorage:</ins></label><input className="col-4" type="text" value={local} onChange={(e)=>{setlocal(e.target.value)}} />
 <div className='col-6'>{localStorage.setItem("local",local)}{localStorage.getItem("local")}</div>
 <label className='col-2 text-end'><ins >sessionStorage:</ins></label><input type="text" className="col-4" value={session} onChange={(e)=>{setsession(e.target.value)}} />
 <div className='col-6'>{sessionStorage.setItem("session",session)}{sessionStorage.getItem("session")}</div>
 <label className='col-2 text-end'><ins >cookies:</ins></label><input type="text" className="col-4" value={cookies} onChange={(e)=>{setcookies(e.target.value)}} />
 <div className='col-6'>{document.cookie}</div></div>


 {/*shallow copy,deepcopy*/}
 <div className='heading local'>shallow copy,deep copy</div>
 <label ><ins>shallow copy"(changes made reflected to both variable)":</ins></label>{` ${arraycopy}`}{`/ ${newarraycopy}`}<br/>
 <label ><ins>deep copy"(changes made reflected to applied variable only)":</ins></label>{" "+ deepcopy}{' /'+" "+ newdeepcopy}<br/>
 <label ><ins>deep copyone"(changes made reflected to applied variable only)":</ins></label>{" "+ deepcopy}{' /'+" "+ newdeepcopyone}<br/><br/>
{/*JSON parse,JSON stringify*/}
<div className='heading local'>JSON parse,JSON stringify</div>
<label ><ins>JSON stringify:</ins></label>{JSON.stringify(parseobj)}<br/>
<label ><ins>JSON parse(can't display js object fully):</ins></label>{` age: ${parseconvert.age}`}
<br/><br/>

{/*js methods*/}
<div className='heading local'>JS methods</div>
<label ><ins>foreach:</ins></label>{oneforeach +''}<br/>
<label ><ins>foreachtwo:</ins></label>{twoforeach+""}<br/>
<label ><ins>concat:</ins></label>{concattotal+''}<br/>
<label ><ins>copywithin(array.copyWithin(target, start, end)):</ins></label>{copywithin.copyWithin(2,0,2)+''}<br/>
<label ><ins>every(array.every(function(currentValue, index, arr), thisValue)):</ins></label>{everyvalue?"every value is true":"some value is false"}<br/>
<label ><ins>some:</ins></label>{somevalue?"some value is true":"some value is false"}<br/>
<label ><ins>fill(array.fill(value, start, end)):</ins></label>{fillarr+''}<br/>
<label ><ins>filter:</ins></label>{filterresult+''}<br/>
<label ><ins>find:</ins></label>{findresult}<br/>
<label ><ins>findindexone:</ins></label>{" "+findindexresultone}<br/>
<label ><ins>findindetwo:</ins></label>{" "+findindexresulttwo}<br/>
<label ><ins>from(string to array):</ins></label>{fromstringarr+''}<br/>
<label ><ins>toString(array to string):</ins></label>{typeof tostringtext}<br/>
<label ><ins>includes:</ins></label>{(includearr.includes("Apple"))?"includes value":"not includes value"}<br/>
<label ><ins>isArray:</ins></label>{(Array.isArray(isarrays))?"array":"not array"}<br/>
<label ><ins>join(array to string):</ins></label>{jointext}<br/>
<label ><ins>entries:</ins></label>{Entriesarr}<br/>
<label ><ins>keys:</ins></label>{keystext}<br/>
<label ><ins>values:</ins></label>{valuestext}<br/>
<label ><ins>lastIndexOf:</ins></label>{lastindex}<br/>
<label ><ins>length:</ins></label>{lengthone.length}<br/>
<label ><ins>lengthtwo:</ins></label>{lengthtwo.length}<br/>
<label ><ins>reduce:</ins></label>{reducetotal}<br/>
<label ><ins>reverse:</ins></label>{reversearr.reverse()+""}<br/>
<label ><ins>charAt:</ins></label>{charattext}<br/>
<label ><ins>toUpperCase:</ins></label>{touppercase.toUpperCase()}<br/>
<label ><ins>split(method splits a string into an array of substrings):</ins></label>{splitarr.split(",")}<br/>
<label ><ins>match:</ins></label>{matchtext.match("ain")}<br/>
<label ><ins>match(exact):</ins></label>{matchtext.match(/\brain\b/)?"true":"false"}<br/>
<label ><ins>repeat:</ins></label>{repeattext.repeat(3)}<br/>
<label ><ins>search(method returns the index (position) of the first match):</ins></label>{searchtext.search('blue')}<br/>
<label ><ins>trim:</ins></label>{trimtext.trim()}<br/>
<br/>
 
 {/*iteration*/}
<div className='heading local'>Iteration</div>
<label ><ins>convert object to array and using map:</ins></label>
{Object.values(iteration.arrayiteration).map((e,i)=>{return(<li key={i}>{e}</li>)})}
{Object.values(iteration.name).map((e)=>{return(e)})}<br/>
<label ><ins>object using list:</ins></label>
<li>{iteration.arrayiteration}</li><br/>
<label ><ins>array using foreach:</ins></label>
{foreacharr}<br/>
<label ><ins>array using map:</ins></label><br/>
{iterationarr.map((e)=>(<h6>{e}</h6>))}
<label ><ins>array using for loop(<b>self invoking function</b>):</ins></label><br/>
{(()=>{let posts=[];
for(let i=0;i<iteration.arrayiteration.length;i++){posts.push(iteration.arrayiteration[i])
}return posts;})()}<br/>
<label ><ins>json placeholder using map:</ins></label><br/>
{jsonplace.map((e)=>(<li key={jsonplace.id}>{e.address.geo.lat}</li>))}<br/>

{/*AND OR NOT */}
<div className='row'>
<div className='heading local'>AND OR NOT</div>
<label className='col-3'><ins>OR(cat or dog no display)</ins>:</label><input className='col-4' type="text" onChange={(e)=>{return(setanimalOR(e.target.value))}}/>
<div className='col-5' ><input onClick={or} type="submit" />
{showOR?animalOR:null}<br/></div>
<label className='col-3'><ins>AND(all display)</ins>:</label><input className='col-4'  type="text"  onChange={(e)=>{return(setanimalAND(e.target.value))}}/>
<div className='col-5' ><input onClick={and} type="submit" />
{showAND?animalAND:null}<br/></div>
<label className='col-3'><ins>NOT(cat and dog only display)</ins>:</label><input className='col-4'  type="text" onChange={(e)=>{return(setanimalNOT(e.target.value))}}/>
<div className='col-5'><input onClick={not} type="submit" />
{showNOT?animalNOT:null}</div>
</div><br/>

{/*this and new*/}
<div className='heading local'>this and new</div>
<label><ins>class this</ins>:</label>{<JSC/>}<br/>

{/*object display in view*/}
<div className='heading local'>Object displaying in view</div>
<label><ins>By name</ins>:</label>{object.one}<br/>
<label><ins>By name with key</ins>:</label>{object["one"]}<br/>
<label><ins>By loop in</ins>:</label>{obj}<br/>
<label><ins>By Object.values</ins>:</label>{Object.values(object)}<br/>
<label><ins>By JSON stringify</ins>:</label>{JSON.stringify(object)}<br/><br/>

{/*call backs,promises any curry*/}
<div className='heading local'>Call backs and promises</div>
<label><ins>Callback</ins>:</label><span id='callbac'></span><br/>
<label><ins>Promise</ins>:</label><span id='promise'></span><br/>
<label><ins>PromiseAll</ins>:</label><br/>
<label><ins>Curry</ins>:</label>{curry(2)(3)(4)}<br/>
<label><ins>Curryone</ins>:</label>{curryone(2)(3)(4)}<br/><br/>

 {/*call,apply,bind*/}
 <div className='heading local'>Call ,Apply,Bind</div>
 <label><ins>call</ins>:</label>{person.fullName.call(call1)}<br/>
 <label><ins>calltwo</ins>:</label>{personone.fullName.call(call2,"antony")}<br/>
 <label><ins>apply</ins>:</label>{personapply.fullName.apply(applys,["Cbe","India"])}<br/>
 <label><ins>bind</ins>:</label>{fullNames()}<br/>
 <label><ins>bindone</ins>:</label>{fullnamebind()}<br/><br/>

{/*Loader*/}
<div className='heading local'>Loader</div>
<div className='loader'></div>
<Spinner animation="border" role="status">
<span className="visually-hidden">Loading...</span>
</Spinner><br/><br/>

{/*Spread operator*/}
<div className='heading local'>Spread operator</div>
<label><ins>Spread operator:</ins>:</label>{arrayspreadoperator}
{/*Rest operator*/}
<div className='heading local'>Rest operator</div>
<label><ins>Rest operator:</ins>:</label>{one}<br/>
{two}<br/>
{three}<br/><br/>

{/*Closure,*/}
<div className='heading local'>Closure</div>
<label><ins>Closure:</ins></label>{objectinc.increment()}{objectinc.increment()}<br/>


</>
  )
}

export default JS