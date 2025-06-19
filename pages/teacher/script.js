import { appSidebar, teachersList } from "../../components/components.js";
import { navigations } from "../../data/data.js";
import { getTeacher } from "../../api/api.js";

let add = document.querySelector("#add");


window.addEventListener("DOMContentLoaded", async () => {
  let user = await JSON.parse(localStorage.getItem("user"));

  if (!user) {
    window.location.href = "/pages/login/index.html";
  }

  if (user.role !== "student" && user.role !== "teacher" && user.role !== "admin") {
    window.location.href = "/pages/login/index.html";
  }

  // Elements
  const sidebar = document.querySelector("#sidebar");
  const content = document.querySelector("#contentList");

  // Sidebar
  const teacherList = await getTeacher();
  appSidebar(sidebar, navigations);
  teachersList(content, teacherList)
  
  let editBtn = document.querySelectorAll("#edit");
  let delBtn = document.querySelectorAll("#delete");

  delBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = `/pages/teacher/delete-teacher/index.html?id=${btn.dataset.id}`;
    });
  });

  editBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = `/pages/teacher/edit-teacher/index.html?id=${btn.dataset.id}`;
    });
  });
});

add.addEventListener("click", () => {
  window.location.href = "/pages/teacher/add-teacher/index.html";
})
