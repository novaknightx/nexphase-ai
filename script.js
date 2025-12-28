function generateTopics() {
  const syllabusText = document.getElementById("syllabus").value;

  // Mock processing (acts like AI)
  const topics = syllabusText.split("\n").filter(t => t.trim() !== "");

  const topicsDiv = document.getElementById("topics");
  topicsDiv.innerHTML = "<h3>Topics</h3>";

  topics.forEach(topic => {
    const div = document.createElement("div");
    div.className = "topic";
    div.innerText = topic;
    div.onclick = () => showContent(topic);
    topicsDiv.appendChild(div);
  });
}

function showContent(topic) {
  const contentDiv = document.getElementById("content");

  contentDiv.innerHTML = `
    <h3>${topic}</h3>
    <p>${topic} is explained here in a beginner-friendly way.</p>
    <div class="status">
      Status: Needs Support (Medium Risk)
    </div>
  `;
}
