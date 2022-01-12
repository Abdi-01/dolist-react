import React from 'react';
import {RiFacebookCircleFill} from 'react-icons'
const FooterPage = (props) => {

    return (
        <footer style={{backgroundColor:"gray", }}>
            <div  class="container background-color">
                <div class="row">

                    <div class="col-md-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Location</h4>
                        <p class="lead mb-0">Some Where in India<br />FDFFSC SDFS</p>
                    </div>

                    <div class="col-md-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Around the Web</h4>
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item">
                                <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                                <i class="bi bi-facebook"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                                <i class="bi bi-google"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                                <i class="bi bi-twitter"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                                <i class="bi bi-linkedin"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                                <i class="bi bi-dribbble"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-md-4">
                        <h4 class="text-uppercase mb-4">About</h4>
                        <p class="lead mb-0">This is a sample page created to demonstrate Converting Bootstrap Theme to WordPress
                            (<a href="http://5balloons.info">5balloons</a>)</p>
                    </div>

                </div>
            </div>
        </footer >

        

    )

}

export default FooterPage;