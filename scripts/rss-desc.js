import { desc } from "../public/desc.js";
import { rss } from "../public/rss.js";

function descApplicator(resource) {
    console.log(`descApplicator---current resource: ${resource}`)
    const content = desc[resource]
    return `<p class="p-8">${content}</p>`
}

function linkApplicator(resource, subject) {
    console.log(`linkApplicator---current resource: ${resource}---current subject: ${subject}`)
    const url = rss[subject][1][1]
    return `<a href="${url}" class="w-24 sm:h-12 sm:w-32 md:h-16 md:w-40 lg:h-20 lg:w-48 xl:h-24 xl:w-56 2xl:h-28 2xl:w-64 p-2 inline-flex justify-center items-center text-center rounded-2xl shadow-lg transition transform bg-linear-to-r from-[#dde6ef] to-[#cfd9e2] text-black hover:shadow-2xl hover:scale-110 hover:from-[#f5d8cc] hover:to-[#e3c7bc]">link to resource</a>`
}

export function renderDesc() {
    let sub = window.appState.currentSubject 
    let curRss = window.appState.currentResource
    console.log(`current subject: ${sub}\ncurrent resource: ${window.appState.currentResource}`)
    let element = descApplicator(curRss)
    const parent = document.getElementById("desc")

    parent.innerHTML = element
}

export function renderLinks() {
    let sub = window.appState.currentSubject 
    let rss = window.appState.currentResource

    console.log(`current subject: ${sub}\ncurrent resource: ${window.appState.currentResource}`)
    let element = linkApplicator(rss, sub)
    const parent = document.getElementById("link")

    parent.innerHTML = element
    
}