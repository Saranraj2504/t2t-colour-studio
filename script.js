let selectedCategory = "all";

function toggleMenu(){
  document.getElementById("mainNav").classList.toggle("open");
}

document.querySelectorAll("#mainNav a").forEach(a => {
  a.addEventListener("click", () => document.getElementById("mainNav").classList.remove("open"));
});

function selectCategory(category, button){
  selectedCategory = category;
  document.querySelectorAll(".category").forEach(b => b.classList.remove("active"));
  button.classList.add("active");
  filterServices();
}

function filterServices(){
  const term = document.getElementById("serviceSearch").value.toLowerCase().trim();
  document.querySelectorAll(".service-card").forEach(card => {
    const categoryMatch = selectedCategory === "all" || card.dataset.category === selectedCategory;
    const textMatch = card.innerText.toLowerCase().includes(term);
    card.classList.toggle("hidden", !(categoryMatch && textMatch));
  });
}

function bookService(service){
  const message = `Hello T2T Colour Studio, I am interested in ${service}. Please share the price and available appointment times.`;
  window.open("https://wa.me/917538860430?text=" + encodeURIComponent(message), "_blank");
}

function sendEnquiry(event){
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  const text =
`Hello T2T Colour Studio,

Name: ${name}
My phone: ${phone}
Service: ${service}
Preferred date/time: ${message || "Not specified"}

Please let me know the availability and price.`;

  window.open("https://wa.me/917538860430?text=" + encodeURIComponent(text), "_blank");
}

document.getElementById("year").textContent = new Date().getFullYear();
