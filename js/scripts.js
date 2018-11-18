$(document).mouseup(function(e) {
    var container = $(".themes, .color, .about, .updates");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
        $('.fade').css({'z-index': '9'});}
});
$(".exit").click(function(){
	$(".window").hide();
	$('.fade').css({'z-index': '9'});
});
$(".app-popup .exit").click(function(){
	$(".app-popup").hide();
	$('.fade').hide();
});
$("#set-theme").click(function(){
	$(".themes").show();
});
$("#set-color").click(function(){
	$(".color").show();
});
$("#see-update").click(function(){
	$(".updates").show();
});
$("#see-about").click(function(){
	$(".about").show();
});
$(".fadebg").click(function(){
	$('.fade').css({'z-index': '10'});
});

$(".menutoggle").on('click', function(){
    $('.abaMenu').toggleClass('openmenu');
    $(".fade").show();
});

var animado = false;
$(document).ready(
function(){
$(".tocar").one("click", function () {
    if (animado) {
        return
    }
    animado = true;        
    $('.songs').css({'margin-bottom': '55px'});
    $('#conteudo').css({'margin-bottom': '55px'});
});
$(".geraltema.light").click(function(){
$(".ativado").html("Claro está ativado");
window.localStorage.setItem('theme-toggle', "Claro")
});
$(".geraltema.blue").click(function(){
$(".ativado").html("Azul está ativado");
window.localStorage.setItem('theme-toggle', "Azul")
});
$(".geraltema.default").click(function(){
$(".ativado").html("Escuro está ativado");
window.localStorage.setItem('theme-toggle', "Escuro")
});

var theme = window.localStorage.getItem('theme-toggle');
if(theme && theme != '') {
    $(".ativado").html(theme+" está ativado");
}
});

$(".fadeout").click(function () {    
    $(".fade").hide();
});

$(".lyricshow").on('click', function(){
    $('.lyriciframe').toggleClass('openlyricscreen');
    $(".letras").toggleClass("sair");
});

$("#sobre").click(function(){
	$('.sobreWindow').show();
});
$("#update-verify").click(function(){
	$('.updateWindow').show();
	$('.fade').css({'z-index': '9'});
});
$(".faixa").click(function(){
	$('.faixa').show();
	$('.procurar').hide();
});
$(".search").click(function(){
	$(".procurar").toggle();
});
$(".search").click(function(){
	$('.procurar').val('');
	$('.faixa').show();
});

$(".closescreen").click(function(){
	$(".lyricscreen").hide();
});

$(".button.back").click(function(){
	$(".songs").hide();
	$("#conteudo").show();
});
$(".album.uan").click(function(){
	$(".uan.songs").show();
	$("#conteudo").hide();
});
$(".album.tmh").click(function(){
	$(".tmh.songs").show();
	$("#conteudo").hide();
});
$(".album.mm").click(function(){
	$(".mm.songs").show();
	$("#conteudo").hide();
});
$(".album.f").click(function(){
	$(".f.songs").show();
	$("#conteudo").hide();
});

$(".album.mita").click(function(){
	$(".mita.songs").show();
	$("#conteudo").hide();
});

$("#detail-color").click(function(){
	$(".detailcolorWindow").show();
	$('.fade').css({'z-index': '9'});
});

$('.biografia').on('click', function() {
	$(this).toggleClass('clicked');
});

$('.procurar').keyup(function() {
var nomeFiltro = $(this).val().toLowerCase();
console.log(nomeFiltro);
$('.faixas').find('.faixa.n1').each(function() {
    var conteudoCelula = $(this).find('.name').text();
    console.log(conteudoCelula);
    var corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro) >=0;
    $(this).css('display', corresponde ? '' : 'none');
});
});