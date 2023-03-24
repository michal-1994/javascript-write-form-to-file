const getYear = () => {
  const currentYear = new Date().getFullYear();
  document.getElementById("footerYear").innerText = currentYear;
};

const saveFile = (event) => {
  event.preventDefault();

  // Filename
  const filename = document.getElementById("filename");

  // Form fields
  const input = document.getElementById("input-id");
  const textarea = document.getElementById("textarea-id");

  // Form data
  let data =
    "Input value: " + input.value + "\n\n" + "Textarea value: " + textarea.value;

  // Configuration
  const blob = new Blob([data], { type: "text/plain" });

  let link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = filename.value + ".txt";

  document.body.appendChild(link);
  link.style = "display: none";

  link.click();
  window.URL.revokeObjectURL(blob);
};

init = () => {
  getYear();
};

init();
