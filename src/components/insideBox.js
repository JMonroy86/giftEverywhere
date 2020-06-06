import React from 'react';

const Inside = () => {
    let box = [
        {
            name: "Breakfast Box",
            inside: [
                "Sandwich with Ham & Cheese.",
                "Muffins (chocolate, blackberry or Lime).",
                "Frappuccino Coffee 9.5 FL OZ.",
                "Orange Juice (12 FL OZ) or Sparkling water (8.45 FL OZ).",
                "Plain or fruit yogurt. (5.3 OZ).",
                "Granola.",
                "Butter or Jam.",
            ],
            img: "../img/breakfast.jpg"
        },
        {
            name: "Beer Box",
            inside: [
                "Personalized Beer Mug.(4 Budweiser Beers or 4 Modelo Beers, Pretzels Jar, Peanuts Jar)",
                "Mini Babybel Cheeses.",
            ],
            img: "../img/beer.jpg"
        },
        {
            name: "Coffee Box",
            inside: [
                "Medium Dark Roast Coffee (12 OZ).",
                "Personalized Coffee Mug.",
                "Coffee Mate (8 FL OZ).",
                "Frapuccino (9.5 FL OZ) or Cold Brew Coffee (11 FL OZ).",
                "Assorted Cookies Jar.",
                "Chocolates.",
            ],
            img: "../img/coffee.jpg"
        },
        {
            name: "Spa Box",
            inside: [
                "Body sponge.",
                "A Candle.",
                "A Candle.Body Soap.",
                "Natural Bath Bombs.",
                "Face Towel.",
                "Peeling Foot Mask.",
                "A jar full of kisses chocolate.",
            ],
            img: "../img/spa.jpg"
        },
        {
            name: "Candy Box",
            inside: [
                "Dark or Milk chocolate Jar.",
                "Sweet or Sour Gummies Jar.",
                "Moka Ice Coffe or Frappuccino Coffe.",
                "Assorted Cookies.",
                "Marshmallows Jar.",
            ],
            img: "../img/candy.jpg"
        },
    ];
    return (


        box.map((box, i) => {
          
            return (
                <>
                    <div className="col-md-6 py-4">
                        <img src={box.img} className="img-fluid w-100 rounded" alt="" />
                    </div>
                    <div className="col-md-6 pt-2">
                        <h1 className="giftEverywhere title-red">{box.name}</h1>
                        <h2 className="text text-justify  title-red pt-3 h4">What comes inside the box?</h2>
                        <ul className="">
                            {
                                box.inside.map((item, i) => {
                                    return (
                                        <li key={i}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </>
            )
        })

    )
}
export default Inside;