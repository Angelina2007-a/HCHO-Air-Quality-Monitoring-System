// =======================================
// Firebase Imports
// =======================================

import { db, auth } from "./firebase-configuration.js";


import {
    ref,
    onValue
}
from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


import {
    onAuthStateChanged,
    signOut
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";




// =======================================
// HTML ELEMENTS
// =======================================


const hchoValue =
document.getElementById("hchoValue");


const statusBox =
document.getElementById("statusBox");


const lastUpdate =
document.getElementById("lastUpdate");


const historyTable =
document.getElementById("historyTable");


const userPhone =
document.getElementById("userPhone");


const logoutBtn =
document.getElementById("logoutBtn");



const currentDate =
document.getElementById("currentDate");


const currentTime =
document.getElementById("currentTime");





// =======================================
// DATE AND TIME
// =======================================


setInterval(()=>{


    const now = new Date();


    if(currentDate)
    {
        currentDate.innerHTML =
        now.toLocaleDateString();
    }


    if(currentTime)
    {
        currentTime.innerHTML =
        now.toLocaleTimeString();
    }


},1000);






// =======================================
// CHART INITIALIZATION
// =======================================


const ctx =
document.getElementById("hchoChart");



const chart =
new Chart(ctx,{


    type:"line",


    data:{


        labels:[],


        datasets:[{

            label:"HCHO ppm",

            data:[],

            borderWidth:3,

            tension:0.3,

            fill:false

        }]


    },


    options:{


        responsive:true,


        animation:false,


        scales:{


            y:{


                beginAtZero:true


            }


        }


    }



});







// =======================================
// AUTHENTICATION CHECK
// =======================================


onAuthStateChanged(auth,(user)=>{


    if(user)
    {


        console.log(
            "Logged in:",
            user.phoneNumber
        );



        if(userPhone)
        {

            userPhone.innerHTML =
            user.phoneNumber;

        }



        // Start Firebase Reading

        readHCHOData();



    }

    else
    {


        window.location.href =
        "login.html";


    }


});







// =======================================
// READ HCHO DATA FROM FIREBASE
// =======================================


function readHCHOData()
{


    const sensorRef =
    ref(db,"Sensor");



    onValue(sensorRef,(snapshot)=>{


        const sensorData =
        snapshot.val();



        if(!sensorData)
        {
            return;
        }



        // Get latest timestamp

        const timestamps =
        Object.keys(sensorData);



        const latestTimestamp =
        Math.max(...timestamps);



        const latestReading =
        sensorData[latestTimestamp];



        const ppm =
        Number(latestReading.HCHO);



        const status =
        latestReading.Status;



        const timestamp =
        Number(latestReading.Timestamp);





        // ===============================
        // UPDATE HCHO VALUE
        // ===============================


        hchoValue.innerHTML =
        ppm.toFixed(3);






        // ===============================
        // UPDATE STATUS
        // ===============================


        statusBox.className="";



        if(status.toLowerCase()=="safe")
        {


            statusBox.classList.add("safe");


        }

        else if(
            status.toLowerCase()=="moderate"
        )
        {


            statusBox.classList.add("moderate");


        }

        else
        {


            statusBox.classList.add("danger");


        }



        statusBox.innerHTML =
        status.toUpperCase();







        // ===============================
        // UPDATE TIME
        // ===============================


        const readingTime =
        new Date(timestamp*1000);



        lastUpdate.innerHTML =
        readingTime.toLocaleString();







        // ===============================
        // UPDATE GRAPH
        // ===============================


        const time =
        readingTime.toLocaleTimeString();



        chart.data.labels.push(time);



        chart.data.datasets[0]
        .data.push(ppm);




        if(chart.data.labels.length > 20)
        {

            chart.data.labels.shift();


            chart.data.datasets[0]
            .data.shift();

        }



        chart.update();








        // ===============================
        // HISTORY TABLE
        // ===============================


        const row =
        document.createElement("tr");



        row.innerHTML = `

        <td>${time}</td>

        <td>${ppm.toFixed(3)}</td>

        <td>${status}</td>

        `;



        historyTable.prepend(row);




        if(historyTable.rows.length > 10)
        {

            historyTable.deleteRow(10);

        }



    });



}







// =======================================
// LOGOUT
// =======================================


if(logoutBtn)
{


    logoutBtn.addEventListener(
    "click",
    ()=>{


        signOut(auth)

        .then(()=>{


            window.location.href =
            "login.html";


        });


    });


}