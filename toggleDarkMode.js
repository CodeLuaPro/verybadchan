//selects the select element
let selectTheme = document.querySelector("#select-theme");
let darkOption = document.querySelector("#dark");
let lightOption = document.querySelector("#light");
//selects the stylesheet
let style = document.querySelector("#pagestyle");
//local storage
let darkmode = localStorage.getItem('darkmode');
let lightmode = localStorage.getItem('lightmode');

style.setAttribute("href", "./css/style.css");

const enableDarkMode = () => {
    style.setAttribute("href", "./css/style.css");
    localStorage.setItem('darkmode', 'enabled');
    localStorage.setItem('lightmode', null);
};

const enableLightMode = () => {
    style.setAttribute("href", "./css/style2.css");
    localStorage.setItem('lightmode', 'enabled');
    localStorage.setItem('darkmode', null);
};

if (darkmode === 'enabled') {
  enableDarkMode();
  darkOption.setAttribute("selected", "true");
}
if (lightmode === 'enabled') {
  enableLightMode();
  lightOption.setAttribute("selected", "true");
}

selectTheme.addEventListener('change', () => {
  if (selectTheme.value == "dark") {
    darkmode = localStorage.getItem('darkmode');
    enableDarkMode();
  }
  if (selectTheme.value == "light") {
    lightmode = localStorage.getItem('lightmode');
    enableLightMode();
  }
});
