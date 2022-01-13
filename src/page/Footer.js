import React from 'react';
import { SiFacebook, SiTwitter, SiLinkedin, SiGoogle, SiDribbble } from "react-icons/si";
const FooterPage = (props) => {

    return (
        <footer style={{ backgroundColor: "midnightblue", color:"white", position:"fixed", bottom:"0", left:"0", right:"0", paddingTop:"20px", padding:"20px"}}>
            <div class="container background-color">
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
                                    <i><SiFacebook /></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                                    <i><SiGoogle /></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                                    <i><SiTwitter /></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                                    <i><SiLinkedin /></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                                    <i><SiDribbble /></i>
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