import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useScript from "../../commonFunction/ReloadJs";

const RemainderProductPackageStockQty = (props) => {
  useScript("/assets/js/app.js");

  const MySwal = withReactContent(Swal);
  const getProductList = props.data;
  console.log(getProductList);
  const [product, updateProductInfo] = useState(getProductList);

  useEffect(() => {
    updateProductInfo(getProductList);
  }, [getProductList]);
  return (
    <div>
      <div className="row">
        <div className="col-md-12 m-b-30">
          <div className="d-block d-sm-flex flex-nowrap align-items-center">
            <div className="page-title mb-2 mb-sm-0">
              <h1>Remainder product package stock qty</h1>
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
                      <th>serial</th>
                      {/* <th>Category name</th>
                      <th>Sub category name</th>
                      <th>Brand name</th> */}
                      <th>Product name</th>
                      <th>Qty</th>
                      <th>Tp price</th>
                      <th>Buy price</th>
                      <th>Product type</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        {/* <td>Category name</td>
                      <td>Sub category name</td>
                      <td>Brand name</td> */}
                        <td>{item.name}</td>
                        <td>{item.productStockQties[0]["qty"]}</td>
                        <td>{item.realPrice}</td>
                        <td>{item.buyPrice}</td>
                        <td>{item.productType}</td>
                        <td>{item.status}</td>
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
  const { data } = await axios.get(process.env.API_URL + "/GetRemainderAdminProductPackStockQty");
  return {
    props: { data },
  };
}

export default RemainderProductPackageStockQty;
