const l=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}};l();const u=document.querySelectorAll("div.square-pkmn"),a=document.querySelectorAll("div.display");document.createElement("img");const m=document.querySelector("#startGameButton"),d=(e,o)=>Math.floor(Math.random()*(o-e+1)+e),f=()=>{const e=[];for(;e.length<12;){const o=d(1,490);e.indexOf(o)===-1&&e.push(o)}return e},c=e=>fetch(`https://pokeapi.co/api/v2/pokemon/${e}/`).then(o=>o.json()).then(o=>o),p=async e=>{const r=(await c(e[0])).sprites.other["official-artwork"].front_default,t=(await c(e[6])).sprites.other["official-artwork"].front_default;a[0].innerHTML=`<img height= "250" width= "250" src= ${r}>`,a[1].innerHTML=`<img height= "250" width= "250" src= ${t}>`},h=async e=>{for(const o in e){const i=(await c(e[o])).sprites.front_default;u[o].innerHTML=`<img src= ${i}>`}},k=()=>{const e=f();p(e),h(e)};m.addEventListener("click",k);