module.exports = function renderPage(body){
    return <html>
        <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <tittle>HTTP Cats App</tittle>
            <link href='/style.css' rel='stylesheet' />
        </head>
        <body class='flex flex-col items-center'>
            ${body}
        </body>
    </html>
}