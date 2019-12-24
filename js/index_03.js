function getAverageValue() {
  var date1 = document.getElementById("start1").valueAsDate;
  var date2 = document.getElementById("start2").valueAsDate;
  var date3 = document.getElementById("start3").valueAsDate;
 
  var now = new Date();

  var experience1 = now.getTime() - date1.getTime();
  var experience2 = now.getTime() - date2.getTime();
  var experience3 = now.getTime() - date3.getTime();

  var avgExperience = (experience1 + experience2 + experience3) / 3;

  document.getElementById("average").value = Math.floor(avgExperience / 1000 / 60 / 60 / 24 / 365);
}
