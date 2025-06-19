import { appSidebar, studentsList, deleteStudentDialog } from "../../../components/components.js";
import { navigations } from "../../../data/data.js";
import { getStudent } from "../../../api/api.js";

window.addEventListener("DOMContentLoaded", async () => {
  let user = await JSON.parse(localStorage.getItem("user"));

  if (!user) {
    window.location.href = "/pages/login/index.html";
  }

  if (user.role !== "student" && user.role !== "teacher" && user.role !== "admin") {
    window.location.href = "/pages/login/index.html";
  }


  // Elements
  const studentId = window.location.search.split("=")[1];
  const sidebar = document.querySelector("#sidebar");
  const content = document.querySelector("#contentList");

  // Sidebar
  const studentList = await getStudent()
  appSidebar(sidebar, navigations);
  studentsList(content, studentList);
  deleteStudentDialog(true, "Are You Delete Student ?", studentId)
  
});