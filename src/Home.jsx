export const Home = () => {
    return (
        <div>
            {/* Hero Section with gradient background */}
            <div className="vh-100 d-flex align-items-center position-relative bg-primary bg-gradient">
                <div className="container text-center text-white">
                    <h1 className="display-1 fw-bold mb-4 animate__animated animate__fadeInDown">
                        Discover Innovation
                    </h1>
                    <p className="lead fw-bold mb-5 px-md-5 animate__animated animate__fadeInUp">
                        Welcome to a world of endless possibilities and cutting-edge solutions
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                        <button className="btn btn-light btn-lg px-5 shadow-lg animate__animated animate__bounceIn">
                            Get Started
                        </button>
                        <button className="btn btn-outline-light btn-lg px-5 animate__animated animate__bounceIn">
                            Learn More
                        </button>
                    </div>
                </div>
                {/* Decorative shape */}
                <div className="position-absolute bottom-0 start-0 w-100 overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ height: '60px' }}>
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff" />
                    </svg>
                </div>
            </div>

            {/* Stats Section */}
            <div className="container py-5">
                <div className="row g-4 text-center">
                    <div className="col-md-3">
                        <div className="border-start border-4 border-primary p-3">
                            <h2 className="display-4 fw-bold text-primary mb-0">100+</h2>
                            <p className="text-muted mb-0">Clients</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="border-start border-4 border-primary p-3">
                            <h2 className="display-4 fw-bold text-primary mb-0">50k</h2>
                            <p className="text-muted mb-0">Downloads</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="border-start border-4 border-primary p-3">
                            <h2 className="display-4 fw-bold text-primary mb-0">95%</h2>
                            <p className="text-muted mb-0">Satisfaction</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="border-start border-4 border-primary p-3">
                            <h2 className="display-4 fw-bold text-primary mb-0">24/7</h2>
                            <p className="text-muted mb-0">Support</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="container py-5">
                <h2 className="display-5 text-center mb-5">Why Choose Us</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-lg hover-scale">
                            <div className="card-body text-center p-5">
                                <div className="rounded-circle bg-primary bg-opacity-10 p-4 mb-4 mx-auto" style={{ width: 'fit-content' }}>
                                    <h3 className="display-6 text-primary mb-0">⚡</h3>
                                </div>
                                <h4 className="mb-3">Lightning Fast</h4>
                                <p className="text-muted">Experience blazing fast performance with our optimized platform.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-lg hover-scale">
                            <div className="card-body text-center p-5">
                                <div className="rounded-circle bg-primary bg-opacity-10 p-4 mb-4 mx-auto" style={{ width: 'fit-content' }}>
                                    <h3 className="display-6 text-primary mb-0">🛡️</h3>
                                </div>
                                <h4 className="mb-3">Secure</h4>
                                <p className="text-muted">Your data is protected with enterprise-grade security measures.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-lg hover-scale">
                            <div className="card-body text-center p-5">
                                <div className="rounded-circle bg-primary bg-opacity-10 p-4 mb-4 mx-auto" style={{ width: 'fit-content' }}>
                                    <h3 className="display-6 text-primary mb-0">💡</h3>
                                </div>
                                <h4 className="mb-3">Innovative</h4>
                                <p className="text-muted">Stay ahead with our cutting-edge features and updates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-dark text-white py-5 my-5">
                <div className="container py-4">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h2 className="display-6 mb-3">Ready to get started?</h2>
                            <p className="lead mb-0">Join thousands of satisfied customers today.</p>
                        </div>
                        <div className="col-md-4 text-md-end mt-4 mt-md-0">
                            <button className="btn btn-outline-light btn-lg px-5">Sign Up Now</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-light py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <h5 className="fw-bold mb-3">About Us</h5>
                            <p className="text-muted mb-0">We create innovative solutions for the modern world, helping businesses grow and succeed.</p>
                        </div>
                        <div className="col-md-2">
                            <h5 className="fw-bold mb-3">Quick Links</h5>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Home</a></li>
                                <li className="mb-2"><a href="#" className="text-decoration-none text-muted">About</a></li>
                                <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Services</a></li>
                                <li><a href="#" className="text-decoration-none text-muted">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h5 className="fw-bold mb-3">Resources</h5>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Blog</a></li>
                                <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Documentation</a></li>
                                <li><a href="#" className="text-decoration-none text-muted">Support</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5 className="fw-bold mb-3">Newsletter</h5>
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Enter your email" />
                                <button className="btn btn-primary">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <hr className="my-5" />
                    <div className="text-center text-muted">
                        <small>© 2025 Your Company. All rights reserved.</small>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;