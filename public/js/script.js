$(".tab-item").click(function () {
    $(".tab-item").removeClass("active")
    $(this).addClass('active')
})
$(".acr button").click(function () {

})

let heros = $(".hero")
let index = 0
$(".its img").click(function (e) {
    $(".its img").removeClass("active")
    $(this).addClass('active')
    index = $(".its img").index(this)
    $(".hero").removeClass("active")
    $("[data-hero='" + index + "']").addClass("active")
})
$(document).ready(function(){
    let counter = 1
    setInterval(function(){
        if(counter<3){
            $(".arrows img:last-child").click();
        }else{
            $(".arrows img:first-child").click();
        }
        
        console.log(counter)
        if(counter==3){
            counter=1
            $(".arrows img:first-child").click();
        }
        else
            counter++
        
        
        console.log('hell')
    },4000)
})
$(".arrows img:first-child").click(function () {
    if (index > 0) {
        //increment else
        index = index - 1
    }

    if (index == 0) {
        $(this).attr("src", "src/icons/right-arrow-2.png")
        $(".arrows img:last-child").attr("src", "src/icons/right-arrow-1.png")
    }
    console.log(index)
    $(".hero").removeClass("active")
    $("[data-hero='" + index + "']").addClass("active")
    $(".its img").removeClass("active")
    $("[data-index='" + index + "']").addClass("active")
})
$(".arrows img:last-child").click(function () {
    if (index < ($(".hero").length - 1)) {
        //increment else
        index = index + 1
    }
    if (index == ($(".hero").length - 1)) {
        $(this).attr("src", "src/icons/right-arrow-2.png")
        $(".arrows img:first-child").attr("src", "src/icons/right-arrow-1.png")
    }
    $(".hero").removeClass("active")
    $("[data-hero='" + index + "']").addClass("active")
    $(".its img").removeClass("active")
    $("[data-index='" + index + "']").addClass("active")
})



$(".subcattrr").click(function () {
    $(".subcattrr").removeClass("active")
    $(this).addClass('active')
    let token = $(this).attr('data-token')
    let slug = $(this).attr("data-slug")
    let parent = $(this).attr("data-parent")
    $("#catProd").html(`<h3><img src='/src/images/spin.svg' style='width:45px'> Loading... </h3>`)
    $("#parent").val(parent)
    $("#slug").val(slug)
    fetchProducts(slug, parent, token)
})

$(document).on("click","#loadMore",function(){
    let total = $(this).attr("data-total")
    let offset = $(document).find(".category-product-grid .category-product-item").length
    let parent = $("#parent").val()
    let slug = $("#slug").val()
    let token = $(this).attr("data-token")
    let button = $(this)
    try{
        total = parseInt(total)
        offset = parseInt(offset)
        loadMoreProducts(slug,parent,token,6,offset)

    }catch(error){
        console.log(error)
    }
    console.log(total)
})

function fetchProducts(slug, parent, token) {
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': token
        },
        url: '/get-sub-category-products',
        method: 'POST',
        data: { slug: slug, parent: parent},
        success: function (data) {
            $("#catProd").html(data)

            //console.log(data)
        }
    })
}
function loadMoreProducts(slug, parent, token,limit=6,offset=0) {
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': token
        },
        url: '/load-more-products',
        method: 'POST',
        data: { slug: slug, parent: parent,limit:limit,offset:offset },
        success: function (data) {
            $(document).find(".category-product-grid").append(data).ready(function(){
                    let offset = $(document).find(".category-product-grid .category-product-item").length
                    let total = $("#loadMore").attr("data-total")
                    try{
                        total = parseInt(total)
                        if(offset>=total){
                            $("#loadMore").hide()
                        }
                    }catch(error){

                    }
                   // console.log(offset,total)

            })
            //console.log(data)
        }
    })
}

$(document).ready(function () {
    let subcattrr = document.querySelector(".subcattrr")
    let slug = $(subcattrr).attr("data-slug")
    let parent = $(subcattrr).attr("data-parent")
    let token = $(subcattrr).attr("data-token")
    fetchProducts(slug, parent, token)
    $("#parent").val(parent)
    $("#slug").val(slug)
})


$(".product-images").click(function () {
    let src = $(this).attr("src")
    $(".featured-image").attr("src",src)
})


$(".home-cats").click(function(){
    let id = $(this).attr("data-id")
    let token = $(this).attr("data-token")
    //list-of-products
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': token
        },
        url:"/get_sub_cats_home",
        method:"POST",
        data:{id:id},
        success:function(data){
            $(".product-list").html(data)
        }
    })
})


$(".togg").click(function(){
    if($(this).hasClass('collapsed')){
        $(this).find("img").css("transform","rotate(0deg)")
    }else{
        $(this).find("img").css("transform","rotate(180deg)")
    }
})

let options = {}
    const lightbox = GLightbox({ ...options });
