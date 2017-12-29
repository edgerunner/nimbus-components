const regex = {
    email: /^\s*[\w-+.]+?@[\w-]+?(?:\.[\w-]+?)*?\s*$/,
    fullname: /^(?!(?:.*\d))\s*(\S+)(?:\s+\S+)+\s*$/,
    password: /^(?=(?:.*[a-z]))(?=(?:.*[A-Z]))(?=(?:.*\d))\S{6,40}$/,
    blank: /^\s*$/,
    validatedValue: (v, r) => {
        const s = new String(v);
        s.validator = r;
        Object.defineProperty(s, 'blank', { get: function() { return /^\s*$/.test(this); } } );
        Object.defineProperty(s, 'valid', { get: function() { return this.validator.test(this); } } );
        Object.defineProperty(s, 'error', { get: function() { return !this.blank && !this.valid; } } );
        return s;
    }
}

export default regex;
