export function det_doc_height(document) {
    var body = document.body;
    var html = document.documentElement;

    const d_height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
    );

    return d_height
}