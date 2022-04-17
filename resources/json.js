document.querySelector("#stringify-json-btn").addEventListener('click', () => {
    let input_json_txt_value = document.querySelector("#input-json-txt").value;
    let output = "";
    try {
        output = JSON.stringify(input_json_txt_value, null, '\t');
    } catch (error) {
        output = error;
    }
    document.querySelector("#result-json-txt").value = output;
});

document.querySelector("#parse-json-btn").addEventListener('click', () => {
    let input_json_txt_value = document.querySelector("#input-json-txt").value;
    let output = "";
    try {
        let parsed_text = JSON.parse(input_json_txt_value);
        output = JSON.stringify(JSON.parse(parsed_text), null, '\t');
    } catch (error) {
        output = error;
    }
    document.querySelector("#result-json-txt").value = output;
});

document.querySelector("#beautify-json-btn").addEventListener('click', () => {
    let input_json_txt_value = document.querySelector("#input-json-txt").value;
    let output = "";
    try {
        output = JSON.stringify(JSON.parse(input_json_txt_value), null, '\t');
    } catch (error) {
        output = error;
    }
    document.querySelector("#result-json-txt").value = output;
});

document.querySelector("#normalise-json-btn").addEventListener('click', () => {
    let input_json_txt_value = document.querySelector("#input-json-txt").value;
    let output = "";
    try {
        output = JSON.stringify(JSON.parse(input_json_txt_value));
    } catch (error) {
        output = error;
    }
    document.querySelector("#result-json-txt").value = output;
});

document.querySelector("#copy-json-btn").addEventListener('click', () => {
    copy_to_clipboard("result-json-txt");
});

document.querySelector("#clear-json-btn").addEventListener('click', () => {
    document.querySelector("#input-json-txt").value = "";
    document.querySelector("#result-json-txt").value = "";
});