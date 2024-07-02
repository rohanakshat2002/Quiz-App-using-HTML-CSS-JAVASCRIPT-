 const questions =[
     {
         question:"Which of the following is a correct syntax to display “Hello World” in an alert box using JavaScript?",
         answers:[
             { text: "alertBox('Hello World')",correct:false},
             { text: "alert('Hello World')",correct:true},
             { text: "msgalert('Hello World')",correct:false},
             { text: "displayAlert('Hello World')",correct:false},
         ]
     },
     {
        question:"Which of the following is a correct syntax to display “Hello World” in an alert box using JavaScript?",
        answers:[
            { text: "alertBox('Hello World')",correct:false},
            { text: "alert('Hello World')",correct:true},
            { text: "msgalert('Hello World')",correct:false},
            { text: "displayAlert('Hello World')",correct:false},
         ]
    },     {
           question:"What is the purpose of JavaScript in web development?",
        answers:[
            { text: "To structure web pages" ,correct:false},
            { text: "To style web pages ",correct:false},
            { text: "To add interactivity and dynamic content to web pages ",correct:true},
            { text:"To store dat  a on the server",correct:false},
        ]
    },
    {
        question:"Which keyword is used for declaring a variable in JavaScript that can be reassigned?",
        answers:[
            { text: "const" ,correct:false},
            { text: "var ",correct:false},
            { text: "static",correct:false},
            { text:"let",correct:true},
        ]
    },
    {
        question:"In Javascript which of the following is a valid variable name?",
        answers:[
            { text: "2names" ,correct:false},
            { text:  "$name",correct:true},
            { text: "-name",correct:false},
            { text:"name2",correct:false},
        ]
    },
    {
        question:"Which data type in Javascript is used to represent logical values?",
        answers:[
            { text: "String" ,correct:false},
            { text: "Boolean",correct:true},
            { text: "Number",correct:false},
            { text:"Undefined",correct:false},
        ]
    },
    
        {
            question:"What does the undefined values in Javascript represent?",
            answers:[
                { text: "An unassigned variable" ,correct:true},
                { text: "null value ",correct:false},
                { text: "A logical false",correct:false},
                { text: "An error condition",correct:false},
            ]
        },
        {
            question:"Which of the following is the lossely typed language ?",
    
            answers:[
                { text: "java" ,correct:false},
                { text: "c++ ",correct:false},
                { text: "Javascript",correct:true},
                { text: "pytohn",correct:false},
            ]
        },
        {
            question:"Which operator is used to check both the value and the type of a variable in JavaScript?",
    
            answers:[
                { text: "==" ,correct:false},
                { text: "===",correct:true},
                { text: "!=",correct:false},
                { text: "!==",correct:false},
            ]
        },
        {
            question:"Which statement is used to execute a block of code multiple times in JavaScript?",
    
            answers:[
                { text: "for" ,correct:true},
                { text: "if",correct:false},
                { text: "return",correct:false},
                { text:"break",correct:false},
            ]
        },
        {
            question:"What does if statement in Javascript does?",
    
            answers:[
                { text: "Declares a variable " ,correct:false},
                { text: "Executes a block of code",correct:true},
                { text: "Prints a message to the  console",correct:false},
                { text:"Loops through a block of code",correct:false},
            ]
        },
        {
        question:"Which of the following is not a loop structure in Javascript?",
    
            answers:[
                { text: "while" ,correct:false},
                { text: "for",correct:false},
                { text: "if",correct:true},
                { text:"do-while",correct:false},
            ]
        }
 ];
 const questionElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");
 
 let currentQuestionIndex = 0;
 let score =0;

 function startQuiz(){
     currentQuestionIndex = 0;
     score = 0;
     nextButton.innerHTML = "Next";
     showQuestion();
 }

 function showQuestion(){
     resetState();
     let currentQuestion = questions[currentQuestionIndex];
     let questionNo=currentQuestionIndex + 1;
     questionElement.innerHTML = questionNo +". " + currentQuestion.
     question;

    currentQuestion.answers.forEach(answer => {
         const button = document.createElement("button");
         button.innerHTML = answer.text;
         button.classList.add("btn");
         answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
         button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
         nextButton.style.display = "none";
         while(answerButtons.firstChild){
             answerButtons.removeChild(answerButtons.firstChild);
        }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
          }
          Array.from(answerButtons.children).forEach(button => {
              if(button.dataset.correct === "true"){
                  button.classList.add("correct");
              }
              button.disabled =true;
          });
          nextButton.style.display ="block";
    }
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Once More !";
    nextButton.style.display = "block";
}

function handleNextButton(){
 currentQuestionIndex++;
 if(currentQuestionIndex < questions.length){
     showQuestion();
 }else{
     showScore();
 }
}


nextButton.addEventListener ("click" , ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();

















 