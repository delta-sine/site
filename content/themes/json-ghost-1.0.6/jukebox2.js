/*
 * A small music loading/switching app 
 *
 */
var s3_prefix = "https://s3-us-west-2.amazonaws.com/delta-sine/music/00/";
var songz = [
	"Cumbia_Sobre_el_Rio_Estigia_mp3.mp3",
	"Baja_California_Analog_Version_II_short_play_mp3.mp3",
	"Mojave_version_analoga_mp3.mp3",
	"Baja_California_Good_bye_San_Francisco_mp3.mp3",       
	"SOF_SOP_night_version_20151220_mp3.mp3",
	"Clandestine_Activities_Analog_Version.mp3",
	"Tijuana on Acid _CC.mp3.mp3"
];
var song = songz[Math.floor(Math.random()*songz.length)];
load_song = s3_prefix + song;
window.load_song = load_song;
document.getElementsByTagName("audio").src=load_song;
 


