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
