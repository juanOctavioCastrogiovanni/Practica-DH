import React from 'react';
import '../App.css';
import Navbar from './Navbar'
import TopNav from './TopNav'
import BoxTop from './BoxTop'
import BoxTopB from './BoxTopB'
import BoxTopC from './BoxTopC'
import BoxLeft from './BoxLeft'
import BoxRight from './BoxRight'
import Footer from './Footer'



function Struct() {
  return (
  <div id="wrapper">
    <Navbar />
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                 <TopNav />
				<div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
                    <div className="row"> 
                        <BoxTop/>
                        <BoxTopB/>
                        <BoxTopC/>
                    </div>
                    <div class="row">
                        <BoxLeft/>
                        <BoxRight/>      
                    </div>
                </div>
            </div>
           <Footer/>
        </div>
  </div>
  )

}

  export default Struct;
