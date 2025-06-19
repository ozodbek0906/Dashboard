import { updateUser, getProfileInformation, delClass, delStudent, delSubject, delTeacher } from "../api/api.js";

export const appSidebar = (place, navigations) => {
  const user = JSON.parse(localStorage.getItem("user"));
  place.innerHTML = "";
  place.innerHTML = `
            <div>
              <!-- Sidebar Header -->
              <div class="flex items-center justify-center py-4 border-b border-white/10">
                <h3 class="text-2xl text-white">${user.role == "admin" ? "Admin" : user.role == "teacher" ? "Teacher" : "Student"}</h3>
              </div>

              <!-- Sidebar Content -->
              <nav class="space-y-2 p-2">
              ${navigations
                .map(
                  (link) => `
                        <a href="${link.link}" class="flex items-center gap-2 px-4 py-2 text-white rounded-md hover:bg-white/10">
                          <i class="fa-solid ${link.icon}"></i>
                          <span id="pagename">${link.name}</span>
                        </a>`
                )
                .join("")}
              </nav>
            </div>
            <!-- Sidebar Footer -->
            <div class="flex items-center justify-center py-4 border-t border-white/10">
              <p class="text-sm text-white font-thin">Made with by Peterdraw</p>
            </div>
    `;
};

export const adminHeader = (place, name) => {
  place.innerHTML = "";
  place.innerHTML = `
             <div class="heading flex justify-between w-[1160px] p-3 ml-4">
                <div class="pl-6 flex items-center">
                    <h1 class="text-4xl text-blue-900 font-bold">${name}</h1>
                </div>
                <div class="flex gap-4">
                <div class="searchbar flex gap-6 bg-white rounded-4xl flex justify-center items-center pl-5">
                    <p><i class="fa-solid fa-magnifying-glass"></i></p>
                    <form>
                        <input type="text" placeholder="Search" class="border-none">
                    </form>
                </div>
                  <div id="add" class="${name == "Dashboard" ? "hidden" : name == "Profile" ? "hidden" : ""}">
                    <button class="relative inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 before:absolute before:inset-0 before:rounded-2xl before:bg-white/10 before:blur-md before:opacity-0 hover:before:opacity-100">Add New ${name}</button>
                  </div>
                </div>
             </div>
  `;
};

export const adminContentTop = (place, data) => {
  place.innerHTML = "";
  place.innerHTML = `
                  ${data
                    .map(
                      (info) => `
                    <div class="flex gap-3">
                      <div class="${info.color} w-[85px] h-[85px] rounded-full flex justify-center items-center"> 
                        <p class="text-white text-2xl"><i class="${info.icon}"></i></p>
                      </div>
                      <div>
                        <h5 class="text-gray-400 text-2xl">${info.name}</h5>
                        <h3 class="text-blue-800 font-bold text-4xl">${info.number}</h3>
                      </div>
                    </div>
                    `
                    )
                    .join("")}
    `;
};

export const adminContentMain = (place, data) => {
  place.innerHTML = "";
  place.innerHTML = `
        <div>
            <h1>Admin Dashboard</h1>
        </div>
    `;
};

export const adminContentBottom = (place, data) => {
  place.innerHTML = "";
  place.innerHTML = `
        <div>
            <h1>Admin Dashboard</h1>
        </div>
    `;
};

