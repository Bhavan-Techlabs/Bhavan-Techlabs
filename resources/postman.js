var content = 'application/json';

async function GET(url) {
    var auth = document.getElementById("auth_key").innerText;
    try {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': content,
                'Authorization': 'Bearer ' + auth,
            }
        };
        let response = await fetch(url, options);
        let json_response = response.json();
        return json_response;
    } catch (error) {
        console.log(error);
    }
}


async function POST(url, obj) {
    var auth = document.getElementById("auth_key").innerText;
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': content,
                'Authorization': 'Bearer ' + auth,
            },
            body: JSON.stringify(obj)
        };
        let response = await fetch(url, options);
        let json_response = response.json();
        return json_response;
    } catch (error) {
        console.log(error);
    }
}


async function PUT(url, obj) {
    var auth = document.getElementById("auth_key").innerText;
    try {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': content,
                'Authorization': 'Bearer ' + auth,
            },
            body: JSON.stringify(obj)
        };
        let response = await fetch(url, options);
        let json_response = response.json();
        return json_response;
    } catch (error) {
        console.log(error);
    }
}


async function DELETE(url) {
    var auth = document.getElementById("auth_key").innerText;
    try {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': content,
                'Authorization': 'Bearer ' + auth,
            }
        };
        let response = await fetch(url, options);
        let json_response = response.json();
        return json_response;
    } catch (error) {
        console.log(error);
    }
}


$(function () {

    $(document).on('click', '#auth', function () {
        let username = $("#username").val();
        let password = $("#password").val();
        let url = $("#auth_url").val();
        let user = {
            "username": username,
            "password": password
        }
        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(user),
        }).always(function (data) {
            console.log(data);
            $("auth_key").val(data.authToken);
            $("#text").val(data);
        });
    });

    $(document).on('click', '#get', function () {
        let get_url = $("#get_url").val();
        $.get(get_url, function (data) {
            console.log(data);
            $("#text").val(data);
        });
    });

    $(document).on('click', '#post', function () {
        let post_url = $("#post_url").val();
        let obj = JSON.parse($("#post_body").val());
        $.ajax({
            url: post_url,
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(obj),
        }).always(function (data) {
            console.log(data);
            $("#text").val(data);
        });
    });

    $(document).on('click', '#put', function () {
        let put_url = $("#put_url").val();
        let obj = JSON.parse($("#put_body").val());
        $.ajax({
            url: put_url,
            type: 'put',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(obj),
        }).always(function (data) {
            console.log(data);
            $("#text").val(data);
        });
    });

    $(document).on('click', '#delete', function () {
        let delete_url = $("#delete_url").val();
        $.ajax({
            url: delete_url,
            type: 'delete',
            dataType: 'json',
            contentType: 'application/json'
        }).always(function (data) {
            console.log(data);
            $("#text").val(data);
        });
    });
});


var base_url = "";
var obj = {
    "brand_name": "brand_name new",
    "engine_capacity": "93",
    "speed": "47",
    "color": "colo new",
    "owner": "ownep 1",
    "vehicle_number": "32",
    "id": "1"
}

var get_btn = document.getElementById("get");
var post_btn = document.getElementById("post");
var put_btn = document.getElementById("put");
var delete_btn = document.getElementById("delete");
var text = document.getElementById("text");
var get_url = document.getElementById("get_url");
var post_url = document.getElementById("post_url");
var post_body = document.getElementById("post_body");
var put_url = document.getElementById("put_url");
var put_body = document.getElementById("put_body");
var delete_url = document.getElementById("delete_url");

post_body.value = JSON.stringify(obj, null, '\n\t');
put_body.value = JSON.stringify(obj, null, '\n\t');

async function getRequest() {
    text.value = "Loading...";
    base_url = get_url.value;
    let response = await GET(base_url);
    text.value = JSON.stringify(response, null, '\t');
}

async function postRequest() {
    text.value = "Loading...";
    base_url = post_url.value;
    console.log(post_body.value);
    let new_obj = JSON.parse(post_body.value);
    let response = await POST(base_url, new_obj);
    text.value = JSON.stringify(response, null, '\t');
}

async function putRequest() {
    text.value = "Loading...";
    base_url = put_url.value;
    let new_obj = JSON.parse(put_body.value);
    let response = await PUT(base_url, new_obj);
    text.value = JSON.stringify(response, null, '\t');
}

async function deleteRequest() {
    text.value = "Loading...";
    base_url = delete_url.value;
    let response = await DELETE(base_url);
    text.value = JSON.stringify(response, null, '\t');
}


get_btn.addEventListener("click", getRequest);
post_btn.addEventListener("click", postRequest);
put_btn.addEventListener("click", putRequest);
delete_btn.addEventListener("click", deleteRequest);


async function authrequest() {
    base_url = document.getElementById("auth_url").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let user = {
        "username": username,
        "password": password
    }
    let response = await POST(base_url, user);
    text.value = "AUTHTOKEN = " + response.authToken;
    document.getElementById("auth_key").innerText = response.authToken;
}
document.getElementById("auth").addEventListener("click", authrequest);