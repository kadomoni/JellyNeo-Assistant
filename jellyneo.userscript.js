// ==UserScript==
// @name JellyNeo Assistant
// @author Kadomoni
// @version 2
// @grant none
// @match https://*.neopets.com/*
// @require https://code.jquery.com/jquery-3.6.4.min.js
// @downloadURL https://raw.githubusercontent.com/kadomoni/JellyNeo-Assistant/main/jellyneo.userscript.js
// ==/UserScript==
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms*100));}

function displayValue(item) {
  $.get("https://items.jellyneo.net/search/?name=" + item.innerText.trim() + "&name_type=3&limit=1", (res)=>{
    let price = $(res).find('.price-history-link').text();
    if(price){
      if( window.location.href.includes("type=shop")){
      	$(item).next().next().append("<br /><font color='green'>Jelly: " + price + "</font>"); 
      } else {
      	$(item).append("<br /><font color='green'>Jelly: " + price + "</font>"); 
      }
    }
  });
}

(() => {
  "use strict";

  $.when($.ready).then(async () => {
    
    await sleep(30);
    
    let items = $(".item-name");
    console.log(items);
    
    if (items.length > 0) {
      
      items.each((idx)=>{
        let item = items[idx];
        displayValue(item);
        
      });
      
    }
    
  });
  
})();
