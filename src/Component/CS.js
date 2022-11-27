import React from 'react'
import './CS.css'
import image5 from "./Image/Image5.png";
import Untitled from "./Image/Untitled.png";
import 'bootstrap/dist/css/bootstrap.min.css';



const CS = () => {

  /*internal css */
  const heading = {
   
    fontSize:"20px"
  }
  return (
    <>
     {/*letter animation*/}
    <div className='heading'>Letter animation:</div>
    <div className="animatedletter">Animated letter</div><br/>


      {/*border box*/}
    <div className='heading'>CSS without border box:</div>
    <p className='css'>Height-300,padding-25,border-25,total-400px</p>
    <br/><div className='heading'>CSS with border box:</div>
    <div className='boxsizing'>Height-300,padding-25,border-25,total-300px</div>


    {/*center the text using flex */}
    <br/><div className='heading'>Center the text using flex:</div>
    <hr/>
    <p className="centerflex">center flex</p>
    <hr/>

    {/*center the text using grid */}
    <br/><div className='heading'>Center the text using grid:</div>
    <hr/>
    <p className="centergrid">center grid</p>
    <hr/>

     {/*center the text using line height */}
     <br/><div className='heading'>Center the text using line height:</div>
    <hr/>
    <p className="centerlineheight">line height</p>
    <hr/>

    {/*center the text using padding */}
    <br/><div className='heading'>Center the text using padding:</div>
    <hr/>
    <p className="centerpadding">Padding</p>
    <hr/>

    {/*center the text using position*/}
    <br/><div className='heading'>Center the text using position:</div>
    <hr/>
    <div className="centerposition">
    <p >Position</p></div>
    <hr/>
  
   {/*Center the multi text using flex*/}
   <br/><div className='heading'>Center the multi text using flex:</div>
   <hr/>
    <div className="centermulti-flex">
    <p >Position</p>
    <p >PositionOne</p></div>
    <hr/> 

     {/*Center the multi text using table and table-cell*/}
   <br/><div className='heading'>Center the multi text using table and table-cell:</div>
   <hr/>
    <div className="centermulti-table">
    <div className='middle'><p >Position</p>
    <p >PositionOne</p></div></div>
    <hr/> 

      {/*text align left middle right by float */}
   <br/><div className='heading'>text align left, middle, right by float:</div>
   <hr/>
   <div className='left-side'><div className='side'><p >Position</p>
    <p >PositionOne</p></div></div>
   <div className='right-side'><div className='side'><p >Position</p>
    <p >PositionOne</p></div></div>
    <hr className='clearfloat'/> 

        {/*text align left middle right by position */}
   <br/><div className='heading'>text align left, middle, right by position:</div>
   <hr/>
   <div className='position'>
   <div className='left-position'><div className='sidesposition'><p >Position</p>
    <p >PositionOne</p></div></div>
    <div className='middle-position'><div className='sidesposition'><p >Position</p>
    <p >PositionOne</p></div></div>
   <div className='right-position'><div className='sidesposition'><p >Position</p>
    <p >PositionOne</p></div></div></div>
    <hr/> 


        {/*grid */}
    <br/><div className='heading'>grid column:</div>
     <div className='parent'>
    <div className='child'>One</div>
    <div className='child'>Two</div>
    <div className='child'>Three</div>
    </div><br/>
    {/*grid-column */}
    <div className='parent'>
    <div className='childone'>One</div>
    <div className='childtwo'>Two</div>    
    </div><br/>
    {/*grid-row */}
    <div className='parentrow'>
    <div className='childonerow'>One</div>
    <div className='childtworow'>Two</div>    
    </div>

    {/*Three way to insert css*/}
    <br/><div className='heading'>Three ways to insert css</div>
    <div className='headings'>External css:</div>
    <div style={heading}>Internal css:</div>
    <div style={{color:'red',fontSize:'20px'}}>Inline css:</div>


    {/*descendent(space)*/}
    <br/><div className='heading'>Combinators</div>
    <div className='heading'>descendant selector (space):select all inside</div>
    <div className='space'>
    <h5>one</h5>
    <h5>two</h5>
    <h5>three</h5>
    </div><br/>

    {/*child(>)*/}   
    <div className='heading'>child selector ({'>'}):select all child inside</div>
    <div className='greater'>
    <h5>one</h5>
    <h5>two</h5>
    <section><h5>three</h5></section>
    </div><br/>

    {/*adjacent sibling(>)*/}   
    <div className='heading'>adjacent sibling selector ({'+'}):select directly after another specific element</div>
    <div className='plus'>
    <h5>one</h5></div>
    <h5>two</h5>
    <h5>three</h5><br/>
    
    {/*general sibling(>)*/}   
    <div className='heading'>general sibling selector ({'~'}):select all directly after another specific element</div>
    <div className='tilde'>
    <h5>one</h5></div>
    <h5>two</h5>
    <h5>three</h5><br/>
    
     {/*Navbar*/}
      {/*Navbar vertical*/}
     <div className='heading'>Navbar vertical</div>
     <ul className='verticalUl'>
  <li className='verticalLi'><a href="#home">Home</a></li>
  <li className='verticalLi'><a href="#news">News</a></li>
  <li className='verticalLi'><a href="#contact">Contact</a></li>
  <li className='verticalLi'><a href="#about">About</a></li>
</ul><br/>

{/*Navbar horizontal*/}
<div className='heading'>Navbar horizontal</div>
     <ul className='horizontalul'>
  <li className='horizontalLi'><a href="#home">Home</a></li>
  <li className='horizontalLi'><a href="#news">News</a></li>
  <li className='horizontalLi'><a href="#contact">Contact</a></li>
  <li className='horizontalLi' style={{float:'right'}}><a href="#about">About</a></li>
</ul><br/>

{/*width and maxwidth*/}
<div className='heading'>Width</div>
<div className='width'>Width</div><br/>
<div className='maxwidth'>max-Width</div>

{/*Link*/}
<div className='heading'>Link</div>
<a className='link' href="#link">Link</a><br/><br/>

{/*Block level element*/}
<div className='heading'>Block level element</div>
<div>Block div,h,p,form,header,footer,section -all have full width </div><br/>

{/*Inline element*/}
<div className='heading'>Inline element</div>
<div>span,a,img</div><br/>

{/*List*/}
<div className='heading'>List</div>
{/*square*/}
<ul className='aa'>
 <li className='bb'>One</li>
 <li className='bb'>Two</li>
 <li className='bb'>Three</li>
</ul>
{/*circle*/}
<ul className='aa'>
 <li className='cc'>One</li>
 <li className='cc'>Two</li>
 <li className='cc'>Three</li>
</ul>
{/*decimal*/}
<ul className='aa'>
 <li className='dd'>One</li>
 <li className='dd'>Two</li>
 <li className='dd'>Three</li>
</ul>
{/*lower-roman*/}
<ul className='aa'>
 <li className='ee'>One</li>
 <li className='ee'>Two</li>
 <li className='ee'>Three</li>
</ul>
{/*lower-alpha*/}
<ul className='aa'>
 <li className='ff'>One</li>
 <li className='ff'>Two</li>
 <li className='ff'>Three</li>
</ul>
{/*image list*/}
<ul className='aa'>
 <li className='gg'>One</li>
 <li className='gg'>Two</li>
 <li className='gg'>Three</li>
</ul>
{/*color the list*/}
<ul className='aa'>
 <li className='hh'>One</li>
 <li className='hh'>Two</li>
 <li className='hh'>Three</li>
</ul><br/>


{/*table*/}
<div className='heading clearfloat' >Table</div>
<table className='table'>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
  </tr>
  <tr>
    <td>Peter</td>
    <td>Griffin</td>
  </tr>
  <tr>
    <td>Lois</td>
    <td>Griffin</td>
  </tr>
</table>

{/*position*/}
<div className='heading ' >Position</div>
<div className='static'>static</div>
<div className='relative'>relative
<div className='absolute'>absolute</div></div><br/>

{/*counter*/}
<div className='heading counterbody' >Counter
<h5 className='counter'>one</h5>
<h5 className='counter'>two</h5>
<h5 className='counter'>three</h5>
<h5 className='counter'>four</h5>
</div><br/>

{/*Dropdown*/}
<div className='heading' >Dropdown</div>
<div class="dropdown">Hover me Dropdown
  <div class="dropdown-content">
    <p>Hello World one</p>
    <p>Hello World two</p>
    <p>Hello World three</p>
  </div>
</div><br/>

{/*Gradient*/}
<div className='heading' >Gradient</div>
<div className='gradient'></div><br/>

{/*Ellipsis*/}
<div className='heading' >Ellipsis</div>
<div class="ellipsis">This is some long text that will not fit in the box.</div>
<div class="multi-ellipsis">This is some long text that will not fit in the boxdddddddddddddddd ddddddddddddddddddddddddd dddddddddd dddddddddd ddddddd ddddddddddddddddddddd dddddd ddddddd dddddd ddddddddddddddddddd dddddddd dddddd ddddd ddddddddddddd dddd dddddd ddd ddddddd This is some long text that will not fit in the boxdddddddddddddddd ddddddddddddddddddddddddd dddddddddd dddddddddd ddddddd ddddddddddddddddddddd dddddd ddddddd dddddd ddddddddddddddddddd dddddddd dddddd ddddd ddddddddddddd dddd dddddd ddd ddddddd This is some long text that will not fit in the boxdddddddddddddddd ddddddddddddddddddddddddd dddddddddd dddddddddd ddddddd ddddddddddddddddddddd dddddd ddddddd dddddd ddddddddddddddddddd dddddddd dddddd ddddd ddddddddddddd dddd dddddd ddd ddddddd.</div><br/>

{/*Transform*/}
<div className='heading' >Transform</div>
<div className='translate'>Translate means move left or right</div>
<div className='rotate'>rotate</div>
<div className='scale'>scale</div>
<div className='skew'>skew</div><br/>

{/*Transition*/}
<div className='heading' >Transition</div>
<div className='transition'></div><br/>

{/*Object-fit*/}
{/*fill*/}
<div className='heading' >Object-fit</div>
<div classname="fillcontainer">
  <img src={Untitled} alt="fill" className='fill' width="50%" height="150px"/>
  <div class="fillname">
  <p>Fill with reponsive</p>
  </div>
</div><br/>
{/*cover with reponsive*/}
  <div classname="covercontainer">
  <img src={image5} alt="cover" className="img-fluid" width="700" height="50"/>
  <div class="covername">
  <p>Cover with responsive</p>
  </div>
</div><br/>



{/*Reorder element(pseudo)*/}
<div className='heading' >Pseudo order</div>
<div id="order">
<div id='one'>one</div>
<div id='two'>two</div>
<div id='three'>three</div>
 </div>

{/*media query*/}
<div className='heading clearfloat'>media query</div>
<div className='mediaquery'>Media query@600px</div>


     <br/><br/><div className='heading clearfloat' >Forms</div>
     <label>Password:</label><input type='password' placeholder='enter password' required/>
  
    </>)
}

export default CS