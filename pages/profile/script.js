import { appSidebar, adminHeader, profilePage, imageDialog, socialMediaDialog } from "../../components/components.js";
import { navigations } from "../../data/data.js";
import { getProfileInformation } from "../../api/api.js";

window.addEventListener("DOMContentLoaded", async () => {
  let user = await JSON.parse(localStorage.getItem("user"));

  if (!user) {
    window.location.href = "/pages/login/index.html";
  }

  if (user.role !== "teacher" && user.role !== "admin") {
    window.location.href = "/pages/login/index.html";
  }

  // Elements
  const userInfo = await getProfileInformation(user.id);

  const sidebar = document.querySelector("#sidebar");
  const content = document.querySelector("#content-main");
  const header = document.querySelector("header");

  // Sidebar
  appSidebar(sidebar, navigations);
  adminHeader(header, "Profile");
  profilePage(content, userInfo, );

  const socialmedias = document.querySelectorAll("#socialmedias");
  const addImage = document.querySelector("#imageBtn");
  const delAccount = document.querySelector("#delAccount");

  delAccount.addEventListener("click", () => {
    window.location.href = `/pages/profile/delete-acc/index.html?id=${btn.dataset.id}`
  })

  addImage.addEventListener("click", () => {
    imageDialog(true, "Upload Picture", "Please enter your image url", "ADD");
  })

  socialmedias.forEach((socialmedia) => {
    socialmedia.addEventListener("click", () => {
      const inputName = socialmedia.querySelector("a");

      socialMediaDialog(true, "Social Media", socialmedia.dataset.name, "ADD");
      
    });
  });

 
});
