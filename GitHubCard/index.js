/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// axios.get("https://api.github.com/users/GideonOgbuagu").then(response => {
//   console.log(response);
// });
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function cardsCreator(
  avatar_url,
  name,
  login,
  location,
  html_url,
  followers,
  following,
  bio
) {
  const card = document.createElement("div"),
    cardImg = document.createElement("img"),
    cardInfo = document.createElement("div"),
    usersName = document.createElement("h3"),
    username = document.createElement("p"),
    userLocation = document.createElement("p"),
    profile = document.createElement("p"),
    link = document.createElement("a"),
    userFollowers = document.createElement("p"),
    userFollowing = document.createElement("p"),
    userBio = document.createElement("p");

  card.classList.add("card");
  cardImg.src = avatar_url;
  cardInfo.classList.add("class-info");
  usersName.classList.add("name");
  username.classList.add("username");
  link.href = html_url;

  usersName.textContent = name;
  username.textContent = login;
  userLocation.textContent = `Location: ${location}`;
  profile.textContent = `Profile: `;
  link.textContent = html_url;
  userFollowers.textContent = `Followers: ${followers}`;
  userFollowing.textContent = `Following: ${following}`;
  userBio.textContent = `Bio: ${bio}`;

  card.append(cardImg);
  card.append(cardInfo);
  cardInfo.append(usersName);
  cardInfo.append(username);
  cardInfo.append(userLocation);
  cardInfo.append(profile);
  profile.append(link);
  cardInfo.append(userFollowers);
  cardInfo.append(userFollowing);
  cardInfo.append(userBio);

  return card;
}

const cards = document.querySelector(".cards");

axios.get("https://api.github.com/users/GideonOgbuagu").then(response => {
  //       console.log(response.data.followers_url)
  axios.get(response.data.followers_url).then(response => {
    // console.log(response.data);
    response.data.forEach(item => {
      axios.get(item.url).then(response => {
        console.log(response.data);
        cards.append(
          cardsCreator(
            response.data.avatar_url,
            response.data.name,
            response.data.login,
            response.data.location,
            response.data.html_url,
            response.data.followers,
            response.data.following,
            response.data.bio
          )
        );
      });
    });
  });
});

// avatar_url,
//   name,
//   login,
//   location,
//   html_url,
//   followers,
//   following,
//   bio
// https://api.github.com/users/GideonOgbuagu/followers

// axios.get("https://api.github.com/users/GideonOgbuagu/followers").then(response => {
//   console.log(response);
// });

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