export const studentsList = (place, data) => {
  place.innerHTML = "";
  place.innerHTML = `
    ${data
      .map(
        (info) => `
                  <div class="flex gap-2">
                    <div class="w-[310px] flex items-center gap-3">
                      <div class="flex gap-2">
                        <h3 class="text-blue-900 font-bold text-xl">${info.firstName}</h3>
                        <h3 class="text-blue-900 font-bold text-xl">${info.lastName}</h3>
                      </div>
                    </div>
                    <div class="w-[110px] flex pr-6 items-center">
                      <p class="text-blue-500 font-bold text-lg">${info.id}</p>
                    </div>
                    <div class="w-[90px] flex items-center justify-center pr-8">
                      <p class="text-gray-400 font-semibold text-sm">${info.age}</p>
                    </div>
                    <div class="w-[110px] flex items-center pr-6 justify-center">
                      <p class="text-blue-700">${info.passportSeries}</p>
                    </div>
                    <div class="w-[110px] flex items-center pr-4 justify-center">
                      <p class="text-blue-700">${info.address}</p>
                    </div>
                    <div class="w-[100px] flex items-center justify-center">
                      <p class="text-blue-700">${info.phoneNumber}</p> 
                    </div>
                    <div class="w-[120px] pl-9">
                      <div class="rounded-[32px] py-[12px] pl-4">
                        <p class="text-blue-800">${info.father}</p>
                        <p class="text-blue-800">${info.mother}</p>
                      </div>
                    </div>
                    <div class="w-[100px] flex items-center gap-4 pl-12">
                      <p id="edit" data-id="${info.id}" class="text-green-400 text-xl cursor-pointer"><i class="fa-solid fa-pen-to-square"></i></p>
                      <p id="delete" data-id="${info.id}" class="text-red-400 text-xl cursor-pointer"><i class="fa-solid fa-trash"></i></p>
                    </div>
                  </div>
      `
      )
      .join("")}
  `;
};

export const teachersList = (place, data) => {
  place.innerHTML = "";
  place.innerHTML = `
    ${data
      .map(
        (info) => `
                  <div class="flex gap-2">
                    <div class="w-[310px] flex items-center gap-3">
                      <div class="flex gap-2">
                        <h3 class="text-blue-900 font-bold text-xl">${info.firstName}</h3>
                        <h3 class="text-blue-900 font-bold text-xl">${info.lastName}</h3>
                      </div>
                    </div>
                    <div class="w-[110px] flex pr-6 items-center">
                      <p class="text-blue-500 font-bold text-lg">${info.id}</p>
                    </div>
                    <div class="w-[90px] flex items-center justify-center pr-8">
                      <p class="text-blue-400 font-semibold text-sm">${info.age}</p>
                    </div>
                    <div class="w-[110px] flex items-center pr-6 justify-center">
                      <p class="text-blue-700">${info.passportSeries}</p>
                    </div>
                    <div class="w-[110px] flex items-center pr-4 justify-center">
                      <p class="text-blue-700">${info.address}</p>
                    </div>
                    <div class="w-[100px] flex items-center justify-center">
                      <p class="text-blue-700">${info.phoneNumber}</p> 
                    </div>
                    <div class="w-[120px] pl-9">
                      <div class="rounded-[32px] py-[12px] pl-4">
                        <p class="text-blue-700">${info.subject}</p>
                      </div>
                    </div>
                    <div class="w-[100px] flex items-center gap-4 pl-12">
                      <p id="edit" data-id="${info.id}" class="text-green-400 text-xl cursor-pointer"><i class="fa-solid fa-pen-to-square"></i></p>
                      <p id="delete" data-id="${info.id}" class="text-red-400 text-xl cursor-pointer"><i class="fa-solid fa-trash"></i></p>
                    </div>
                  </div>
      `
      )
      .join("")}
  `;
};

