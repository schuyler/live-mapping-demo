function showSource() {
    $("#console-div").css("display", "none");
    $("#source-div").css("display", "block");
}

function showConsole() {
    $("#console-div").css("display", "block");
    $("#source-div").css("display", "none");
}

function debugObject(obj) {
    var div = $("#console");
    div.val(JSON.stringify(obj, null, 2));
    showConsole();
}

function refresh() {
    map = null;
    $("#map").unbind();
    $("#map>*").remove();
    try {
        eval(document.getElementById("source").value);
        $("#console").val("OK");
    } catch(e) {
        var msg;
        try {
            msg = e.stack;
        } catch (e2) {
            msg = e.toString();
        }
        $("#console").val(msg);
        showConsole();
    }
}
