
import './index.css'
const Index = () => {
    return (
        <>
            <div className="parent">

                {/* header start */}
                <div className="header">
                    <div className="logo"><img className="logoImg" src="./image/Logo.svg" alt=""/></div>
                    <div className="pages">
                        <span className="pagespan">About</span>
                        <span className="pagespan">Feature</span>
                        <span className="pagespan">Pricing</span>
                        <span className="pagespan">Testimonials</span>
                        <span className="pagespan">Help</span>
                    </div>
                    <div className="headerButton">
                        <span className="signIn">Sign In</span>
                        <button className="signUp_Button">Sign Up</button>
                    </div>
                </div>

                {/* header end */}

                {/* main heading */}
                <div className="heading">
                    <div className="headingText">
                        <span className="mainHeading">Want anything to be <br />  easy with LaslesVPN.</span><br />
                        <p className="subHeading">Provide a network for all your needs with ease and fun using LaslesVPN </p>
                        <p className="subHeading">discover interesting features from us.</p>

                        <button className="headingButton">Get Started</button>
                    </div>

                    <div className="headingPic"><img src="./image/Illustration 1.svg" alt=""/></div>

                </div>

                {/* counter */}
                <div className="userCount">
                    <div className="user">
                        <button className="roundButton">
                            <img src="./image/Group 1216.svg" alt="" />
                        </button>
                        <p className="groupCount">90+</p>
                        <p className="groupTitle">Users</p>
                    </div>
                    <div className="locationCount">
                        <button className="roundButton">
                            <img src="./image/Group 1215.svg" alt="" />
                        </button>
                        <p className="groupCount">30+</p>
                        <p className="groupTitle">Locations</p>
                    </div>
                    <div className="serverCount">
                        <button className="roundButton">
                            <img src="./image/Group 1217.svg" alt="" />
                        </button>
                        <p className="groupCount">50+</p>
                        <p className="groupTitle">Servers</p>
                    </div>
                </div>

                {/* middle heading */}
                <div className="heading">

                    <div className="headingPic"><img src="./image/Illustration 2.svg" alt=""/></div>

                    <div className="headingText">
                        <span className="mainHeading">We Provide Many <br />  Features You Can Use</span><br />
                        <p className="subHeading">You can explore the features that we provide with fun and </p>
                        <p className="subHeading">have their own functions each feature.</p>

                        <div className="GroupDiv">
                            <div className="GroupIconDiv"><span className="GroupIcon1120"><img src="./image/Group 1120.svg" alt="" /></span></div>
                            <div className="GrouptText">Powerfull online protection.</div>

                        </div>

                        <div className="GroupDiv">
                            <div className="GroupIconDiv"><span className="GroupIcon1120"><img src="./image/Group 1120.svg" alt=""/></span></div>
                            <div className="GrouptText">Internet without borders.</div>

                        </div>

                        <div className="GroupDiv">
                            <div className="GroupIconDiv"><span className="GroupIcon1120"><img src="./image/Group 1120.svg" alt=""/></span></div>
                            <div className="GrouptText">SuperCharged VPN</div>

                        </div>

                        <div className="GroupDiv">
                            <div className="GroupIconDiv"><span className="GroupIcon1120"><img src="./image/Group 1120.svg" alt="" /></span></div>
                            <div className="GrouptText">No Specific time limits.</div>

                        </div>

                    </div>

                </div>

                <div>
                    <h3>Choose Your Plan</h3>
                    <h6>Let's choose the package that is best for you and explore it happily and cheerfully.</h6>
                </div>

                {/* plan card     */}
                <div className="parentPlanDiv">
                    <div className="planDiv">
                        <div className="planLogo"><img src="./image/Free.svg" alt=""/></div>
                        <h5>Free Plan</h5>
                        <div className="planOffer">
                            <div className="GroupDiv">
                                <div className="planIconDiv"><span className="GroupIcon1120"><img src="./image/Group 1120.svg" alt="" /></span></div>
                                <div className="GrouptText"><span className="planText">Unlimited Bandwidth</span></div>
                            </div>

                            <div className="GroupDiv">
                                <div className="planIconDiv"><span className="GroupIcon1120"><img src="./image/Group 1120.svg" alt=""/></span></div>
                                <div className="GrouptText"><span className="planText">Encrypted Connection</span></div>
                            </div>

                            <div className="GroupDiv">
                                <div className="planIconDiv"><span className="GroupIcon1120"><img src="./image/Group 1120.svg" alt=""/></span></div>
                                <div className="GrouptText"><span className="planText">No Traffic Logs</span></div>
                            </div>

                            <div className="GroupDiv">
                                <div className="planIconDiv"><span className="GroupIcon1120"><img src="./image/Group 1120.svg" alt=""/></span></div>
                                <div className="GrouptText"><span className="planText">Work On All Devices</span></div>
                            </div>
                        </div>

                        <p className="planCharge">Free</p>
                        <button className="buyButton">Select</button>

                    </div>
                    <div className="planDiv">
                        <div className="planLogo"><img src="./image/Free.svg" alt="" /></div>
                        <h5>Standard Plan</h5>
                        <div className="planOffer">
                            <div className="GroupDiv">
                                <div className="planIconDiv"><span className="GroupIcon1120"><img src="./image/Group 1120.svg" alt=""/></span></div>
                                <div className="GrouptText"><span className="planText">Unlimited Bandwidth</span></div>
                            </div>

                            <div className="GroupDiv">
                                <div className="planIconDiv"><span className="GroupIcon1120"><img src="./image/Group 1120.svg" alt=""/></span></div>
                                <div className="GrouptText"><span className="planText">Encrypted Connection</span></div>
                            </div>

                            <div className="GroupDiv">
                                <div className="planIconDiv"><span className="GroupIcon1120"><img src="./image/Group 1120.svg" alt=""/></span></div>
                                <div className="GrouptText"><span className="planText">Yes Traffic Logs</span></div>
                            </div>

                            <div className="GroupDiv">
                                <div className="planIconDiv"><span className="GroupIcon1120"><img src="./image/Group 1120.svg" alt=""/></span></div>
                                <div className="GrouptText"><span className="planText">Work On All Devices</span></div>
                            </div>

                            <div className="GroupDiv">
                                <div className="planIconDiv"><span className="GroupIcon1120"><img src="./image/Group 1120.svg" alt=""/></span></div>
                                <div className="GrouptText"><span className="planText">Connect Anywhere</span></div>
                            </div>
                        </div>

                        <p className="planCharge">$9 / mo</p>
                        <button className="buyButton">Select</button>

                    </div>
                    <div className="planDiv">
                        <div className="planLogo"><img src="./image/Free.svg" alt=""/></div>
                        <h5>Premium Plan</h5>
                        <div className="planOffer">
                            <div className="GroupDiv">
                                <div className="planIconDiv"><span className="GroupIcon1120"><img src="./image/Group 1120.svg" alt=""/></span></div>
                                <div className="GrouptText"><span className="planText">Unlimited Bandwidth</span></div>
                            </div>

                            <div className="GroupDiv">
                                <div className="planIconDiv"><span className="GroupIcon1120"><img src="./image/Group 1120.svg" alt=""/></span></div>
                                <div className="GrouptText"><span className="planText">Encrypted Connection</span></div>
                            </div>

                            <div className="GroupDiv">
                                <div className="planIconDiv"><span className="GroupIcon1120"><img src="./image/Group 1120.svg" alt=""/></span></div>
                                <div className="GrouptText"><span className="planText">Yes Traffic Logs</span></div>
                            </div>

                            <div className="GroupDiv">
                                <div className="planIconDiv"><span className="GroupIcon1120"><img src="./image/Group 1120.svg" alt=""/></span></div>
                                <div className="GrouptText"><span className="planText">Work On All Devices</span></div>
                            </div>

                            <div className="GroupDiv">
                                <div className="planIconDiv"><span className="GroupIcon1120"><img src="./image/Group 1120.svg" alt=""/></span></div>
                                <div className="GrouptText"><span className="planText">Connect Anywhere</span></div>
                            </div>
                            <div className="GroupDiv">
                                <div className="planIconDiv"><span className="GroupIcon1120"><img src="./image/Group 1120.svg" alt=""/></span></div>
                                <div className="GrouptText"><span className="planText">Get New Feature</span></div>
                            </div>
                        </div>
                        <p className="planCharge">$12 / mo</p>
                        <button className="buyPremiumButton ">Select</button>
                    </div>

                </div>
                {/* subHeading */}
                <h3>Huge Global Network</h3><h3> of Fast VPN</h3>
                <h6>See LaslesVPN everywhere to make it easier for you when you move</h6><h6>locations </h6>

                <div>
                    <img src="./image/Huge Global.svg" alt=""/>
                </div>

                <div className="socialIcon">
                    <div className="socialIconDiv"><img src="./image/Mask Group.svg" alt=""/></div>
                    <div className="socialIconDiv"><img src="./image/Mask Group (1).svg" alt=""/></div>
                    <div className="socialIconDiv"><img src="./image/Mask Group (2).svg" alt=""/></div>
                    <div className="socialIconDiv"><img src="./image/Mask Group (3).svg" alt=""/></div>
                    <div className="socialIconDiv"><img src="./image/Mask Group (4).svg" alt=""/></div>

                </div>

                <h3>Trusted by Thousands of </h3><h3> Happy Customer</h3>
                <h6>These are the stories of our customers who have joined us with great </h6><h6>pleasure when using this crazy feature. </h6>
                <div className="cardParent">
                    <div className="card">
                        <div className="cardHeader">
                            <div className="avtardiv">
                                <img className="imgRatio" src="./image/Ellipse 175.png" alt=""/>
                            </div>
                            <div className="avtarnamediv">
                                <span>Viezh Robert</span><br /><span>Warsaw, Poland</span>
                            </div>
                            <div className="avtarratingdiv">
                                <span>4.5</span>
                                <img src="./image/star.png" alt=""/>
                            </div>
                        </div>
                        <div>
                            <p className="planText1">“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
                        </div>
                    </div>


                    <div className="card">
                        <div className="cardHeader">
                            <div className="avtardiv">
                                <img className="imgRatio" src="./image/Ellipse 175 (1).png" alt=""/>
                            </div>
                            <div className="avtarnamediv">
                                <span>Yessica Christy</span><br /><span>Shanxi, China</span>
                            </div>
                            <div className="avtarratingdiv">
                                <span>4.5</span>
                                <img src="./image/star.png" alt=""/>
                            </div>
                        </div>
                        <div>
                            <p className="planText1">“I like it because I like to travel far and still can connect with high speed.”</p>
                        </div>
                    </div>


                    <div className="card">
                        <div className="cardHeader">
                            <div className="avtardiv">
                                <img className="imgRatio" src="./image/Ellipse 175 (2).png" alt=""/>
                            </div>
                            <div className="avtarnamediv">
                                <span>Kim Young Jou</span><br /><span>Seoul, South Korea</span>
                            </div>
                            <div className="avtarratingdiv">
                                <span>4.5</span>
                                <img src="./image/star.png" alt=""/>
                            </div>
                        </div>
                        <div>
                            <p className="planText1">“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>
                        </div>
                    </div>

                </div>

                {/* Slider panel */}
                <div className="sliderParent">
                    <div className="sliderBar">
                        <button className="sliderCurrent"></button>
                        <button className="sliderPage"></button>
                        <button className="sliderPage"></button>
                        <button className="sliderPage"></button>
                    </div>

                    <div className="sliderButton">
                        <button className="sliderButtonIcon">
                            <i class="fa-solid fa-arrow-left-long"></i>
                        </button>
                        <button className="sliderButtonIconRight">
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>

                {/* subscribe panel */}

                <div className="subscibeDiv">
                    <div className="subscribeText">
                        <h3>Subscribe Now for </h3><h3> Get Special Features</h3>
                        <h6>Let's subscribe with us and find the fun.</h6>
                    </div>
                    <div className="subscribeButtonDiv">
                        <button className="subscribeButton">Get Started</button>
                    </div>
                </div>

                {/* footer panel */}
                <div className="footerPanel">
                    {/* leftPanel */}
                    <div className="leftPanel">
                        <div className="logo"><img className="logoImg" src="./image/Logo.svg" alt=""/></div>
                        <p className="planText1">LaslesVPN is a private virtual network that has unique features and has high security.</p>
                        <div className="leftPanelIconDiv">
                            <img className="leftPanelIcon" src="./image/Facebook.svg" alt=""/>
                            <img className="leftPanelIcon" src="./image/Twitter.svg" alt=""/>
                            <img className="leftPanelIcon" src="./image/Instagram.svg" alt=""/>
                        </div>
                        <p className="planText1">©2020LaslesVPN</p>
                    </div>

                    {/* middle panel1 */}
                    <div className="middlePanel">
                        <div><span>Product</span></div>
                        <h6>Download</h6>
                        <h6>Pricing</h6>
                        <h6>Locations</h6>
                        <h6>Server</h6>
                        <h6>Countries</h6>
                        <h6>Blog</h6>
                    </div>

                    {/* middle panel2 */}
                    <div className="middlePanel">
                        <div><span>Engage</span></div>
                        <h6>LaslesVPN?</h6>
                        <h6>FAQ</h6>
                        <h6>Tutorials</h6>
                        <h6>About Us</h6>
                        <h6>Privacy Policy</h6>
                        <h6>Term Of Service</h6>
                    </div>

                    {/* middle panel3 */}
                    <div className="middlePanel">
                        <div><span>Earn Money</span></div>
                        <h6>Affilate?</h6>
                        <h6>Become Partner</h6>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;