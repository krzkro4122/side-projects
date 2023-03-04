import "./style.css";

const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  showSpinner();

  const data = new FormData(form);

  try {
    const response = await fetch(
      `https://fireship-dream-app.lm.r.appspot.com/dream`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: data.get("prompt"),
        }),
      }
    );

    if (response.ok) {
      const { image } = await response.json();

      const result = document.querySelector("#result");
      result.innerHTML = `<img src="${image}" width="512" />`;
    } else {
      const error = await response.text();
      alert(error);
      console.error(error);
    }
  } catch (error) {
    console.error(error);
    alert(error);
  }

  hideSpinner();
});

function showSpinner() {
  const button = document.querySelector("button");
  button.disabled = true;
  button.innerHTML = 'Generating the image... <span class="spinner">🧠</span>';
}

function hideSpinner() {
  const button = document.querySelector("button");
  button.disabled = false;
  button.innerHTML = `Generate`;
}
