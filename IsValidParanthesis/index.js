
const isValid = (s) => {
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] in map) {
        stack.push(s[i]);
        } else if (map[stack.pop()] !== s[i]) {
        return false;
        }
    }
    return stack.length === 0;
    }