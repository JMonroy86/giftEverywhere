import React from 'react';
import Navbar from '../components/navbar.js';
import Carousel from '../components/carousel';
import Card from '../components/cards';
import Videomodal from '../components/video'
import { Link } from 'react-router-dom';
import Footer from '../components/footer.js';


const Home = () => {
    return (
        <>
            
            <div className="container">
                <div className="row justify-content-center pt-4">
                    <img src="../img/logo-redwine.png" className="img-fluid w-50" alt="" />
                </div>
                <div className="row pt-4">
                    <Carousel storepath="../img/slider/" img={[3569, 3570, 3571]} />
                </div>
                <div className="row pt-5">
                    <div className="col-md-12">
                        <p className="title title-red text-center wellcome-title">It is always important to celebrate our loved ones</p>
                    </div>
                    <div className="col-md-12">
                        <p className="text title-red text-center wellcome-title">Do not let the distance prevent you from celebrating and spoiling someone special. <span className="giftEverywhere">Gifts Everywhere</span> has the best option for you.</p>
                    </div>
                </div>
                <div className="row pt-4">
                    <Card storepath="../img/home-cards/" img={[{ "id": "3569", "name": "SPA Box" }, { "id": "3570", "name": "Birthday Box" }, { "id": "3571", "name": "Mother's Day Box" }, { "id": "3572", "name": "Father's Day Box" }]} />
                </div>
                <div className="row pt-4">
                    <div className="col-md-6 pt-2">
                        <img src="../img/covid/3571.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6 pt-2">
                        <h1 className="title title-red ">
                        Covid -19 The health of our clients is the most important.
                        </h1>
                        <p className="text text-justify pt-3 h5">We know the moment we are going through worldwide. For this reason, we are taking the most 
                            important measures to protect the health of our clients, preparing our boxes with the greatest
                             care and making use of all the equipment recommended by the World Health Organization.</p>
                             {/* <Link className="pt-2" to="">Read more...</Link> */}
                    </div>
                </div>
                {/* <div className="row pt-2">
                    <div className="col-md-6 mt-4 py-4">
                        <h1 className="title">
                            Nos preocupamos por tu salud y la nuestra
                        </h1>
                    </div>
                    <div className="col-md-6 mt-4 py-4">
                        <div class="card bg-dark border-1 rounded text-white">
                            <img src="../img/home-cards/3571.jpg" class="card-img" alt="..." />
                            <Videomodal id="QYU8zydUqD8" />
                        </div>
                    </div>
                </div> */}
            </div>
            
        </>
    )
}
export default Home;