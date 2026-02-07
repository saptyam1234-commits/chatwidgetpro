(function () {

  // 🔹 fallback for CodePen
  const scriptTag = document.currentScript || document.querySelector("script[data-key]");
  const apiKey = scriptTag?.dataset.key || "test_key";

  /* ---------- CHAT BUTTON ---------- */
  const btn = document.createElement("button");
  btn.innerText = "💬";
  Object.assign(btn.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    border: "none",
    background: "#4F46E5",
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer",
    zIndex: "9999"
  });
  document.body.appendChild(btn);

  /* ---------- CHAT BOX ---------- */
  const box = document.createElement("div");
  Object.assign(box.style, {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "320px",
    height: "420px",
    background: "#fff",
    borderRadius: "12px",
    display: "none",   // production
    flexDirection: "column",
    zIndex: "9999",
    boxShadow: "0 15px 40px rgba(0,0,0,.3)",
    overflow: "hidden",
    fontFamily: "Arial, sans-serif"
  });
  document.body.appendChild(box);

  /* ---------- HEADER ---------- */
  const header = document.createElement("div");
  header.innerHTML = `
    <span>ChatWidgetPro</span>
    <span style="cursor:pointer">✕</span>
  `;
  Object.assign(header.style, {
    background: "#4F46E5",
    color: "#fff",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "13px",
    fontWeight: "bold"
  });
  box.appendChild(header);

  /* ---------- MESSAGES ---------- */
  const messages = document.createElement("div");
  Object.assign(messages.style, {
    flex: "1",
    padding: "10px",
    overflowY: "auto",
    background: "#F9FAFB"
  });
  box.appendChild(messages);

  /* ---------- INPUT ---------- */
  const input = document.createElement("input");
  input.placeholder = "Type your message...";
  Object.assign(input.style, {
    width: "100%",
    padding: "10px",
    border: "none",
    borderTop: "1px solid #eee",
    outline: "none"
  });
  box.appendChild(input);

  /* ---------- TOGGLE ---------- */
  btn.onclick = () => box.style.display = "flex";
  header.children[1].onclick = () => box.style.display = "none";

})();
