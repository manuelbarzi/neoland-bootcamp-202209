var o = {
    p: {
        q: {
            r: [
                {},
                {
                    s: {
                        hello: 'world',
                        ciao: 'mondo'
                    }
                }
            ]
        }
    }
}
undefined

var { p: { q: { r: [,{ s: { hello, ciao }}] } }} = o 
undefined
hello
'world'
ciao
'mondo'

var { p: { q: { r: { 1: { s: { hello, ciao } } } } }} = o 
undefined
hello
'world'
ciao
'mondo'

var {
    p: {
        q: {
            r: [
                ,
                {
                    s: {
                        hello,
                        ciao
                    }
                }
            ]
        }
    }
} = o
undefined
hello
'world'
ciao
'mondo'

var {
    p: {
        q: {
            r: {
                1 :{
                    s: {
                        hello,
                        ciao
                    }
                }
            }
        }
    }
} = o
undefined
hello
'world'
ciao
'mondo'