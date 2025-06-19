import { checkEmail, loginUser } from "../../api/api.js";
import { showToast } from "../../utils/helper.js";
import { userModel } from "../../modules/users.js";

const login = document.forms.login;

login.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  // Check if the email is already taken
  let email = await checkEmail(login.email.value);

  if (!email) {
    showToast("Username not found", "error");
    return null;
  }

  let user = {
    ...userModel,
    email: login.email.value,
    password: atob(login.password.value),
  };

  const data = await loginUser(user.email, user.password);

  //   const data = await loginUser(user.email, user.password)
  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
    window.location.href = "/pages/dashboard/index.html";
  } else {
    showToast("User not found", "error");
  }
});
