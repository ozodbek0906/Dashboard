export const showToast = (message, type = "success") => {
  const toast = document.createElement("div");
  toast.className = `absolute top-70 right-1/2 translate-x-1/2 m-4 p-4 bg-${type === "success" ? "green" : "red"}-500 rounded-md shadow-md text-white font-normal text-sm`;
  toast.textContent = message;
  document.body.className = "relative";
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
};

export const regex = {
  username: /^(?=.*[a-z])(?=.*\d)[a-zA-Z0-9@_]{6,}$/,
  email: /^([\w+-.%]+@[\w-.]+\.[A-Za-z]{2,};?)+$/g,
  password: /^(?=.*[a-z])(?=.*\d)[a-zA-Z0-9@_!#$%^&*()+=]{4,}$/,
};

export const checkValidation = (inputs, regex) => {
  function validation(rgx, inp) {
    if (rgx.test(inp.value)) {
      inp.classList.remove("border-gray-300");
      inp.classList.add("border-green-400");
      inp.classList.remove("border-red-400");
      return true;
    } else {
      inp.classList.remove("border-gray-300");
      inp.classList.add("border-red-400");
      inp.classList.remove("border-green-400");
    }
  }
  inputs.forEach((input) => {
    input.addEventListener("keyup", () => {
      let name = input.getAttribute("name");
      validation(regex[name], input);
    });
  });
};


export const generateId = () => {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
};
