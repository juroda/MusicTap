window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual');
  const colorsBubbles1 = [
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#00BCD4"
  ];
  const colorsBubbles2 = [
    "#B71C1C",
    "#880E4F",
    "#7B1FA2",
    "4527A0",
    "#1A237E",
    "#00838F",
  ]

  //Get going with the sound here
  pads.forEach((pad, index) => {
    pad.addEventListener('click', function () {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index);
    });
  });

  const createBubbles = index => {
    //Function that makes bubbles
    const bubble1 = document.createElement("div");
    const bubble2 = document.createElement("div");
    const bubble3 = document.createElement("div");
    const bubble4 = document.createElement("div");

    visual.appendChild(bubble1);
    visual.appendChild(bubble2);
    visual.appendChild(bubble3);
    visual.appendChild(bubble4);   


    bubble1.style.backgroundColor = colorsBubbles1[index];
    bubble1.style.animation = `jumps1 0.8s ease`;

    bubble2.style.backgroundColor = colorsBubbles2[index];
    bubble2.style.animation = `jumps2 1s ease`;

    bubble3.style.backgroundColor = colorsBubbles1[index];
    bubble3.style.animation = `jumps3 0.8s ease`;

    bubble4.style.backgroundColor = colorsBubbles2[index];
    bubble4.style.animation = `jumps4 1s ease`;

    bubble1.addEventListener("animationed", function () {
      visual.removeChild(this);
    })
    bubble2.addEventListener("animationed", function () {
      visual.removeChild(this);
    })
    bubble3.addEventListener("animationed", function () {
      visual.removeChild(this);
    })
    bubble4.addEventListener("animationed", function () {
      visual.removeChild(this);
    })
    
  }
});

