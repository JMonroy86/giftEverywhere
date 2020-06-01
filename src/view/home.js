import React from 'react';
import Navbar from '../components/navbar';
import Carousel from '../components/carousel';
import Card from '../components/cards';
import Videomodal from '../components/video'


const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row justify-content-center pt-4">
                    <img src="../img/logo-redwine.png" width="400" alt="" />
                </div>
                <div className="row pt-4">
                    <Carousel storepath="../img/slider/" img={[3569, 3570, 3571]} />
                </div>
                <div className="row pt-4">
                    <Card storepath="../img/home-cards/" img={[{ "id": "3569", "name": "SPA Box" }, { "id": "3570", "name": "Birthday Box" }, { "id": "3571", "name": "Mother's Day Box" }]} />
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <h1 className="title">
                            Nos preocupamos por tu salud y la nuestra
                        </h1>
                    </div>
                    <div className="col-md-8 mt-4 py-4">
                        <div class="card bg-dark border-1 rounded text-white">
                            <img src="../img/home-cards/3571.jpg" class="card-img" alt="..." />
                            <Videomodal id="QYU8zydUqD8" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;