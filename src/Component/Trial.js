import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import data from './data';





const Trial = () => {
  //search
 const [filter,setFilter]=useState("")
 const Search = (e)=>{setFilter(e.target.value)}
 let dataSearch=data.cardData.filter(item=>{
   return Object.keys(item).some(keys=>item[keys].toString().toLowerCase().includes(filter.toString().toLowerCase()))
 })


 //grouping
 let arrays =[{id:12,service:[45,50]},{id:5,service:[7,8,9]}]
 var result = arrays.find(obj => {
   return (obj.id === 12)
 }).service
 var resultone = arrays.find(obj => {
   return (obj.id ===5)
 }).service
 var results = arrays.find(obj => {
   return (obj.id === 12)
 }).id
 var resultss = arrays.find(obj => {
   return (obj.id === 5)
 }).id
 let groups={12:arrays.find((e)=>{return (e.id===12)}).service,5:arrays.find((e)=>{return (e.id===5)}).service}
 let resultthree={one:result,resultss:resultone}
 
 const groupByYear = arr => {
   const res = [];
   const map = [];
   arr.forEach(item => {
      const temp = {};
      if (!map[item.id]) {
         map[item.id] = [];
         temp[item.id] = map[item.id];
         res.push(temp);
      };
      map[item.id].push(item.service );
   });
   return res;}
   const groupBy = key => array =>
   array.reduce((objectsByKeyValue, obj) => {
     const value = obj[key];
     objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
     return objectsByKeyValue;
   }, {});
   const groupByBrand = groupBy('id');

   //lazyloading-load more
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(0);
  const postsPerPage = 3;
  let arrayForHoldingPosts = [];

  const loopWithSlice = (start, end) => {    
    const slicedPosts = data.cardData.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  };
  const handleShowMorePosts = () => {
    loopWithSlice(0, next + postsPerPage);
    setNext(next + postsPerPage);
  };

  //lazy loading-infinite scroll
  const [infiniteToShow, setinfiniteToShow] = useState([]);
  const [infinitecount, setinfinitecount] = useState(0);
  let arrayForHoldingPostsinfinite = [];

  
 

  useEffect(() => {     
    const handleScroll = event => {      
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setinfinitecount(infinitecount =>infinitecount+3);
        let infiniteposts=data.cardData.slice(0,infinitecount+3);
        arrayForHoldingPostsinfinite=[...arrayForHoldingPostsinfinite,...infiniteposts];
        setinfiniteToShow(arrayForHoldingPostsinfinite);
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [infinitecount]);
  
 

  return (

    <>
    <div id="scrollheight" >
   <input type="text" placeholder='Search...'value={filter} onChange={Search}/>
   <br/><br/>
   <section className='p-4 container'>
     <div className='row justify-content-center'>
  {dataSearch.map((item,index)=>{
  return(
    <Card style={{ width: '18rem' }} key={item.id}>
    <Card.Img variant="top" src={item.img} style={{ height: '15rem' }} />
    <Card.Body>
      <Card.Title >{item.title}</Card.Title>
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



{JSON.stringify(result)}
{JSON.stringify(resultone)}<br/>
{JSON.stringify(resultthree)}<br/>
{JSON.stringify(groupByYear(arrays), undefined, 4)}<br/>
{JSON.stringify(groupByBrand(arrays))}<br/><br/>

{/*lazy loading-load more*/}
<div className='heading' >Lazy loading-load more</div>
<div className='text-center'>
      {postsToShow.map((e)=>{return(<img src={e.img} alt="img of nature" width="400px" height="300px"/>)})}<br/><br/>
      <button onClick={handleShowMorePosts} disabled={next>=21}>Load more</button>
</div><br/>
{/*lazy loading-infinite scroll*/}
<div className='heading' >Lazy loading-infinite scroll</div>
<div className='text-center'>
      {infiniteToShow.map((e)=>{return(<img src={e.img} alt="img of nature" width="400px" height="300px"/>)})}<br/><br/>
      </div><br/>
 </div> 
</>
  )
}
export default Trial;
