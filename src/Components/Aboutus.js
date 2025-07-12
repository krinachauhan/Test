import React from 'react'

export default function Aboutus() {
  return (
    <>


    <div class="container-fluid bg-primary py-5 mb-5 page-header">
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-lg-10 text-center">
                    <h1 class="display-3 text-white animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><a class="text-white" href="/">Home</a></li>
                            <li class="breadcrumb-item"><a class="text-white" href="/">Pages</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <div class="container-xxl py-5">
    <div class="container">
        <div class="row g-4">
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="service-item text-center pt-3">
                    <div class="p-4">
                        <i class="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                        <h5 class="mb-3">Best Mandap Decorations</h5>
                        <p>Experience the grandeur and opulence with our best mandap decorations, meticulously designed to create a mesmerizing atmosphere for your special occasions.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="service-item text-center pt-3">
                    <div class="p-4">
                        <i class="fa fa-3x fa-globe text-primary mb-4"></i>
                        <h5 class="mb-3">Normal Mandap Decorations</h5>
                        <p>Our normal mandap decorations offer an elegant and affordable option, perfect for creating a beautiful setting for your celebrations without compromising on quality.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                <div class="service-item text-center pt-3">
                    <div class="p-4">
                        <i class="fa fa-3x fa-lightbulb text-primary mb-4"></i>
                        <h5 class="mb-3">Stunning Lighting Decorations</h5>
                        <p>Elevate the ambiance of your event with our stunning lighting decorations, adding a touch of enchantment and creating a captivating visual experience.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                <div class="service-item text-center pt-3">
                    <div class="p-4">
                        <i class="fa fa-3x fa-heart text-primary mb-4"></i>
                        <h5 class="mb-3">Attention to Detail</h5>
                        <p>With a keen eye for detail, we ensure that every element of our decorations is meticulously crafted, reflecting our commitment to perfection and customer satisfaction.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
                    <div className="position-relative h-100">
                        <img className="img-fluid position-absolute w-100 h-100" src="/img/H6.JPG" alt="" style={{objectFit: 'cover'}}/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                    <h1 className="mb-4">Welcome to Shree Ambika Mandap Service</h1>
                    <p className="mb-4">Since 2003, we have been dedicated to providing exceptional event planning and venue decoration services. Our team is passionate about creating unforgettable moments for weddings, engagements, anniversaries, and more. With attention to detail and personalized service, we transform your vision into reality. From mandap decoration to stage design and floral arrangements, we go above and beyond to ensure a flawless execution. Trust us to deliver exceptional results and create cherished memories. Contact us today and experience the magic of Shree Ambika Mandap Service.</p>
                    <div className="row gy-2 gx-4 mb-4">
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                        </div>
                    </div>
                    <a className="btn btn-primary py-3 px-5 mt-2" href="/">Read More</a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
