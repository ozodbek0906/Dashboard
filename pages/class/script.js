import { appSidebar, classes } from "../../components/components.js";
import { navigations } from "../../data/data.js";
import { getClass } from "../../api/api.js";

let add = document.querySelector("#add");

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
  const content = document.querySelector("#content-main");

  // Sidebar
  const classData = await getClass();
  appSidebar(sidebar, navigations);
  classes(content, classData);

  let editBtn = document.querySelectorAll("#edit");
  let delBtn = document.querySelectorAll("#delete");

  delBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = `/pages/class/delete-class/index.html?id=${btn.dataset.id}`;
    });
  });

  editBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = `/pages/class/edit-class/index.html?id=${btn.dataset.id}`;
    });
  });
});

add.addEventListener("click", () => {
  window.location.href = "/pages/class/add-class/index.html";
});
