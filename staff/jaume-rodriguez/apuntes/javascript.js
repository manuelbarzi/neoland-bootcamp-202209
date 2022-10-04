/* let nodes = document.childNodes

for (i = 0; i < nodes.length; i++) {
    console.log(nodes[i].nodeName)

    let nodes2 = nodes[i].childNodes

    for (j = 0; j < nodes2.length; j++) {
        console.log('  ' + nodes2[j].nodeName)

        let nodes3 = nodes2[j].childNodes

        for (k = 0; k < nodes3.length; k++) {
            console.log('    ' + nodes3[k].nodeName)
        }
    }
} */

let ratio = 1.2; // ratio

function addAndApplyGlobalRatio(a, b) {
    let r = a + b
    return r * ratio
}

console.log(addAndApplyGlobalRatio(1, 2));

console.log("The ratio is " + ratio);

/* ----------------------- */