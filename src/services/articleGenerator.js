const articleGenerator = (content) => {

    let _main = []
    content.slice(0, 4).forEach(item => _main.push(...item))

    let firstBlock = ""
    let firstIndex = 0

    for (let i = 0; i < _main.length; i++) {
        firstBlock = firstBlock + _main[i]
        if (firstBlock.length >= 1350) {
            firstIndex = i
            break
        } 
    }

    let secondBlock = ""
    let secondIndex = 0

    for (let i = _main.length - 1; i >= 0; i--) {
        secondBlock = secondBlock + _main[i]
        if (secondBlock.length >= 1350) {
            secondIndex = i
            break
        } 
    }

    const midIndex = firstIndex + parseInt((secondIndex - firstIndex) / 2)
    console.log(firstIndex, midIndex, secondIndex)

    return [ _main.slice(0, firstIndex + 1), _main.slice(firstIndex + 1, midIndex), _main.slice(midIndex, secondIndex - 1), _main.slice(secondIndex - 1, _main.length -1), [ _main[_main.length - 1], ...content[4]]]

}

export default articleGenerator