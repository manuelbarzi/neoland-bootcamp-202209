module.exports = (req, res) => {
    const { cookie } = req.headers

    if (cookie) {
        res.redirect('/')

        return
    }

    res.status(200)
    res.setHeader('Content-Type', 'text/html')
    res.send(`<html class="h-screen">
                <head>
                    <title>Http Cats</title>
                    <link href="/style.css" rel="stylesheet" />
                </head>
                <body class="flex h-full justify-center">
                    <div class="h-full flex flex-col flex-wrap justify-center items-center">
                        <form class="flex flex-col items-start flex-wrap" action="/login" method="post">
                            <input type="email" name="email" placeholder="email" />
                            <input class="p-4" type="password" name="password" placeholder="password" />
                            <button class="self-center">Login</button>
                        </form>
                         <a href="/register">Register</a>
                    </div>
                </body>
            </html>`)
}