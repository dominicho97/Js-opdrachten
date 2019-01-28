const $episodes = document.querySelectorAll(`.episode-item`);
console.log(episodes);
$episodes.forEach($episode => {
  if ($director.textContent !== `Freddy Lamarr`) {
    console.log($director);
    $director.parentNode.parentNode.remove();
  }
});
