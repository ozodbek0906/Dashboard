import { editSubject, getTeacher } from "../../../api/api.js";
import { showToast } from "../../../utils/helper.js";
import { subjectModel } from "../../../modules/users.js";
import { appSidebar, options} from "../../../components/components.js";
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
  const subjectId = window.location.search.split("=")[1];
  const teacherData = await getTeacher()
  const sidebar = document.querySelector("#sidebar");
  const selector = document.querySelector("#teachers");
  const addSubject = document.forms.addSubject;

  // Sidebar
  appSidebar(sidebar, navigations);
  options(selector, teacherData);

addSubject.addEventListener("submit", async (e) => {
  e.preventDefault();

  let subject = {
        ...subjectModel,
        subjectName: addSubject.subjectName.value,
        teacherName: addSubject.teacherName.value,
        duration: addSubject.duration.value,
        imageUrl: addSubject.imageUrl.value
      }

   const response = await editSubject(subjectId, subject);
            if (response) {
              showToast("Subject edited successfully", "success");
              window.location.href = "/pages/subject/index.html"
            } else {
              showToast("Failed to edit subject", "error");
            }
})
});