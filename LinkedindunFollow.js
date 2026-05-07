async function autoUnfollow() {
const delay = (ms) => new Promise(res => setTimeout(res, ms));

for (let cycle = 0; cycle < 20; cycle++) {

console.log("Cycle:", cycle + 1);

// Step 1: Unfollow visible
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
