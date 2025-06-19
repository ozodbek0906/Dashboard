import { postTeacher } from "../../../api/api.js";
import { showToast, generateId } from "../../../utils/helper.js";
import { teacherModel } from "../../../modules/users.js";
import { appSidebar} from "../../../components/components.js";
import { navigations } from "../../../data/data.js";

const addTeacher = document.forms.addTeacher;

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

addTeacher.addEventListener("submit", async (e) => {
  e.preventDefault();

  let teacher = await postTeacher({
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
      });

  if (teacher) {
    showToast("User created successfully", "success");
      window.location.href = "/pages/teacher/index.html";
  } else {
    showToast("User creation failed", "error");
    return null;
  }
})
