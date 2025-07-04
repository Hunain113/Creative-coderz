function highlight(card) {
  card.classList.add("clicked");
  setTimeout(() => card.classList.remove("clicked"), 400);
}