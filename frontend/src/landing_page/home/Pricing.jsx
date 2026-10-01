import React from 'react';
function Pricing() {
    return ( 
       <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <h3>Unbeatable pricing</h3>
                <p className='text-muted mt-3'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href=''>See pricing <i class="fa-solid fa-arrow-right-long"></i></a>

            </div>
            <div className='col-6' >
                <div className='row ' >
                <div className='col ' style={{display:"flex"}} >
                <img src="media\images\pricing0.svg" height="35%"></img>
                <p className='text-muted small  '>Free account opening</p>
                </div>
                <div className='col' style={{display:"flex"}}>
                <img src="media\images\pricing0.svg" height="35%"></img>
                <p className='text-muted small'>Free equity delivery and direct mutual funds</p>
                </div>
                <div className='col'style={{display:"flex"}} >
                <img src="media\images\intradayTrades.svg" height="35%"></img>
                <p className='text-muted small'>Intraday and F&O</p>
                </div>
            </div>
            </div>
        </div>
       </div>
     );
}

export default Pricing;