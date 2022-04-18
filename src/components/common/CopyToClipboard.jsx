export default function CopyToClipboard({ selector }) {
    const copyToClip = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(document.querySelector(selector).value);
    };

    return (
        <>
            <button
                className="btn btn-outline-dark"
                title="copy to clipboard"
                onClick={copyToClip}
            >
                <i className="bx bx-clipboard"></i>
            </button>
        </>
    );
}

export function copy_to_clipboard_by_selector(selector) {
    var copyText = document.querySelector(selector);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}

export function copy_to_clipboard_by_value(value) {
    navigator.clipboard.writeText(value);
}
