import React from 'react';
function LeftSection({imageUrl,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className="conatiner p-5 ">
            <div className="row ">
                <div className="col-6 ">
                    <img src={imageUrl}></img>
                </div>
                <div className="col-6 p-5">
                    <div className='mt-2 p-5'>
                    <h2>{productName}</h2>
                    <p className='mt-3 text-muted'>{productDescription}</p>
                    </div>
                    <div className='p-3' style={{display:"flex",justifyContent:"space-evenly"}}>
                    <a href={tryDemo}>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    <a href={learnMore} style={{marginLeft:"50px"}}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div  style={{display:"flex",justifyContent:"space-evenly",}}>
                    <a href={googlePlay}><img src="media\images\googlePlayBadge.svg"/></a>
                    <a href={appStore}><img src="media\images\appstoreBadge.svg"/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;