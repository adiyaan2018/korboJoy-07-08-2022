import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ActiveInactive from "../../commonFunction/activeInactiveHandler";
import deleteInformation from "../../commonFunction/deleteInformation";
import useScript from "../../commonFunction/ReloadJs";

const ListOfProductFlashSales = (props) => {
  useScript("/assets/js/app.js");
  const MySwal = withReactContent(Swal);
  const getProductFlashList = props.data;
  const [product, updateProductInfo] = useState(getProductFlashList);

  useEffect(() => {
    updateProductInfo(getProductFlashList);
  }, [getProductFlashList]);
  const deleteItem = async (id) => {
    const formData = { tableName: "product", idColumnName: "id", idValue: id };
    const response = await axios
      .post(process.env.API_URL + "/Delete", formData)
      .then((item) => {
        MySwal.fire("Good job!", "Delete information successfully", "success");
        deleteInformation(id, product, getProductFlashList, updateProductInfo);
      })
      .catch((error) => {
        MySwal.fire("Brand not saved!", "Something Error Found.", "warning");
      });
  };

  const editProduct = (id) => {
    alert(id);
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-12 m-b-30">
          <div className="d-block d-sm-flex flex-nowrap align-items-center">
            <div className="page-title mb-2 mb-sm-0">
              <h1> List of product flash sales</h1>
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
                      <th>Picture</th>
                      {/* <th>Category name</th>
                      <th>Sub category name</th>
                      <th>Brand name</th> */}
                      <th>Product name</th>
                      <th>Product code</th>
                      <th>Tp price</th>
                      <th>Buy price</th>
                      <th>Cash back amount</th>
                      <th>Discount amount</th>
                      <th>Delivery amount</th>
                      <th>Short discription</th>
                      <th>Full discription</th>
                      <th>Product type</th>
                      <th>Status</th>
                      <th>Action</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <img src={process.env.API_URL + "/upload/" + JSON.parse(item.img)} width={150} height={150} />
                        </td>
                        {/* <td>{item.categories ? item.categories[0]["title"] : null}</td>
                        <td>{item.categorySubs ? item.categorySubs[0]["title"] : null}</td>
                        <td>{item.categoryBrands ? item.categoryBrands[0]["title"] : null}</td> */}
                        <td>{item.name}</td>
                        <td>{item.brandCode}</td>
                        <td>{item.realPrice}</td>
                        <td>{item.buyPrice}</td>
                        <td>{item.cashBackAmount}</td>
                        <td>{item.discountAmount}</td>
                        <td>{item.productDeliveryCharge}</td>
                        <td>{item.shortDescription}</td>
                        <td>{item.fullDescription}</td>
                        <td>{item.status}</td>
                        <td>
                          <td>
                            <label className="radio-inline">
                              <input
                                type="radio"
                                className="gg"
                                name={`optradio0${item.id}`}
                                defaultChecked={item.chk == 1 ? true : false}
                                onClick={() => ActiveInactive(item.id, "1", "product")}
                              />
                              On <br />
                              <input
                                type="radio"
                                className="gg"
                                name={`optradio0${item.id}`}
                                defaultChecked={item.chk == 0 ? true : false}
                                onClick={() => ActiveInactive(item.id, "0", "product")}
                              />
                              Off
                            </label>
                          </td>
                        </td>
                        <td>
                          <Link href="/ecommerce/edit/product/[productId]" as={`/ecommerce/edit/product/${item.id}`}>
                            <a className="btn btn-sm btn-outline-info">
                              <i className="fa fa-edit"></i>
                            </a>
                          </Link>
                        </td>
                        <td>
                          <a href="javascript:void(0)" onClick={() => deleteItem(item.id)} className="btn btn-sm btn-outline-danger ml-2">
                            <i className="fa fa-trash"></i>
                          </a>
                        </td>
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
  const { data } = await axios.get(process.env.API_URL + "/GetAllFlashSalesProduct");
  return {
    props: { data },
  };
}

export default ListOfProductFlashSales;
