import Axios from 'axios';

class CourseService {
  fetchCourses() {
    return Axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    });
  };
  fetchCoursesDetail(){
      return Axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=Backend_01",
    })
  }
}

export default CourseService;
