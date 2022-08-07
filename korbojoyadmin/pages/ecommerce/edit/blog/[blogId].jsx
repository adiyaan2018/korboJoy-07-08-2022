import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import formValueAppend from "../../../../commonFunction/formValueAppend";
import fromValueUpdate from "../../../../commonFunction/onChangeHandle";
import useScript from "../../../../commonFunction/ReloadJs";
const AddSliderAndAds = (props) => {
  useScript("/assets/js/app.js");
  const data = props.data;
  console.log(data);
  const router = useRouter();
  const id = router.query.blogId;
  console.log(id);
  const [products, setProducts] = useState([]);

  const main = data.filter((pd) => pd.id == id);

  // setProducts(main);

  // useEffect(() => {
  //   item();
  // }, [id]);
  // console.log("sss", item);

  const MySwal = withReactContent(Swal);

  const [slider, updateSlider] = useState();
  const changeStateUpdateHandler = (e) => {
    fromValueUpdate(e, updateSlider);
  };
  const [file, setFile] = useState("");
  const fileRead = (e) => {
    setFile(e.target.files[0]);
  };

  const sliderHandleSubmit = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("imgs", file);
    formValueAppend(formData, slider);

    const response = await axios
      .post(process.env.API_URL + "/AddSliderAndAds", formData)
      .then((response) => {
        MySwal.fire("Good job!", "Slider added successfully", "success");
      })
      .catch((error) => {
        MySwal.fire("Slider not saved!", "Something Error Found.", "warning");
      });
  };

  return (
    <div className="row">
      <div className="col-md-12 m-b-30">
        <div className="card card-statistics">
          <div className="card-header">
            <div className="card-heading">
              <h4 className="card-title">Add slider and offer</h4>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={sliderHandleSubmit} method="post" className="form-horizontal" encType="multipart/form-data">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label" htmlFor="title">
                      Title
                    </label>
                    <div className="mb-2">
                      {main.map((item, index) => (
                        <input type="text" className="form-control" name="title" onChange={changeStateUpdateHandler} placeholder={item.tittle} key={index} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label" htmlFor="fname">
                      Short discription
                    </label>
                    <div className="mb-2">
                      {main.map((item, index) => (
                        <input
                          type="text"
                          key={index}
                          className="form-control"
                          name="shortDiscriptions"
                          onChange={changeStateUpdateHandler}
                          placeholder={item.shortDis}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label" htmlFor="lname">
                      Picture
                    </label>
                    <div className="mb-2">
                      <input multiple type="file" className="form-control" name="imgs" onChange={fileRead} />
                    </div>
                  </div>
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
  );
};
export async function getServerSideProps(context) {
  const id = context.params.sliderId;
  const { data } = await axios.get(process.env.API_URL + "/ListOfBlogPost");

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
export default AddSliderAndAds;
