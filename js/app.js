function changeTheme() {
  const themeCheckBox = document.querySelector(".theme-check-box");
  const body = document.body;
  if (themeCheckBox.checked) {
    if (body.classList.contains("light-theme")) {
      body.classList.replace("light-theme", "dark-theme");
    }
  } else {
    body.classList.replace("dark-theme", "light-theme");
  }
}
