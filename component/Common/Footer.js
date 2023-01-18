import { Button, Col, Row, Container } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { FooterData } from '../../../utils/mockdata/data';
import Image from 'next/image';
// import Logo from '../../../public/assets/images/footerLogo.png';

const Footer = () => {
  const router = useRouter('');
  return (
    <div className="bg-light">
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-3 mb-3">
              <h5>MY ACCOUNT</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    My Account
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Account details
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Orders
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Downloads
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Wishlist
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <h5>Categories</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    iphone
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Macbook
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Airpods
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Apple Watch
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Ipad
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-3 mb-3">
              <h5>USEFUL LINKS</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Returns
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Term & Conditions
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Latest News{' '}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-3 ">
              <Image
                src="/logo.png"
                className="bg-light   img-fluid "
                alt=""
                width="200"
                height="100"
                // layout="responsive"
              />
              <div className="pb-3">
                <i className=" bi bi-geo-alt-fill" />
                Santinagar,Ktm
              </div>
              <div className="pb-3">
                <Link href="mailto:info@cdrskillassessment.com">
                  <i className="bi bi-envelope-fill" />
                  &nbsp; info@apple.com
                </Link>
              </div>
              <Link
                style={{ textDecoration: 'none', color: '#203546' }}
                href="https://api.whatsapp.com/send?phone=+61481615807"
              >
                <i className="bi bi-telephone-fill" />
                &nbsp; 5454545454554
              </Link>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-center py-4 my-1 border-top ">
            <div>
              All rights reserved | Copyright © {new Date().getFullYear()}{' '}
              <Link href="/">www.appleday.com</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
