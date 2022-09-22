let newsImage1 = document.getElementById('newspic')
let newsImage2 = document.getElementById('newspic2')
let newsImage3 = document.getElementById('newspic3')
let newsImage4 = document.getElementById('newspic4')
let newsImage5 = document.getElementById('newspic5')
let newsImage6 = document.getElementById('newspic6')
let newsImage7 = document.getElementById('newspic7')
let newsImage8 = document.getElementById('newspic8')
let newsImage9 = document.getElementById('newspic9')
let title1 = document.getElementById('title')
let title2 = document.getElementById('title2')
let title3 = document.getElementById('title3')
let title4 = document.getElementById('title4')
let title5 = document.getElementById('title5')
let title6 = document.getElementById('title6')
let title7 = document.getElementById('title7')
let title8 = document.getElementById('title8')
let title9 = document.getElementById('title9')
let news1 = document.getElementById('news')
let news2 = document.getElementById('news2')
let news3 = document.getElementById('news3')
let news4 = document.getElementById('news4')
let news5 = document.getElementById('news5')
let news6 = document.getElementById('news6')
let news7 = document.getElementById('news7')
let news8 = document.getElementById('news8')
let news9 = document.getElementById('news9')


const date = new Date().toDateString()
const time = new Date().toLocaleTimeString()
const timeSplit = time.slice(0, 5)

let dateSpace = document.getElementById('dateSpace')
dateSpace.innerHTML += ` ${date} ${timeSplit}`

const load = () => {
    document.getElementById('loader').style.display = 'block'
    document.getElementById('main').style.display = 'none'
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none'
        document.getElementById('main').style.display = 'block'
    }, 6000);
}
load()



function win() {
    document.getElementById('loader2').style.display = 'block'
    document.getElementById('main2').style.display = 'none'
    document.getElementById('footer').style.display = 'none'

    setTimeout(() => {
        document.getElementById('loader2').style.display = 'none'
        document.getElementById('main2').style.display = 'block'
        document.getElementById('footer').style.display = 'block'
        window.location.href = '/index.html'
    }, 3000);
}


fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=5827b21baa6d4be589936c7bf747abc6`)
    .then(res => res.json())
    .then(res => {
        console.log(res)
            // console.log(res.articles[18])
            // console.log(res.articles[18].title)
            // console.log(res.articles[18].description)
            // console.log(res.articles[18].urlToImage)

        newsImage1.src = res.articles[15].urlToImage
        newsImage2.src = res.articles[2].urlToImage
        newsImage3.src = res.articles[3].urlToImage
        newsImage4.src = res.articles[4].urlToImage
        newsImage6.src = res.articles[6].urlToImage
        newsImage7.src = res.articles[7].urlToImage
        newsImage8.src = res.articles[8].urlToImage
        newsImage9.src = res.articles[9].urlToImage
        title1.innerHTML = res.articles[15].title
        title2.innerHTML = res.articles[2].title
        title3.innerHTML = res.articles[3].title
        title4.innerHTML = res.articles[4].title
        title6.innerHTML = res.articles[6].title
        title7.innerHTML = res.articles[7].title
        title8.innerHTML = res.articles[8].title
        title9.innerHTML = res.articles[9].title
        news1.innerHTML = res.articles[15].description
        news2.innerHTML = res.articles[2].description
        news3.innerHTML = res.articles[3].description
        news4.innerHTML = res.articles[4].description
        news6.innerHTML = res.articles[6].description
        news7.innerHTML = res.articles[7].description
        news8.innerHTML = res.articles[8].description
        news9.innerHTML = res.articles[9].description

    })
    .catch(err => console.log(err))


const business = () => {
    document.getElementById('loader2').style.display = 'block'
    document.getElementById('main2').style.display = 'none'
    document.getElementById('footer').style.display = 'none'

    setTimeout(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5827b21baa6d4be589936c7bf747abc6`)
            .then(res => res.json())
            .then(res => {
                document.getElementById('cat-name').innerHTML = `Business`
                console.log(res)
                newsImage1.src = res.articles[10].urlToImage
                newsImage2.src = res.articles[2].urlToImage
                newsImage3.src = res.articles[3].urlToImage
                newsImage4.src = res.articles[4].urlToImage
                newsImage6.src = res.articles[6].urlToImage
                newsImage7.src = res.articles[7].urlToImage
                newsImage8.src = res.articles[8].urlToImage
                newsImage9.src = res.articles[9].urlToImage
                title1.innerHTML = res.articles[10].title
                title2.innerHTML = res.articles[2].title
                title3.innerHTML = res.articles[3].title
                title4.innerHTML = res.articles[4].title
                title6.innerHTML = res.articles[6].title
                title7.innerHTML = res.articles[7].title
                title8.innerHTML = res.articles[8].title
                title9.innerHTML = res.articles[9].title
                news1.innerHTML = res.articles[10].description
                news2.innerHTML = res.articles[2].description
                news3.innerHTML = res.articles[3].description
                news4.innerHTML = res.articles[4].description
                news6.innerHTML = res.articles[6].description
                news7.innerHTML = res.articles[7].description
                news8.innerHTML = res.articles[8].description
                news9.innerHTML = res.articles[9].description
            })
            .catch(err => {
                console.log(err)
            })
        document.getElementById('loader2').style.display = 'none'
        document.getElementById('main2').style.display = 'block'
        document.getElementById('footer').style.display = 'block'

    }, 4000);

}

