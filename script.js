function getFirstAnwer(){
    
    const answer = document.getElementById("answer-1").innerHTML

    if(answer == "")
    {
        document.getElementById("answer-1").innerHTML="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.";

        document.getElementById("positive-1").src="assets/images/icon-minus.svg"
    }

    else{
        document.getElementById("answer-1").innerHTML=""

        document.getElementById("positive-1").src="assets/images/icon-plus.svg"
    }
}

document.getElementById("button-1").addEventListener("click", () => getFirstAnwer())



function getSecondAnwer(){
    
    const answer2 = document.getElementById("answer-2").innerHTML

    if(answer2 == "")
    {
        document.getElementById("answer-2").innerHTML="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.";

        document.getElementById("positive-2").src="assets/images/icon-minus.svg"
    }

    else{
        document.getElementById("answer-2").innerHTML=""

        document.getElementById("positive-2").src="assets/images/icon-plus.svg"
    }
}

document.getElementById("button-2").addEventListener("click", () => getSecondAnwer())



function getThirdAnwer(){
    
    const answer3 = document.getElementById("answer-3").innerHTML

    if(answer3 == "")
    {
        document.getElementById("answer-3").innerHTML="  Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!";

        document.getElementById("positive-3").src="assets/images/icon-minus.svg"
    }

    else{
        document.getElementById("answer-3").innerHTML=""

        document.getElementById("positive-3").src="assets/images/icon-plus.svg"
    }
}

document.getElementById("button-3").addEventListener("click", () => getThirdAnwer())



function getFourthAnwer(){
    
    const answer4 = document.getElementById("answer-4").innerHTML

    if(answer4 == "")
    {
        document.getElementById("answer-4").innerHTML="The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.";

        document.getElementById("positive-4").src="assets/images/icon-minus.svg"
    }

    else{
        document.getElementById("answer-4").innerHTML=""

        document.getElementById("positive-4").src="assets/images/icon-plus.svg"
    }
}

document.getElementById("button-4").addEventListener("click", () => getFourthAnwer())


// I dont know how to navigate each button using arrowkey so i copy paste below's code from chatGPT 
document.addEventListener('keydown', function(event) {
    const activeElement = document.activeElement;
    const buttons = Array.from(document.querySelectorAll('button'));
  
    if (event.key === 'ArrowDown') {
      const currentIndex = buttons.indexOf(activeElement);
      const nextIndex = (currentIndex + 1) % buttons.length;
      buttons[nextIndex].focus();
    } else if (event.key === 'ArrowUp') {
      const currentIndex = buttons.indexOf(activeElement);
      const previousIndex = (currentIndex - 1 + buttons.length) % buttons.length;
      buttons[previousIndex].focus();
    }
  });
  