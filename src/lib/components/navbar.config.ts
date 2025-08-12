export const config = {
    ALLOWED_ATTR: [
        "src",
        "href",
        "alt",
        "class",
        "id"
    ],
    ALLOW_UNSAFE_SCRIPT: false,
    ALLOW_ARIA_ATTR: true,
    ALLOW_UNKNOWN_PROTOCOLS: false,
    ALLOWED_TAGS: [
        "div",
        "a",
        "ul",
        "li",
        "nav",
        "header",
        "img",
    ],
    ALLOWED_URI_REGEXP: /^https?:\/\//,
};