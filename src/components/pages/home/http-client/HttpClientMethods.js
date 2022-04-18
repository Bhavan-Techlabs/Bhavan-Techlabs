export async function getRequest({ url }) {
    let value = await fetch(url);
    let json = await value.json();
    console.log(json);
    return json;
}

export async function postRequest({ url, data }) {
    let value = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset = UTF-8",
        },
    });
    let json = await value.json();
    console.log(json);
    return json;
}

export async function putRequest({ url, data }) {
    let value = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset = UTF-8",
        },
    });
    let json = await value.json();
    console.log(json);
    return json;
}

export async function deleteRequest({ url }) {
    let value = await fetch(url, {
        method: "DELETE",
    });
    let json = await value.json();
    console.log(json);
    return json;
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
