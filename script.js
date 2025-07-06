document.getElementById("theme-toggle").onclick = function () {
  document.body.classList.toggle("dark");
};
// Show popup on nav SignUp click
  document.getElementById("signup").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("signup-popup").style.display = "flex";
  });

  function closeSignup() {
    document.getElementById("signup-popup").style.display = "none";
  }

  // Handle form submit (frontend only)
  document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
      alert("Please fill all fields.");
      return;
    }

    console.log("Signed Up:", { name, email, password });
    document.getElementById("signupMessage").textContent = "Signup Successful (Frontend Only)";
    document.getElementById("signupForm").reset();

    // Close popup after delay
    setTimeout(() => {
      closeSignup();
      document.getElementById("signupMessage").textContent = "";
    }, 2000);
  });