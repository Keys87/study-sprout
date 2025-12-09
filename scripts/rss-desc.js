import { desc } from "../public/desc.js";

function descApplicator(subject, resource) {
    const content = desc[subject][resource]
    return `<p class="p-8">${content}</p>`
}

export function renderDesc() {
    let subject = window.appState.currentSubject
    let resource = window.appState.currentResource
    console.log(`current resource: ${resource}`)
    let element = descApplicator(subject, resource)
    const parent = document.getElementById("desc")
    
    parent.innerHTML = element

}