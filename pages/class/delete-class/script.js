import { appSidebar, classes, deleteClassDialog } from "../../../components/components.js";
import { navigations } from "../../../data/data.js";
import { getClass } from "../../../api/api.js";


window.addEventListener("DOMContentLoaded", async () => {
  let user = await JSON.parse(localStorage.getItem("user"));

  if (!user) {
    window.location.href = "/pages/login/index.html";
  }

  if (user.role !== "teacher" && user.role !== "admin") {
    window.location.href = "/pages/login/index.html";
  }

  // Elements
  const classId = window.location.search.split("=")[1];
  const sidebar = document.querySelector("#sidebar");
  const content = document.querySelector("#content-main");

  // Sidebar
  const classData = await getClass();
  appSidebar(sidebar, navigations);
  classes(content, classData);
  deleteClassDialog(true, "Are You Delete Class ?", classId);

});


