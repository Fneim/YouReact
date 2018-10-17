let mySection = document.getElementById("displayVideo");
let myAside = document.getElementById("searchResults");
let viewPortWidth = document.documentElement.clientWidth;
let backArrow = document.getElementById("backArrow");
//client makes a search request
//click event triggers a function to load api
document.querySelector("#submit").addEventListener("click", function(e) {
  e.preventDefault();

  if (myAside.hasChildNodes == false) {
    gapi.client.load("youtube", "v3", YoutubeApiLoad);
  } else if (mySection.hasChildNodes) {
    mySection.innerHTML = "";
    myAside.innerHTML = "";
    gapi.client.load("youtube", "v3", YoutubeApiLoad);
  }
});

//make displayResults accessible to searchApi
window.displayResults = function(arr) {
  //loop through video array to display title, channelTitle of creator
  //setting the id of each heading and attaching event listener
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let title = arr[i].title;
    let creator = arr[i].creator;
    myAside.innerHTML += "";
    myAside.innerHTML +=
      '<div class="query">' +
      '<p onClick="iframeVideo(this.id)" id="' +
      i +
      '">' +
      title +
      "</p>" +
      "<span>" +
      creator +
      "</span>" +
      "</div>";
  }
};

//iframeVideo global and accessible to view
//when client clicks on video title, iframeVideo is called to display that video

window.iframeVideo = function(hId) {
  let videoArr = video;
  for (let i = 0; i < videoArr.length; i++) {
    if (hId == videoArr[i].num) {
      //method is called when iframeVideo is invoked
      //will display player section accordingly
      player(videoArr[i].id, videoArr[i].title, videoArr[i].creator);
    }
  }
};

const player = (vidId, vidTitle, vidCreator) => {
  mySection.setAttribute("style", "text-align:center; ");
  mySection.innerHTML = "";
  mySection.innerHTML +=
    "<div>" +
    '<iframe id="player" type="text/html" ' +
    'src="https://www.youtube.com/embed/' +
    vidId +
    '">' +
    ' frameborder="0" allowFullScreen>' +
    "</iframe>" +
    "</div>";
  mySection.innerHTML +=
    "<div>" + "<h3>" + vidTitle + "</h3>" + "<p>" + vidCreator + "</p>";
};
