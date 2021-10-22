const userData = {
  name: "muratore",
  youtube: 'rocketseat',
  facebook: 'alessandro.muratore.165',
  instagram: 'alemuratore',
  twitter: 'rocketseat'
} 
function changeSocialMediaLinks(){
  for (let li of socialMedia.children){
      const socialLinks = li.className;      
      li.children[0].href =`https://www.${socialLinks}.com/${userData[socialLinks]}`;
  }
}
changeSocialMediaLinks();
// 
function getGithubProfileData(){
  const url = `https://api.github.com/users/${userData.name}`;
  fetch(url).then(response => response.json())
  .then((data) => {
    userName.textContent = data.name;
    userBio.textContent =data.bio; 
    userAvatar.src = data.avatar_url;
    userLink.href = data.html_url;
    userLogin.textContent = data.login;
    
  } )
 console.log(url);
  
}
getGithubProfileData()