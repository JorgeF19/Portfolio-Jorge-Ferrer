function openPopup(url) {
  window.open(url, "_blank");
}
function copyToClipboard(text, event) {
  navigator.clipboard.writeText(text).then(() => {
    showNotification(
      "Email copied to clipboard!",
      event.clientX,
      event.clientY
    );
  });
}
function showNotification(message, x, y) {
  const notification =
    document.getElementById("notification") || document.createElement("div");
  notification.textContent = message;
  notification.style.left = `${x}px`;
  notification.style.top = `${y}px`;
  notification.classList.remove("hidden");
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
    notification.classList.add("hidden");
  }, 1000);
}
