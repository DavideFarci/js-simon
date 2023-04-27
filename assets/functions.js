// trasformare millisecondi in giorni ore minuti e secondi
function timeConvertion(milliseconds) {
    const seconds = milliseconds * 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours /24;

    return days, hours, minutes, seconds
}