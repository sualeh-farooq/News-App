const date = new Date().toDateString()
const time = new Date().toLocaleTimeString()
const timeSplit = time.slice(0, 5)

let dateSpace = document.getElementById('dateSpace')
dateSpace.innerHTML += ` ${date} ${timeSplit}`




fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=5827b21baa6d4be589936c7bf747abc6`)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        console.log(res.articles[18])
        console.log(res.articles[18].title)
        console.log(res.articles[18].description)
        console.log(res.articles[18].urlToImage)


        let newsImage = document.getElementById('newspic')
        newsImage.src = res.articles[14].urlToImage
        let title = document.getElementById('title')
        title.innerHTML = res.articles[14].title
        let news = document.getElementById('news')
        news.innerHTML = res.articles[14].description


    })
    .catch(err => console.log(err))


const newsOnHome = () => {

}