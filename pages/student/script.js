import { appSidebar, studentsList } from "../../components/components.js";
import { navigations } from "../../data/data.js";
import { getStudent } from "../../api/api.js";

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
  const studentList = await getStudent()
  appSidebar(sidebar, navigations);
  studentsList(content, studentList);

  let editBtn = document.querySelectorAll("#edit");
  let delBtn = document.querySelectorAll("#delete");

  delBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = `/pages/student/delete-student/index.html?id=${btn.dataset.id}`;
    });
  });

  editBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = `/pages/student/edit-student/index.html?id=${btn.dataset.id}`;
    });
  });
});

add.addEventListener("click", () => {
  window.location.href = "/pages/student/add-student/index.html";
})
