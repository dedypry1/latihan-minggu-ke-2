
import React, {Component,Fragment} from 'react';

class Home extends Component{
    render(){
        return(
            <Fragment className="contenthome">


                
                <div className="container">
                    <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-interval="10000">
                                <img src={require('../../images/2410_996x500_styleupdate_men.jpg')} class="d-block w-100" />
                            </div>

                            <div class="carousel-item" data-interval="2000">
                                <img src={require('../../images/MAGAZINE_324x125_20180223.jpg')}  class="d-block w-100" />
                            </div>
                            <div class="carousel-item">
                                <img src={require('../../images/OUTLET_324x125_20180221.jpg')} class="d-block w-100" />
                            </div>

                        </div>

                            <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                    </div>
                
                    <div className="slidercontent">

                        <img className="d-block w-100" src={require('../../images/996x250_LPDESKTOP_NOWONZALORAKIDSFASHION.jpg')} />
                        <img className="img-fluid" src={require('../../images/996x40_SKINNYBANNER_HOMEPAGE_1111ZAP_BNI.jpg')} />
                    </div>
                    <div className="text-center session">
                    <img src={require('../../images/brand/137x83_vans_20170905rev.png')} className="rounded" alt=""/>
                    <img src={require('../../images/brand/137x83_vans_20170905rev.png')} className="rounded" alt=""/>
                    <img src={require('../../images/brand/adidas_local_logo_28oct.png')} className="rounded" alt=""/>
                    <img src={require('../../images/brand/r4_nike.jpg')} className="brand" alt=""/>
                    <img src={require('../../images/brand/137x83_vans_20170905rev.png')} className="rounded" alt=""/>
                    <img src={require('../../images/brand/137x83_vans_20170905rev.png')} className="rounded" alt=""/>
                    <img src={require('../../images/brand/137x83_vans_20170905rev.png')} className="rounded" alt=""/>
                    <img src={require('../../images/brand/adidas_local_logo_28oct.png')} className="rounded" alt=""/>
                    <img src={require('../../images/brand/r4_nike.jpg')} className="brand" alt=""/>
                    <img src={require('../../images/brand/137x83_vans_20170905rev.png')} className="rounded" alt=""/>
                    <img src={require('../../images/brand/r4_nike.jpg')} className="brand" alt=""/>
                    <img src={require('../../images/brand/137x83_vans_20170905rev.png')} className="rounded" alt=""/>
                   
                  <div className="session">
                        <h1>New This Week</h1>
                  </div>
                  <div className="text-center session">
                      <img className="img-thumbnail"width="300px" src={require('../../images/gallery/322x300_HOMEPAGE_ALLUNDER188K_WOMEN.jpg')}/>
                      <img className="img-thumbnail"width="300px" src={require('../../images/gallery/322x300_HOMEPAGE_CROSSBODYBAGS70OFF_WOMEN.jpg')}/>
                      <img className="img-thumbnail" width="300px" src={require('../../images/gallery/322x300_HOMEPAGE_KEMEJADIBAWAH249_MEN.jpg')}/>
                  </div>
                </div>
                </div>



              
            </Fragment>
        )
    }
}


export default Home;
