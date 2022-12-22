function getOpenOnePost(postId) {

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

        xhr.open('GET', `http://localhost/open/posts/one/${postId}`)
        xhr.send()
    })
}

export default getOpenOnePost