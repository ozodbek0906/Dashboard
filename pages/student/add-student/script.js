import { postStudent } from "../../../api/api.js";
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
  const sidebar = document.querySelector("#sidebar");

  // Sidebar
  appSidebar(sidebar, navigations);
});

addStudent.addEventListener("submit", async (e) => {
  e.preventDefault();

  let student = await postStudent({
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
      });

  if (student) {
    showToast("User created successfully", "success");
      window.location.href = "/pages/student/index.html";
  } else {
    showToast("User creation failed", "error");
    return null;
  }
})
