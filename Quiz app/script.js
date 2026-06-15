const quiz = [

{
question:"Which company owns Instagram?",
options:["Google","Meta","Amazon","Apple"],
answer:"Meta"
},

{
question:"Which social media platform uses tweets?",
options:["Instagram","X","Snapchat","Pinterest"],
answer:"X"
},

{
question:"Which app is famous for short videos?",
options:["TikTok","LinkedIn","Reddit","Discord"],
answer:"TikTok"
},

{
question:"Which platform is mainly used for professional networking?",
options:["LinkedIn","Instagram","Facebook","Snapchat"],
answer:"LinkedIn"
},

{
question:"Which app has disappearing stories?",
options:["Snapchat","YouTube","Pinterest","Threads"],
answer:"Snapchat"
},

{
question:"Who owns Facebook?",
options:["Meta","Google","Microsoft","Apple"],
answer:"Meta"
},

{
question:"Which platform is used mostly for videos?",
options:["YouTube","WhatsApp","Threads","Telegram"],
answer:"YouTube"
},

{
question:"Which platform is popular for communities?",
options:["Reddit","Instagram","Facebook","TikTok"],
answer:"Reddit"
},

{
question:"Which app is owned by ByteDance?",
options:["TikTok","Pinterest","Discord","Telegram"],
answer:"TikTok"
},

{
question:"Which app is mainly for messaging?",
options:["WhatsApp","Pinterest","LinkedIn","X"],
answer:"WhatsApp"
}

];

let current = 0;
let score = 0;

const question = document.getElementById("question");

const options = document.getElementById("options");

const nextBtn = document.getElementById("nextBtn");

const scoreText = document.getElementById("score");


function loadQuestion(){

  question.innerText = quiz[current].question;

  options.innerHTML = "";

  nextBtn.disabled = true;

  quiz[current].options.forEach(option => {

    let btn = document.createElement("button");

    btn.innerText = option;

    btn.className = "option";

    btn.onclick = function(){

      if(nextBtn.disabled === false){

        return;

      }

      let allButtons = document.querySelectorAll(".option");

      allButtons.forEach(button => {

        button.disabled = true;

        if(button.innerText === quiz[current].answer){

          button.classList.add("correct");

        }

      });

      if(option !== quiz[current].answer){

        btn.classList.add("wrong");

      }
      else{

        score++;

      }

      nextBtn.disabled = false;

    };

    options.appendChild(btn);

  });

}


nextBtn.onclick = function(){

  current++;

  if(current < quiz.length){

    loadQuestion();

  }
  else{

    question.innerText = "Quiz Finished";

    options.innerHTML = "";

    nextBtn.style.display = "none";

    scoreText.innerText =
    "Your Score : " + score + "/10";

  }

}


loadQuestion();