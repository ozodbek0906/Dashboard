import { checkUsername, checkEmail, PostUser } from "../../api/api.js";
import { showToast, checkValidation, regex } from "../../utils/helper.js";
import { userModel } from "../../modules/users.js";

const register = document.forms.register;
let inpts = register.querySelectorAll("input");

let rgx = {
  ...regex,
};

checkValidation(inpts, rgx);

register.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Check if the username is already taken
  let username = await checkUsername(register.username.value);
  // Check if the email is already taken
  let email = await checkEmail(register.email.value);

  if (username) {
    showToast("Username is already taken, please choose another username");
    return null;
  }

  if (email) {
    showToast("Email is already taken");
    return null;
  }

  // if (username || email) {
  //   showToast("User are already taken", "error");
  //   return null;
  // }

    let user = PostUser({
      ...userModel,
      username: register.username.value,
      email: register.email.value,
      password: atob(register.password.value),
      role: "user",
    });

  if (user) {
    showToast("User created successfully", "success");
    window.location.href = "/pages/login/index.html";
  } else {
    showToast("User creation failed", "error");
    return null;
  }
});
