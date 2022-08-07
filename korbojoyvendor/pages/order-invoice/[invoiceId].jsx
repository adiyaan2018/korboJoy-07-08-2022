import axios from "axios";
import jwtDecode from "jwt-decode";
const invoiceItem = (props) => {
  // const product = props.getCatagoryWiseProductShow;

  const AllProductInfo = props.getCatagoryWiseProductShow1;
  console.log(AllProductInfo)

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
                        {AllProductInfo.map((pd, index) => {
                          return (
                            <ul className="list-unstyled text-right" key={index}>
                              <li>Company Name: </li>
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
                          {AllProductInfo.map((pd, index) => {
                            return (
                              <ul className="list-unstyled mb0" key={index}>
                                <li key={index}>
                                  <strong>Invoice</strong> {pd.invoiceNumber}
                                </li>
                                <li>
                                  <strong>Invoice Date:</strong> {pd.date}
                                </li>
                                <li>
                                  <strong>Approve Date:</strong> {pd.approveDate ? pd.approveDate : ""}
                                </li>

                                <li>
                                  <strong>Status:</strong> <span className="label label-danger">{pd.status}</span>
                                </li>
                              </ul>
                            );
                          })}
                        </div>
                      </div>

                    </div>
                    <div className="col-lg-6 mt-5">
                      {/* col-lg-6 start here */}
                      <div className="invoice-from">
                        {AllProductInfo.map((pd, index) => {
                          return (
                            <ul className="list-unstyled text-right" key={index}>
                              <li>Name: </li>
                              <li>Email:</li>
                              <li>Number: </li>
                              <li>Office Address:</li>
                            </ul>
                            // <ul className="list-unstyled text-right" key={index}>
                            //   <li>Name: {pd.agents[0].name}</li>
                            //   <li>Email: {pd.agents[0].email}</li>
                            //   <li>Number: {pd.agents[0].number}</li>
                            //   <li>Office Address: {pd.agents[0].officeAddress}</li>
                            // </ul>
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
                                <th className="per70 text-center">Name</th>
                                <th className="per70 text-center">Description</th>
                                <th className="per5 text-center">Qty</th>
                                <th className="per25 text-center">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              {AllProductInfo.map((pd, index) => {
                                return (
                                  <tr key={index}>
                                    {
                                      pd.products.map((item, index) => (
                                        <td className="text-center" key={index}>{item.name}</td>
                                      ))
                                    }
                                    {
                                      pd.products.map((item, index) => (
                                        <td className="text-center" key={index}>{item.fullDescription}</td>
                                      ))
                                    }
                                    <td className="text-center">{pd.qty}</td>
                                    <td className="text-center">{pd.price}</td>
                                  </tr>
                                );
                              })}

                              {/* <tr>
                              <td>Logo design</td>
                              <td className="text-center">1</td>
                              <td className="text-center">$200.00 USD</td>
                            </tr>
                            <tr>
                              <td>Backup - 1024MB Cloud 2.0 Server - elisium.dynamic.com</td>
                              <td className="text-center">12</td>
                              <td className="text-center">$12.00 USD</td>
                            </tr> */}
                            </tbody>
                            <tfoot>
                              <tr>
                                <th colSpan={2} className="text-right">
                                  Sub Total:
                                </th>
                                {AllProductInfo.map((pd, index) => {
                                  return (
                                    <th key={index} className="text-center">
                                      {pd.totalPrice}
                                    </th>
                                  );
                                })}
                              </tr>
                              {/* <tr>
                              <th colSpan={2} className="text-right">
                                20% VAT:
                              </th>
                              {AllProductInfo1.map((pd, index) => {
                                return (
                                  <th key={index} className="text-center">
                                    $47.40 USD
                                  </th>
                                );
                              })}
                            </tr> */}

                              {/* <tr>
                              <th colSpan={2} className="text-right">
                                Credit:
                              </th>
                              <th className="text-center">$00.00 USD</th>
                            </tr> */}
                              <tr>
                                <th colSpan={2} className="text-right">
                                  Total:
                                </th>
                                {AllProductInfo.map((pd, index) => {
                                  return (
                                    <th key={index} className="text-center">
                                      {pd.totalPrice}
                                    </th>
                                  );
                                })}
                              </tr>
                              {/* <tr>
                              <th colSpan={2} className="text-right">
                                Total:
                              </th>
                              
                              <th className="text-center">$284.4.40 USD</th>
                            </tr> */}
                            </tfoot>
                          </table>
                        </div>
                      </div>
                      {/* <div className="invoice-footer mt25">
                      <p className="text-center">
                        Generated on Monday, October 08th, 2015{" "}
                        <a href="#" className="btn btn-default ml15">
                          <i className="fa fa-print mr5" /> Print
                        </a>
                      </p>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="javascript:void(0);" className="btn btn-outline-success" style={{ marginRight: "10px" }}>
              Approve
            </a>
            <a href="javascript:void(0);" className="btn btn-outline-danger">
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const id = context.params.invoiceId;
  const token = context.req.cookies.token;
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);


  const { data: getCatagoryWiseProductShow1 } = await axios.get(process.env.API_URL + `/vendorPanel/v1/listOfVendorInvoice/${decodedToken.userId}/` + id);



  return {
    props: { getCatagoryWiseProductShow1 },
  };
}

export default invoiceItem;
