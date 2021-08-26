const firebaseConfig = {
    apiKey: "AIzaSyA0Z7v4Ra16VFCFV1P-tKXKoO85qIl5VaM",
    authDomain: "project-ani-e4c86.firebaseapp.com",
    projectId: "project-ani-e4c86",
    storageBucket: "project-ani-e4c86.appspot.com",
    messagingSenderId: "1027527105712",
    appId: "1:1027527105712:web:c65eb6a5d15de1c5d4ef75",
    measurementId: "G-8CBN1FNC7F"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const firestore = firebase.firestore();

//CREATE CROP
function createCrop(){
    
    console.log('Creating Record from firestore')
    var cropName = document.getElementById('cropName').value
    var cropBenefit = document.getElementById('cropBenefit').value
    var cropInformation = document.getElementById('cropInformation').value
    firestore.collection('users').add({
        name: textInput,
        birthday: new Date(dateInput),
        contactNum: parseInt(numberInput),
        timestamp: new Date()
    })
    .then((docRef) => {
        console.log('Record Successfuly Created ' + docRef.id)
        document.getElementById('textIn').value = ''
        document.getElementById('dateIn').value = ''
        document.getElementById('numIn').value = ''
    })
    .catch((error)=> {
        document.getElementById('errorMsgCreate').innerHTML = "Error: " + error.message
        console.log(error)
    })
}

//RETRIEVE
function retrieve(){
    var Parent = document.getElementById('dataContainer');
    if(Parent.rows.length > 1){
        for(var i=1; i <= Parent.rows.length - 1; i++){
            Parent.deleteRow(i)
        }
    } else {
        var table = document.getElementById('dataContainer')
        firestore.collection('users').orderBy('birthday', 'asc').get()
        .then((collections) => {
            for(var i=1; i <= table.rows.length - 1; i++){
                Parent.deleteRow(i)
            }
            collections.docs.map((doc) =>{
                var row = table.insertRow(1)
                row.insertCell(0).innerHTML = doc.data().name
                row.insertCell(1).innerHTML = formatDate(doc.data().birthday)
                row.insertCell(2).innerHTML = doc.data().contactNum
                row.insertCell(3).innerHTML = formatDate(doc.data().timestamp)
                row.insertCell(4).innerHTML = doc.id
            })
        })
        .catch((error)=> {
            document.getElementById('errorMsgRetrieve').innerHTML = "Error: " + error.message
            console.log(error)
        })
    }
}
retrieve()

//UPDATE
function Update(){
    var docID = document.getElementById('docIDInput')
    var name = document.getElementById('nameUpdate')
    var bday = document.getElementById('bdayUpdate')
    var contact = document.getElementById('ContactUpdate')

    console.log('Updating document ' + docID.value)

    firestore.collection('users').doc(docID.value).update({
        birthday: new Date(bday.value),
        name: name.value,
        contactNum: contact.value
    })
    .then((result)=>{
        docID.value = ''
        name.value = ''
        bday.value = ''
        contact.value = ''
        console.log('Document Successfuly Updated')
    })
    .catch((error)=> {
        document.getElementById('errorMsgUpdate').innerHTML = "Error: " + error.message
        console.log(error)
    })

}


//DELETE
function Delete(){
    var docID = document.getElementById('docIDDelete')
    console.log("Deleting Document " + docID)
    firestore.collection('users').doc(docID.value).delete()
    .then(()=>{
        console.log("Document Successfuly Deleted")
        docID.value = ''
    })
    .catch((error)=>{
        console.log(error)
    })
}

function formatDate(timestamp) {
    var month = monthNames[timestamp.toDate().getMonth()]
    var day = timestamp.toDate().getDate().toString()
    var year = timestamp.toDate().getFullYear().toString()
    return '' + month + ' ' + day + ', ' + year
}