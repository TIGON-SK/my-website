const text1 = "Hi!, ";
const text2 = "I am Martin Hanák";
const text3 = "Web developer.";
let texts = [text1, text2, text3];
let i = 0;
let index = 0;

function typeWriter() {
  if (i < texts.length) {
    let element = document.getElementById("intro-text");
    if (index < texts[i].length) {
      element.innerHTML += texts[i].charAt(index);
      index++;
      setTimeout(typeWriter, 50);
    } else {
      i++;
      index = 0;
      element.innerHTML += "<br>";
      setTimeout(typeWriter, 500);
    }
  }
}
function jumpToSection(sectionId) {
  let section = document.getElementById(sectionId);
  section.offsetTop;
  console.log(section.offsetTop);
  window.scrollTo({
    top: section.offsetTop - 70,
    behavior: "smooth",
  });
}
typeWriter();
