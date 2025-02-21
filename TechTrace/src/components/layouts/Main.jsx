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
              <div className="col-lg-8">
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

                  {/* <!-- Top Selling --> */}
                  <div className="col-12">
                    <div className="card top-selling overflow-auto">
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

                      <div className="card-body pb-0">
                        <h5 className="card-title">
                          Top Selling <span>| Today</span>
                        </h5>

                        <table className="table table-borderless">
                          <thead>
                            <tr>
                              <th scope="col">Preview</th>
                              <th scope="col">Product</th>
                              <th scope="col">Price</th>
                              <th scope="col">Sold</th>
                              <th scope="col">Revenue</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">
                                <a href="#">
                                  <img
                                    src="src/assets/img/product-1.jpg"
                                    alt=""
                                  />
                                </a>
                              </th>
                              <td>
                                <a href="#" className="text-primary fw-bold">
                                  Ut inventore ipsa voluptas nulla
                                </a>
                              </td>
                              <td>$64</td>
                              <td className="fw-bold">124</td>
                              <td>$5,828</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <a href="#">
                                  <img
                                    src="src/assets/img/product-2.jpg"
                                    alt=""
                                  />
                                </a>
                              </th>
                              <td>
                                <a href="#" className="text-primary fw-bold">
                                  Exercitationem similique doloremque
                                </a>
                              </td>
                              <td>$46</td>
                              <td className="fw-bold">98</td>
                              <td>$4,508</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <a href="#">
                                  <img
                                    src="src/assets/img/product-3.jpg"
                                    alt=""
                                  />
                                </a>
                              </th>
                              <td>
                                <a href="#" className="text-primary fw-bold">
                                  Doloribus nisi exercitationem
                                </a>
                              </td>
                              <td>$59</td>
                              <td className="fw-bold">74</td>
                              <td>$4,366</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <a href="#">
                                  <img
                                    src="src/assets/img/product-4.jpg"
                                    alt=""
                                  />
                                </a>
                              </th>
                              <td>
                                <a href="#" className="text-primary fw-bold">
                                  Officiis quaerat sint rerum error
                                </a>
                              </td>
                              <td>$32</td>
                              <td className="fw-bold">63</td>
                              <td>$2,016</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <a href="#">
                                  <img
                                    src="src/assets/img/product-5.jpg"
                                    alt=""
                                  />
                                </a>
                              </th>
                              <td>
                                <a href="#" className="text-primary fw-bold">
                                  Sit unde debitis delectus repellendus
                                </a>
                              </td>
                              <td>$79</td>
                              <td className="fw-bold">41</td>
                              <td>$3,239</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Top Selling --> */}
                </div>
              </div>
              {/* <!-- End Left side columns --> */}

              {/* <!-- Right side columns --> */}
              <div className="col-lg-4">
                <RecentActivity/>

                {/* <!-- News & Updates Traffic --> */}
                <div className="card">
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

                  <div className="card-body pb-0">
                    <h5 className="card-title">
                      News &amp; Updates <span>| Today</span>
                    </h5>

                    <div className="news">
                      <div className="post-item clearfix">
                        <img src="src/assets/img/news-1.jpg" alt="" />
                        <h4>
                          <a href="#">Nihil blanditiis at in nihil autem</a>
                        </h4>
                        <p>
                          Sit recusandae non aspernatur laboriosam. Quia enim
                          eligendi sed ut harum...
                        </p>
                      </div>

                      <div className="post-item clearfix">
                        <img src="src/assets/img/news-3.jpg" alt="" />
                        <h4>
                          <a href="#">
                            Id quia et et ut maxime similique occaecati ut
                          </a>
                        </h4>
                        <p>
                          Fugiat voluptas vero eaque accusantium eos.
                          Consequuntur sed ipsam et totam...
                        </p>
                      </div>

                      <div className="post-item clearfix">
                        <img src="src/assets/img/news-4.jpg" alt="" />
                        <h4>
                          <a href="#">Laborum corporis quo dara net para</a>
                        </h4>
                        <p>
                          Qui enim quia optio. Eligendi aut asperiores enim
                          repellendusvel rerum cuder...
                        </p>
                      </div>
                    </div>
                    {/* <!-- End sidebar recent posts--> */}
                  </div>
                </div>
                {/* <!-- End News & Updates --> */}
              </div>
              {/* <!-- End Right side columns --> */}
            </div>
          </section>
        </main>
        {/* <!-- End #main --> */}
    </>
  )
}

export default Main;