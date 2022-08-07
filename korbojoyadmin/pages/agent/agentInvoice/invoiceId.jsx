import axios from "axios";
import { useState } from "react";
import useScript from "../../../commonFunction/ReloadJs";

const InvoiceItem = (props) => {
  useScript("/assets/js/app.js");
  const AllProductInfo = props.data.orderInfo;
  const AllProductInfo1 = props.data.Info;
  const [showed, setShowed] = useState(false)
  console.log(AllProductInfo1);

  const ApproveOrder = async (invoice, agentid, status, table) => {
    const formData = { invoice: invoice, agentid: agentid, status: status, table: table };
    const response = await axios
      .post(process.env.API_URL + "/agentOrderApprove", formData)
      .then((item) => {
        //  MySwal.fire("Good job!", "successfully update", "success");
        setShowed(true)
      })
      .catch((error) => {
        // MySwal.fire("information not delete !", "Something Error Found.", "warning");
      });
  }
  return (
    <div className="container">
      <div style={{ background: "white", padding: "10px" }}>
        <div className="container">
          <div className="row invoice row-printable">
            <div className="col-md-10">
              {/* col-lg-12 start here */}
              <div className="panel panel-default plain" id="dash_0">
                {/* Start .panel */}
                <div className="panel-body p30">
                  <div className="row">
                    {/* Start .row */}
                    <div className="col-lg-6">
                      {/* col-lg-6 start here */}
                      <div className="invoice-logo">
                        <img width={100} src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Invoice logo" />
                      </div>
                    </div>
                    {/* col-lg-6 end here */}
                    <div className="col-lg-6">
                      {/* col-lg-6 start here */}
                      <div className="invoice-from">
                        {AllProductInfo1.map((pd, index) => {
                          return (
                            <ul className="list-unstyled text-right" key={index}>
                              <li>Company Name: {pd.agents[0].companyName}</li>
                            </ul>
                          );
                        })}
                      </div>
                    </div>

                    {/* col-lg-6 end here */}

                    <div className="col-lg-6 mt-5">
                      {/* col-lg-12 start here */}
                      <div className="invoice-details mt25">
                        <div className="well">
                          {AllProductInfo1.map((pd, index) => {
                            return (
                              <ul className="list-unstyled mb0" key={index}>
                                <li key={index}>
                                  <strong>Invoice</strong> {pd.invoiceNumber}
                                </li>
                                <li>
                                  <strong>Invoice Date:</strong> {pd.date}
                                </li>
                                <li>
                                  <strong>Due Date:</strong> Thursday, December 1th, 2015
                                </li>
                                <li>
                                  <strong>Status:</strong> <span className="label label-danger">{pd.status}</span>
                                </li>
                              </ul>
                            );
                          })}
                        </div>
                      </div>
                      {/* <div className="invoice-to mt25">
                        {AllProductInfo1.map((pd, index) => {
                          const streetaddress = JSON.parse(pd.deliveryDetails);
                          return (
                            <ul className="list-unstyled" key={index}>
                              <li>
                                <strong>Invoiced To</strong>
                              </li>
                              <li>Name: {streetaddress.name}</li>
                              <li>State: {streetaddress.State}</li>
                              <li>Streetaddress: {streetaddress.streetaddress}</li>
                              <li>Country: {streetaddress.country}</li>
                            </ul>
                          );
                        })}
                      </div> */}
                    </div>
                    <div className="col-lg-6 mt-5">
                      {/* col-lg-6 start here */}
                      <div className="invoice-from">
                        {AllProductInfo1.map((pd, index) => {
                          return (
                            <ul className="list-unstyled text-right" key={index}>
                              <li>Office Address: {pd.agents[0].officeAddress}</li>
                              <li>Permanent Address{pd.agents[0].permanentAddress}</li>
                              <li>Number: {pd.agents[0].number}</li>
                            </ul>
                          );
                        })}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="invoice-items">
                        <div className="table-responsive" style={{ overflow: "hidden", outline: "none" }} tabIndex={0}>
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th className="per70 text-center">Description</th>
                                <th className="per5 text-center">Qty</th>
                                <th className="per25 text-center">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              {AllProductInfo.map((pd, index) => {
                                return (
                                  <tr key={index}>
                                    <td className="text-center">{pd.name}</td>
                                    <td className="text-center">{pd.qty}</td>
                                    <td className="text-center">{pd.price}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                            <tfoot>
                              <tr>
                                <th colSpan={2} className="text-right">
                                  Sub Total:
                                </th>
                                {AllProductInfo1.map((pd, index) => {
                                  return (
                                    <th key={index} className="text-center">
                                      {pd.totalPrice}
                                    </th>
                                  );
                                })}
                              </tr>
                              <tr>
                                <th colSpan={2} className="text-right">
                                  Total:
                                </th>
                                {AllProductInfo1.map((pd, index) => {
                                  return (
                                    <th key={index} className="text-center">
                                      {pd.totalPrice}
                                    </th>
                                  );
                                })}
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                      {
                        AllProductInfo1[0].status==='pending'?
                        <div style={showed ? { display: "none", textAlign: "center" } : { display: "block", textAlign: "center" }}>
                        <a href="javascript:void(0);" className="btn btn-outline-success" style={{ marginRight: "10px" }} onClick={(e) => { ApproveOrder(AllProductInfo1[0].invoiceNumber, AllProductInfo1[0].agentId, "success", "agentorder"); setShowed(true) }}  >
                          Approve
                        </a>
                        <a href="javascript:void(0);" className="btn btn-outline-danger" onClick={(e) => { ApproveOrder(AllProductInfo1[0].invoiceNumber, AllProductInfo1[0].agentId, "cancel", "agentorder"), setShowed(true) }} >
                          Cancel
                        </a>
                      </div>:''
                      }
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const id = context.query.id
  const invoiceId = context.query.invoiceId
  const { data } = await axios.get(process.env.API_URL + "/AdminAgent/v1/AgentOrderInvoiceToCompany/" + id + "/" + invoiceId);
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default InvoiceItem;
