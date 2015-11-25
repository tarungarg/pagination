// need to be optimized

$(document).ready(function(){
  var total_content = $("#content").children().length
  $(".offset").val(1)
  var per_page = 5
  no_of_pages = Math.ceil(total_content/per_page)
  var offset = $(".offset").val()

  var page_no = ""
  for(var i=1;i<=no_of_pages;i++){
    page_no += "<a href='#' class="+i+" class='pages_num' onclick=goto("+i+") >"+i+"</div>"
  }
  $(".pages").html(page_no);

  showMainContent(offset, per_page)
})

function showMainContent(offset, per_page){
  var first = (offset * per_page) - (per_page - 1)
  var last = offset * per_page
  for (var i = first; i<=last; i++) {
    showContent(i);
  };
  $(".clicked").removeClass("clicked")
  $("."+offset).addClass("clicked");
  if (offset === 1){
    $(".prev").addClass("disabled");
  } else {
    $(".prev").removeClass("disabled");
  }

  if (no_of_pages === offset){
    $(".next").addClass("disabled");
  } else {
    $(".next").removeClass("disabled");
  }
}

function showContent(i){
  $($("#content").children()[i-1]).removeClass("content-item");
  $($("#content").children()[i-1]).addClass("show_content");
}

function hideContent(){
  $(".show_content").addClass("content-item").removeClass("show_content");
}

function prev(){
  var offset = parseInt($(".offset").val())
  $(".offset").val(offset-1)
  hideContent();
  showMainContent(offset-1, 5)
}

function next(){
  var offset = parseInt($(".offset").val())
  $(".offset").val(offset+1)
  hideContent();
  showMainContent(offset+1, 5)
}

function goto(offset){
  $(".offset").val(offset)
  hideContent();
  showMainContent(offset, 5)
}
