document.addEventListener("DOMContentLoaded", function () {
  // Get the mode toggle button
  const modeToggle = document.getElementById("mode-toggle");
  // Check if the user has a stored preference and apply it
  if (localStorage.getItem("theme") == "light") {
    document.documentElement.classList.add("light-mode");
    modeToggle.innerText = "🌕";
  } else {
    modeToggle.innerText = "☀️";
  }
  // Add an event listener to the button
  modeToggle.addEventListener("click", () => {
    // Toggle the dark-mode class on the :root element
    document.documentElement.classList.toggle("light-mode");

    if (document.documentElement.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
      modeToggle.innerText = "🌕";
    } else {
      modeToggle.innerText = "☀️";
      localStorage.removeItem("theme");
    }
    // Save the user's preference in a cookie or local storage if needed
  });


const resumeButton = document.getElementsByClassName("resume");
console.log(resumeButton);
  for(let button of resumeButton){
    button.addEventListener("click",() => {
      window.open(
        "https://drive.google.com/file/d/14RAXZV6gs-0wg2ZfMfqDbH-EHHMlFMdC/view?usp=sharing", "blank"
        );
    })
  }
});
