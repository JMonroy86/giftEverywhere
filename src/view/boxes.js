import React from 'react';
import Carousel from '../components/carousel';
import Card from '../components/cards';
import Inside from '../components/insideBox';


let myvariable = 1;
const Boxes = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center pt-4">
                    <img src="../img/logo-redwine.png" className="img-fluid w-50" alt="" />
                </div>
              <div className="row pt-4">
                    <Inside />
                </div>
            </div>
        </>
    )
}
export default Boxes;