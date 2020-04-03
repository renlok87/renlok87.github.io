$(document).foundation();

//Navbar
$('.title-bar').on('sticky.zf.stuckto:top', function(){
    $(this).addClass('shrink');
}).on('sticky.zf.unstuckfrom:top', function(){
    $(this).removeClass('shrink');
})
//Counter
let cost = 450;
if ($('#price').val < 0) {
    $('#price').html(function(i, val) { return val*1 });
}
$('#inc').click(function() {
    $('#counter').html(function(i, val) { return val*1+1 });
    $('#price').html(function(i, val) { return val*1+cost });
});
$('#dec').click(function() {
    $('#counter').html(function(i, val) { return val*1-1 });
    $('#price').html(function(i, val) { return val*1-cost });
});
