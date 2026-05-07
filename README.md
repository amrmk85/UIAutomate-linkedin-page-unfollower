# LinkedIn Auto Unfollow

A lightweight browser automation script for Safari and Chrome that helps users clean up unnecessary LinkedIn followed pages quickly and safely.

## Overview

Over time, LinkedIn accounts can accumulate hundreds or even thousands of followed pages from:

* Old companies
* Recruiters
* Marketing pages
* Suggested follows
* Technology pages
* Job-related pages
* Networking activity

Manually unfollowing pages one by one is repetitive and time-consuming.

This script automates the process by:

* Detecting LinkedIn "Following" buttons
* Clicking unfollow automatically
* Handling confirmation dialogs
* Auto-scrolling through results
* Clicking "Show more results"
* Adding safe delays between actions

The automation is designed for personal account cleanup and safer bulk unfollowing.

---

# Features

## Current Features

* Automatic unfollowing of LinkedIn pages
* Auto-scroll support
* Auto-click "Show more results"
* Confirmation popup handling
* Human-like delays between actions
* Safari support
* Chrome support
* Works directly from browser DevTools Console
* Can be converted into a Bookmarklet

---

# Supported Browsers

| Browser | Supported |
| ------- | --------- |
| Safari  | Yes       |
| Chrome  | Yes       |
| Edge    | Yes       |
| Brave   | Yes       |

---

# Script

```javascript
async function autoUnfollow() {
    const delay = (ms) => new Promise(res => setTimeout(res, ms));

    for (let cycle = 0; cycle < 20; cycle++) {

        console.log("Cycle:", cycle + 1);

        // Step 1: Unfollow visible pages
        let buttons = document.querySelectorAll('button');

        for (let btn of buttons) {
            if (btn.innerText.trim() === "Following") {

                btn.click();
                await delay(1500);

                let confirmBtn = [...document.querySelectorAll('button')]
                    .find(b => b.innerText.includes("Unfollow"));

                if (confirmBtn) confirmBtn.click();

                console.log("Unfollowed");
                await delay(2500);
            }
        }

        // Step 2: Scroll down
        window.scrollTo(0, document.body.scrollHeight);
        await delay(3000);

        // Step 3: Click "Show more results"
        let showMore = [...document.querySelectorAll('button')]
            .find(b => b.innerText.toLowerCase().includes("show more"));

        if (showMore) {
            console.log("Clicking Show More...");
            showMore.click();
            await delay(4000);
        } else {
            console.log("No more results found.");
            break;
        }
    }

    console.log("Finished automation.");
}

autoUnfollow();
```

---

# How to Use

## Important Requirement

Before running the script, you must open the browser Developer Tools (DevTools) Console.

The script runs directly inside the browser console and interacts with the LinkedIn page currently opened in your browser.

## Safari Setup

### Step 1 — Enable Developer Menu

1. Open Safari
2. Go to:

```text
Safari → Settings → Advanced
```

3. Enable:

```text
Show Develop menu in menu bar
```

---

### Step 2 — Open LinkedIn Following Pages

Navigate to:

```text
LinkedIn → My Network → Following → Pages
```

---

### Step 3 — Open Console

Press:

```text
Cmd + Option + C
```

or:

```text
Develop → Show JavaScript Console
```

---

### Step 4 — Allow Pasting

If Safari blocks pasting, type:

```text
allow pasting
```

Then press Enter.

---

### Step 5 — Paste Script

Paste the script into the console and press Enter.

---

# Chrome Setup

## Step 1 — Open LinkedIn Following Pages

Navigate to:

```text
LinkedIn → My Network → Following → Pages
```

---

## Step 2 — Open DevTools

Press:

```text
F12
```

or:

```text
Ctrl + Shift + I
```

Mac:

```text
Cmd + Option + I
```

---

## Step 3 — Open Console

Click the:

```text
Console
```

tab.

---

## Step 4 — Allow Pasting

If Chrome shows a warning, type:

```text
allow pasting
```

and press Enter.

---

## Step 5 — Run Script

Paste the script and press Enter.

---

# Bookmarklet Version

You can also save the automation as a Bookmarklet.

## Create Bookmark

Name:

```text
LinkedIn Unfollow
```

URL:

```javascript
javascript:(async function(){const d=(ms)=>new Promise(r=>setTimeout(r,ms));for(let i=0;i<20;i++){let btns=document.querySelectorAll('button');for(let b of btns){if(b.innerText.trim()==="Following"){b.click();await d(1500);let c=[...document.querySelectorAll('button')].find(x=>x.innerText.includes("Unfollow"));if(c)c.click();await d(2500);}}window.scrollTo(0,document.body.scrollHeight);await d(3000);let m=[...document.querySelectorAll('button')].find(x=>x.innerText.toLowerCase().includes("show more"));if(m){m.click();await d(4000);}else{break;}}})();
```

---

# Safety Recommendations

## Important

Use automation responsibly.

Recommended:

* Limit unfollows per session
* Keep delays enabled
* Avoid aggressive automation
* Run manually instead of continuously
* Monitor the process while running

---

# Why Delays Matter

The script includes delays to:

* Mimic human interaction
* Reduce rapid repeated requests
* Lower the chance of LinkedIn temporary restrictions
* Improve stability while pages load dynamically

---

# Troubleshooting

## Console Keeps Scrolling With Errors

This is usually caused by browser extensions.

Fix:

* Clear console using:

```text
Cmd + K
```

or:

```text
Ctrl + L
```

* Disable noisy extensions
* Use Bookmarklet mode instead

---

## Buttons Not Detected

Possible reasons:

* LinkedIn UI changed
* Language is not English
* Page not fully loaded

Possible fix:

Update the selector text from:

```javascript
"Following"
```

to your LinkedIn language.

---

# Disclaimer

This project is intended for educational and personal productivity purposes only.

Users are responsible for complying with LinkedIn Terms of Service and platform policies.

The author is not responsible for account restrictions, misuse, or automation abuse.

---

# Future Improvements

Potential future features:

* Start / Stop UI button
* Extension version
* Arabic UI support
* Custom unfollow limits
* Better progress tracking
* Smarter page detection
* Pause / Resume automation

---

# License

MIT License

---

# Contributing

Contributions, improvements, and pull requests are welcome.

Feel free to fork the repository and enhance the automation.
