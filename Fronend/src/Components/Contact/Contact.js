import React from "react";
import './Contact.css'

export default function Contact() {
  return (
    <div>


      <div className="top-banner d-flex">
        <div className="my-auto mx-auto ">
          <h3 className="big-txt">Contat Us</h3>
          <small className="text-secondary">Home / Contat Us</small>
        </div>
      </div>

      <div class="container my-5 py-5">
                <h1 class="text-center mb-5 wow fadeInUp" >Contact For Any Query</h1>
                <div class="row g-4">
                    <div class="col-12">
                        <div class="row gy-4">
                            <div class="col-md-4 wow fadeIn" >
                                <div class="d-flex align-items-center bg-contact rounded p-4">
                                    <div class="bg-white rounded-circle d-flex flex-shrink-0 align-items-center justify-content-center me-3" >
                                        <i class="fa fa-map-marker-alt p-2 text-primary"></i>
                                    </div>
                                    <span>#AkhaliyaGhat , Sylhet , Bangladesh</span>
                                </div>
                            </div>
                            <div class="col-md-4 wow fadeIn" >
                                <div class="d-flex align-items-center bg-contact rounded p-4">
                                    <div class="bg-white rounded-circle d-flex flex-shrink-0 align-items-center justify-content-center me-3" >
                                        <i class="fa fa-envelope-open text-primary p-2"></i>
                                    </div>
                                    <span>developer.securehub@gmail.com</span>
                                </div>
                            </div>
                            <div class="col-md-4 wow fadeIn" >
                                <div class="d-flex align-items-center bg-contact rounded p-4">
                                    <div class="bg-white rounded-circle d-flex flex-shrink-0 align-items-center justify-content-center me-3" >
                                        <i class="fa fa-phone-alt p-2 text-primary"></i>
                                    </div>
                                    <span>01791615539</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 wow fadeInUp py-5 my-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.43555238146!2d91.82972451517803!3d24.917228049116087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750556002144eab%3A0xe277e14dbca9f2ab!2sShahjalal%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sbd!4v1675490459364!5m2!1sen!2sbd"
                    className="w-100"
                    height="450"
                     style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div class="col-md-6 d-flex py-5 my-5">
                        <div class="wow fadeInUp my-auto" >
                            <p class="mb-4 fs-2 ">Get In Touch</p>
                            <form>
                                <div class="row g-3">
                                    <div class="col-md-6 my-3">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="name" placeholder="Your Name"/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6 my-3">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Your Email"/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="col-12 my-3">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject"/>
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div class="col-12 my-3">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave a message here" id="message" ></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn bg-contact w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>      
    </div>
  );
}
