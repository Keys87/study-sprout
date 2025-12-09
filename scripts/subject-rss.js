import { rss } from "../public/rss.js"; // PLEASE DON'T DELETE, this is the module that stores the subjects and resources data
import { renderDesc } from "../scripts/rss-desc.js";

export function renderButtons() {
    console.log("this is subject-rss.js");
    const parent = document.getElementById("list")
    let resource  = window.appState.currentResource
    let subject = window.appState.currentSubject
    console.log(`currentSubject: ${subject}`)
    const resourceApplicator = (resourceName, id) => {
        // this function creates ready-to-insert HTML inside of strings by using JS template strings
        const element = `<button type="button" id="${id}" class="w-24 sm:h-12 sm:w-32 md:h-16 md:w-40 lg:h-20 lg:w-48 xl:h-24 xl:w-56 2xl:h-28 2xl:w-64 p-2 rounded-2xl shadow-lg transition transform bg-linear-to-r from-[#CCCCFF] to-blue-100 text-black hover:shadow-2xl hover:scale-110 hover:from-purple-400 hover:to-blue-300">${resourceName}</button>`;
        return element;
    }

    for (let i = 0; i < rss[subject].length; i++) {
        parent.insertAdjacentHTML("beforeend", resourceApplicator(rss[subject][i][0], i));
    }

    // give each button a event listener to add functionality

    for (let i = 0; i < parent.childElementCount; i++) {
        const element = document.getElementById(i.toString());
        element.addEventListener("click", function () {
            window.appState = {"currentSubject": subject, "currentResource": element.innerHTML}
            renderDesc()
        })
        
    }
}
