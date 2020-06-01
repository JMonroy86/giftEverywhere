import React from 'react';

const Carousel = (props) => {
    console.log(props)
    let myclss="";
    return (
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade shadow-lg" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                {
                    props.img.map((img, i) => {
                        if(img === 3569){
                            myclss= "carousel-item active"
                        }
                        else{
                            myclss="carousel-item"
                        }
                        return (
                            <div key={i} className={myclss}>
                                <img src={props.storepath+img+".jpg"}  className="d-block w-100" alt="..." />
                            </div>
                        )
                    })
                }

            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}
export default Carousel;