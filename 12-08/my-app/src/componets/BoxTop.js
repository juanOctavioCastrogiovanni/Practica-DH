import React from 'react';

import '../App.css';


function BoxTop(props) {
    return (
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${props.data.color} shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> {props.data.text}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.data.dat}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas fa-${props.data.icon} fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
  }
  
  BoxTop.defaultProps = {
    text: 'N/A',
    color: 'black',
    icon: ''
    }
  
    export default BoxTop;
  