export const profilePage = (place, data) => {
  place.innerHTML = "";
  place.innerHTML = `
              <div class="bg-white rounded-lg shadow-2xl w-full h-full p-8 flex">
                <div class="w-1/3 border-r pr-6">
                  <h2 class="text-xl font-bold text-gray-700 mb-6">PROFILE</h2>
                  <div class="flex flex-col items-center">
                    <div class="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-5xl mb-2">
                      <img src="${data.image}" alt="" class="w-full h-full rounded-full">
                    </div>
                    <button id="imageBtn" class="text-sm text-blue-500 hover:underline mb-4 cursor-pointer">Upload Picture</button>
                  </div>
                  <div class="space-y-3 text-sm text-gray-700 mt-4">
                    <div class="flex items-center gap-2" id="socialmedias" data-name="facebook">
                      <i class="fab fa-facebook-f text-blue-600"></i>
                      <a href="#" class="hover:underline"><p>${data.socialMedia.facebook}</p></a>
                    </div>
                    <div class="flex items-center gap-2" id="socialmedias" data-name="twitter">
                      <i class="fab fa-twitter text-blue-400"></i>
                      <a href="#" class="hover:underline"><p>${data.socialMedia.twitter}</p></a>
                    </div>
                    <div class="flex items-center gap-2" id="socialmedias" data-name="instagram">
                      <i class="fab fa-instagram text-pink-500"></i>
                      <a href="#" class="hover:underline"><p>${data.socialMedia.instagram}</p></a>
                    </div>
                    <div class="flex items-center gap-2" id="socialmedias" data-name="google">
                      <i class="fab fa-google-plus-g text-red-500"></i>
                      <a href="#" class="hover:underline"><p>${data.socialMedia.google}</p></a>
                    </div>
                  </div>
                </div>
                
                <div class="w-2/3 pl-6">
                  <div class="flex justify-end space-x-4 text-sm text-right text-gray-600 mb-6">
                  <a id="logout" href="/pages/login/index.html" class="hover:text-black"><i class="fas fa-sign-out-alt"></i> Log Out</a>
                  <a id="delAccount" data-id="${data.id}" class="hover:text-black"><i class="fa-solid fa-trash"></i> Delete Account</a>
                  </div>
                  <form class="space-y-4 text-sm text-gray-700" name="profileform" id="profileform">
                    <div>
                      <label class="block mb-1 font-semibold">Username:</label>
                      <input id="username" name="username" type="text" value="${data.username}" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    </div>
                    <div>
                      <label class="block mb-1 font-semibold">E-mail:</label>
                      <input id="email" name="email" type="email" value="${data.email}" class="w-full border border-gray-300 rounded px-3 py-2" />
                    </div>
                    <div>
                      <label class="block mb-1 font-semibold">About Me:</label>
                      <textarea rows="3" id="aboutme" name="aboutme" class="w-full border border-gray-300 rounded px-3 py-2">${data.aboutme}</textarea>
                    </div>
                    <div class="text-right">
                      <button type="submit" class="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-2 rounded mt-2">
                        Update Information
                      </button>
                    </div>
                  </form>
                </div>
              </div>
  `;
  const userForm = document.forms.profileform;
  const user = JSON.parse(localStorage.getItem("user"));

  userForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const userInfo = await getProfileInformation(user.id);

    const updatedUser = {
      ...userInfo,
      username: userForm.username.value,
      email: userForm.email.value,
      aboutme: userForm.aboutme.value,
    };
    console.log(updatedUser);
    const response = await updateUser(user.id, updatedUser);

    if (response.status === 200) {
      console.log("done");
    }
  });
};

export const subjects = (place, data) => {
  place.innerHTML = "";
  place.innerHTML = `
    ${data
      .map(
        (info) => `
        <div id="subjectCard" class="w-[275px] h-[290px] rounded-2xl">
                <div class="subject-top w-full h-[180px]">
                  <img class="rounded-t-2xl w-full h-full" src="${info.imageUrl}" alt="">
                </div>
                <div class="flex justify-between bg-blue-200 rounded-b-2xl">
                  <div class="subject-bottom flex flex-col gap-1 p-2 pl-4">
                    <h2 class="text-black font-semibold text-xl">${info.subjectName}</h2>
                    <h3 class="text-blue-600 font-semibold text-lg">Teacher:${info.teacherName}</h3>
                    <h4 class="text-gray-700 text-lg">Duration:${info.duration}</h4>
                  </div>
                  <div class="flex flex-col gap-4 p-5">
                     <p id="edit" data-id="${info.id}" class="text-green-400 text-xl cursor-pointer"><i class="fa-solid fa-pen-to-square"></i></p>
                      <p id="delete" data-id="${info.id}" class="text-red-400 text-xl cursor-pointer"><i class="fa-solid fa-trash"></i></p>
                  </div>
                </div>
              </div>
      `
      )
      .join("")}
  `;
};

