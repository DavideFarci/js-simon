// trasformare millisecondi in giorni ore minuti e secondi
// function countdown(milliseconds) {
//     let timer = milliseconds;
//     let now = new Date().getTime();
    
//     let distance = timer - now;
    
//     let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//     return days + "D" + hours + "H" + minutes + "M" + seconds + "S";
// }

function countdown() {
    const timer = new Date("2023-04-28T09:30:00").getTime();
    
    setInterval(() => {
      const now = new Date().getTime();
      const distance = timer - now;
    
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      const countdownText = days + "D  " + hours + "H  " + minutes + "M  " + seconds + "S";

      document.querySelector("#timer").innerHTML = countdownText;
    }, 1000);
  }