

var studentArr = [
    {
        stdName: 'Saad Sohail',
        fathersName: 'Sohail Ahmed',
        rollNo: 1,
        cnicNo: 123456,
        age: 17,
    },
    {
        stdName: 'Ammar',
        fathersName: 'Mustafa',
        rollNo: 2,
        cnicNo: 4220162657711,
        age: 17,
    },
    {
        stdName: 'Soban',
        fathersName: 'Zahid',
        rollNo: 3,
        cnicNo: 4220162657711,
        age: 17,
    },
    {
        stdName: 'Zeeshan',
        fathersName: 'Hussain',
        rollNo: 4,
        cnicNo: 4220162657711,
        age: 17,
    },
    {
        stdName: 'Ayyan',
        fathersName: 'Shaikh',
        rollNo: 5,
        cnicNo: 4220162657711,
        age: 17,
    },
    {
        stdName: 'Taleeb',
        fathersName: 'Sohail',
        rollNo: 6,
        cnicNo: 4220162657711,
        age: 17,
    },
    {
        stdName: 'Ashir',
        fathersName: 'Zain',
        rollNo: 7,
        cnicNo: 4220162657711,
        age: 17,
    },
    {
        stdName: 'Saad Sohail',
        fathersName: 'Saad Sohail',
        rollNo: 8,
        cnicNo: 4220162657711,
        age: 17,
    },
    {
        stdName: 'Saad Sohail',
        fathersName: 'Saad Sohail',
        rollNo: 9,
        cnicNo: 4220162657711,
        age: 17,
    },
    {
        stdName: 'bilal',
        fathersName: 'waseem',
        rollNo: 10,
        cnicNo: 4220162657711,
        age: 17,
    },
]
// for (let i = 0; i < studentArr.length; i++) {
//     console.log(studentArr[i]);
// }

var userInp = document.getElementById('userInp');
var stdName = document.getElementById('stdName');
var fathersName = document.getElementById('fathersName');
var rollNo = document.getElementById('rollNo');
var cnicNo = document.getElementById('cnicNo');
var age = document.getElementById('age');
function print() {
    for (let i = 0; i < studentArr.length; i++) {
        if (userInp.value == studentArr[i].rollNo) {
            // fathersName.innerHTML = `<p>${studentArr[i].fathersName}</p>`;
            stdName.innerHTML = `<b>Name: ${studentArr[i].stdName}`;
            fathersName.innerHTML = `<b>Father's Name: ${studentArr[i].fathersName}`;
            rollNo.innerHTML = `<b>Roll No: ${studentArr[i].rollNo}`;
            cnicNo.innerHTML = `<b>CNIC No: ${studentArr[i].cnicNo}`;
            age.innerHTML = `<b>Age: ${studentArr[i].age}`;
            console.log(studentArr[i])
        }
    }
}

// first name
// last name
// cnicNo
// email
// Password


// question property
// options in which there is array and there is string inside it
// correct answer property


// For Certficate :
// 1 Fmp project with database 
// 2 ToDo App with database
// 3 Quiz App with database
// 4 Viva from book of html css javascript and bootstrap