export const classes = (place, data) => {
  place.innerHTML = "";
  place.innerHTML = `
    ${data
      .map(
        (info) => `
        <div id="classCard" class="flex w-[450px] h-[140px] rounded-2xl bg-blue-200">
                <div class="subject-top w-[120px] flex items-center justify-center p-4">
                  <div class="flex rounded-full w-[90px] h-[90px] bg-red-300 items-center justify-center">
                    <p class="text-blue-500 text-[52px]">${info.icon}</p>
                  </div>
                </div>
                <div class="flex justify-between items-center w-[380px]">
                  <div class="subject-bottom flex flex-col p-2">
                    <h2 class="text-black font-semibold text-xl">Grade: ${info.grade} class</h2>
                    <h3 class="text-red-600 font-semibold text-lg">Specialization: ${info.specialization}</h3>
                    <h3 class="text-blue-600 font-semibold text-lg">Room: ${info.room}</h3>
                    <h4 class="text-gray-700 text-lg">Students: ${info.students.length}</h4>
                  </div>
                  <div class="flex flex-col gap-4 p-5">
                      <p id="edit" data-id="${info.id}" class="text-green-400 text-xl cursor-pointer"><i class="fa-solid fa-pen-to-square"></i></p>
                      <p id="delete" data-id="${info.id}" class="text-red-400 text-xl cursor-pointer"><i class="fa-solid fa-trash"></i></p>
                  </div>
                </div>
              </div>
      `
      )
      .join("")}
  `;
};

