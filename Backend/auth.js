// isLoggedIn =>
export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data !== null) {
    // If user is logged in, return true
    return true;
  } else {
    // If user is not logged in, return false
    return false;
  }
};
//doLogin => data=>set to localStorage

export const doLogin = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();
};

//doLogout => remove from localStorage
export const doLogout = (next) => {
  localStorage.removeItem("data");
  next();
};

//get currentUser
export const getCurrentUserDetail = () => {
  if (isLoggedIn()) {
    const userData = JSON.parse(localStorage.getItem("data"));
    // console.log(userData);
    return userData;
  } else {
    return false;
  }
};
