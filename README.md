# Destiny 2: Automatically Apply Emblem Codes
This script automatically applies emblem codes to your Bungie.net account from a string array (list inside of the script.) 

## Getting Started
These instructions are written under the assumption that you're using Google Chrome. However, they should work perfectly fine in the new version of Microsoft Edge that's based off of Chromium as well. I've seen comments explaining how to use the script in Mozilla Firefox, Safari and more, but I've only tested in Google Chrome.

**Please be aware** that applying these codes won't make the emblems automatically appear in your collections. To find your emblems, after this script completes, you need to completely close out of Destiny 2, restart the game, sign back in and check your collections. They will be under the "General" and/or "Account" section(s.)

### Step 1: Navigate to the OLD Bungie.net Code Redemption Page
The current Bungie.net website is built on some form of ReactJS and is not compatible with this script. For this script to work, you'll need to navigate to the old version of the website. I assume both Code Redemption pages use the same backend API for processing because, fortunately, even the newest Destiny 2 Emblem Codes can be submitted via the old page. Please use the following link: https://www.bungie.net/en/User/coderedemption

### Step 2: Open the Console from the Developer Tools menu
- Windows ─ Google Chrome: Press `CTRL + SHIFT + J` to open the Developer Tools Console.
- Windows ─ Microsoft Edge (Chromium): Press `CTRL + SHIFT + J` to open the Developer Tools Console.
- Windows ─ Mozilla FireFox: Press `CTRL + SHIFT + K` to open the "Web Developer Console."

### Step 3: Run the Script
Copy the script below, paste it into the Dev Tools Console and press Enter.

---

### Script to Automatically Apply Emblem Codes
```js
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

```

---

### Known Emblem Codes
|Emblem                   |Code       |
|-------------------------|-----------|
|Ab Aeterno               |JDT-NLC-JKM|
|Be True                  |ML3-FD4-ND9|
|Binding Focus            |FJ9-LAM-67F|
|Cryonautics              |RA9-XPH-6KJ|
|Field of Light           |JNX-DMH-XLA|
|Flames of Forgotten Truth|A7L-FYC-44X|
|Future In Shadow         |7LV-GTK-T7J|
|Galilean Excursion       |JYN-JAA-Y7D|
|Illusion of Light        |JD7-4CM-HJG|
|Insula Thesauraria       |3VF-LGC-RLX|
|Lone Focus, Jagged Edge |7CP-94V-LFP|
|Note of Conquest         |X4C-FGX-MX3|
|Sequence Flourish        |7D4-PKR-MD7|
|Sign of the Finite       |7F9-767-F74|
|Spicy Ramen              |YRC-C3D-YNC|
|The Reflective Proof     |N3L-XN6-PXF|
|The Unimagined Plane     |X9F-GMA-H6D|
|The Visionary            |XFV-KHP-N97|
|Heliotrope Warren |L7T-CVV-3RD|
|Shadow's Light |F99-KPX-NCF|
|Sneer of the Oni |6LJ-GH7-TPA|
|Countdown to Convergence |PHV-6LF-9CP|
|Liminial Nadir |VA7-L7H-PNC|
