const canvas = document.getElementById("myCanvas");


const heading = document.getElementById("heading");
const header = heading.getContext("2d");


const grad=header.createLinearGradient(0,10, 580,100);
grad.addColorStop(0, "#ffe3b3");
grad.addColorStop(1, "#dd4470");

header.fillStyle = grad;
header.fillRect(0,0, 700,130);

header.font = "bold 30px sans";
header.fillStyle = "black";
header.fillText("Bulletin Board",240,60);



canvas.style.backgroundColor = "#C1752E"

const note1 = canvas.getContext("2d");

note1.beginPath();
note1.strokeStyle = "red";
note1.moveTo(100,20);
note1.lineTo(180,100);
note1.lineTo(20,100);
note1.lineTo(100,20);
note1.stroke();

note1.strokeStyle = "yellow"
note1.lineWidth = 5
note1.strokeRect(10,10,200,200);
note1.fillStyle = "yellow"
note1.fillRect(10,10,200,200);

note1.fillStyle = "black"
note1.font = "20px sans";
note1.fillText("To Do ...",10,30);

//line
note1.beginPath();
note1.moveTo(200, 30);
note1.lineTo(200, 100);
note1.lineWidth = 10;
note1.lineCap = "round";
note1.strokeStyle = "red";
note1.stroke();


const thumb = canvas.getContext("2d");
thumb.beginPath();
thumb.arc(200, 30, 20, 0, 2 * Math.PI);
thumb.fillStyle = "black"
thumb.lineWidth = 4;
thumb.strokeStyle = "grey";
thumb.fill()
thumb.stroke();




const note2 = canvas.getContext("2d");
note2.strokeStyle = "purple"
note2.lineWidth = 5
note2.strokeRect(290,10,200,200);
note2.fillStyle = "purple"
note2.fillRect(290,10,200,200)

note2.fillStyle = "black"
note2.font = "20px sans";
note2.fillText("To Do ...",290,30);




const note3 = canvas.getContext("2d");
note3.strokeStyle = "pink"
note3.lineWidth = 5
note3.strokeRect(100,300,200,80);
note3.fillStyle = "pink"
note3.fillRect(100,300,200,80)

note3.fillStyle = "black"
note3.font = "20px sans";
note3.fillText("To Do ...",100,320);

note3.beginPath();
note3.moveTo(520, 30);
note3.lineTo(520, 100);
note3.lineWidth = 10;
note3.lineCap = "round";
note3.strokeStyle = "red";
note3.stroke();


const thumb2 = canvas.getContext("2d");
thumb2.beginPath();
thumb2.arc(520, 30, 20, 0, 2 * Math.PI);
thumb2.fillStyle = "black"
thumb2.lineWidth = 4;
thumb2.strokeStyle = "grey";
thumb2.fill()
thumb2.stroke();

const note4 = canvas.getContext("2d");
note4.strokeStyle = "white"
note4.lineWidth = 5
note4.strokeRect(400,300,200,80);
note4.fillStyle = "white"
note4.fillRect(400,300,200,80)


note4.fillStyle = "black"
note4.font = "20px sans";
note4.fillText("To Do ...",400,320);

const note5 = canvas.getContext("2d");
note5.strokeStyle = "green"
note5.lineWidth = 5
note5.strokeRect(550,80,80,80);
note5.fillStyle = "green"
note5.fillRect(550,80,80,80)

note5.fillStyle = "black"
note5.font = "20px sans";
note5.fillText("To Do ...",550,100);

const canvas2 = document.getElementById("myCanvas");
const note6 = canvas2.getContext("2d");

// Define a new path:
note6.beginPath();

thumb2.fillStyle = "white"

note6.moveTo(100 + 500,20 + 150);
note6.lineTo(180 + 500,100 + 150);
note6.lineTo(20 + 500,100 + 150);
note6.lineTo(100 + 500,20 + 150);
note6.fill()
note6.stroke();
note6.fillStyle = "black"
note6.fillText("To Do ...",560,230);
