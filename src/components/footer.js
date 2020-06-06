import React from 'react';

const Footer = () => {
    return (
        <section className="footer mt-5 shadow-lg">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12">
                                <img src="../img/logo-white.png" className="img-fluid w-75" alt="" />
                            </div>
                            <div className="col-md-6 pt-5">
                                <ul className="list-unstyled">
                                    <li>
                                        <i class="fas fa-phone-volume text-white pt-2">
                                            <a className="pl-2 text-white title text-decoration-none" href="tel:+1234567">+1-1234567</a>
                                        </i>
                                    </li>
                                    <li>
                                        <i class="fas fa-map-marker-alt text-white pt-2">
                                            <a className="pl-2 text-white title text-decoration-none" href="http://">New York</a>
                                        </i>
                                    </li>
                                    <li>
                                        <i class="fab fa-whatsapp text-white pt-2">
                                            <a className="pl-2 text-white title text-decoration-none" href="tel:+1234567">+1-1234567</a>
                                        </i>
                                    </li>
                                    <li>
                                        <i class="fab fa-instagram text-white pt-2">
                                            <a className="pl-2 text-white title text-decoration-none" href="http://">@giftseverywhere</a>
                                        </i>
                                    </li>
                                </ul>




                            </div>
                            <div className="col-md-6"></div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-md-12">
                                <form>
                                    <div class="form-row">
                                        <div class="col pt-1">
                                            <label for="exampleFormControlInput1" className="text-white">Name</label>
                                            <input type="text" class="form-control text-white" placeholder="First name" />
                                        </div>
                                        <div class="col pt-1">
                                            <label for="exampleFormControlInput1" className="text-white">Last name</label>
                                            <input type="text" class="form-control text-white" placeholder="Last name" />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col pt-1">
                                            <label for="exampleFormControlInput1" className="text-white">Phone number</label>
                                            <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder="+1 123456789" />
                                        </div>
                                        <div class="col pt-1">
                                            <label for="exampleFormControlInput1" className="text-white">Email address</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                        </div>
                                    </div>
                                    <div class="form-group pt-1">
                                        <label for="exampleFormControlTextarea1" className="text-white">Example textarea</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer;