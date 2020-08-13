import React from 'react';
import '../App.css';
import Navbar from './Navbar'
import TopNav from './TopNav'
import BoxTop from './BoxTop'
import BoxLeft from './BoxLeft'
import BoxRight from './BoxRight'
import Footer from './Footer'
import Table from './Table'

let data = [
    {id:1,text:'Products in Data Base',color:'primary' ,icon: 'clipboard-list', dat:'135'},
    {id:2,text:'Amount in products',color:'success' ,icon: 'dollar-sign', dat:'$546.456'},
    {id:3,text:'Users quantity',color:'warning' ,icon: 'user-check', dat:'38'}
]


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
                    
                    {data.map(dato => <BoxTop key={dato.id} data={dato} />)}
                        

                    </div>
                    <div className="row">
                        <BoxLeft/>
                        <BoxRight/>      
                    </div>
                    <Table/>
                </div>
                
            </div>
            
           <Footer/>
        </div>
  </div>
  )

}

  export default Struct;
