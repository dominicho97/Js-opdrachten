/*const episodes = document.querySelectorAll(`.episode-title`);
const $currentEpisode = document.querySelector(`.subtitle`) // added .classlist.add("highlight)")
  .classList.add("highlight");
const currentTitle = episodes.forEach($episode => {
  if ($episode.textContent === currentTitle) {
    $episode.classList = `highlight`;
  }
});

console.log($currentEpisode.textContent);*/

const episodes = document.querySelectorAll(`.episode-title`);
const $currentEpisode = document.querySelector(`.subtitle`);
const currentTitle = episodes.forEach($episode => {
  if ($episode.textContent === currentTitle) {
    $episode.classList = `highlight`;
  }
});
console.log($currentEpisode.textContent);

