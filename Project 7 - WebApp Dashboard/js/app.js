// ======================================
//  Alert box
// ======================================

// Variables
const alertBox1 = document.getElementById('alert1');
const closeBtn1 = document.getElementById('close-btn1');
const alertBox2 = document.getElementById('alert2');
const closeBtn2 = document.getElementById('close-btn2');

// Add event handlers to close the alert boxes
closeBtn1.addEventListener('click', ()=> {
  alertBox1.style.display = 'none';
  });

closeBtn2.addEventListener('click', ()=> {
  alertBox2.style.display = 'none';
  });

// ======================================
//  Drop down box & Notification bell
// ======================================

// Variables
const dropdown= document.getElementById('dropdown');
const close = document.getElementById('close');
const bell= document.getElementById('bell');
const circle = document.getElementById('bell-circle');

// Add event handler to display the drop down box and hide the green bell circle
bell.addEventListener('click', ()=> {
  dropdown.style.display = 'block';
  circle.style.display = 'none';
  });

// Add event handler to close the drop down box
close.addEventListener('click', ()=> {
  dropdown.style.display = 'none';
  });

// ======================================
//  Message - send button
// ======================================

// Variables
const msg = document.getElementById('msg');
const send = document.getElementById('send');
const textbox = document.getElementById('textbox');
const user = document.getElementById('username');

// Add event handler to submit message once the
// conditions are met (username and message)
send.addEventListener('click', () => {
  if ( send.value === '' ) {
    textbox.textContent = 'Please enter your message';
  } else if ( user.value === '' ) {
    msg.textContent = 'Please select your user';
  } else if ( textbox.value === '') {
    msg.textContent = 'Please enter your message'
  } else {
    msg.textContent = 'Message Sent'
  }
})

// ======================================
//  Local Storage Settings
// ======================================

// Toogle Switch

// Save

let save = () => {
  const emailCheckbox = document.getElementById('settings-email');
  const profileCheckbox = document.getElementById('settings-profile');

  localStorage.setItem('settings-email', emailCheckbox.checked);
  localStorage.setItem('settings-profile', profileCheckbox.checked);
}

// Reset

let cancel = () => {
  location.reload();
  localStorage.clear();
}

let emailCheckbox = JSON.parse(localStorage.getItem('settings-email'));
let profileCheckbox = JSON.parse(localStorage.getItem('settings-profile'));

document.getElementById('settings-email').checked = emailCheckbox;
document.getElementById('settings-profile').checked = profileCheckbox;

// Timezone Options

const timezoneSelect = document.getElementById('timezone');


// Variables for the select options
let timeselectOption = timezoneSelect.options[timezoneSelect.selectedIndex];
let lastSelected = localStorage.getItem('timezoneSelect');

if (lastSelected) {
  timezoneSelect.value = lastSelected;
}

// Keep the last selected option
timezoneSelect.addEventListener('change', ()=> {
  lastSelected = timezoneSelect.options[timezoneSelect.selectedIndex].value;
  // console.log(lastSelected);
  localStorage.setItem('timezoneSelect', lastSelected);
})

// Buttons

const saveBtn = document.getElementById('save');
const cancelBtn = document.getElementById('cancel');

// Add event handler to save the settings and
// another to cancel to change to default settings
saveBtn.addEventListener('click', ()=> {
  save();
  location.reload();
})

cancelBtn.addEventListener('click', ()=> {
  cancel();
})
