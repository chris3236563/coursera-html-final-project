function hookUpNavEventHandlers() {
  console.log("In hook up events function");
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    console.log("found an href " + link.nodeName);
    link.addEventListener("click", function () {
      const target = document.querySelector(this.getAttribute("href"));

      // Remove active class from all sections
      document.querySelectorAll(".section").forEach((sec) => {
        sec.classList.remove("active");
      });

      // Add active class to the clicked section
      if (target) {
        target.classList.add("active");
      }
    });
  });
}

function addRecommendation() {
  const recommendationList = document.getElementById("recommendationList");
  const nameValue = document.getElementById("recommendation-name");
  const recommendationContent = document.getElementById(
    "recommendationMessageId"
  );
  const newRecommendation = document.createElement("div");
  newRecommendation.setAttribute("class", "card");
  newRecommendation.innerHTML = recommendationContent.value;
  recommendationList.appendChild(newRecommendation);
  nameValue.value = "";
  recommendationContent.value = "";
  return newRecommendation;
}

function displaySection(sectionId) {
  console.log("section to display: " + sectionId);
  const sections = document.querySelectorAll("#all-sections *");
  sections.forEach((element) => {
    console.log("id" + sectionId);
    console.log("get id attribute" + element.getAttribute("id"));

    if (element.getAttribute("id") === sectionId) {
      element.classList.add("active");
    } else {
      console.log("remove active from this element", element.tagName);
      element.classList.remove("active");
    }
    console.log(element.id);
  });
}
