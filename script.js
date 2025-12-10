function updateCategoryFilter() {
  const categories = [...new Set(images.map(i => i.category))];
  const catSelect = document.getElementById("categoryFilter");

  categories.forEach(c => {
    const option = document.createElement("option");
    option.value = c;
    option.textContent = c;
    catSelect.appendChild(option);
  });
}

function updateGallery() {
  const search = document.getElementById("searchBar")?.value.toLowerCase() || "";
  const category = document.getElementById("categoryFilter")?.value || "all";
  const sort = document.getElementById("sortFilter")?.value || "az";

  let filtered = images.filter(img =>
    img.title.toLowerCase().includes(search) &&
    (category === "all" || img.category === category)
  );

  if (sort === "az") filtered.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "za") filtered.sort((a, b) => b.title.localeCompare(a.title));

  const gallery = document.getElementById("gallery");
  if (!gallery) return;

  gallery.innerHTML = "";

  filtered.forEach(img => {
    gallery.innerHTML += `
      <div class="card">
        <img src="${img.src}">
        <div class="card-title">${img.title}</div>
      </div>
    `;
  });
}

window.onload = () => {
  if (document.getElementById("categoryFilter")) updateCategoryFilter();
  updateGallery();
};