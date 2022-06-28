module.exports = function reverse(n) {
    const n2 = String(Math.abs(n)).split("").reverse().join("");
    return Number(n2);
};
