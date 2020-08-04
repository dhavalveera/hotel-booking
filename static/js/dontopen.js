document.onkeydown = function(e) {
  if (e.ctrlKey && (e.keyCode == 67 || e.keyCode == 86 || e.keyCode == 85 || e.keyCode == 117)) {
    swal ( "Oops" ,  "Sorry! This is not allowed!" ,  "error" );
    return false;
  }
  else {
    return true;
  }
};


$(document).keypress("u", function(e) {
  if(e.ctrlKey) {
    return false;
  }
  else {
    return true;
  }
});


document.addEventListener('contextmenu', event => event.preventDefault());
