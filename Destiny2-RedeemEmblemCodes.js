// Changelog:
// Last Updated: November 14th, 2021 - Converted script from D1 to D2. Added new "Be True" emblem code.

// List of emblem codes for Destiny 2. Feel free to add or remove codes as necessary.
var d2codes = [
  "YRC-C3D-YNC",
  "7D4-PKR-MD7",
  "X9F-GMA-H6D",
  "XFV-KHP-N97",
  "A7L-FYC-44X",
  "JDT-NLC-JKM",
  "N3L-XN6-PXF",
  "7CP-94V-LFP",
  "FJ9-LAM-67F",
  "7F9-767-F74",
  "X4C-FGX-MX3",
  "JD7-4CM-HJG",
  "JNX-DMH-XLA",
  "3VF-LGC-RLX",
  "RA9-XPH-6KJ",
  "JYN-JAA-Y7D",
  "7LV-GTK-T7J",
  "ML3-FD4-ND9",
  "L7T-CVV-3RD",
  "F99-KPX-NCF",
  "6LJ-GH7-TPA",
  "PHV-6LF-9CP"
];

// Tells the script which textbox to type the emblem codes into.
var codeField = document.getElementById("text_code");

// Define Variables
var i = 0;

// Delay: Time (in milliseconds) before refreshing and entering another code. Feel free to increase this delay if you have slow internet, a slow PC, or are just experiencing problems with the script in general.
var delay = 2500; // 2500ms (or 2.5s)

// enterCodeLoop: Defines the function that loops through each of the emblem codes listed above, enters the code into the textbox specified above, "clicks" the submit button, waits the specified delay time (default is 2500ms), then repeats the process until there are no more emblem codes.
function enterCodeLoop() {
  setTimeout(function () {
    codeField.value = d2codes[i];
    $(".btn_submitCode")[0].click();
    i++;
    if (i < d2codes.length) {
      enterCodeLoop();
    } else {
      alert(
        "All provided Destiny 2 emblem codes have been successfully entered!"
      );
    }
  }, delay);
}

// Runs the function defined above... sit back and enjoy!
enterCodeLoop();
