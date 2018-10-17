//YoutubeApi is global, accessible to controller.js
//loading the youtube api
window.YoutubeApiLoad = function() {
  console.log("loaded");
  gapi.client.setApiKey("AIzaSyAeSZTCYZJ4_ZHttJDMkNXGzNVeKmseD74");
  searchApi();
};

//searchApi global and accessible to controller
//searchApi takes query and searches the youtube api for matching data
window.searchApi = function() {
  let query = document.getElementById("searchQuery").value;
  //sending a req body
  let request = gapi.client.youtube.search.list({
    order: "viewCount",
    part: "snippet",
    q: query,
    maxResults: 50,
    type: "video"
  });

  //video arr contain search results
  window.video = [];
  video.length = 0;

  request.execute(function(res) {
    console.log("success");
    console.log(res.items);
    let str = res.items;

    //loop through the JSON object, pushing result object into video arr
    for (let i = 0; i < str.length; i++) {
      video.push({
        id: str[i].id.videoId,
        num: i,
        title: JSON.stringify(str[i].snippet.title),
        creator: JSON.stringify(str[i].snippet.channelTitle)
      });
    }

    //passing video arr as an argument
    displayResults(video);
  });
};