const enter = () => {
    document.getElementById('loader2').style.display = 'block'
    document.getElementById('main2').style.display = 'none'
    document.getElementById('footer').style.display = 'none'

    setTimeout(() => {

        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=5827b21baa6d4be589936c7bf747abc6`)
            .then(res => res.json())
            .then(res => {
                document.getElementById('cat-name').innerHTML = `Entertainment`
                console.log(res)
                newsImage1.src = res.articles[1].urlToImage
                newsImage2.src = res.articles[2].urlToImage
                newsImage3.src = res.articles[10].urlToImage
                newsImage4.src = res.articles[11].urlToImage
                newsImage6.src = res.articles[6].urlToImage
                newsImage7.src = res.articles[7].urlToImage
                newsImage8.src = res.articles[12].urlToImage
                newsImage9.src = res.articles[9].urlToImage
                title1.innerHTML = res.articles[1].title
                title2.innerHTML = res.articles[2].title
                title3.innerHTML = res.articles[10].title
                title4.innerHTML = res.articles[11].title
                title6.innerHTML = res.articles[6].title
                title7.innerHTML = res.articles[7].title
                title8.innerHTML = res.articles[12].title
                title9.innerHTML = res.articles[9].title
                news1.innerHTML = res.articles[1].description
                news2.innerHTML = res.articles[2].description
                news3.innerHTML = res.articles[10].description
                news4.innerHTML = res.articles[11].description
                news6.innerHTML = res.articles[6].description
                news7.innerHTML = res.articles[7].description
                news8.innerHTML = res.articles[12].description
                news9.innerHTML = res.articles[9].description
            })
            .catch(err => {
                console.log(err)
            })
        document.getElementById('loader2').style.display = 'none'
        document.getElementById('main2').style.display = 'block'
        document.getElementById('footer').style.display = 'block'

    }, 4000);
}



const health = () => {
    document.getElementById('loader2').style.display = 'block'
    document.getElementById('main2').style.display = 'none'
    document.getElementById('footer').style.display = 'none'

    setTimeout(() => {

            fetch(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=5827b21baa6d4be589936c7bf747abc6`)
                .then(res => res.json())
                .then(res => {
                    document.getElementById('cat-name').innerHTML = `Health`
                    console.log(res)
                    newsImage1.src = res.articles[1].urlToImage
                    newsImage2.src = res.articles[13].urlToImage
                    newsImage3.src = res.articles[3].urlToImage
                    newsImage4.src = res.articles[11].urlToImage
                    newsImage6.src = res.articles[6].urlToImage
                    newsImage7.src = res.articles[7].urlToImage
                    newsImage8.src = res.articles[12].urlToImage
                    newsImage9.src = res.articles[9].urlToImage
                    title1.innerHTML = res.articles[1].title
                    title2.innerHTML = res.articles[13].title
                    title3.innerHTML = res.articles[3].title
                    title4.innerHTML = res.articles[11].title
                    title6.innerHTML = res.articles[6].title
                    title7.innerHTML = res.articles[7].title
                    title8.innerHTML = res.articles[12].title
                    title9.innerHTML = res.articles[9].title
                    news1.innerHTML = res.articles[1].description
                    news2.innerHTML = res.articles[13].description
                    news3.innerHTML = res.articles[3].description
                    news4.innerHTML = res.articles[11].description
                    news6.innerHTML = res.articles[6].description
                    news7.innerHTML = res.articles[7].description
                    news8.innerHTML = res.articles[12].description
                    news9.innerHTML = res.articles[9].description
                })
                .catch(err => {
                    console.log(err)
                })
            document.getElementById('loader2').style.display = 'none'
            document.getElementById('main2').style.display = 'block'
            document.getElementById('footer').style.display = 'block'

        },
        4000);
}

