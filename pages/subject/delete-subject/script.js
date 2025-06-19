import { appSidebar, subjects, deleteSubjectDialog } from "../../../components/components.js";
import { navigations } from "../../../data/data.js";
import { getSubject } from "../../../api/api.js";

let add = document.querySelector("#add")

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
  const sidebar = document.querySelector("#sidebar");
  const content = document.querySelector("#content-main")

  // Sidebar
  const subjectData = await getSubject();
  appSidebar(sidebar, navigations);
  subjects(content, subjectData);
  deleteSubjectDialog(true, "Are You Delete Subject ?", subjectId)

});