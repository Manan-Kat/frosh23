const firebaseConfig = {
    apiKey: "AIzaSyBTg1KWeAuTVijmmNBWFzBbY6fiCXkfTnQ",
    authDomain: "test-website-261e3.firebaseapp.com",
    databaseURL: "https://test-website-261e3-default-rtdb.firebaseio.com",
    projectId: "test-website-261e3",
    storageBucket: "test-website-261e3.appspot.com",
    messagingSenderId: "284658858202",
    appId: "1:284658858202:web:deebef389c5281440d4de3"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("recruitmentForm");

document.getElementById("recruitmentForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var email_id = getElementVal("email");
    var Roll_No = getElementVal("rollno");
    var Phone_Number = getElementVal("phnumber");
    var Branch = getElementVal("branch");
    var cg = getElementVal("cgpa");
    var Hostel = getElementVal("hostel");
    var ratingadaptability = getElementVal1("leadership");
    var ratingresilience = getElementVal1("teamwork");
    var ratingcreativity = getElementVal1("creativity");
    var ratingtimeManagement = getElementVal1("spontaneity");
    var ratingdecisiveness = getElementVal1("patience");
    var q1 = getElementVal("q1");
    var q2 = getElementVal("q2");
    var q3 = getElementVal("q3");
    var q4 = getElementVal("q4");
    var q5 = getElementVal("q5");
    var q6 = getElementVal("q6");
    var q7 = getElementVal("q7");
    var q8 = getElementVal("q8");
    var talentSubmission = getElementVal("talentSubmission");

    console.log(ratingadaptability);
    console.log(ratingresilience);
    console.log(ratingcreativity);
    console.log(ratingtimeManagement);
    console.log(ratingdecisiveness);
    


    saveMessages(name, email_id, Roll_No, Phone_Number, Branch, cg, Hostel, ratingadaptability, ratingresilience, ratingcreativity, ratingtimeManagement, ratingdecisiveness, q1, q2, q3, q4, q5, q6, q7, q8, talentSubmission);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, email_id, Roll_No, Phone_Number, Branch, cg, Hostel, rating_adaptability, rating_resilience, rating_creativity, rating_timeManagement, rating_decisiveness, Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, talentSubmission) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        email_id: email_id,
        Roll_No: Roll_No,
        Phone_Number: Phone_Number,
        Branch: Branch,
        cg: cg,
        Hostel: Hostel,
        ratingadaptability: rating_adaptability,
        ratingresilience: rating_resilience,
        ratingcreativity: rating_creativity,
        ratingtimeManagement: rating_timeManagement,
        ratingdecisiveness: rating_decisiveness,
        q1: Question1,
        q2: Question2,
        q3: Question3,
        q4: Question4,
        q5: Question5,
        q6: Question6,
        q7: Question7,
        q7: Question7,
        q8: Question8,
        talentSubmission: talentSubmission
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

function getElementVal1(name) {
    var elements = document.getElementsByName(name);
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].checked) {
        return elements[i].value;
      }
    }
    return null;
  }
  
