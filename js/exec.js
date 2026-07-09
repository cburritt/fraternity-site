document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("#exec-grid");
  if (!grid || typeof EXEC_MEMBERS === "undefined") return;

  EXEC_MEMBERS.forEach((member) => {
    const card = document.createElement("div");
    card.className = "exec-card";

    const photoWrap = document.createElement("div");
    photoWrap.className = "exec-photo-wrap";
    const img = document.createElement("img");
    img.src = member.image;
    img.alt = member.name;
    img.loading = "lazy";
    photoWrap.appendChild(img);

    const info = document.createElement("div");
    info.className = "exec-info";
    info.innerHTML = `
      <h3>${member.name}</h3>
      <p class="exec-position">${member.position || "TBD"}</p>
      <p class="exec-meta">${member.major || "Major TBD"}</p>
      <p class="exec-meta">${member.hometown || "Hometown TBD"}</p>
    `;

    card.appendChild(photoWrap);
    card.appendChild(info);
    grid.appendChild(card);
  });
});
