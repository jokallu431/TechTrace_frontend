import React from 'react'

const Footer = () => {
  return (
    <>
        {/* <!-- ======= Footer ======= --> */}
        <footer id="footer" className="footer">
          <div className="copyright">
            &copy; Copyright{` ${new Date().getFullYear()} `}
            <strong>
              <span>TechTrace</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            {/* <!-- All the links in the footer should remain intact. --> */}
            {/* <!-- You can delete the links only if you purchased the pro version. --> */}
            {/* <!-- Licensing information: https://bootstrapmade.com/license/ --> */}
            {/* <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ --> */}
            Designed by <a>Kallupurakal Joshua Francis.</a>
          </div>
        </footer>
        {/* <!-- End Footer --> */}
    </>
  )
}

export default Footer;