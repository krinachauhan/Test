import React from 'react'

  
export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 className="m-0 text-primary"><img src="/SAMS.png" alt="Icon" className="navbar-icon" style={{width: '350px',height: '70px'}}/></h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/" className="nav-item nav-link">Home</a>
                <a href="aboutus" className="nav-item nav-link">About us</a>
                <a href="service" className="nav-item nav-link">Services</a>
                <a href="gallery" className="nav-item nav-link">Gallery</a>
                <a href="contactus" className="nav-item nav-link">Contact</a>
            </div>
        </div>
    </nav>
    </>
  )
}
