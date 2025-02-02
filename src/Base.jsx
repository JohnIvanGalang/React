export const Header = () => {
    return (
        <>
            <div className="container-fluid px-0">
                <nav className="navbar navbar-expand-lg bg-light shadow-sm sticky-top">
                    <div className="container">
                        <a className="navbar-brand text-dark fw-bold" href="#">
                            <i className="bi bi-hexagon-fill me-2"></i>
                            Exclr8
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item mx-2">
                                    <a className="nav-link text-dark active rounded bg-light-subtle" href="#">
                                        <i className="bi bi-house-door me-1"></i> Home
                                    </a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link text-dark rounded" href="#">
                                        <i className="bi bi-star me-1"></i> About Us
                                    </a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link text-dark rounded" href="#">
                                        <i className="bi bi-tag me-1"></i> FAQs
                                    </a>
                                </li>
                                {/* <li className="nav-item mx-2">
                                    <a className="btn btn-dark rounded" href="#">
                                        <i className="bi bi-person me-1"></i> Login
                                    </a>
                                </li> */}
                                <li className="nav-item mx-2">
                                    <a className="nav-link text-dark rounded" href="#">
                                        <i className="bi bi-chevron-right me-2"></i>Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export const Footer = () => {
    return (
        <>
            <footer className="bg-light py-5 mt-5">
                <small>
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6">
                                <h4 className="fw-bold mb-4 text-dark">
                                    <i className="bi bi-hexagon-fill me-2"></i>
                                    Exclr8
                                </h4>
                                <p className="text-secondary mb-4">Empowering innovation through cutting-edge solutions and exceptional service.</p>
                                <div className="d-flex gap-3">
                                    <a href="#" className="btn btn-outline-dark rounded-circle">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                    <a href="#" className="btn btn-outline-dark rounded-circle">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                    <a href="#" className="btn btn-outline-dark rounded-circle">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                    <a href="#" className="btn btn-outline-dark rounded-circle">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <h5 className="fw-bold mb-4 text-dark">Quick Links</h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <a href="#" className="text-decoration-none text-secondary">
                                            <i className="bi bi-chevron-right me-2"></i>About Us
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="text-decoration-none text-secondary">
                                            <i className="bi bi-chevron-right me-2"></i>Services
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="text-decoration-none text-secondary">
                                            <i className="bi bi-chevron-right me-2"></i>Blog
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="text-decoration-none text-secondary">
                                            <i className="bi bi-chevron-right me-2"></i>Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <h5 className="fw-bold mb-4 text-dark">Contact Us</h5>
                                <ul className="list-unstyled text-secondary">
                                    <li className="mb-3">
                                        <i className="bi bi-geo-alt me-2"></i>
                                        96 Techzone Tech City
                                    </li>
                                    <li className="mb-3">
                                        <i className="bi bi-envelope me-2"></i>
                                        we_exclr8@gmail.com
                                    </li>
                                    <li className="mb-3">
                                        <i className="bi bi-telephone me-2"></i>
                                        +63 994-676-5907
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start">
                                <p className="mb-md-0 text-secondary">&copy; 2024 Company Name. All rights reserved.</p>
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <a href="#" className="text-secondary text-decoration-none me-3">Privacy Policy</a>
                                <a href="#" className="text-secondary text-decoration-none">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </small>
            </footer>
        </>
    )
}