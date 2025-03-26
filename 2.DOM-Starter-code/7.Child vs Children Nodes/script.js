const parentEl = document.getElementById("parent")
console.log(parentEl.childNodes);

parentEl.childNodes.forEach((node) => {console.log(node.nodeType);
 })

 const childrenEl = document.getElementById("parent")
 console.log(childrenEl.children);
 