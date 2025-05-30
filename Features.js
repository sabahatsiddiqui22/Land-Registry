import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';

const Features = () => {
  return (
    <section className="features-section py-5 bg-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3 text-gradient">Key Features</h2>
          <p className="lead text-muted max-w-600 mx-auto">
            Revolutionizing land registry with blockchain technology
          </p>
        </div>

        {/* Features Grid */}
        <div className="row g-4">
          {featuresData.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="feature-card card h-100 border-0 shadow-sm overflow-hidden">
                <div className="card-body p-4 p-xl-5">
                  <div className="icon-wrapper mb-4">
                    <i className={`${feature.icon} feature-icon`}></i>
                  </div>
                  <h3 className="h5 fw-bold mb-3">{feature.title}</h3>
                  <p className="text-muted mb-0">{feature.description}</p>
                </div>
                <div className="feature-overlay"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const featuresData = [
  {
    title: 'Military-Grade Security',
    description: 'Blockchain encryption with SHA-256 ensures all records are tamper-proof and secure from unauthorized access or alterations.',
    icon: 'bi bi-shield-lock',
  },
  {
    title: 'Complete Transparency',
    description: 'Every transaction is immutably recorded on a distributed ledger, making the entire ownership history fully auditable and traceable.',
    icon: 'bi bi-eye',
  },
  {
    title: 'Smart Efficiency',
    description: 'Smart contracts automate processes like transfers and verifications, reducing paperwork and speeding up transactions by 90%.',
    icon: 'bi bi-lightning-charge',
  },
  {
    title: 'Global Accessibility',
    description: 'Access the registry anytime, anywhere through our decentralized network of nodes across multiple continents.',
    icon: 'bi bi-globe2',
  },
  {
    title: 'Fraud Prevention',
    description: 'Eliminate title fraud and duplicate claims with our cryptographic proof-of-ownership system.',
    icon: 'bi bi-clipboard2-check',
  },
  {
    title: 'Cost Reduction',
    description: 'Dramatically lower transaction costs by removing intermediaries and automating processes.',
    icon: 'bi bi-graph-down',
  },
];

export default Features;