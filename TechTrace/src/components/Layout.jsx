import React from 'react'

const Layout = () => {
  return (
    <>
         <div className={`app-container ${isSidebarOpen ? "toggle-sidebar" : ""}`}>
       {/*  <!-- ======= Header ======= --> */}
       <Header toggleSidebar={toggleSidebar}/>
        {/* <!-- ======= Sidebar ======= --> */}
        <Sidebar isOpen={isSidebarOpen} />
       {/* <!-- ======= Main Section ======= --> */}
        <Main />
        {/* <!-- End #main --> */}

        {/* <!-- ======= Footer ======= --> */}
        <Footer />
        {/* <!-- End Footer --> */}

        <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center active"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </div>
    </>
  )
}

export default Layout;