// start loader 
const loadTl = gsap.timeline({repeat: -1, duration: .8, ease: 'power4'});
function init() {
  let one = document.querySelector('.square:first-child');
  let two = document.querySelector('.square:nth-child(2)');
  let three = document.querySelector('.square:nth-child(3)');
  let four = document.querySelector('.square:nth-child(4)');
  let five = document.querySelector('.square:nth-child(5)');
  let six = document.querySelector('.square:nth-child(6)');  
    
  loadTl.to(one, {scaleY: '200%', repeat:-1, yoyo: true})
  loadTl.to(two, {scaleY: '200%', repeat:-1, yoyo: true}, '-=.4')
  loadTl.to(three, {scaleY: '200%', repeat:-1, yoyo: true}, '-=.4')
  loadTl.to(four, {scaleY: '200%', repeat:-1, yoyo: true}, '-=.4')
  loadTl.to(five, {scaleY: '200%', repeat:-1, yoyo: true}, '-=.4')
  loadTl.to(six, {scaleY: '200%', repeat:-1, yoyo: true}, '-=.4')
}

// loader
$(window).on('load', function () {
    init();
    $('.loading').fadeOut(4000);
});


// sidebar Toggle icon
let toggleIcon = document.querySelector('.toggle_bar');

toggleIcon.addEventListener('click', ()=>{
    document.querySelector('.navbar').classList.toggle('active');
})

// back to top button

function backToTop() {
    $('#back-to-top').on('click', function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
    });
}
backToTop();
$(window).on('scroll',function(){
    function scrollTopBtn() {
    var scrollToTop = $('#back-to-top'),
        scroll = $(window).scrollTop();
    if (scroll >= 50) {
        scrollToTop.fadeIn();
    } else {
        scrollToTop.fadeOut();
    }
    }
    scrollTopBtn();
})




let toggle_button = document.querySelector('.toggle_bar');
let nav_bar = document.querySelector('.navbar-nav')
toggle_button.addEventListener('click', ()=>{
    nav_bar.classList.toggle('active');
})




function printDiv() 
{

var divToPrint=document.getElementById('printedArea');

var newWin=window.open('','Print-Window');

newWin.document.open();

newWin.document.write('<html><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');

newWin.document.close();

setTimeout(function(){newWin.close();},10);

}


// image preview

/// Upload Image
$(document).ready(function() {
    // ADD IMAGE
    $('.image-uploader').change(function (event){
      $(this).parents('.images-upload-block .upload-img').append('<div class="uploaded-block"><img src="'+ URL.createObjectURL(event.target.files[0]) +'"><button class="close" type="button">&times;</button></div>');
  });

  // REMOVE IMAGE
  $('.images-upload-block').on('click', '.close',function (e){
      $(this).parents('.uploaded-block').remove();
      e.preventDefault()
  });


});

  
// fixed header
$(window).scroll(function(){
    if ($(window).scrollTop() >= 60) {
        $('.navbar').addClass('fixed-header');
    }
    else {
        $('.navbar').removeClass('fixed-header');
    }
});
// ////
// upload file
let uploadedImage = document.querySelector(".uploadFile");
if ( uploadedImage ){
    // let ext = name[name.length - 3] + name[name.length - 2] + name[name.length - 1];
        // const imgExt = [ 'PEG', 'peg', 'png', 'PNG', 'SVG', 'svg'];
        let src = null;

        uploadedImage.onchange = function (event) {
        if ( event.target.files[0]) {
            selectedFilesCont.innerHTML = '';
            for (let i = 0; i < event.target.files.length; i++) {
                var name = event.target.files[i].name;
                let ext = name[name.length - 3] + name[name.length - 2] + name[name.length - 1];
                const imgExt = [  'SVG', 'svg' , 'png', 'jpg', 'JPEG' , 'jpeg' ];
                if (imgExt.indexOf(ext) > 0) {
                    let reader = new FileReader();
                    reader.onload = function (e) {
                        src = e.target.result;
                        selectedFilesCont.innerHTML += '<div class="img-uploaded uploaded-image mt-2 mb-2 position-relative">' +
                            '<i onclick="deleteFile(this.parentElement ,\'' + name + '\')" class="fas fa-times remove-appendedd cp"></i>' +
                            '<img class="round0 img-uploded img-contain" src="' + src + '" alt="">' +
                            ' <input type="hidden" value="' + name + '" >   ' +
                            '</div>';
                    }
                    reader.readAsDataURL(event.target.files[i]);
                } else {
                    var name = event.target.files[i].name;
                    selectedFilesCont.innerHTML += '<div   class="file-container round m-1 ">' +
                        '<i onclick="deleteFile(this.parentElement ,\'' + name + '\')" class="fas fa-times remove-appendedd cp cp"></i>' +
                        '<img class="round img-cover overlay-dark" style="width: 100%; height:100%;" src="" alt="">' +
                        '<div style="overflow-wrap: break-word;" class="text-center siz-11 file-name-text m-0 w-75">' +
                        '<p class="uploadedName m-0">' + name + '</p>' +                    
                        '<input class="file-uploded" type="text" value="' + name + '" disabled hidden class="file-uploded m-0">' +
                        '</div>' +
                        '</div>'; 

                }
            }
        }
    }
    // deleteFile
    function deleteFile(ele, name) {
        const chat_files = document.querySelector(".uploadFile");
        let files = new DataTransfer();
        for (let i = 0; i < chat_files.files.length; i++) {
            if (chat_files.files[i].name == name) {
                continue;
            }
            files.items.add(chat_files.files[i]);
        }
        chat_files.files = files.files;
        $(ele).remove();
    }
}



// show password
var myInput = document.querySelector(".password"),
myIcon = document.querySelector(".show_pass");
myInput.onfocus = function () {
    myIcon.style.left = "3px";
};
myInput.onblur = function () {
    myIcon.style.left = "14px";
};
myIcon.onclick = function () {
    if (myIcon.children[0].classList.contains("fa-eye")) {
    this.children[0].classList.toggle("fa-eye-slash");
    this.children[0].classList.toggle("fa-eye");
    myInput.setAttribute("type", "text");
    } else {
    myInput.setAttribute("type", "password");
    this.children[0].classList.toggle("fa-eye");
    this.children[0].classList.toggle("fa-eye-slash");
    }
};

