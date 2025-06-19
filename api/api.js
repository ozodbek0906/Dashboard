const API_URL = "http://localhost:3000";

export const checkEmail = async (email) => {
  const response = await fetch(`${API_URL}/users?email=${email}`);
  const data = await response.json();
  return data[0];
};

export const checkUsername = async (username) => {
  const response = await fetch(`${API_URL}/users?username=${username}`);
  const data = await response.json();
  return data[0];
};

export const PostUser = async (user) => {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    body: JSON.stringify(user),
  });

  const data = await response.json();
  return data;
};

export const updateUser = async (id, user) => {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(user),
  });

  const data = await response.json();
  return data;
};

export const loginUser = async (email, password) => {
  const user = await checkEmail(email);
  if (!user) {
    return null;
  }

  if (user.password === password) {
    return user;
  }
  return null;
};

export const postStudent = async (student) => {
  const response = await fetch(`${API_URL}/students`, {
    method: "POST",
    body: JSON.stringify(student),
  });

  const data = await response.json();
  return data;
};
export const editStudent = async (id, student) => {
  const response = await fetch(`${API_URL}/students/${id}`, {
    method: "PUT",
    body: JSON.stringify(student),
  });

  const data = await response.json();
  return data;
};
export const getStudent = async () => {
  const response = await fetch(`${API_URL}/students`, {
    method: "GET",
  });

  const data = await response.json();
  return data;
};

export const delStudent = async (id) => {
  const response = await fetch(`${API_URL}/students/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();
  return data;
};

export const postTeacher = async (teacher) => {
  const response = await fetch(`${API_URL}/teachers`, {
    method: "POST",
    body: JSON.stringify(teacher),
  });

  const data = await response.json();
  return data;
};
export const editTeacher = async (id, teacher) => {
  const response = await fetch(`${API_URL}/teachers/${id}`, {
    method: "PUT",
    body: JSON.stringify(teacher),
  });

  const data = await response.json();
  return data;
};

export const getTeacher = async () => {
  const response = await fetch(`${API_URL}/teachers`, {
    method: "GET",
  });

  const data = await response.json();
  return data;
};
export const delTeacher = async (id) => {
  const response = await fetch(`${API_URL}/teachers/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();
  return data;
};

export const getProfileInformation = async (id) => {
  const response = await fetch(`${API_URL}/users?id=${id}`, {
    method: "GET",
  });

  const data = await response.json();
  return data[0];
};

export const postSubject = async (subject) => {
  const response = await fetch(`${API_URL}/subjects`, {
    method: "POST",
    body: JSON.stringify(subject),
  });

  const data = await response.json();
  return data;
};
export const editSubject = async (id, subject) => {
  const response = await fetch(`${API_URL}/subjects/${id}`, {
    method: "PUT",
    body: JSON.stringify(subject),
  });

  const data = await response.json();
  return data;
};

export const getSubject = async () => {
  const response = await fetch(`${API_URL}/subjects`, {
    method: "GET",
  });

  const data = await response.json();
  return data;
};

export const delSubject = async (id) => {
  const response = await fetch(`${API_URL}/subjects/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();
  return data;
};

export const postClass = async (classdata) => {
  const response = await fetch(`${API_URL}/classes`, {
    method: "POST",
    body: JSON.stringify(classdata),
  });

  const data = await response.json();
  return data;
};

export const editClass = async (id, classdata) => {
  const response = await fetch(`${API_URL}/classes/${id}`, {
    method: "PUT",
    body: JSON.stringify(classdata),
  });

  const data = await response.json();
  return data;
};

export const getClass = async () => {
  const response = await fetch(`${API_URL}/classes`, {
    method: "GET",
  });

  const data = await response.json();
  return data;
};

export const delClass = async (id) => {
  const response = await fetch(`${API_URL}/classes/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();
  return data;
};

export const getClassById = async (id) => {
  const response = await fetch(`${API_URL}/classes/${id}`, {
    method: "GET",
  });

  const data = await response.json();
  return data;
};
export const getDashboardInformation = async () => {
  const teachersResponse = await fetch(`${API_URL}/teachers`, {
    method: "GET",
  });

  const studentsResponse = await fetch(`${API_URL}/students`, {
    method: "GET",
  });

  const subjectsResponse = await fetch(`${API_URL}/subjects`, {
    method: "GET",
  });

  const classesResponse = await fetch(`${API_URL}/classes`, {
    method: "GET",
  });

  const teachers = await teachersResponse.json();
  const students = await studentsResponse.json();
  const subjects = await subjectsResponse.json();
  const classes = await classesResponse.json();

  const data = [
    {
      name: "Teachers",
      number: teachers.length,
      icon: "fa-solid fa-user-tie",
      color: "bg-blue-500",
    },
    {
      name: "Students",
      number: students.length,
      icon: "fa-solid fa-user",
      color: "bg-green-500",
    },
    {
      name: "Subjects",
      number: subjects.length,
      icon: "fa-solid fa-book",
      color: "bg-red-500",
    },
    {
      name: "Classes",
      number: classes.length,
      icon: "fa-solid fa-school",
      color: "bg-yellow-500",
    },
  ];

  return data;
};
