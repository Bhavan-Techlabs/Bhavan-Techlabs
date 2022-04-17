function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

function timestamp() {
    return Date.now();
}

function future_timestamp(days) {
    return Date.now() + days * 86400000;
}

async function get_ip() {
    let value = await fetch("https://api.ipify.org");
    let ip = await value.text();
    console.log(ip);
    return ip;
}

function copy_to_clipboard(id) {
    /* Get the text field */
    var copyText = document.getElementById(id);

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
}

document.querySelector("#gen-util-ip-btn").addEventListener("click", async (e) => {
    document.getElementById('util-ip').value = await get_ip();
    copy_to_clipboard('util-ip');
});

document.querySelector("#gen-util-timestamp-btn").addEventListener("click", (e) => {
    document.getElementById('util-timestamp').value = timestamp();
    copy_to_clipboard('util-timestamp');
});

document.querySelector("#conv-util-timestamp-btn").addEventListener("click", (e) => {
    let ts = document.getElementById('conv-util-timestamp').value;
    var date = new Date(+ts);
    document.getElementById('conv-util-timestamp-result').value = date;
});