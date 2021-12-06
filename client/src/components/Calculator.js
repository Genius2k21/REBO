import React from 'react';

const Title = () => {
    return (
        // <div className="container">
        //     <h1 className="text-center" style={{paddingTop: "30%"}}>
        //         About
        //     </h1>

        // </div>
    
        <div className="container py-5">
           <div className="row text-center alignText">
               
             
               <div className="col-lg-5 col-xs-12">
                    <h1 className="about titleHeader">
                       Cost Calculator
                    </h1>
               </div>





               
               
            </div>

             <div className="row text-center alignText marginTop">
                        <div className="col-lg-5 col-xs-12">
                    <h2 className="about">
                       Feature coming soon!
                    </h2>
                    <img className="calculator" src="/calculatorImage.png" alt="Coming Soon Calculator"></img>
                    </div>
               </div>
        </div>
    )
}

export default Title;