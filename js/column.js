(()=>{function l(){return Array.prototype.slice.call(document.querySelectorAll.apply(document,arguments))}if(l(".columns .column-right").length&&l(".columns .column-right-shadow").length&&!l(".columns .column-right-shadow")[0].children.length)for(var o of l(".columns .column-right")[0].children)l(".columns .column-right-shadow")[0].append(o.cloneNode(!0))})();