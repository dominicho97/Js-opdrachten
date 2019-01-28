const episodes = document.querySelectorAll(`.episode-item`);

const sortEpisodeByTitle = ($a, $b) => {
  const titleA = document.getElementsByTagName('span') ;
  const titleB = ;
  if(titleA < titleB){
    return -1;
  }
  if(titleA > titleB){
    return 1;
  }
  return 0;
};

episodes.sort(sortEpisodeByTitle);

episodes.forEach($ep => console.log($ep.querySelector(`.episode-title`).textContent.toLowerCase().slice(1)));