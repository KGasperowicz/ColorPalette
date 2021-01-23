let $color;
let $colorHover;
let $colorDownload;

$color = document.querySelectorAll(".colorTile");
$colorDownload = document.querySelectorAll(".color-download");

const colorTileHover = (e) => {
  const $colorHover = e.target.querySelector(".color-hover");
  $colorHover.style.opacity = 0.9;
  $colorHover.innerHTML = "COPY";
};

const colorTileHide = (e) => {
  const $colorHover = e.target.querySelector(".color-hover");
  $colorHover.style.opacity = 0;
};

const hexData = (e) => {
  const hexData = e.target.closest(".colorTile").querySelector(".color-inner").dataset.hex;
  updateClipboard(hexData);
  e.target.innerHTML = "COPIED";
};

const hexDataAll = (e) => {
  const allColors = e.target.closest(".colors").querySelectorAll(".color-inner");
  const allHovers = e.target.closest(".colors").querySelectorAll(".color-hover");
  allHovers.forEach((element, i) => {
    element.style.opacity = 0.9;
    element.innerHTML = "COPIED";
    setTimeout(() => {
      element.style.opacity = 0;
    }, 2000 + i * 500);
  });

  const x = Array.from(allColors)
    .map((c) => c.dataset.hex)
    .join("\n");
  updateClipboard(x);
};

function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip);
}

$color.forEach((element) => {
  element.addEventListener("mouseenter", colorTileHover);
  element.addEventListener("mouseleave", colorTileHide);
  element.addEventListener("click", hexData);
});

$colorDownload.forEach((element) => {
  element.addEventListener("click", hexDataAll);
});
