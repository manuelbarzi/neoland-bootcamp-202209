var IS_ALPHABETICAL_REGEX = /^[a-zA-Z() ]+$/
// eslint-disable-next-line no-useless-escape
var IS_EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
var HAS_SPACES_REGEX = /\s/
var HAS_NO_SPACES_REGEX = /^\S*$/

export {
    IS_ALPHABETICAL_REGEX,
    IS_EMAIL_REGEX,
    HAS_NO_SPACES_REGEX,
    HAS_SPACES_REGEX
}

