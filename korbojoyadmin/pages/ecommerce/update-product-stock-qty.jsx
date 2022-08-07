import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useScript from "../../commonFunction/ReloadJs";

const UpdateProductStockQty = (props) => {
  useScript("/assets/js/app.js");
  const data = props.data.data;
  const MySwal = withReactContent(Swal);
  const onSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("userId", "11"); // Need to enter admin identy
    formData.append("productOwner", "Admin"); // Need to enter product owner
    const productId = e.target.state.value;
    const productQty = e.target.Qty.value;
    const info = { productId: productId, productQty: productQty, productOwner: "Admin", productOwnerId: "11" };
    const response = await axios
      .post(process.env.API_URL + "/UpdateProductQty", info)
      .then((response) => {
        MySwal.fire("Good job!", "Product update successfully", "success");
      })
      .catch((error) => {
        MySwal.fire("Product not saved!", "Something Error Found.", "warning");
      });
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-2 m-b-30"></div>

        <div className="col-md-8 m-b-30">
          <div className="card card-statistics">
            <div className="card-header">
              <div className="card-heading">
                <h4 className="card-title">Update product stock qty</h4>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={onSubmit} method="post" className="form-horizontal" encType="multipart/form-data">
                <div className="selects-contant select-wrapper">
                  <div className="card card-statistics">
                    <label htmlFor="inputState">Select product</label>
                    <div className="card-body">
                      <div className="form-group mb-0">
                        <select className="js-basic-single form-control" name="state" id="inputState">
                          <optgroup label="Update your product">
                            {data.map((item, index) => (
                              <option key={index} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                          </optgroup>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="fname">
                    Product qty
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" id="fname" name="Qty" placeholder="Product Qty" />
                  </div>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary" name="signup" value="Submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductStockQty;
export async function getServerSideProps(context) {
  const { data } = await axios.get(process.env.API_URL + "/GetInformationSingle/product&productOwner='Admin'");
  return {
    props: {
      data,
    },
  };
}
