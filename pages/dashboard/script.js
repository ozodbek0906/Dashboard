import { appSidebar, adminContentTop, adminHeader } from "../../components/components.js";
import { navigations } from "../../data/data.js";
import { getDashboardInformation } from "../../api/api.js";

window.addEventListener("DOMContentLoaded", async () => {
  let user = await JSON.parse(localStorage.getItem("user"));

  if (!user) {
    window.location.href = "/pages/login/index.html";
  }

  if (user.role !== "teacher" && user.role !== "student" && user.role !== "admin") {
    window.location.href = "/pages/login/index.html";
  }

  // Elements

  const dashboardInformation = await getDashboardInformation();
  
  const sidebar = document.querySelector("#sidebar");
  const contentTop = document.querySelector("#content-top");
  const header = document.querySelector("header");

  // Sidebar
  appSidebar(sidebar, navigations);
  adminContentTop(contentTop, dashboardInformation);
  adminHeader(header, "Dashboard");

});
