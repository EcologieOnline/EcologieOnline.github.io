//tmp redirect 

location.href = "https://ecologyonline.fr/"


if ( localStorage.getItem('pseudo') == null || localStorage.getItem('pseudo') == ''  || localStorage.getItem('administration') == null || localStorage.getItem('administration') == '') {
  location.href= "/login.html"
}

