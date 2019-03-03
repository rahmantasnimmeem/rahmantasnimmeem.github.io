	var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/meem.jpg') {
      myImage.setAttribute ('src','images/me.jpg');
    } else {
      myImage.setAttribute ('src','images/meem.jpg');
    }