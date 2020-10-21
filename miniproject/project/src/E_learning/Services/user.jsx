import Axios from "axios";
import * as yup from "yup";
// la lop doi tuong nen import cung khong dung duoc, nen can phai new ra 1 doi tuong moi

export const signUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("* Field is required !"),
  matKhau: yup.string().required("* Field is required !"),
  hoTen: yup.string().required("* Field is required !"),
  email: yup
    .string()
    .required("* Field is required !")
    .email("* Email is invalid"),
  soDT: yup.string().matches(/^[0-9]+$/),
  maNhom: yup.string().required("* Field is required !"),
});
class UserServices {
  signUp(data) {
    return Axios({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data,
    });
  }
}

export default UserServices;
