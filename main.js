const socialMediaLinks = {
  github: 'felipefama',
  linkedin: 'felipe-fama',
  facebook: 'lipeh.fama',
  instagram: 'lipeh.mesquita',
  twiter: 'lipehfama'
}

const changeSocialMedialLinks = () => {
  for (let li of socialLinks.children) {
    const socialMedia = li.getAttribute('class');

    if (socialMedia === 'linkedin')
      li.children[0].href = `https://${socialMedia}.com/in/${socialMediaLinks[socialMedia]}`;

    else
      li.children[0].href = `https://${socialMedia}.com/${socialMediaLinks[socialMedia]}`;
  }
}

changeSocialMedialLinks();

const getGitHubProfileData = (input = socialMediaLinks.github) => {
  const favIcon = document.querySelector("link[rel='shortcut icon']");

  const url = `https://api.github.com/users/${input}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userImage.src = data.avatar_url;
      userLogin.textContent = data.login;

      favIcon.href = data.avatar_url;
      document.title = `${data.name} | NLW Heat 2021`;
    });
}

const searchButton = document.querySelector('#search-button');
const githubNickInput = document.querySelector('#github-nick-input');

const getGithubUserInput = () => {
  const githubUserNick = githubNickInput.value;

  if (!githubUserNick) return;

  else getGitHubProfileData(githubUserNick);
}

searchButton.addEventListener('click', getGithubUserInput);

githubNickInput.addEventListener('keyup', (event) => {

  let key = event.keyCode;

  if (key === 13) getGithubUserInput();

});

getGitHubProfileData();

const optionSearch = document.querySelector('#option-search');
optionSearch.addEventListener('click', () => displayBox('option-box'));

const displayBox = (boxId) => {
  const box = document.querySelector(`#${boxId}`);

  box.classList.add('display');

  box.addEventListener('click', e => {
    const el = e.target;
    if (el.id == boxId) {
      box.classList.remove('display');
    }
  });

  const closeButton = document.querySelector('#close-box');
  closeButton.addEventListener('click', () => box.classList.remove('display'));

}
