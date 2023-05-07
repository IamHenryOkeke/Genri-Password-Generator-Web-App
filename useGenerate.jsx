import data from "./characters.json"

const useGenerate = (upperCaseValue, lowerCaseValue, numberValue, symbolValue) => {
    const passwordArray = [];
    const generateUppercase = () => {
        let charNumUppercase = upperCaseValue;
        for (let i = 0; i < charNumUppercase; i++) {
            passwordArray.push(data.upperCaseLetters[Math.floor((Math.random() * data.upperCaseLetters.length))])
            // setPasswordArray(...passwordArray,data.upperCaseLetters[Math.floor((Math.random() * data.upperCaseLetters.length))])
        }
    }

    const generateLowercase = () => {
        let charNumLowercase = lowerCaseValue;
        for (let i = 0; i < charNumLowercase; i++) {
            passwordArray.push(data.lowerCaseLetters[Math.floor((Math.random() * data.lowerCaseLetters.length))])
        }
    }

    const generateNumber = () => {
        let charNumber = numberValue;
        for (let i = 0; i < charNumber; i++) {
            passwordArray.push(data.numbers[Math.floor((Math.random() * data.numbers.length))])
        }
    }

    const generateSymbol = () => {
        let charNumSymbol = symbolValue;
        for (let i = 0; i < charNumSymbol; i++) {
            passwordArray.push(data.symbols[Math.floor((Math.random() * data.symbols.length))])
        }
    }

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const generatePassword = () => {
        let password = ""
        generateUppercase();
        generateLowercase();
        generateNumber();
        generateSymbol();
        shuffle(passwordArray);
        password = passwordArray.join("")
        return password
    }
    
    return {generatePassword};
}

export default useGenerate
