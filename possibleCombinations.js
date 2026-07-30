const possibleCombinations = (str) => {
    if (str.length === 0) return [''];
    const combinations = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remaining = str.slice(0, i) + str.slice(i + 1);
        const subCombinations = possibleCombinations(remaining);
        for (const subCombination of subCombinations) {
            combinations.push(char + subCombination);
        }
    }
    return combinations;
};
possibleCombinations('abcd'); // Output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

