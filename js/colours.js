(function ($) {
var $detail = $('.detail');
var $theme = $('.detail-toggle');
var $bg = $('.bg');
var $playall = $('.playall');
var $vsf = $('.colour');
var $bar = $('.bar.bottom');
var $session = $('.session');
var $currentcolor = $('.current-color');
var $proguesso = $('.seek-bar .progress-bar');

var loadDetail = function () {
$detail.attr('detail', localStorage.getItem('detail') || 'um');
$proguesso.attr('detail', localStorage.getItem('detail') || 'um');
$vsf.attr('detail', localStorage.getItem('detail') || 'um');
$playall.attr('detail', localStorage.getItem('detail') || 'um');
$bar.attr('detail', localStorage.getItem('detail') || 'um');
$bg.attr('detail', localStorage.getItem('detail') || 'um');
$session.attr('detail', localStorage.getItem('detail') || 'um');
$currentcolor.attr('detail', localStorage.getItem('detail') || 'um');
};
$('.theDetail').click(function () {
localStorage.setItem('detail', $(this).data('detail'));
loadDetail();
});
loadDetail();
} (jQuery));