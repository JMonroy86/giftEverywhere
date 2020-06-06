import React from 'react';

const Card = (props) => {
    console.log(props);

    return (
        props.img.map((img, i) => {
            return (
                <div className="col-md-3 col-sm-6">
                    <div class="card mb-3 gallery">
                        <img src={props.storepath + img.id + ".jpg"} class="card-img-top" alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title title">{img.name}</h5>
                        </div>
                    </div>
                </div>

            )
        })


    )
}
export default Card;