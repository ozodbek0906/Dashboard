import { editStudent } from "../../../api/api.js";
import { showToast, generateId } from "../../../utils/helper.js";
import { studentModel } from "../../../modules/users.js";
import { appSidebar} from "../../../components/components.js";
import { navigations } from "../../../data/data.js";

const addStudent = document.forms.addStudent;

window.addEventListener("DOMContentLoaded", async () => {
  let user = await JSON.parse(localStorage.getItem("user"));

  if (!user) {
    window.location.href = "/pages/login/index.html";
  }

  if (user.role !== "teacher" && user.role !== "admin") {
    window.location.href = "/pages/login/index.html";
  }

  // Elements
  const studentId = window.location.search.split("=")[1];
  const sidebar = document.querySelector("#sidebar");
  const addStudent = document.forms.addStudent;

  // Sidebar
  appSidebar(sidebar, navigations);


  addStudent.addEventListener("submit", async (e) => {
  e.preventDefault();

  let student = {
        ...studentModel,
        id: generateId(),
        firstName: addStudent.firstName.value,
        lastName: addStudent.lastName.value,
        age: addStudent.age.value,
        passportSeries: addStudent.series.value,
        email: addStudent.email.value,
        address: addStudent.address.value,
        phoneNumber: addStudent.phoneNumber.value,
        father: addStudent.fatherName.value,
        mother: addStudent.motherName.value,
        role: "student"
      }

  const response = await editStudent(studentId, student);
          if (response) {
            showToast("Student edited successfully", "success");
            window.location.href = "/pages/student/index.html"
          } else {
            showToast("Failed to edit student", "error");
          }
})
});