(function () {
    var a = 1

    console.log(a)

        ; (function () {
            var b = a + 1

            console.log(b)

                ; (function () {
                    var c = a + b + 1

                    console.log(c)
                })()
        })()
})()