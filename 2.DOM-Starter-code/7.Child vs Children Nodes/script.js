const parentEl = document.getElementById("parent")
console.log(parentEl.childNodes);

parentEl.childNodes.forEach((node) => {console.log(node.nodeType);
 })

 const childrenEl = document.getElementById("parent")
 console.log(childrenEl.children);
 

 for( let i = 0; i <= 5; i++) {

    setTimeout(() => {

        console.log("seconds", i);
        
    }, 1000)
 }