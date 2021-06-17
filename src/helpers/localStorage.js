const setItem = (name, value) => {
    localStorage.setItem(name, value)
}

const getItem = (name) => {
    return localStorage.getItem(name)
}

const removeItem = (name) => {
    localStorage.removeItem(name)
}

const storageItems = {
    setItem,
    getItem,
    removeItem
}

export default storageItems
