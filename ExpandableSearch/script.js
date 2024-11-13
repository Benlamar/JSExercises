function searText()
{}

window.onload = () => {
  const searchInput = document.querySelector(".inputSearch");
  const searchButton = document.getElementById("searchButton");

  console.log(searchInput, searchButton);

  searchButton.addEventListener("click", () => {
    searchInput.classList.toggle("active-search");
  });

  searchInput.addEventListener("input", (e)=>{
    console.log(e.target.value)
  });


  document.querySelector('main').addEventListener("click", (e) => {
      searchInput.classList.remove("active-search");
  });
};
