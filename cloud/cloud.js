let musicList = [{
    "src": "http://music.163.com/song/media/outer/url?id=1810711312.mp3",
    "title": "试着一点点忘记",
    "auther": " 卢卢快闭嘴 ",
    "img": "http://jirengu_1.gitee.io/music/if-you.png"
},
{
    "src": "http://music.163.com/song/media/outer/url?id=1363948882.mp3",
    "title": "世间美好与你环环相扣",
    "auther": "松柏",
    "img": "http://pic.bizhi360.com/bpic/15/11515.jpg"
},
{
    "src": "http://cloud.hunger-valley.com/music/玫瑰.mp3",
    "title": "玫瑰",
    "auther": "贰佰",
    "img": "http://jirengu_1.gitee.io/music/玫瑰.jpeg"
},
{
    "src": "http://music.163.com/song/media/outer/url?id=1811921555.mp3",
    "title": "星辰大海",
    "auther": "黄霄雲",
    "img": "http://jirengu_1.gitee.io/music/成全-林宥嘉-成全.jpg"
},
{
    "src": "http://music.163.com/song/media/outer/url?id=441491828.mp3",
    "title": "水星记",
    "auther": "郭顶",
    "img": "http://jirengu_1.gitee.io/music/飞行器的执行周期-郭顶-水星记.jpg"
}
]


const $ = selector => document.querySelector(selector)

const $playingBtn = $('.player .icon-pause')
const $preBtn = $('.player .icon-play-left')
const $nextBtn = $('.player .icon-play-right')
const $title = $('.player .texts h3')
const $auther = $('.player .texts p')
const $time = $('.player .time')

let cloud = 0
let audioObject = new Audio()
setMusic()

function setMusic() {
    let curMusic = musicList[cloud]
    console.log(curMusic)
    audioObject.src = curMusic.src
    $auther.innerText = curMusic.auther
    $title.innerText = curMusic.title
    audioObject.play()
}

$playingBtn.onclick = function () {
    if (this.classList.contains('icon-pause')) {
        this.classList.remove('icon-pause')
        this.classList.add('icon-playing')
        audioObject.play()
        console.log(audioObject.duration)
        console.log(audioObject.currentTime)
    } else {
        this.classList.remove('icon-playing')
        this.classList.add('icon-pause')
        audioObject.pause()
    }
}

$nextBtn.onclick = function () {
    cloud++
    cloud = cloud % musicList.length
    console.log(cloud)
    setMusic()
}

$preBtn.onclick = function () {
    cloud--
    cloud = (cloud + musicList.length) % musicList.length
    setMusic()
}
for(let i = 0;i<10;i++){
    let rains = document.createElement("span");
    rains.style = `--i:${Math.random()}`;
    rain.append(rains)
}