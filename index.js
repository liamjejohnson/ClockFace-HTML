function moveHands() {
  with (new Date()) {
    hour = 30 * ((getHours() % 12) + getMinutes() / 60); // 30 degrees hour
    min = 6 * getMinutes(); // 6 degrees every minute
    sec = 6 * getSeconds(); // 6 degrees every second

    // setting the rotate CSS attribute to those degree values -->
    document.getElementById("secondHand").style.cssText =
      "-webkit-transform:rotate(" + sec + "deg);";
    document.getElementById("minuteHand").style.cssText =
      "-webkit-transform:rotate(" + min + "deg);";
    document.getElementById("hourHand").style.cssText =
      "-webkit-transform:rotate(" + hour + "deg);";

    setTimeout(moveHands, 1000); // calling the function every second
  }
}

window.onload = moveHands;
