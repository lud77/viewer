module.exports = () => {
    let count = 0;
    return {
        next: () => count++
    };
};
