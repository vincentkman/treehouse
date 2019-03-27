// Declare variables
const search_input = document.getElementById("search-bar");
const img = document.getElementsByTagName("img");

search_input.addEventListener("keyup", function() {
    // Get the search input string to lowercase
    const val = search_input.value.toLowerCase();
    // To loop through the images' caption texts
    for ( var i=0; i<img.length; i++ ) {
      const caption = img[i].getAttribute("alt");
      // To check if the search input value is in the selected caption
      if ( caption.toLowerCase().indexOf(val) > -1 ) {
        // Show image(s) if the value matches
        img[i].style.display = '';
      } else {
        // Otherwise images will not be displayed
        img[i].style.display = 'none';
      }
    }
  });
