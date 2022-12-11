submitForm = (e) => {
  e.preventDefault();

  let getprompt = document.querySelector("#prompt").value;
  let getSize = document.querySelector("#size").value;

  console.log(`sumbitted ${getprompt} and ${getSize}`);

  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: getprompt,
      size: getSize,
    }),
  };
  let getResponse = fetch("http://localhost:5000/thisOpenAi/createImg", options)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let getDisplayImg = document.querySelector("#aiImg");
      getDisplayImg.src = json.data;
    });
  //if (getResponse.ok) return getResponse.json();
};
document.querySelector("#genForm").addEventListener("submit", submitForm);
