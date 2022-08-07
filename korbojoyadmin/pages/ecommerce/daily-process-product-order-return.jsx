import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { storeReturnProcessListOfProduct } from "../../atom/listOfPendingOrder";
import useScript from "../../commonFunction/ReloadJs";
const DailyProcessOrderReturn = (props) => {
  useScript("/assets/js/app.js");
  const getReturnProcessProductList = props.data;
  const [returnPendingOrder, updateReturnProcessOrder] = useRecoilState(storeReturnProcessListOfProduct);
  useEffect(() => {
    updateReturnProcessOrder(getReturnProcessProductList);
  }, [updateReturnProcessOrder]);

  const returnProcessOrders = useRecoilValue(storeReturnProcessListOfProduct);
  return (
    <div>
      <div className="row">
        <div className="col-md-12 m-b-30">
          <div className="d-block d-sm-flex flex-nowrap align-items-center">
            <div className="page-title mb-2 mb-sm-0">
              <h1>List of daily process product order return</h1>
            </div>
            <div className="ml-auto d-flex align-items-center">
              <nav>
                <ol className="breadcrumb p-0 m-b-0">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <i className="ti ti-home" />
                    </a>
                  </li>
                  <li className="breadcrumb-item">Tables</li>
                  <li className="breadcrumb-item active text-primary" aria-current="page">
                    List of daily pending product order return
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="card card-statistics">
            <div className="card-body">
              <div className="datatable-wrapper table-responsive">
                <table id="datatable" className="display compact table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Serial</th>
                      <th>Outlet/Agent information</th>
                      <th>User name</th>
                      <th>Invoice</th>
                      <th>Number</th>
                      <th>Address</th>
                      <th>Delivery Type</th>
                      <th>Delivery Address</th>
                      <th>Total product</th>
                      <th>Total qty</th>
                      <th>Total price</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {returnProcessOrders.map((item, index) => {
                      const agents = item.agents["0"];
                      const streetaddress = JSON.parse(item.deliveryDetails);
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <a href="javascript:void(0);" className="btn btn-block btn-outline-info" data-toggle="modal" data-target={`#loginModal${index}`}>
                              Information
                            </a>
                            <div className="modal fade" id={`loginModal${index}`} tabIndex="{-1}" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
                              <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title">Agent Details</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">×</span>
                                    </button>
                                  </div>
                                  <div className="modal-body">
                                    <div className="datatable-wrapper table-responsive">
                                      <table id="datatable" className="display compact table table-striped table-bordered">
                                        <tbody>
                                          <tr>
                                            <th>Agent Name</th>
                                            <td>{agents.name}</td>
                                          </tr>
                                          <tr>
                                            <th>Agent Phone Number</th>
                                            <td>{agents.number}</td>
                                          </tr>
                                          <tr>
                                            <th>Agent Email</th>
                                            <td>{agents.email}</td>
                                          </tr>
                                          <tr>
                                            <th>Agent Address</th>
                                            <td>{agents.officeAddress}</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>{item.memberDetails["0"].name}</td>
                          <Link href={`/ecommerce/userInvoiceReturn/${item.invoiceNumber}`}>
                            <td>
                              <a href="javascript:void(0);" className="btn btn-block btn-outline-info">
                                {item.invoiceNumber}
                              </a>
                            </td>
                          </Link>
                          <td>{item.memberDetails["0"].number}</td>
                          <td>{streetaddress.State}</td>
                          <td>{streetaddress.effectiveDelivery}</td>
                          <td>{streetaddress.streetaddress}</td>
                          <td>{item.totalProduct}</td>
                          <td>{item.totalQty}</td>
                          <td>{item.totalPrice}</td>
                          <td>
                            <a href="javascript:void(0)" className="btn btn-sm btn-outline-danger ml-2">
                              Process
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { data } = await axios.get(process.env.API_URL + "/GetAllReturnProcessOrderList");
  // console.log(data)
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default DailyProcessOrderReturn;
