// https://b00tc4mp.com

nodes = document.childNodes

for (i = 0; i < nodes.length; i++) {
    console.log(nodes[i].nodeName)

    nodes2 = nodes[i].childNodes

    for (j = 0; j < nodes2.length; j++) {
        console.log('  ' + nodes2[j].nodeName)

        nodes3 = nodes2[j].childNodes

        for (k = 0; k < nodes3.length; k++) {
            console.log('    ' + nodes3[k].nodeName)
        }
    }
}
// VM3823:4 html
// VM3823:4 HTML
// VM3823:9   HEAD
// VM3823:14     #text
// VM3823:14     META
// VM3823:14     #text
// VM3823:14     META
// VM3823:14     #text
// VM3823:14     TITLE
// VM3823:14     #text
// VM3823:14     STYLE
// VM3823:14     #text
// VM3823:14     SCRIPT
// VM3823:9   #text
// VM3823:9   BODY
// VM3823:14     #text
// VM3823:14     H1
// VM3823:14     #text
// VM3823:14     P
// VM3823:14     #text
// undefined