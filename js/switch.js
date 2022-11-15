/*語言切換選單*/
$('.switch-list').hide()
$('.language-pack').click(function(e){
    e.stopPropagation();
    $('.switch-list').toggle(300, 'linear')
})
$("body").click(function(){
    $('.switch-list').hide()
})
$('.switch-list').click(function(e){
    e.stopPropagation();
})

/*語言圖示hover變色*/
$('.language-pack').hover(function(){
	$('.switch-icon').attr("src","images/language/icon_language_hover.svg");
},
function(){
	$('.switch-icon').attr("src","images/language/icon_language.svg");

});

/*滑動至最上方*/
$('.top_btn').hide();
		$(window).scroll(function() {
			var sh = $(window).scrollTop();
			
			if(sh > 300) {
				$('.top_btn').show(500, 'swing');
			}else {
				$('.top_btn').hide(500, 'swing');
			}
		});
		
		$('.top_btn').click(function() {
			$('html,body').animate({
				scrollTop : 0 //到最上面  
			}, 500);
		return false;
		});
var scaleItem = document.querySelector('.bnTitle');

/*獎金跳動動畫每2.5秒一次*/
const animate = document.querySelector('.award');
animate.classList.add('fuyofuyo');
animate.addEventListener('animationend', () => {
animate.classList.remove('fuyofuyo');  
setTimeout(function(){
animate.classList.add('fuyofuyo');
},2500)
})

// scaleItem.style.transform = 'translateY(50px)';


function animateAdd(){
scaleItem.classList.add('effect');
// scaleItem.addEventListener('animationend', ()=>{
// 	scaleItem.classList.remove('effect');
// 	setTimeout(function(){
// 		scaleItem.classList.add('effect');
// 	},2000)
// })
}

var ww =  window.innerWidth
	if( ww> 760){
		anime({
			targets: scaleItem,
			translateY:[-200,0],
			opacity: [0,1],
			rotateY: "1turn",
			// scale: [0.1,1],	
			duration: 1800,
			easing: 'easeInOutExpo',
			delay: 100,
			complete: function () {
				animationDone = true;
				animateAdd();
			}   
		})
	}else{
		anime({
			targets: scaleItem,
			opacity: 1,
			scale: [2,1],		
			duration: 800,
			easing: 'easeInOutExpo',
			delay: -100,
			complete: function () {
				animationDone = true;
				animateAdd();
			}   
		})
		// scaleItem.style.opacity =1;
		// scaleItem.classList.add('effect');
	}



function moonAnimateAdd(){
	moon.classList.add('moonBright');
} 


// setTimeout(function(){
// 	$(".bnTitle").addClass('show')
// },200)

