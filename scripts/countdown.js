/************* MOST IMPORTANT LINE OF CODE *************/
/* FORMAT IS "Month Day, Year Hour:Minute:Second"
 * Example: "February 23, 2024 18:00:00"
 * Can also be "Feb 23, 2024, 18:00:00"
 * Time is 24 hour format
 */
var spring_break_date = new Date("February 23, 2024 18:00:00").getTime();

// System for American Numbering
var th_val = ["", "thousand", "million", "billion", "trillion"];
var dg_val = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
var tn_val = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
var tw_val = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

// wouldn't touch this function if i were you.
// i have no idea whats going on here but it works.
function convertNumToWords(s) {
  s = s.toString();
  s = s.replace(/[\, ]/g, "");
  if (s != parseFloat(s)) return "not a number ";
  var x_val = s.indexOf(".");
  if (x_val == -1) x_val = s.length;
  if (x_val > 15) return "too big";
  var n_val = s.split("");
  var str_val = "";
  var sk_val = 0;
  for (var i = 0; i < x_val; i++) {
    if ((x_val - i) % 3 == 2) {
      if (n_val[i] == "1") {
        str_val += tn_val[Number(n_val[i + 1])] + " ";
        i++;
        sk_val = 1;
      } else if (n_val[i] != 0) {
        str_val += tw_val[n_val[i] - 2] + " ";
        sk_val = 1;
      }
    } else if (n_val[i] != 0) {
      str_val += dg_val[n_val[i]] + " ";
      if ((x_val - i) % 3 == 0) str_val += "hundred ";
      sk_val = 1;
    }
    if ((x_val - i) % 3 == 1) {
      if (sk_val) str_val += th_val[(x_val - i - 1) / 3] + " ";
      sk_val = 0;
    }
  }
  if (x_val != s.length) {
    var y_val = s.length;
    str_val += "point ";
    for (var i = x_val + 1; i < y_val; i++) str_val += dg_val[n_val[i]] + " ";
  }
  return str_val.replace(/\s+/g, " ");
}

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = spring_break_date - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var days_word =
    convertNumToWords(days) === "" ? "zero " : convertNumToWords(days);
  var plural = days === 1 ? "day" : "days";

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days_word + plural;
  document.getElementById("hms").innerHTML =
    "+ " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    // If less than a week has passed, it is still spring break.
    // Otherwise, spring break is over :(
    completion_string =
      days > -7 ? "IT'S SPRING BREAK!!!!" : "spring break is over :(";

    clearInterval(x);
    document.getElementById("days").innerHTML = "";
    document.getElementById("hms").innerHTML = "";
    document.getElementById("break").innerHTML = completion_string;
  }
}, 1000);
