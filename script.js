const userInput = document.querySelector("#userinput");
const headingFour = document.querySelector("h4");
userInput.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    let userTask = userInput.value;
    const taskList = document.createElement("div");
    const newInnerHtml = `
    <div class="task">
    <div class="taskname">
    <span>${userTask}</span>
    </div>
    <div class="check-cross">
    <input type="checkbox" name="" class="check">
    <span class="cross">X</span>
    </div>
    </div>
    <hr>`;
    taskList.innerHTML = newInnerHtml;
    headingFour.append(taskList);

    userInput.value = "";

    const cross = document.querySelector("h4");
    cross.addEventListener("click", (e) => {
      if (e.target.classList.contains("cross")) {
        const remove = e.target;
        const removeItem = remove.parentNode.parentNode.parentNode;
        removeItem.remove();
      }
      if (e.target.classList.contains("check")) {
        e.target.parentNode.previousElementSibling.style.textDecoration =
          "line-through";
      }
    });
  }
});
