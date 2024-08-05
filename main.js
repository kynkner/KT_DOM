const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];


function renderQuizes() {
    const quizContainer = document.querySelector('.quiz-container');   
    quizContainer.innerHTML = '';

    quizes.forEach(quiz => {
        const quizItem = document.createElement('div');
        quizItem.classList.add('quiz-item');

        const question = document.createElement('h3');
        question.textContent = quiz.question;

        const answerContainer = document.createElement('div');
        answerContainer.classList.add('quiz-answer');

        quiz.answers.forEach(answer => {
            const answerItem = document.createElement('div');
            answerItem.classList.add('quiz-answer-item');

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `quiz_${quiz.id}`; 

            const label = document.createElement('label');
            label.textContent = answer;

            answerItem.appendChild(input);
            answerItem.appendChild(label);
            answerContainer.appendChild(answerItem);
        });

        quizItem.appendChild(question);
        quizItem.appendChild(answerContainer);
        quizContainer.appendChild(quizItem);
    });

    // let html = '';

    // quizes.forEach(quiz => {
    //     let answersHtml = '';
    //     quiz.answers.forEach(answer => {
    //         answersHtml += `
    //             <div class="quiz-answer-item">
    //                 <input type="radio" name="quiz-${answer.id}>
    //                 <label>${answer.answers}</label>
    //             </div>
    //         `;
    //     });

    //     html += `
    //         <div class="quiz-item">
    //             <h3 class=${quiz.id}>Câu: ${quiz.question}</h3>
    //             <div class="quiz-answer">
    //                 ${answersHtml}
    //             </div>
    //         </div>
    //     `;
    // });

    // quizContainer.innerHTML = html;
};

function randomAnswer(){
    document.querySelectorAll('.quiz-item').forEach(quiz => {
        quiz.querySelectorAll('input')[Math.floor(Math.random() * quiz.querySelectorAll('input').length)].checked = true;
    });
};

document.getElementById('btn').addEventListener('click', randomAnswer);
renderQuizes();
