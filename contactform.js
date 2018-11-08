// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD3Hh_nK17b7k8LPDIQvGUc6_EMdtX8Rps",
    authDomain: "contact-form-84e62.firebaseapp.com",
    databaseURL: "https://contact-form-84e62.firebaseio.com",
    projectId: "contact-form-84e62",
    storageBucket: "contact-form-84e62.appspot.com",
    messagingSenderId: "692273944620"
  };
  firebase.initializeApp(config);

  // reference messages collection
  var messagesRef = firebase.database().ref('messages');

// listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// submit form
function submitForm(e){
	e.preventDefault();

	// get values
	var name = getInputval('name');
	var company = getInputval('company');
	var email = getInputval('email');
	var phone = getInputval('phone');
	var message = getInputval('message');

	// save message
	saveMessage(name, company, email, phone, message);


// show alert
document.querySelector('.alert').style.display = 'block';

// hide alert after 3 seconds
setTimeout(function(){
	document.querySelector('.alert').style.display = 'none';
	}, 3000);

// clear form
document.getElementById('contactForm').reset();
}
// function to get form values
function getInputval(id){
	return document.getElementById(id).value;
}

// save messages to firebase
function saveMessage(name, company, email, phone, message){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name:name,
		company:company,
		email:email,
		phone:phone,
		message:message
	});
}