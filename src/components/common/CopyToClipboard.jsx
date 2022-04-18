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
