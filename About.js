import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';

const About = () => {
  return (
    <section className="about-section py-5 bg-light">
      <div className="container">
        {/* Header Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 fw-bold text-primary mb-3">About Land Registry</h2>
            <p className="text-muted">Transforming property ownership through blockchain technology</p>
            <div className="divider bg-primary mx-auto"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <div className="row align-items-center">
                  <div className="col-md-6 mb-4 mb-md-0">
                    <img 
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                      alt="Property ownership" 
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-md-6">
                    <h3 className="h4 mb-4">Secure Land Registry on the Blockchain</h3>
                    <p className="text-muted mb-4">
                      Our platform revolutionizes property ownership by creating immutable, transparent records on the blockchain. 
                      Eliminating fraud and reducing transaction costs, we're building the future of real estate documentation.
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        Tamper-proof property records
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        Instant verification of ownership
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        Reduced paperwork and bureaucracy
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        Global accessibility
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        
      </div>
    </section>
  );
};

export default About;