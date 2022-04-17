export function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
            v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

export function timestamp() {
    return Date.now();
}

export function future_timestamp(days) {
    return Date.now() + days * 86400000;
}

export async function get_ip() {
    let value = await fetch("https://api.ipify.org");
    let ip = await value.text();
    console.log(ip);
    return ip;
}

export function copy_to_clipboard(id) {
    /* Get the text field */
    var copyText = document.getElementById(id);

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
}

export function getQueryParams(str) {
    var queryString = str || "";
    var keyValPairs = [];
    var params = {};
    queryString = queryString.replace(/.*?\?/, "");

    if (queryString.length) {
        keyValPairs = queryString.split("&");
        for (let pairNum in keyValPairs) {
            var key = keyValPairs[pairNum].split("=")[0];
            if (!key.length) continue;
            if (typeof params[key] === "undefined") params[key] = [];
            params[key].push(keyValPairs[pairNum].split("=")[1]);
        }
    }
    return params;
}
