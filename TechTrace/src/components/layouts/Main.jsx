import React from 'react'
import Cards from './Cards';
import RecentActivity from './RecentActivity';

const Main = () => {
  return (
    <>  
        {/* <!-- ======= Main Section ======= --> */}
        <main id="main" className="main">
          <div className="pagetitle">
            <h1>Dashboard</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </nav>
          </div>
          {/* <!-- End Page Title --> */}

          <section className="section dashboard">
            <div className="row">
              <div className="row">
                  <Cards/>  
              </div>
              {/* <!-- Left side columns --> */}
              <div className="col-lg-12">
                <div className="row">
                  {/* <!-- Recent Sales --> */}
                  <div className="col-12">
                    <div className="card recent-sales overflow-auto">
                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown">
                          <i className="bi bi-three-dots"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li>
                            <a className="dropdown-item" href="#">
                              Today
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              This Month
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              This Year
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">
                          Recent Sales <span>| Today</span>
                        </h5>

                        <table className="table table-borderless datatable">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Customer</th>
                              <th scope="col">Product</th>
                              <th scope="col">Price</th>
                              <th scope="col">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">
                                <a href="#">#2457</a>
                              </th>
                              <td>Brandon Jacob</td>
                              <td>
                                <a href="#" className="text-primary">
                                  At praesentium minu
                                </a>
                              </td>
                              <td>$64</td>
                              <td>
                                <span className="badge bg-success">
                                  Approved
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <a href="#">#2147</a>
                              </th>
                              <td>Bridie Kessler</td>
                              <td>
                                <a href="#" className="text-primary">
                                  Blanditiis dolor omnis similique
                                </a>
                              </td>
                              <td>$47</td>
                              <td>
                                <span className="badge bg-warning">
                                  Pending
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <a href="#">#2049</a>
                              </th>
                              <td>Ashleigh Langosh</td>
                              <td>
                                <a href="#" className="text-primary">
                                  At recusandae consectetur
                                </a>
                              </td>
                              <td>$147</td>
                              <td>
                                <span className="badge bg-success">
                                  Approved
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <a href="#">#2644</a>
                              </th>
                              <td>Angus Grady</td>
                              <td>
                                <a href="#" className="text-primar">
                                  Ut voluptatem id earum et
                                </a>
                              </td>
                              <td>$67</td>
                              <td>
                                <span className="badge bg-danger">
                                  Rejected
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <a href="#">#2644</a>
                              </th>
                              <td>Raheem Lehner</td>
                              <td>
                                <a href="#" className="text-primary">
                                  Sunt similique distinctio
                                </a>
                              </td>
                              <td>$165</td>
                              <td>
                                <span className="badge bg-success">
                                  Approved
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Recent Sales --> */}
                </div>
              </div>
              {/* <!-- End Left side columns --> */}

            </div>
          </section>
        </main>
        {/* <!-- End #main --> */}
    </>
  )
}

export default Main;