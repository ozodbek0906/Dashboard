import { appSidebar, teachersList, deleteTeacherDialog } from "../../../components/components.js";
import { navigations } from "../../../data/data.js";
import { getTeacher } from "../../../api/api.js";

window.addEventListener("DOMContentLoaded", async () => {
  let user = await JSON.parse(localStorage.getItem("user"));

  if (!user) {
    window.location.href = "/pages/login/index.html";
  }

  if (user.role !== "student" && user.role !== "teacher" && user.role !== "admin") {
    window.location.href = "/pages/login/index.html";
  }

  // Elements
  const teacherId = window.location.search.split("=")[1];
  const sidebar = document.querySelector("#sidebar");
  const content = document.querySelector("#contentList");

  // Sidebar
  const teacherList = await getTeacher();
  appSidebar(sidebar, navigations);
  teachersList(content, teacherList)
  deleteTeacherDialog(true, "Are You Delete Teacher ?", teacherId)

});