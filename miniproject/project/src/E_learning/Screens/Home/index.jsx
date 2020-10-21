import React, { Component } from "react";
import CourseItem from "../../Components/CourseItem";
import Axios from "axios";
import { connect } from "react-redux";
class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4" style={{ color: "blue" }}>
          Danh Sach Khoa Hoc
        </h1>
        <div className="cointainer">
          <div className="row">
            {this.props.coursesList.map((item, index) => {
              return (
                <div className="col-4 mb-3">
                  <CourseItem item={item}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  // Chạy sau render và đúng lần đầu tiên
  componentDidMount() {
    Axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    })
      .then((res) => {
        this.props.dispatch({
          type: "FETCH_COURSES",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
const mapStateToProps = (state) => ({
  coursesList: state.courses.courses,
});
export default connect(mapStateToProps, null)(HomeScreen);
