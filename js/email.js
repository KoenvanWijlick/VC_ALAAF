document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("sponsorForm");
  
    if (form) {
      form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevents default page reload
  
        const formData = new FormData(form);
  
        try {
          const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
              "Accept": "application/json"
            }
          });
  
          if (response.ok) {
            form.style.display = "none";
            document.getElementById("formResponse").style.display = "block";
          } else {
            alert("Er is iets fout gegaan! Probeer het opnieuw.");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("Er is een fout opgetreden. Probeer het later opnieuw.");
        }
      });
    }
  });
  