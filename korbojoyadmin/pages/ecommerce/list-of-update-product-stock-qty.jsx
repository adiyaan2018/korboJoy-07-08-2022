import axios from "axios";
import useScript from "../../commonFunction/ReloadJs";
const ListOfUpdateProductStockQty = (props) => {
  useScript("/assets/js/app.js");
  const getProductList = props.data;
  return (
    <div>
      <div className="row">
        <div className="col-md-12 m-b-30">
          <div className="d-block d-sm-flex flex-nowrap align-items-center">
            <div className="page-title mb-2 mb-sm-0">
              <h1>List of update product stock qty</h1>
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
                      <th>Product name</th>
                      <th>Qty</th>
                      <th>Tp price</th>
                      <th>Buy price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getProductList.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.qty}</td>
                        <td>{item.realPrice}</td>
                        <td>{item.buyPrice}</td>
                      </tr>
                    ))}
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
  const { data } = await axios.get(process.env.API_URL + "/GetProductForUpdateQty");
  return {
    props: { data },
  };
}

export default ListOfUpdateProductStockQty;
