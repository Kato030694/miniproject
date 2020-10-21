import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
class CourseDetailScreen extends Component {
  render() {
      const {coursesDetail}  = this.props;
    return <div>
        <img src={coursesDetail.hinhAnh} alt="course Details" />
  <h3>{coursesDetail.tenKhoaHoc}</h3>
    </div>;
  }
  componentDidMount() {
    Axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=Backend_01",
    })
      .then((res) => {
        this.props.dispatch({
          type: "FETCH_COURSE_DETAIL",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
const mapStateToProps = (state) => ({
  coursesDetail: state.courses.coursesDetail || {
    maKhoaHoc: "",
    tenKhoaHoc: "",
    hinhAnh: "",
    nguoiTao: {
      taiKhoan: "",
      hoTen: "",
    },
  },
});
export default connect(mapStateToProps, null)(CourseDetailScreen);