export const imageDialog = (open, label, input, button) => {
  const body = document.querySelector("body");
  const dialog = document.createElement("div");
  const content = document.createElement("div");
  dialog.classList.add("absolute", "top-0", "left-0", "inset-0", "bg-black/50", "z-50");
  content.classList.add("w-full", "h-full", "flex", "items-center", "justify-center");

  content.innerHTML = `
    <div id="dialog" style="background-image: url(https://th.bing.com/th/id/OIP.zmEUIRW41dPbBKa5L_fqwAHaEK?cb=iwp2&rs=1&pid=ImgDetMain);" class="relative p-12 w-[500px] h-[500px] bg-white rounded-xl shadow-2xl border border-gray-400 bg-cover bg-center opacity-0 transition-opacity duration-300">
      <span id="close" class="absolute top-5 right-7 text-2xl text-red-500 cursor-pointer transition-all duration-300 hover:scale-135 hover:text-red-800"><i class="fa-solid fa-xmark"></i></span>
      <h1 class="text-2xl font-bold text-white text-center">${label}</h1>
      <form class="mt-10" id="uploadImageform">
        <div class="flex flex-col gap-2">
          <label for="picture" class="text-yellow-500 text-xl font-semibold capitalize">${input}</label>
          <input type="text" id="pictureinput" name="${input}" class="w-full border border-gray-300 bg-white rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300">
        </div>
        <div id="alert" class="hidden">
          <span class="text-red-400 text-lg">Please enter any URL</span>
        </div>
        <div class="flex justify-center p-4">
          <button type="submit" id="submit" class="bg-green-600 hover:bg-green-900 text-white font-semibold px-6 py-2 rounded-xl mt-2 transition-all duration-300 hover:scale-115">${button}</button>
        </div>
      </form>
    </div>
  `;
  dialog.appendChild(content);

  if (open) {
    body.appendChild(dialog);

    let dialogCard = document.querySelector("#dialog");
    let alert = document.querySelector("#alert");

    setTimeout(() => {
      dialogCard.classList.remove("opacity-0");
      dialogCard.classList.add("opacity-100");
    }, 100);
    const close = document.querySelector("#close");
    close.addEventListener("click", () => {
      setTimeout(() => {
        dialogCard.classList.remove("opacity-100");
        dialogCard.classList.add("opacity-0");
      }, 100);
      setTimeout(() => {
        dialog.remove();
      }, 300);
    });

    const socialmediaform = document.querySelector("#uploadImageform");
    const socialmediainput = document.querySelector("#pictureinput");
    const user = JSON.parse(localStorage.getItem("user"));
    uploadImageform.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (socialmediainput.value.length > 0) {
        const userInfo = await getProfileInformation(user.id);

        const updatedUser = {
          ...userInfo,
          image: socialmediainput.value,
        };

        const response = await updateUser(user.id, updatedUser);

        if (response.status === 200) {
          setTimeout(() => {
            dialog.remove();
          }, 2000);
        }
      } else {
        alert.classList.remove("hidden");
        alert.classList.add("block");
        setTimeout(() => {
          alert.classList.remove("block");
          alert.classList.add("hidden");
        }, 1500);
      }
    });
  } else {
    dialog.remove();
  }
};
export const socialMediaDialog = (open, label, input, button) => {
  const body = document.querySelector("body");
  const dialog = document.createElement("div");
  const content = document.createElement("div");
  dialog.classList.add("absolute", "top-0", "left-0", "inset-0", "bg-black/50", "z-50");
  content.classList.add("w-full", "h-full", "flex", "items-center", "justify-center");

  content.innerHTML = `
    <div id="dialog" style="background-image: url(https://th.bing.com/th/id/OIP.zmEUIRW41dPbBKa5L_fqwAHaEK?cb=iwp2&rs=1&pid=ImgDetMain);" class="relative p-12 w-[500px] h-[500px] bg-white rounded-xl shadow-2xl border border-gray-400 bg-cover bg-center opacity-0 transition-opacity duration-400">
      <span id="close" class="absolute top-5 right-7 text-2xl text-red-500 cursor-pointer transition-all duration-300 hover:scale-135 hover:text-red-800"><i class="fa-solid fa-xmark"></i></span>
      <h1 class="text-2xl font-bold text-white text-center">${label}</h1>
      <form class="mt-10" id="socialmediaform">
        <div class="flex flex-col gap-2">
          <label for="socialmedia" class="text-red-600 text-xl font-semibold capitalize">${input}</label>
          <input type="text" id="socialmediainput" name="${input}" class="w-full border border-gray-300 bg-white rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300">
        </div>
        <div class="flex justify-center p-4">
          <button type="submit" id="submit" class="bg-green-600 hover:bg-green-900 text-white font-semibold px-6 py-2 rounded-xl mt-2 transition-all duration-300 hover:scale-115">${button}</button>
        </div>
      </form>
    </div>
  `;
  dialog.appendChild(content);

  if (open) {
    body.appendChild(dialog);

    let dialogCard = document.querySelector("#dialog");

    setTimeout(() => {
      dialogCard.classList.remove("opacity-0");
      dialogCard.classList.add("opacity-100");
    }, 100);
    const close = document.querySelector("#close");
    close.addEventListener("click", () => {
      setTimeout(() => {
        dialogCard.classList.remove("opacity-100");
        dialogCard.classList.add("opacity-0");
      }, 100);
      setTimeout(() => {
        dialog.remove();
      }, 300);
    });

    const socialmediaform = document.querySelector("#socialmediaform");
    const socialmediainput = document.querySelector("#socialmediainput");
    const user = JSON.parse(localStorage.getItem("user"));

    socialmediaform.addEventListener("submit", async (e) => {
      e.preventDefault();

      const userInfo = await getProfileInformation(user.id);

      const updatedUser = {
        ...userInfo,
        socialMedia: {
          ...userInfo.socialMedia,
          [input]: socialmediainput.value,
        },
      };

      const response = await updateUser(user.id, updatedUser);

      if (response.status === 200) {
        setTimeout(() => {
          dialog.remove();
        }, 2000);
      }
    });
  } else {
    dialog.remove();
  }
};
export const deleteClassDialog = (open, label, id) => {
  const body = document.querySelector("body");
  const dialog = document.createElement("div");
  const content = document.createElement("div");
  dialog.classList.add("absolute", "top-0", "left-0", "inset-0", "bg-black/50", "z-50");
  content.classList.add("w-full", "h-full", "flex", "items-center", "justify-center");

  content.innerHTML = `
    <div id="dialog" style="background-image: url(https://th.bing.com/th/id/OIP.zmEUIRW41dPbBKa5L_fqwAHaEK?cb=iwp2&rs=1&pid=ImgDetMain);" class="relative p-12 w-[500px] h-[250px] bg-white rounded-xl shadow-2xl border border-gray-400 bg-cover bg-center opacity-0 transition-opacity duration-400">
      <span id="close" class="absolute top-5 right-7 text-2xl text-red-500 cursor-pointer transition-all duration-300 hover:scale-135 hover:text-red-800"><i class="fa-solid fa-xmark"></i></span>
      <h1 class="text-2xl font-bold text-white text-center">${label}</h1>
        <div class="flex justify-center p-4 gap-4">
          <button type="button" id="yes" class="bg-green-600 hover:bg-green-900 text-white font-semibold px-6 py-2 rounded-xl mt-2 transition-all duration-300 hover:scale-115">Yes</button>
          <button type="button" id="no" class="bg-red-600 hover:bg-red-900 text-white font-semibold px-6 py-2 rounded-xl mt-2 transition-all duration-300 hover:scale-115">No</button>
        </div>
    </div>
  `;
  dialog.appendChild(content);

  if (open) {
    body.appendChild(dialog);

    let dialogCard = document.querySelector("#dialog");
    let yes = document.querySelector("#yes");
    let no = document.querySelector("#no")

    setTimeout(() => {
      dialogCard.classList.remove("opacity-0");
      dialogCard.classList.add("opacity-100");
    }, 100);
    const close = document.querySelector("#close");
    close.addEventListener("click", () => {
      setTimeout(() => {
        dialogCard.classList.remove("opacity-100");
        dialogCard.classList.add("opacity-0");
      }, 100);
      setTimeout(() => {
        dialog.remove();
        window.location.href = "/pages/class/index.html"
      }, 300);
    });

    no.addEventListener("click", () => {
      setTimeout(() => {
        dialogCard.classList.remove("opacity-100");
        dialogCard.classList.add("opacity-0");
      }, 100);
      setTimeout(() => {
        dialog.remove();
        window.location.href = "/pages/class/index.html"
      }, 300);
    });

    yes.addEventListener("click", async () => {
      const response = await delClass(id);

      if (response) {
          window.location.href = "/pages/class/index.html"
      }
      });
      } else {
        dialog.remove();
      }
};
export const deleteStudentDialog = (open, label, id) => {
  const body = document.querySelector("body");
  const dialog = document.createElement("div");
  const content = document.createElement("div");
  dialog.classList.add("absolute", "top-0", "left-0", "inset-0", "bg-black/50", "z-50");
  content.classList.add("w-full", "h-full", "flex", "items-center", "justify-center");

  content.innerHTML = `
    <div id="dialog" style="background-image: url(https://th.bing.com/th/id/OIP.zmEUIRW41dPbBKa5L_fqwAHaEK?cb=iwp2&rs=1&pid=ImgDetMain);" class="relative p-12 w-[500px] h-[250px] bg-white rounded-xl shadow-2xl border border-gray-400 bg-cover bg-center opacity-0 transition-opacity duration-400">
      <span id="close" class="absolute top-5 right-7 text-2xl text-red-500 cursor-pointer transition-all duration-300 hover:scale-135 hover:text-red-800"><i class="fa-solid fa-xmark"></i></span>
      <h1 class="text-2xl font-bold text-white text-center">${label}</h1>
        <div class="flex justify-center p-4 gap-4">
          <button type="button" id="yes" class="bg-green-600 hover:bg-green-900 text-white font-semibold px-6 py-2 rounded-xl mt-2 transition-all duration-300 hover:scale-115">Yes</button>
          <button type="button" id="no" class="bg-red-600 hover:bg-red-900 text-white font-semibold px-6 py-2 rounded-xl mt-2 transition-all duration-300 hover:scale-115">No</button>
        </div>
    </div>
  `;
  dialog.appendChild(content);

  if (open) {
    body.appendChild(dialog);

    let dialogCard = document.querySelector("#dialog");
    let yes = document.querySelector("#yes");
    let no = document.querySelector("#no")

    setTimeout(() => {
      dialogCard.classList.remove("opacity-0");
      dialogCard.classList.add("opacity-100");
    }, 100);
    const close = document.querySelector("#close");
    close.addEventListener("click", () => {
      setTimeout(() => {
        dialogCard.classList.remove("opacity-100");
        dialogCard.classList.add("opacity-0");
      }, 100);
      setTimeout(() => {
        dialog.remove();
        window.location.href = "/pages/student/index.html"
      }, 300);
    });

    no.addEventListener("click", () => {
      setTimeout(() => {
        dialogCard.classList.remove("opacity-100");
        dialogCard.classList.add("opacity-0");
      }, 100);
      setTimeout(() => {
        dialog.remove();
        window.location.href = "/pages/student/index.html"
      }, 300);
    });

    yes.addEventListener("click", async () => {
      const response = await delStudent(id);

      if (response) {
          window.location.href = "/pages/student/index.html"
      }
      });
      } else {
        dialog.remove();
        window.location.href = "/pages/student/index.html"
      }
};
export const deleteSubjectDialog = (open, label, id) => {
  const body = document.querySelector("body");
  const dialog = document.createElement("div");
  const content = document.createElement("div");
  dialog.classList.add("absolute", "top-0", "left-0", "inset-0", "bg-black/50", "z-50");
  content.classList.add("w-full", "h-full", "flex", "items-center", "justify-center");

  content.innerHTML = `
    <div id="dialog" style="background-image: url(https://th.bing.com/th/id/OIP.zmEUIRW41dPbBKa5L_fqwAHaEK?cb=iwp2&rs=1&pid=ImgDetMain);" class="relative p-12 w-[500px] h-[250px] bg-white rounded-xl shadow-2xl border border-gray-400 bg-cover bg-center opacity-0 transition-opacity duration-400">
      <span id="close" class="absolute top-5 right-7 text-2xl text-red-500 cursor-pointer transition-all duration-300 hover:scale-135 hover:text-red-800"><i class="fa-solid fa-xmark"></i></span>
      <h1 class="text-2xl font-bold text-white text-center">${label}</h1>
        <div class="flex justify-center p-4 gap-4">
          <button type="button" id="yes" class="bg-green-600 hover:bg-green-900 text-white font-semibold px-6 py-2 rounded-xl mt-2 transition-all duration-300 hover:scale-115">Yes</button>
          <button type="button" id="no" class="bg-red-600 hover:bg-red-900 text-white font-semibold px-6 py-2 rounded-xl mt-2 transition-all duration-300 hover:scale-115">No</button>
        </div>
    </div>
  `;
  dialog.appendChild(content);

  if (open) {
    body.appendChild(dialog);

    let dialogCard = document.querySelector("#dialog");
    let yes = document.querySelector("#yes");
    let no = document.querySelector("#no")

    setTimeout(() => {
      dialogCard.classList.remove("opacity-0");
      dialogCard.classList.add("opacity-100");
    }, 100);
    const close = document.querySelector("#close");
    close.addEventListener("click", () => {
      setTimeout(() => {
        dialogCard.classList.remove("opacity-100");
        dialogCard.classList.add("opacity-0");
      }, 100);
      setTimeout(() => {
        dialog.remove();
        window.location.href = "/pages/subject/index.html"
      }, 300);
    });

    no.addEventListener("click", () => {
      setTimeout(() => {
        dialogCard.classList.remove("opacity-100");
        dialogCard.classList.add("opacity-0");
      }, 100);
      setTimeout(() => {
        dialog.remove();
        window.location.href = "/pages/subject/index.html"
      }, 300);
    });

    yes.addEventListener("click", async () => {
      const response = await delSubject(id);

      if (response) {
          window.location.href = "/pages/subject/index.html"
      }
      });
      } else {
        dialog.remove();
        window.location.href = "/pages/subject/index.html"
      }
};
export const deleteTeacherDialog = (open, label, id) => {
  const body = document.querySelector("body");
  const dialog = document.createElement("div");
  const content = document.createElement("div");
  dialog.classList.add("absolute", "top-0", "left-0", "inset-0", "bg-black/50", "z-50");
  content.classList.add("w-full", "h-full", "flex", "items-center", "justify-center");

  content.innerHTML = `
    <div id="dialog" style="background-image: url(https://th.bing.com/th/id/OIP.zmEUIRW41dPbBKa5L_fqwAHaEK?cb=iwp2&rs=1&pid=ImgDetMain);" class="relative p-12 w-[500px] h-[250px] bg-white rounded-xl shadow-2xl border border-gray-400 bg-cover bg-center opacity-0 transition-opacity duration-400">
      <span id="close" class="absolute top-5 right-7 text-2xl text-red-500 cursor-pointer transition-all duration-300 hover:scale-135 hover:text-red-800"><i class="fa-solid fa-xmark"></i></span>
      <h1 class="text-2xl font-bold text-white text-center">${label}</h1>
        <div class="flex justify-center p-4 gap-4">
          <button type="button" id="yes" class="bg-green-600 hover:bg-green-900 text-white font-semibold px-6 py-2 rounded-xl mt-2 transition-all duration-300 hover:scale-115">Yes</button>
          <button type="button" id="no" class="bg-red-600 hover:bg-red-900 text-white font-semibold px-6 py-2 rounded-xl mt-2 transition-all duration-300 hover:scale-115">No</button>
        </div>
    </div>
  `;
  dialog.appendChild(content);

  if (open) {
    body.appendChild(dialog);

    let dialogCard = document.querySelector("#dialog");
    let yes = document.querySelector("#yes");
    let no = document.querySelector("#no")

    setTimeout(() => {
      dialogCard.classList.remove("opacity-0");
      dialogCard.classList.add("opacity-100");
    }, 100);
    const close = document.querySelector("#close");
    close.addEventListener("click", () => {
      setTimeout(() => {
        dialogCard.classList.remove("opacity-100");
        dialogCard.classList.add("opacity-0");
      }, 100);
      setTimeout(() => {
        dialog.remove();
        window.location.href = "/pages/teacher/index.html"
      }, 300);
    });

    no.addEventListener("click", () => {
      setTimeout(() => {
        dialogCard.classList.remove("opacity-100");
        dialogCard.classList.add("opacity-0");
      }, 100);
      setTimeout(() => {
        dialog.remove();
        window.location.href = "/pages/teacher/index.html"
      }, 300);
    });

    yes.addEventListener("click", async () => {
      const response = await delTeacher(id);

      if (response) {
          window.location.href = "/pages/teacher/index.html"
      }
      });
      } else {
        dialog.remove();
        window.location.href = "/pages/teacher/index.html"
      }
};

export const options = (place, data) => {
  place.innerHTML = "";
  place.innerHTML = `
    ${data.map((info) => `
      <option>${info.firstName} ${info.lastName}</option>
      `).join("")}
  `
}