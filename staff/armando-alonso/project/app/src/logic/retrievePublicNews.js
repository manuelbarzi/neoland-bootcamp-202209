function retrievePublicNews(userId) {

    return new Promise((resolve, reject) => {
    
        const xhr = new XMLHttpRequest()

        xhr.onload = function () {
            const { status, responseText: json } = xhr

            if (status >= 500) {
                const { error } = JSON.parse(json)

                reject(new Error(error))

                return
            }

            const news = JSON.parse(json)

            resolve(news)
        }

        xhr.onerror = () => reject(new Error('connection error'))

        xhr.open('GET', `http://localhost/posts/public`)
        xhr.setRequestHeader('Authorization', `Bearer ${userId}`)
        xhr.send()
    })
}

export default retrievePublicNews