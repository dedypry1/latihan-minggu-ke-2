import React, { Component } from 'react';
import './style.css';

const Materi = (props) =>{
        return (
            <div className="wrraperapp">
                <div className="content">
                    <div className="gambarpaket">
                        <img src={props.img} className="imagesliderr" alt=""/>

                    </div>
                    <p className="des">{props.des}</p>
                    <p className="des">{props.harga} </p>
                </div>
            </div>
    )
}


export default Materi;