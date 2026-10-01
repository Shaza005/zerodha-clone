import React from 'react';

function RightSection({imageUrl,productName,productDescription,learnMore}) {
    return ( 
        <div className="container p-5">
            <div className="row ">
                <div className="col-6 p-5">
                    <div className='mt-2 p-5'>
                    <h2>{productName}</h2>
                    <p className='mt-3 text-muted'>{productDescription}</p>
                    <a href={learnMore}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                <div className="col-6 ">
                    <img src={imageUrl}></img>
                </div>
            </div>
        </div>
     );
}

export default RightSection;