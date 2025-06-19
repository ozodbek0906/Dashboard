import { appSidebar, adminHeader } from "../../components/components.js";
import { navigations } from "../../data/data.js";

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
  const content = document.querySelector("#content");
  const header = document.querySelector("header")

  // Sidebar
  appSidebar(sidebar, navigations);
  adminHeader(header, "Event")
});
