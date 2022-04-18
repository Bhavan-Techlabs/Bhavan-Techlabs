export default function CopyToClipboard({ id }) {
    const copyToClip = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(document.getElementById(id).value);
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
