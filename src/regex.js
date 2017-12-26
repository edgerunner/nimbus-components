const email = /^\s*[\w-+.]+?@[\w-]+?(?:\.[\w-]+?)*?\s*$/;

const fullname = /^(?!(?:.*\d))\s*(\S+)(?:\s+\S+)+\s*$/;

const password = /^(?=(?:.*[a-z]))(?=(?:.*[A-Z]))(?=(?:.*\d))\S{6,40}$/;

export default {email, fullname, password}
