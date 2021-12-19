var htmlCodeInstance = CodeMirror(document.getElementById("html-box"), {
    lineNumbers: true,
    tabSize: 4,
    mode: "xml",
    theme: "ayu-mirage",
    styleActiveLine: true,
});
var cssCodeInstance = CodeMirror(document.getElementById("css-box"), {
    lineNumbers: true,
    tabSize: 4,
    mode: "css",
    theme: "ayu-mirage",
    styleActiveLine: true,
});
var jsCodeInstance = CodeMirror(document.getElementById("js-box"), {
    lineNumbers: true,
    tabSize: 4,
    mode: "javascript",
    theme: "ayu-mirage",
    styleActiveLine: true,
});

// Run update() function, when the instances have change
htmlCodeInstance.on("change", function(){
    console.log(htmlCodeInstance.getValue())
    update();
});
cssCodeInstance.on("change", function(){
    console.log(cssCodeInstance.getValue())
    update();
});
jsCodeInstance.on("change", function(){
    console.log(jsCodeInstance.getValue())
    update();
});

//Change iFrame when you receive changes
function update() {
    let preview = document.getElementById("preview").contentWindow.document;
    codeTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
    <style>`
     + cssCodeInstance.getValue() + 
    `</style>
    <body>` + 
    htmlCodeInstance.getValue() +
    `<script>` + jsCodeInstance.getValue() + `</script>` +
    `</body>
    </html>`
    console.log("CODE TEMPLATE: " + codeTemplate)
    preview.open();
    preview.write(codeTemplate);
    preview.close();
}