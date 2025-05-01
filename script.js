document.getElementById("change-text-btn").addEventListener("click", () => {
  const introText = document.getElementById("intro-text");
  introText.textContent = "This text has been changed!";
});

document.getElementById("change-style-btn").addEventListener("click", () => {
  const paragraph = document.getElementById("style-paragraph");
  paragraph.style.color = "#fff";
  paragraph.style.background = "#c23295";
  paragraph.style.padding = "8px";
  paragraph.style.borderRadius = "5px";
});

let visible = false;
document.getElementById("toggle-element-btn").addEventListener("click", () => {
  const container = document.getElementById("element-container");
  if (!visible) {
    const newElement = document.createElement("div");
    newElement.id = "dynamic-element";
    newElement.textContent = "This new element was added dynamically.";
    newElement.style.marginTop = "6px";
    container.appendChild(newElement);
  } else {
    const existingElement = document.getElementById("dynamic-element");
    if (existingElement) {
      container.removeChild(existingElement);
    }
  }
  visible = !visible;
});
