// STEP 1: Called when user clicks "Generate Topics"
function generateTopics() {
  // Read syllabus text
  const syllabusText = document.getElementById("syllabus").value;

  // Split syllabus into lines (acts like syllabus parsing)
  const topics = syllabusText
    .split("\n")
    .map(t => t.trim())
    .filter(t => t !== "");

  // Get topics container
  const topicsDiv = document.getElementById("topics");
  topicsDiv.innerHTML = "<h2>Learning Topics</h2>";

  // Clear previous content section
  document.getElementById("content").innerHTML = "";

  // Create a clickable card for each topic
  topics.forEach(topic => {
    const div = document.createElement("div");
    div.className = "topic";
    div.innerText = topic;

    // When topic is clicked → show learning content
    div.onclick = () => showLearningContent(topic);

    topicsDiv.appendChild(div);
  });
}

// STEP 2: Shows learning content for a selected topic
function showLearningContent(topic) {
  const contentDiv = document.getElementById("content");

  contentDiv.innerHTML = `
    <h2>${topic}</h2>

    <p>
      ${topic} is introduced here in a simple and beginner-friendly manner.
      The learner is guided through the basic ideas before moving to advanced concepts.
    </p>

    <div class="status">
      Learning Status: Needs Support (Medium Risk)
    </div>
  `;
}

