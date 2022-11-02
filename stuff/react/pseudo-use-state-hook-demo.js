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
undefined
Count()
'<p>0</p>'
Count()
'<p>1</p>'
Count()
'<p>2</p>'
Count()
'<p>3</p>'
Count()
'<p>4</p>'
__state__
{ 0: 5 }
Count()
'<p>5</p>'
Count()
'<p>6</p>'
Count()
'<p>7</p>'
Count()
'<p>8</p>'
__state__
{ 0: 9 }