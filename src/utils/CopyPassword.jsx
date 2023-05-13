const CopyPassword = () => {
    const copyFunc = (password) => {
        if (password === "" ) {
            alert("Please generate password")
        }
        else{
            navigator.clipboard.writeText(password);
            alert("Copied password: " + password);
        }
    }
    return { copyFunc }
}

export default CopyPassword