const sci = () => {
    document.getElementById('loader2').style.display = 'block'
    document.getElementById('main2').style.display = 'none'
    document.getElementById('footer').style.display = 'none'

    setTimeout(() => {

            fetch(`https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=5827b21baa6d4be589936c7bf747abc6`)
                .then(res => res.json())
                .then(res => {
                    document.getElementById('cat-name').innerHTML = `Science`
                    console.log(res)
                    newsImage1.src = res.articles[1].urlToImage
                    newsImage2.src = res.articles[13].urlToImage
                    newsImage3.src = res.articles[3].urlToImage
                    newsImage4.src = res.articles[11].urlToImage
                    newsImage6.src = res.articles[15].urlToImage
                    newsImage7.src = res.articles[16].urlToImage
                    newsImage8.src = res.articles[12].urlToImage
                    newsImage9.src = res.articles[9].urlToImage
                    title1.innerHTML = res.articles[1].title
                    title2.innerHTML = res.articles[13].title
                    title3.innerHTML = res.articles[3].title
                    title4.innerHTML = res.articles[11].title
                    title6.innerHTML = res.articles[15].title
                    title7.innerHTML = res.articles[16].title
                    title8.innerHTML = res.articles[12].title
                    title9.innerHTML = res.articles[9].title
                    news1.innerHTML = res.articles[1].description
                    news2.innerHTML = res.articles[13].description
                    news3.innerHTML = res.articles[3].description
                    news4.innerHTML = res.articles[11].description
                    news6.innerHTML = res.articles[15].description
                    news7.innerHTML = res.articles[16].description
                    news8.innerHTML = res.articles[12].description
                    news9.innerHTML = res.articles[9].description
                })
                .catch(err => {
                    console.log(err)
                })
            document.getElementById('loader2').style.display = 'none'
            document.getElementById('main2').style.display = 'block'
            document.getElementById('footer').style.display = 'block'

        },
        4000);
}

const tech = () => {
    document.getElementById('loader2').style.display = 'block'
    document.getElementById('main2').style.display = 'none'
    document.getElementById('footer').style.display = 'none'

    setTimeout(() => {

            fetch(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=5827b21baa6d4be589936c7bf747abc6`)
                .then(res => res.json())
                .then(res => {
                    document.getElementById('cat-name').innerHTML = `Technology`
                    console.log(res)
                    newsImage1.src = res.articles[2].urlToImage
                    newsImage2.src = res.articles[13].urlToImage
                    newsImage3.src = res.articles[4].urlToImage
                    newsImage4.src = res.articles[11].urlToImage
                    newsImage6.src = res.articles[6].urlToImage
                    newsImage7.src = res.articles[7].urlToImage
                    newsImage8.src = res.articles[12].urlToImage
                    newsImage9.src = res.articles[15].urlToImage
                    title1.innerHTML = res.articles[2].title
                    title2.innerHTML = res.articles[13].title
                    title3.innerHTML = res.articles[4].title
                    title4.innerHTML = res.articles[11].title
                    title6.innerHTML = res.articles[6].title
                    title7.innerHTML = res.articles[7].title
                    title8.innerHTML = res.articles[12].title
                    title9.innerHTML = res.articles[15].title
                    news1.innerHTML = res.articles[2].description
                    news2.innerHTML = res.articles[13].description
                    news3.innerHTML = res.articles[4].description
                    news4.innerHTML = res.articles[11].description
                    news6.innerHTML = res.articles[6].description
                    news7.innerHTML = res.articles[7].description
                    news8.innerHTML = res.articles[12].description
                    news9.innerHTML = res.articles[15].description
                })
                .catch(err => {
                    console.log(err)
                })
            document.getElementById('loader2').style.display = 'none'
            document.getElementById('main2').style.display = 'block'
            document.getElementById('footer').style.display = 'block'

        },
        4000);
}




function ser() {

    let search = document.getElementById('search').value.toLowerCase()

    fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=5827b21baa6d4be589936c7bf747abc6`)
        .then(res => res.json())
        .then(res => {
            showSearch(res)
            document.getElementById('cat-name').innerHTML = `${search}`
        }).catch((err) => {
            console.log(err)
        })
}


function showSearch(res) {
    document.getElementById('loader2').style.display = 'block'
    document.getElementById('main2').style.display = 'none'
    document.getElementById('footer').style.display = 'none'
    setTimeout(() => {
            newsImage1.src = res.articles[1].urlToImage
            newsImage2.src = res.articles[2].urlToImage
            newsImage3.src = res.articles[3].urlToImage
            newsImage4.src = res.articles[4].urlToImage
            newsImage6.src = res.articles[6].urlToImage
            newsImage7.src = res.articles[7].urlToImage
            newsImage8.src = res.articles[8].urlToImage
            newsImage9.src = res.articles[9].urlToImage
            title1.innerHTML = res.articles[1].title
            title2.innerHTML = res.articles[2].title
            title3.innerHTML = res.articles[3].title
            title4.innerHTML = res.articles[4].title
            title6.innerHTML = res.articles[6].title
            title7.innerHTML = res.articles[7].title
            title8.innerHTML = res.articles[8].title
            title9.innerHTML = res.articles[9].title
            news1.innerHTML = res.articles[1].description
            news2.innerHTML = res.articles[2].description
            news3.innerHTML = res.articles[3].description
            news4.innerHTML = res.articles[4].description
            news6.innerHTML = res.articles[6].description
            news7.innerHTML = res.articles[7].description
            news8.innerHTML = res.articles[8].description
            news9.innerHTML = res.articles[9].description
            document.getElementById('loader2').style.display = 'none'
            document.getElementById('main2').style.display = 'block'
            document.getElementById('footer').style.display = 'block'

        },
        4000);
}