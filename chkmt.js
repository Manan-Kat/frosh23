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
var contactFormDB = firebase.database().ref("checkmateForm");

document.getElementById("checkmateForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var Roll_No = getElementVal("rollno");
    var q1 = getElementVal("checkmate1");
    var q2 = getElementVal("checkmate2");
    var q3 = getElementVal("checkmate3");
    var q4 = getElementVal("checkmate4");
    var q5 = getElementVal("checkmate5");
    saveMessages(name,Roll_No,q1,q2,q3,q4,q5);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("checkmateForm").reset();
}

const saveMessages = (name,Roll_No,q1,q2,q3,q4,q5 ) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        Roll_No: Roll_No,
        q1: q1,
        q2: q2,
        q3: q3,
        q4: q4,
        q5: q5,
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
  };
  
