// ======================================
//  Global Variables
// ======================================

const directory = $('#directory');
const overlay = $('#overlay');
const modal = $('#modal');

let user = 0;
let url = "https://randomuser.me/api/?results=12&format=json&nat=gb&inc=name,email,picture,dob,location,cell&noinfo";

// ======================================
//  Functions
// ======================================

//Capitalise the first letter of each string
let capitalise = (str) => {
  return str.replace(
      /\w\S*/g,
      function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

// Replace 'example' with 'best'
let replaceEmail = (str) => {
  return str.replace(/example/g, "best");
}

// Remove time from date of birth
let date = (str) => {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  let d = new Date(str);
  return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
}

// ======================================
//  Fetch API
// ======================================

// To fetch data from Random User API to request for 12 employee profiles
let fetchInfo = fetch(url)
    .then(response => response.json())
    .then((data) => {

fetchInfo
    $.each(data.results, (employee, value) => {

// Gather results from the Random User API and put them into variables for readability
      image = data.results[employee].picture.large;
      firstname =  capitalise(data.results[employee].name.first);
      surname = capitalise(data.results[employee].name.last);
      email = replaceEmail(data.results[employee].email);
      city = capitalise(data.results[employee].location.city);

// Create HTML to display basic information of each employee for the main page
      let boxes =  `
        <div id="${user++}" class="main__directory__boxes box">
         <img src="${image}" class="main__directory__boxes__img img" alt="image">
         <div class="main__directory__boxes__detail">
         <h3 class="main__directory__boxes__detail__name name">${firstname} ${surname}</h3>
         <p class="main__directory__boxes__detail__email email">${email}</p>
         <p class="main__directory__boxes__detail__city city">${city}</p>
         </div>
       </div>
       `;
       directory.append(boxes);
     });

// Append overlay to body in order to show the dim screen
     $("body").append(overlay);

// ======================================
//  Event Handlers
// ======================================

// To create a modal popup box when clicking on any of the employee profile card
    $('.box').on('click', function() {
     let profile = parseInt($(this).attr('id'));
     let createBox = (popupModal) => {

// Show the following variables for each employee
       image = data.results[popupModal].picture.large;
       firstname =  capitalise(data.results[popupModal].name.first);
       surname = capitalise(data.results[popupModal].name.last);
       email = replaceEmail(data.results[popupModal].email);
       phone = data.results[popupModal].cell;
       city = capitalise(data.results[popupModal].location.city);
       state = capitalise(data.results[popupModal].location.state);
       street = capitalise(data.results[popupModal].location.street);
       postcode = data.results[popupModal].location.postcode;
       dob = date(data.results[popupModal].dob.date);

// Create HTML to display the full detail of each employee for the modal popup box
       let popup = `
         <input type="button" class="main__modal__close-btn close-btn btn" value="&times"</>
        <div class="main__modal__modal-image modal-image">
          <img src="${image}" class="img" alt="image">
         </div>
        <div class="main__modal__detail">
         <h3 class="main__modal__detail__name name">${firstname} ${surname}</h3>
         <p class="main__modal__detail__email email">${email}</p>
         <p class="main__modal__detail__state state">${state}</p>
         <hr>
         <p class="main__modal__detail__phone phone">${phone}</p>
         <p class="main__modal__detail__address address">${street}, ${city}, ${postcode}</p>
         <p class="main__modal__detail__dob dob">Birthday: ${dob}</p>
        </div>
         `;

      modal.html(popup);
     }

// Close Button for modal
   $(document).ready(function() {
     $(".close-btn").on('click', function() {
         overlay.fadeOut(400);
         modal.fadeOut(400);
     });
   });

// Close when clicked outside the modal
   overlay.on('click', function() {
       modal.fadeOut(400);
       overlay.fadeOut(400);
   });

// To proceed to the modal when clicking on an individual profile card
   createBox(profile);
   overlay.show();
   modal.fadeIn(500);
  });
});
