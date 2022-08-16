function isValidUrl(string) {
  const res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)
  return (res!==null)
}

function startIt(){
  let myUrl = document.getElementById("urlText").value;
  if (myUrl == "") {
    alert("Please Enter URL");
  }

  else if (myUrl !== "" && isValidUrl(myUrl) == true) {
    grabFav();
  }

  else {
    alert("Please Enter Valid URL");
  }

  function grabFav(){
    const myImg = document.getElementById("theImg");
    const mySize = document.getElementById("size").value;
    const duckApi = "https://icons.duckduckgo.com/ip3/";
    const gApi = "https://s2.googleusercontent.com/s2/favicons?domain=";

    if (mySize == "default"){
      const h1 = "https://";
      const h2 = "http://";
      
      myUrl = myUrl.replace(h1, "");
      myUrl = myUrl.replace(h2, "");
      myImg.src = duckApi + myUrl + ".ico";
    }

    else if (mySize == 16) {
      myImg.src = gApi + myUrl + "&sz=16";
    } 
    else if (mySize == 32) {
      myImg.src = gApi + myUrl + "&sz=32";
    } 
    else if (mySize == 48) {
      myImg.src = gApi + myUrl + "&sz=48";
    } 
    else if (mySize == 64) {
      myImg.src = gApi + myUrl + "&sz=64";
    } 
    else if (mySize == 128) {
      myImg.src = gApi + myUrl + "&sz=128";
    } 
  }
}