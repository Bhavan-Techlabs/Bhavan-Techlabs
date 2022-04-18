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
