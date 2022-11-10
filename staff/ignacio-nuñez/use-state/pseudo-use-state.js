const __state__ = {}

function useState(state) {
    const key = state

    if (__state__[key] === undefined)
        __state__[key] = state

    return [__state__[key], function (newState) {
        __state__[key] = newState
    }]
}

function Count() {
    const [count, setCount] = useState(0)

    setCount(count + 1)

    return `<p>${count}</p>`
}