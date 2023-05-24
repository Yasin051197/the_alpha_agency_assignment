import React, { useEffect, useState } from 'react'
import "../Css/HomePage.css"
import banner from "../Assets/banner image copy.jpg"
import group from '../Assets/Group 218.jpg'
import GS_digit from "../Assets/GS_DIGITAL.jpg"
import Avery from "../Assets/Asset 3@4x-8@2x.jpg"
import MaskG2 from "../Assets/Mask Group 2@2x.jpg"
import MaskG1 from "../Assets/Mask Group 1@2x.jpg"
import GS_digit2 from "../Assets/GS_DIGITAL_AD_WALL_FILMS_INTERIOR_DESIGN_COLLECTION_Indoor_MPI8621_Removable.jpg"
import vector from "../Assets/Vector Smart Object@2x.jpg"
const HomePage = () => {
    const [wid,setwid]=useState(window.innerWidth)
    const currentsize=()=>{
      setwid(()=>window.innerWidth)
    }
    useEffect(()=>{
      window.addEventListener("resize",currentsize)
      return ()=>{
        window.removeEventListener("resize",currentsize)
      }
    },[])
  
    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          let formE=document.getElementById("form")
          if (scrollPosition > 50) {
            formE.style.animationName="slideUp"
            formE.style.animationDuration='1s'
            formE.style.top="20px"
          } else {
            formE.style.top="902px"
          }
        };
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div id="container">
            {wid>=901?<img id="banner" src={banner} alt={banner} />:<img id="banner" src={MaskG2} alt={MaskG2} />}
            {wid>=901?<img id="Avery" src={Avery} alt={Avery} />:<img id="Avery-replace" src={Avery} alt={Avery} />}
            {wid>=901?<p className="font-link">Take your graphics protection to the next level with DOL Max overlaminates</p>:<p className="font-link-replace">Take your graphics protection to the next level with DOL Max overlaminates</p>}
            {wid>=901?<p className="font-link-two">Pair with MPI 1105 wrapping film for ramped up protection</p>:<p className="font-link-two-replace">Pair with MPI 1105 wrapping film for ramped up protection</p>}
            {wid>=901?<div className="font-link-child">
              <div className="font-link-child_fist">
                <div className='circle'>
                  {/* <img src={one} alt={one} /> */}
                </div>
                <div className='circle_div'>Maximum Durability</div>
              </div>
              <div className="font-link-child_fist">
              <div className='circle'></div>
                <div className='circle_div'>Enhanced Appearance</div>
              </div>
              <div className="font-link-child_fist">
              <div className='circle'></div>
                <div className='circle_div'>High Gloss Finish</div>
              </div>
            </div>:<div className="font-link-child-replace">
              <div className="font-link-child_fist">
                <div className='circle'>
                  {/* <img src={one} alt={one} /> */}
                </div>
                <div className='circle_div'>Maximum Durability</div>
              </div>
              <div className="font-link-child_fist">
              <div className='circle'></div>
                <div className='circle_div'>Enhanced Appearance</div>
              </div>
              <div className="font-link-child_fist">
              <div className='circle'></div>
                <div className='circle_div'>High Gloss Finish</div>
              </div>
            </div>}
               <form id="form">
                <h3>Connect with us</h3>
                <p>for outstanding protective overlaminates</p>
               <div id="form_div">
                 <div >
                  <label  htmlFor='name'>First Name :</label>
                  <br />
                  <input type="text" name="name"/>
                  <br />
                 <label htmlFor='Email'>Email :</label>
                 <br />
                 <input type="text" />
                 <br />
                  <label htmlFor='Company'>Company :</label>
                 <br />
                 <input type="text" />
                 <br />
                 </div>
                
        
                 <div>
                 <label htmlFor='Last Name'>Last Name :</label>
                 <br />
                 <input type="text" />
                 <br />
                 <label htmlFor='Contact Number'>Contact Number :</label>
                 <br />
                 <input type="text" />
                 <br />
                 <label htmlFor='State'>State :</label>
                 <br />
                 <input type="text" />
                 <br />
                 </div>

               </div>
  
  
                 <label htmlFor='How would you describe yourself?'>How would you describe yourself?</label>
                 <br />
                 <input type="text" />
                 <br />
                 <label htmlFor='Preferred Distributor:'>Preferred Distributor:</label>
                 <br />
                 <input type="text" />
                 <br />
                 <label htmlFor='Additional Information:'>Additional Information:</label>
                 <br />
                 <input type="text" />
                 <br />
                 <input type="checkbox" />
                 <label htmlFor='checkbox'>I'd like to receive promotions, product information and service offers from Avery Dennison.</label>
                 <br />
                 <input style={{border:"1px solid #F26621",padding:"10px 20px",color: "#FFFFFF",borderRadius:"9px",background: "#F26621"}} type="submit" value="Submit >" />
               </form>
               {wid>=901?<img id="group" src={group} alt={group} />:<img id="group" src={MaskG1} alt={MaskG1} />}


               <div id="group_info">
                <h2 style={{marginLeft:"25px"}}>DOL Max Overlaminate Films</h2>
               <p style={{marginLeft:"25px"}}>Printed graphics deserve maximum protection, DOL Max is the solution.</p>
            
               <ul>
                <h3>Features & Benefits:</h3>
               <li>Premium vertical durability of up to 7 years and up to 2 years horizontal durability protection.</li>
               <li>The high gloss finish enhances the appearance of graphics and adds a special touch to help your graphics stand out.</li>
               <li>Our digital overlaminates can be used on a variety of substrates, including banners, vehicle graphics, outdoor signage, and more.</li>
               </ul>
               <br />
               <div style={{marginLeft:"20px"}} ><input style={{border:"1px solid #F26621",padding:"10px 30px",color: "#FFFFFF",borderRadius:"9px",background: "#F26621"}} type="submit" value="Inquire now  >" /></div>
               </div>


               {wid>=901?<div id="rect">
                <div id="gsdigit"><img  src={GS_digit} alt={GS_digit} /></div>
                <div id="whyus">
                  <div id="whyus_child">
                    <div>
                      
                    </div>
                    <div></div>
                  </div>
                </div>
                </div>:<div id="rect-replace">
                <div id="whyus"></div>
                <div id="gsdigit"><img  src={GS_digit2} alt={GS_digit2} /></div>
            </div>}
            <div id="footer">
              <div>
                <p id="Best_solution">Best solutions from</p>
              </div>
              <div>
                <p className="Dol">DOL Max Overlaminate Films</p>
                <p className="Dol">Why us</p>
                <p className="Dol">Enquire now</p>
              </div>
              <div className='desc'>
              Avery Dennison Overlaminate Avery Dennison Overlaminate Films Avery Dennison Digital Overlaminate Films Avery Dennison DOL Max
              </div>
              <div className='desc'>
              Overlaminate Overlaminate Films Digital Overlaminate Films
              </div>
            </div>
    </div>
  )
}

export default HomePage