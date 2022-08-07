import useScript from "../commonFunction/ReloadJs";

export default function Home() {
  useScript("/assets/js/app.js");
  return (
    <div>

      <div className="row">
        <div className="col-md-12 m-b-30">
          {/* begin page title */}
          <div className="d-block d-sm-flex flex-nowrap align-items-center">
            <div className="page-title mb-2 mb-sm-0">
              <h1>Ecommerce</h1>
            </div>
            <div className="ml-auto d-flex align-items-center">
              <nav>
                <ol className="breadcrumb p-0 m-b-0">
                  <li className="breadcrumb-item">
                    <a href="index.html"><i className="ti ti-home" /></a>
                  </li>
                  <li className="breadcrumb-item">
                    Dashboard
                  </li>
                  <li className="breadcrumb-item active text-primary" aria-current="page">Ecommerce</li>
                </ol>
              </nav>
            </div>
          </div>
          {/* end page title */}
        </div>
      </div>
      {/* end row */}
      {/* begin row */}
      <div className="row">
        <div className="col-xl-6 col-xxl-3">
          <div className="card card-statistics bg-gradient">
            <div className="card-header d-flex justify-content-between border-0 pb-0">
              <div className="card-heading">
                <h4 className="card-title text-white">Active Product</h4>
              </div>

            </div>
            <div className="card-body">
              <h2 className="text-white mb-0">$10,000</h2>
              <p className="text-white">Your payout will be processed on January 15, 2019</p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-3">
          <div className="card card-statistics bg-gradient">
            <div className="card-header d-flex justify-content-between border-0 pb-0">
              <div className="card-heading">
                <h4 className="card-title text-white">InActive Product</h4>
              </div>

            </div>
            <div className="card-body">
              <h2 className="text-white mb-0">$10,000</h2>
              <p className="text-white">Your payout will be processed on January 15, 2019</p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-3">
          <div className="card card-statistics bg-gradient">
            <div className="card-header d-flex justify-content-between border-0 pb-0">
              <div className="card-heading">
                <h4 className="card-title text-white">Total Product</h4>
              </div>

            </div>
            <div className="card-body">
              <h2 className="text-white mb-0">$10,000</h2>
              <p className="text-white">Your payout will be processed on January 15, 2019</p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-3">
          <div className="card card-statistics bg-gradient">
            <div className="card-header d-flex justify-content-between border-0 pb-0">
              <div className="card-heading">
                <h4 className="card-title text-white">Total Qty</h4>
              </div>

            </div>
            <div className="card-body">
              <h2 className="text-white mb-0">$10,000</h2>
              <p className="text-white">Your payout will be processed on January 15, 2019</p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-3">
          <div className="card card-statistics bg-gradient">
            <div className="card-header d-flex justify-content-between border-0 pb-0">
              <div className="card-heading">
                <h4 className="card-title text-white">Total Low Product  Qty</h4>
              </div>

            </div>
            <div className="card-body">
              <h2 className="text-white mb-0">$10,000</h2>
              <p className="text-white">Your payout will be processed on January 15, 2019</p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-3">
          <div className="card card-statistics bg-gradient">
            <div className="card-header d-flex justify-content-between border-0 pb-0">
              <div className="card-heading">
                <h4 className="card-title text-white">Pending Order</h4>
              </div>

            </div>
            <div className="card-body">
              <h2 className="text-white mb-0">$10,000</h2>
              <p className="text-white">Your payout will be processed on January 15, 2019</p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-3">
          <div className="card card-statistics bg-gradient">
            <div className="card-header d-flex justify-content-between border-0 pb-0">
              <div className="card-heading">
                <h4 className="card-title text-white">Success Order</h4>
              </div>

            </div>
            <div className="card-body">
              <h2 className="text-white mb-0">$10,000</h2>
              <p className="text-white">Your payout will be processed on January 15, 2019</p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-3">
          <div className="card card-statistics bg-gradient">
            <div className="card-header d-flex justify-content-between border-0 pb-0">
              <div className="card-heading">
                <h4 className="card-title text-white">Cancel Order</h4>
              </div>

            </div>
            <div className="card-body">
              <h2 className="text-white mb-0">$10,000</h2>
              <p className="text-white">Your payout will be processed on January 15, 2019</p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-3">
          <div className="card card-statistics bg-gradient">
            <div className="card-header d-flex justify-content-between border-0 pb-0">
              <div className="card-heading">
                <h4 className="card-title text-white">Return Order</h4>
              </div>

            </div>
            <div className="card-body">
              <h2 className="text-white mb-0">$10,000</h2>
              <p className="text-white">Your payout will be processed on January 15, 2019</p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-3">
          <div className="card card-statistics bg-gradient">
            <div className="card-header d-flex justify-content-between border-0 pb-0">
              <div className="card-heading">
                <h4 className="card-title text-white">Total Order</h4>
              </div>

            </div>
            <div className="card-body">
              <h2 className="text-white mb-0">$10,000</h2>
              <p className="text-white">Your payout will be processed on January 15, 2019</p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-3">
          <div className="card card-statistics bg-gradient">
            <div className="card-header d-flex justify-content-between border-0 pb-0">
              <div className="card-heading">
                <h4 className="card-title text-white">My Balance</h4>
              </div>

            </div>
            <div className="card-body">
              <h2 className="text-white mb-0">$10,000</h2>
              <p className="text-white">Your payout will be processed on January 15, 2019</p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-3">
          <div className="card card-statistics bg-gradient">
            <div className="card-header d-flex justify-content-between border-0 pb-0">
              <div className="card-heading">
                <h4 className="card-title text-white">Pending Balance</h4>
              </div>

            </div>
            <div className="card-body">
              <h2 className="text-white mb-0">$10,000</h2>
              <p className="text-white">Your payout will be processed on January 15, 2019</p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-3">
          <div className="card card-statistics bg-gradient">
            <div className="card-header d-flex justify-content-between border-0 pb-0">
              <div className="card-heading">
                <h4 className="card-title text-white">Success Balance</h4>
              </div>

            </div>
            <div className="card-body">
              <h2 className="text-white mb-0">$10,000</h2>
              <p className="text-white">Your payout will be processed on January 15, 2019</p>
            </div>
          </div>
        </div>


      </div>
      <div className="row">
        <div className="col-xxl-12 m-b-30">
          <div className="card card-statistics h-100 mb-0">
            <div className="card-header d-flex align-items-center justify-content-between">
              <div className="card-heading">
                <h4 className="card-title">Top selling products</h4>
              </div>
              <div className="dropdown">
                <a className="btn btn-xs" href="#!">Export <i className="zmdi zmdi-download pl-1" /> </a>
              </div>
            </div>
            <div className="card-body scrollbar scroll_dark pt-0" style={{ maxHeight: 350 }}>
              <div className="datatable-wrapper table-responsive">
                <table id="datatable" className="table table-borderless table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>In stock</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Cold Shoulder Bling Dress</td>
                      <td>$65.342</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>PlayStation 4 Pro 1TB Console</td>
                      <td>$47.655</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '36%' }} aria-valuenow={36} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Extra Fine Wool Jumpers</td>
                      <td>$56.479</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-danger-inverse">Canceled</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Long Sleeve Bow Top</td>
                      <td>$04.786</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Shine Stripe Long Sleeve Ruffle</td>
                      <td>$23.456</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Long Sleeve Micro Thermal Shirt</td>
                      <td>$65.598</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-info-inverse">info</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Standard Fit Bomber Sweater</td>
                      <td>$87.659</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '45%' }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-warning-inverse">Warning</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Standard Fit Crew T-Shirt</td>
                      <td>$32.466</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Standard Fit Short Sleeve V-Neck</td>
                      <td>$03.544</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Sanus Classic Small Full Motion Wall</td>
                      <td>$14.489</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>Jena Gaines</td>
                      <td>$78.654</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '47%' }} aria-valuenow={47} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>Quinn Flynn</td>
                      <td>$23.486</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '96%' }} aria-valuenow={96} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>Charde Marshall</td>
                      <td>$65.453</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '74%' }} aria-valuenow={74} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>Haley Kennedy</td>
                      <td>$78.645</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '62%' }} aria-valuenow={62} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>Tatyana Fitzpatrick</td>
                      <td>$65.342</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td>Michael Silva</td>
                      <td>$07.456</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '47%' }} aria-valuenow={47} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>17</td>
                      <td>Paul Byrd</td>
                      <td>$36.478</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '36%' }} aria-valuenow={36} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>18</td>
                      <td>Gloria Little</td>
                      <td>$84.798</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '47%' }} aria-valuenow={47} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>19</td>
                      <td>Bradley Greer</td>
                      <td>$12.356</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>Dai Rios</td>
                      <td>$45.655</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>21</td>
                      <td>Jenette Caldwell</td>
                      <td>$47.586</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '47%' }} aria-valuenow={47} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>22</td>
                      <td>Yuri Berry</td>
                      <td>$36.756</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '63%' }} aria-valuenow={63} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>23</td>
                      <td>Caesar Vance</td>
                      <td>$78.659</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '96%' }} aria-valuenow={96} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>24</td>
                      <td>Doris Wilder</td>
                      <td>$56.484</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '87%' }} aria-valuenow={87} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>25</td>
                      <td>Angelica Ramos</td>
                      <td>$36.796</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '98%' }} aria-valuenow={98} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>26</td>
                      <td>Gavin Joyce</td>
                      <td>$25.365</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '87%' }} aria-valuenow={87} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>27</td>
                      <td>Jennifer Chang</td>
                      <td>$78.489</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>28</td>
                      <td>Brenden Wagner</td>
                      <td>$35.987</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>29</td>
                      <td>Fiona Green</td>
                      <td>$78.464</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>30</td>
                      <td>Shou Itou</td>
                      <td>$61.444</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>31</td>
                      <td>Michelle House</td>
                      <td>$85.488</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '47%' }} aria-valuenow={47} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>32</td>
                      <td>Suki Burks</td>
                      <td>$89.463</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>33</td>
                      <td>Prescott Bartlett</td>
                      <td>$23.464</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '62%' }} aria-valuenow={62} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>34</td>
                      <td>Gavin Cortez</td>
                      <td>$12.254</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '45%' }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>35</td>
                      <td>Martena Mccray</td>
                      <td>$24.478</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '36%' }} aria-valuenow={36} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>36</td>
                      <td>Unity Butler</td>
                      <td>$36.478</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '45%' }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>37</td>
                      <td>Howard Hatfield</td>
                      <td>$48.654</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '96%' }} aria-valuenow={96} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>38</td>
                      <td>Hope Fuentes</td>
                      <td>$78.654</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '47%' }} aria-valuenow={47} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                    <tr>
                      <td>39</td>
                      <td>Vivian Harrell</td>
                      <td>$26.154</td>
                      <td>
                        <div className="progress my-3" style={{ height: 3 }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '56%' }} aria-valuenow={56} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </td>
                      <td><span className="badge badge-success-inverse">Active</span></td>
                      <td> <a className="mr-3" href="javascript:void(0);"><i className="fe fe-edit" /></a><a href="javascript:void(0);"><i className="fe fe-trash-2" /></a></td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>In stock</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* end row */}

      {/* end container-fluid */}
    </div>
  );
}
