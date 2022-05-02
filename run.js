(function() {

	val = document.querySelector("#video_holder > script").innerText.match("http://vod.tau.ac.il:80/Courses/_definst_/mp4:.*.mp4/playlist.m3u8")[0];
	alert(val);
})();
