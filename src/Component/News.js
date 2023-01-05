import React,{useState} from "react"
import { Link } from "react-router-dom";
import "./app.css"
import "./News.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import ReactPaginate from "react-paginate";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BsChevronLeft } from "react-icons/bs";
import {BsChevronRight} from "react-icons/bs";
import Collapse from 'react-bootstrap/Collapse';
import Image1 from "./Image/Image1.png";
import Image2 from "./Image/Image2.png";
import Image3 from "./Image/Image3.png";
import Image4 from "./Image/Image4.png";
import Image5 from "./Image/Image5.png";
import Image6 from "./Image/Image6.png";
import Image7 from "./Image/Goe.png";
import Image8 from "./Image/logo512.png";
import audio from "./Image/kathal_kathal.mp3";
import video from "./Image/videojungle.mp4";


function News() {
  const PreviousBtn = (props) => {
       const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <BsChevronLeft style={{ color: "black", fontSize: "30px" }} />
      </div>
    );
  };
  
    const [open, setOpen] = useState(false);

  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <BsChevronRight style={{ color: "black", fontSize: "30px" }} />
      </div>
    );
  };
  const data = [Image1,Image2,Image3,Image4,Image5,Image6];

   
const images= ["https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=",
"https://images.unsplash.com/photo-1612144431180-2d672779556c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c21hbGwlMjBzaXplfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
"https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
"https://images.unsplash.com/photo-1580644501213-a672803a1edd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
"https://images.unsplash.com/photo-1588971966933-7cac11fa87a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGwlMjBtYW58ZW58MHx8MHx8&w=1000&q=80",
"https://images.unsplash.com/photo-1584641401273-2dd63404dbb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHlvdSUyMGNhbiUyMGRvJTIwaXR8ZW58MHx8MHx8&w=1000&q=80",
"https://images.unsplash.com/photo-1593710876123-b497c553f7b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNoYWNrfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
"https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFybnN8ZW58MHx8MHx8&w=1000&q=80",
"https://images.unsplash.com/photo-1449480881392-716d0ea24a47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kb25lc2lhfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
"https://images.unsplash.com/photo-1442544213729-6a15f1611937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kb25lc2lhfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
"https://images.unsplash.com/photo-1538991383142-36c4edeaffde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZXxlbnwwfHwwfHw%3D&w=1000&q=80",
"https://images.unsplash.com/photo-1589726096666-8bb135284e21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
"https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80",
"https://images.unsplash.com/photo-1564088418107-05a97997c93b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJvbW5leXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
"https://images.unsplash.com/photo-1619461129861-d0c1479c48b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZGZpcmV8ZW58MHx8MHx8&w=1000&q=80",
"https://images.unsplash.com/photo-1566412920045-18159755f5f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8&w=1000&q=80",
"https://images.unsplash.com/photo-1551665782-d37d50ec517e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80",
"https://images.unsplash.com/photo-1598450779337-5a40252d75ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ymxvd3xlbnwwfHwwfHw%3D&w=1000&q=80",
"https://images.unsplash.com/photo-1582971103098-bfc707d2ad92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80",
"https://images.unsplash.com/photo-1588329945209-c390a0b06411?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmV3JTIwZGF3bnxlbnwwfHwwfHw%3D&w=1000&q=80","https://images.unsplash.com/photo-1449480881392-716d0ea24a47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kb25lc2lhfGVufDB8fDB8fA%3D%3D&w=1000&q=80"];
const itemsPerPage=3;
const [currentPage, setCurrentPage] = useState(1);
const maxPage = Math.ceil(images.length / itemsPerPage);
const handleClicked = (e)=>setCurrentPage(e.selected+1)

  function CurrentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    const slices=images.slice(begin,end);
   return ( <div>
   <img className="p-1" alt="one" src={slices[0]} width="33.3%" height="300px"/>
   <img className="p-1" alt="two" src={slices[1]} width="33.3%" height="300px"/>
   <img className="p-1" alt="three" src={slices[2]} width="33.3%" height="300px"/>
   </div>
   )

  };


  return (<div>
    <Carousel interval={3000} variant="dark" className="mycarousel" >
    <Carousel.Item> 
      <img
        height="400px" width="100%"
        src={Image7}
        alt="First slide"
      />
      <Carousel.Caption >
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        height="400px" width="100%"
        src={Image8}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        height="400px" width="100%"
        src={Image7}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        height="400px" width="100%"
        src={Image7}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Fourth slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        height="400px" width="100%"
        src={Image8}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Fifth slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        height="400px" width="100%"
        src={Image7}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Sixth slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        height="400px" width="100%"
        src={Image7}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Seventh slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        height="400px" width="100%"
        src={Image8}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Eighth slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        height="400px" width="100%"
        src={Image7}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Nineth slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>

  </Carousel>
  <hr/>
  {CurrentData()}<br/>
  <ReactPaginate 
  previousLabel='<'
  breakLabel="..."
  nextLabel=">"
  pageCount={maxPage}
  marginPagesDisplayed={2}
  pageRangeDisplayed={2}
  onPageChange={handleClicked}
  containerClassName="pagination justify-content-center"
  pageClassName="page-item"
  pageLinkClassName="page-link"
  previousClassName="page-item"
  previousLinkClassName="page-link"
  nextClassName="page-item"
  nextLinkClassName="page-link"
  breakClassName="page-item"
  breakLinkClassName="page-link"
  activeClassName="active"
  
  
  />
  <hr/>
  <Slider
        autoplaySpeed={2000}
        dots
        initialSlide={2}
        infinite
        slidesToShow= {3}
    slidesToScroll= {1}
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        customPaging={(i) => {
          return (
            <div>
              <img
                src={data[i]}
                alt=""
                style={{
                  width: "25px",
                  height: "25px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  position:"absolute",bottom:"-45px",marginRight:"40px"

                }}
              />
            </div>
          );
        }}
        dotsClass="slick-dots custom-indicator"
      >
        {data.map((item) => (
          <div>
            <img src={item} alt="" style={{ width: "100%", height: "40vh" }} />
          </div>
        ))}
      </Slider>
    <br/><br/><br/>
    <hr/>

    < div className="wide">
      <label className="align-top mt-3"><pre>1.Kathal_Kathal  </pre></label>
      <audio controls > 
      <source className="align-middle" src={audio} />
      </audio></div > 
      < div className="wide">
      <label className="align-top mt-3"><pre>2.Kathal_Kathal  </pre></label>
      <audio controls > 
      <source className="align-middle" src={audio} />
      </audio>      
      </div > 
      <div className="vheight">
      <label className="align-top mt-5 pt-5" ><pre>3.Jungle Animation      </pre></label>

      {/*video */}
      <video width="320" height="240" controls  className="videos">
      <source src={video} type="video/mp4"/>
      </video></div>

      <hr/>
      <label>Choose (png,pdf,doc max-1mb)</label>
      <input type="file" /><br/><br/><br/>
      
      <img src={Image7} alt="goe" width="100px" height="100px" />
      <Link to={Image7} target="_blank" download>Download Image</Link>
      <hr/><br/>

      <div class="card" style={{width:"400px"}}>
       <h2 class="card-header">Image Sun</h2> 
       <img class="card-img-top" src={Image7} alt="Card"/>
       <div class="card-body">
        <h4 class="card-title ">John Doe</h4>
        <p class="card-text text-left">Some example text.</p>
        <a href="https://www.google.com/" rel="noreferrer" class="btn btn-primary" target="_blank">Google</a>
        <button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        See more
      </button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
        </div>
        </div><br/>
      

    <>
      <button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </>
    <p><img className="star" src={Image7} height="100" width="100"  
alt="goe"/> 
 If we want to wrap the text around an image in Html document using Internal CSS then we have to follow the steps which are given below. Using these steps we can easily wrap a text.   
Step 1: Firstly, we have to type the Html code in any text editor or open the existing Html file in the text editor in which we want to wrap the text.   
Step 2: Now, we have to type the CSS code for aligning the image. So, we have to type the style tag in the head tag just after the title tag.   
Step 3: And, then we have to define the various properties for wrapping the text around the image. So, we have to define a class.   
If we want to wrap the text around an image in Html document using Internal CSS then we have to follow the steps which are given below. Using these steps we can easily wrap a text.   
Step 1: Firstly, we have to type the Html code in any text editor or open the existing Html file in the text editor in which we want to wrap the text.   
Step 2: Now, we have to type the CSS code for aligning the image. So, we have to type the style tag in the head tag just after the title tag.   
Step 3: And, then we have to define the various properties for wrapping the text around the image. So, we have to define a class.   
</p>  
 
  </div>  )
};


export default News;