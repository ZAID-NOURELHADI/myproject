import React from "react";
import{ Link } from "react-router-dom";


export default function CollectCompanies(){
    
    return(
<div className="section margin" >
    <div className="col ">
    <p className="title profile-details-name">The Collect Companies Already Working Engitech</p>
            <p className="info ">We partner with companies of all sizes, from startups to enterprises, to create bespoke digital products that solve problems.</p>
    <Link to="/technologies"    >View More Partners </Link>
    </div>
    <div className="col">
            
<div ><img className="image3" src="./PNG/symfony-seeklogo.com.png" alt="INFLEXIT" width="80" height="80"></img>
             <img className="image4" src="./PNG/Image 5.png" alt="INFLEXIT" width="80" height="80"></img>
     </div>
     <div>
     <img className="image5" src="./PNG/react-seeklogo.com.png" alt="INFLEXIT" width="80" height="80"></img>
 
     </div>
     <div>
     <img className="image6" src="./PNG/Image 4.png" alt="INFLEXIT" width="60" height="80"></img>
             <img className="image7" src="./PNG/Groupe de masques 1.png" alt="INFLEXIT" width="120" height="80"></img>
     </div>
                                
             </div>
</div>
    )
}