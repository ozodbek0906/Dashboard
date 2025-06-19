import { editClass, getClassById, getStudent } from "../../../api/api.js";
import { showToast } from "../../../utils/helper.js";
import { classModel } from "../../../modules/users.js";
import { appSidebar, options } from "../../../components/components.js";
import { navigations } from "../../../data/data.js";

const addClass = document.forms.addClass;

window.addEventListener("DOMContentLoaded", async () => {
  let user = await JSON.parse(localStorage.getItem("user"));

  if (!user) {
    window.location.href = "/pages/login/index.html";
  }

  if (user.role !== "teacher" && user.role !== "admin") {
    window.location.href = "/pages/login/index.html";
  }

  // Elements
  const classId = window.location.search.split("=")[1];
  const studentData = await getStudent();
  const classData = await getClassById(classId);
  const sidebar = document.querySelector("#sidebar");
  const selector = document.querySelector("#students");
  const students = [];
  const classForm = document.querySelector("#class-form");
  const submitBtn = document.querySelector("#submit-btn");
  const dropdownBtn = document.querySelector("#dropdown-btn");
  const dropdownContent = document.querySelector("#dropdown-content");
  const selectedStudents = document.querySelector("#selected-students");

  // Check if the class is already created
  if (!classData) {
    window.location.href = "/pages/class/index.html";
  }

  // Sidebar
  appSidebar(sidebar, navigations);
  setOptionData(studentData);

  dropdownBtn.addEventListener("click", () => {
    dropdownContent.classList.toggle("active-dropdown");
  });

  function setOptionData(data) {
    data.forEach((student) => {
      dropdownContent.innerHTML += `<label id="option" class="text-gray-800 py-2 px-3 border border-gray-300 rounded-md cursor-pointer"><input type="checkbox" name="students" value="${student.id}" class="mr-2 w-4 h-4">${student.firstName} ${student.lastName}</label>`;
    });

    // Add event listeners to checkboxes
    const checkboxes = dropdownContent.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", (e) => {
        const studentId = e.target.value;

        if (e.target.checked) {
          if (!students.includes(studentId)) {
            students.push(studentId);
          }
        } else {
          const index = students.indexOf(studentId);
          if (index > -1) {
            students.splice(index, 1);
          }
        }
        renderSelectedStudents(data);
      });
    });
  }

  function renderSelectedStudents(studentData) {
    selectedStudents.innerHTML = students
      .map((studentId) => {
        const student = studentData.find((s) => s.id === studentId);
        return `<p class="text-gray-800 py-2 px-3 border border-gray-300 rounded-md">${student.firstName} ${student.lastName}</p>`;
      })
      .join("");
  }

    submitBtn.addEventListener("click", async (e) => {
      e.preventDefault()
      // Validate required fields
      const grade = classForm.grade.value;
      const room = classForm.room.value;
      const icon = classForm.icon.value;
      const specialization = classForm.specialization.value;
  
      if (!grade || !room || !icon || !specialization) {
        showToast("error", "Please fill in all required fields");
        return;
      }
  
      if (students.length === 0) {
        showToast("error", "Please select at least one student");
        return;
      }
  
      const classData = {
        grade,
        room,
        icon,
        specialization,
        students
      };
  
        const response = await editClass(classId, classData);
        if (response) {
          showToast("Class added successfully", "success");
          window.location.href = "/pages/class/index.html"
          // Reset form
          classForm.reset();
          students.length = 0;
          // renderSelectedStudents(studentData);
        } else {
          showToast("Failed to add class", "error");
        }
     
    });
});
