const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "青春纪念册",
        artist: '可米小子',
        url: '/musics/青春纪念册.mp3',
        cover: '/musics/pics/青春纪念册.jpg',
      },
      {
        name: "不过是爱情",
        artist: '刘惜君',
        url: '/musics/不过是爱情_刘惜君.mp3',
        cover: '/musics/pics/不过是爱情.jpg',
      },
      {
        name: '听妈妈的话',
        artist: '周杰伦',
        url: 'http://www.ytmp3.cn/down/51577.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/11.jpg',
      }
    ]
});