// ==UserScript==
// @name     JellyNeo Assistant
// @author	 Kadomoni
// @version  1
// @grant    none
// @match		 https://*.neopets.com/*
// @require	 https://code.jquery.com/jquery-3.6.4.min.js
// ==/UserScript==
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms*100));}

function displayValue(item) {
  $.get("https://items.jellyneo.net/search/?name=" + item.innerText.trim() + "&name_type=3&limit=1", (res)=>{
    let price = $(res).find('.price-history-link').text();
    if(price){ $(item).next().next().append("<br /><font color='green'>Jelly: " + price + "</font>"); }
  });
}

(() => {
  "use strict";

  $.when($.ready).then(async () => {
    
    await sleep(30);
    
    let items = $(".item-name");
    
    if (items.length > 0) {
      
      items.each((idx)=>{
        console.log(".");
        let item = items[idx];
        displayValue(item);
        
      });
      
    }
    
  });
  
})();