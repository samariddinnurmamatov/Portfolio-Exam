import React, { Component } from "react";
import Slider from "react-slick";
import testemonialsImg1 from "../../assets/testimonials/testimonials-1.jpg";
import testemonialsImg2 from "../../assets/testimonials/testimonials-2.jpg";
import testemonialsImg3 from "../../assets/testimonials/testimonials-3.jpg";
import testemonialsImg4 from "../../assets/testimonials/testimonials-4.jpg";
import testemonialsImg5 from "../../assets/testimonials/testimonials-5.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div style={{ padding: "40px 45px", textAlign: "center" }} className="container">
        <h2>Testmonials</h2>
        <div style={{padding: "120px 0px"}}>
          <Slider {...settings}>
            <div className="test">
              <img className="testmon" src={testemonialsImg1} alt="" />
              <p>
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              </p>
              <div>
                <h3>Saul Goodman</h3>
                <h4 className="founder">Ceo & Founder</h4>
              </div><br />
            </div>
            <div className="test">
              <img className="testmon" src={testemonialsImg2} alt="" />
              <p>
                Export tempor illum tamen malis malis eram quae irure esse
                labore quem cillum quid cillum eram malis quorum velit fore eram
                velit sunt aliqua noster fugiat irure amet legam anim culpa.
              </p>
              <div>
                <h3>Sara Wilsson</h3>
                <h4 className="founder">Designer</h4>
              </div><br />
            </div>
            <div className="test">
              <img className="testmon" src={testemonialsImg3} alt="" />
              <p>
                Enim nisi quem export duis labore cillum quae magna enim sint
                quorum nulla quem veniam duis minim tempor labore quem eram duis
                noster aute amet eram fore quis sint minim.
              </p>
              <div>
                <h3>Jena Karlis</h3>
                <h4 className="founder">Store Owner</h4>
              </div><br />
            </div>
            <div className="test">
              <img className="testmon" src={testemonialsImg4} alt="" />
              <p>
                Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                multos export minim fugiat minim velit minim dolor enim duis
                veniam ipsum anim magna sunt elit fore quem dolore labore illum
                veniam.
              </p>
              <div>
                <h3>Matt Brandon</h3>
                <h4 className="founder">Freelancer</h4>
              </div><br />
            </div>
            <div className="test">
              <img className="testmon" src={testemonialsImg5} alt="" />
              <p>
                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                veniam tempor noster veniam enim culpa labore duis sunt culpa
                nulla illum cillum fugiat legam esse veniam culpa fore nisi
                cillum quid.
              </p>
              <div>
                <h3>John Larson</h3>
                <h4 className="founder">Entrepreneur</h4>
              </div><br />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
