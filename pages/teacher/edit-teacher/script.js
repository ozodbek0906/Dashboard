import { editTeacher } from "../../../api/api.js";
import { showToast, generateId } from "../../../utils/helper.js";
import { teacherModel } from "../../../modules/users.js";
import { appSidebar} from "../../../components/components.js";
import { navigations } from "../../../data/data.js";

window.addEventListener("DOMContentLoaded", async () => {
  let user = await JSON.parse(localStorage.getItem("user"));

  if (!user) {
    window.location.href = "/pages/login/index.html";
  }

  if (user.role !== "teacher" && user.role !== "admin") {
    window.location.href = "/pages/login/index.html";
  }

  // Elements
  const teacherId = window.location.search.split("=")[1];
  const sidebar = document.querySelector("#sidebar");
  const addTeacher = document.forms.addTeacher;

  // Sidebar
  appSidebar(sidebar, navigations);

addTeacher.addEventListener("submit", async (e) => {
  e.preventDefault();

  let teacher = {
        ...teacherModel,
        id: generateId(),
        firstName: addTeacher.firstName.value,
        lastName: addTeacher.lastName.value,
        age: addTeacher.age.value,
        passportSeries: addTeacher.series.value,
        email: addTeacher.email.value,
        address: addTeacher.address.value,
        phoneNumber: addTeacher.phoneNumber.value,
        subject: addTeacher.subject.value,
        role: "teacher"
      }

      const response = await editTeacher(teacherId, teacher);
      if (response) {
        showToast("Teacher edited successfully", "success");
        window.location.href = "/pages/teacher/index.html"
      } else {
        showToast("Failed to edit teacher", "error");
      }

})
});