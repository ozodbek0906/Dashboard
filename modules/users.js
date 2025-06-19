export const userModel = {
  username: "",
  email: "",
  password: "",
  image: "",
  role: "",
  firstName: "",
  lastName: "",
  age: 0,
  gender: "",
  socialMedia: {
    facebook: "Add Facebook",
    twitter: "Add twitter",
    instagram: "Add instagram",
    google: "Add google+",
  },
  information: null,
  aboutme: "",
  classes: [],
  subjects: [],
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const studentModel = {
  id: "",
  firstName: "",
  lastName: "",
  age: 0,
  passportSeries: "",
  email: "",
  address: "",
  phoneNumber: 0,
  father: "",
  mother: "",
  expireDate: "",
  role: "",
};

export const teacherModel = {
  id: "",
  firstName: "",
  lastName: "",
  age: 0,
  passportSeries: "",
  email: "",
  address: "",
  phoneNumber: 0,
  subject: "",
  expireDate: "",
  subjects: [],
  role: "",
};

export const subjectModel = {
  subjectName: "",
  teacherName: "",
  duration: "",
  imageUrl: "",
};

export const classModel = {
  icon: "",
  grade: "",
  specialization: "",
  room: "",
  students: []
};