import { rss } from "../public/rss.js"; // PLEASE DON'T DELETE, this is the module that stores the subjects and resources data
import { renderDesc, renderLinks } from "../scripts/rss-desc.js";

export function renderButtons() {
    console.log("this is subject-rss.js");
    const parent = document.getElementById("list")
    let resource = window.appState.currentResource
    let subject = window.appState.currentSubject
    console.log(`currentSubject: ${subject}`)
    const resourceApplicator = (resourceName, id) => {
        // this function creates ready-to-insert HTML inside of strings by using JS template strings
        const element = `<button type="button" id="${id}" class="w-40 lg:w-78 lg:h-24 p-2 rounded-2xl shadow-lg transition transform bg-linear-to-r from-[#dde6ef] to-[#cfd9e2] text-main hover:shadow-2xl hover:scale-110 hover:from-[#f5d8cc] hover:to-[#e3c7bc] inline-flex items-center justify-center">${resourceName}</button>`;
        return element;
    }

    for (let i = 0; i < rss[subject].length; i++) {
        parent.insertAdjacentHTML("beforeend", resourceApplicator(rss[subject][i][0], i));
    }

    // give each button a event listener to add functionality

    for (let i = 0; i < parent.childElementCount; i++) {
        const element = document.getElementById(i.toString());
        element.addEventListener("click", function () {
            window.appState = { "currentSubject": subject, "currentResource": element.innerHTML }
            renderDesc()
            renderLinks()
        })

    }
}
