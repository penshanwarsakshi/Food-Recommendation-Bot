const messages = document.getElementById("messages");
const userInput = document.getElementById("userInput");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.innerText = text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

function getBotReply(input) {
  const text = input.toLowerCase();

  if (text.includes("weight loss")) {
    return "For weight loss, eat salads, fruits, grilled chicken, oats, and avoid sugary foods.";
  }

  if (text.includes("muscle")) {
    return "For muscle gain, eat eggs, chicken, paneer, milk, bananas, and nuts.";
  }

  if (text.includes("healthy")) {
    return "Healthy foods include fruits, vegetables, brown rice, oats, curd, and nuts.";
  }

  if (text.includes("junk")) {
    return "Try to avoid junk food. Choose homemade meals, fruits, and water instead.";
  }

  if (text.includes("breakfast")) {
    return "Healthy breakfast options: oats, boiled eggs, fruit bowl, smoothies.";
  }

  if (text.includes("lunch")) {
    return "Balanced lunch: rice or roti, vegetables, dal, salad, and curd.";
  }

  if (text.includes("dinner")) {
    return "Light dinner is best: soup, vegetables, grilled paneer or chicken.";
  }

  if (text.includes("workout")) {
    return "Workout at least 30–45 minutes daily. Mix cardio and strength training.";
  }

  return "Eat balanced meals, drink water, sleep well, and stay consistent 💪";
}

function sendMessage() {
  const text = userInput.value.trim();
  if (text === "") return;

  addMessage(text, "user");
  userInput.value = "";

  setTimeout(() => {
    const reply = getBotReply(text);
    addMessage(reply, "bot");
  }, 500);
}

userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
