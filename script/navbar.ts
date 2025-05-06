function idk(parent_nav?: Element) {
  if (parent_nav != null) {
    const headingText = document.createTextNode("Big Head!");
    parent_nav.appendChild(headingText);
  }
}

export default idk;
