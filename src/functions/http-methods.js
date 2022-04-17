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
