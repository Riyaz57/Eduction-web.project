// Registration Form Handling
document.getElementById("regForm").addEventListener("submit", function(e){
  e.preventDefault();
  
  // Show success message
  document.getElementById("successMsg").classList.remove("hidden");

  // Reset form
  document.getElementById("regForm").reset();
});