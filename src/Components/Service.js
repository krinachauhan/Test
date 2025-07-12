import React from 'react';

const Service = () => {
  const services = [
    "Gate Entery",
    "Bangali Mandap",
    "Trust Mandap",
    "Dom Mandap",
    "Ganpati Mandap",
    "Birthday Celebration",
    "Haldi Stage",
    "Dance Floor",
    "Stage Decoration",
    "Reception Stage",
    "Side Partition",
    "Florring",
    "Carpet",
    "Flower Work",
    "Fire Fighter",
    "Generator",
    "Dolly",
    "Chair with cover",
    "Round Table",
    "Steel Sofa",
    "Lather Sofa",
    // Add more services as needed
  ];

  return (
    <>
<div class="container-fluid bg-primary py-5 mb-5 page-header">
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-lg-10 text-center">
                    <h1 class="display-3 text-white animated slideInDown">Services</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><a class="text-white" href="/">Home</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Services</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <div className="service-page1">
      <h1 className="title1">Our Mandap Services</h1>
      <div className="service-list1">
        {services.map((service, index) => (
          <div key={index} className="service-item1">
            <h3>{service}</h3>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default Service;
