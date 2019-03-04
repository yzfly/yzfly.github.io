const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,            <!-- 不启用迷你播放模式 -->
    fixed: false,           <!-- ture时为浮动效果 -->
    autoplay: false,        <!-- 音频不自动播放 -->
    theme: '#FADFA3',       <!-- 主题色 -->
    loop: 'all',            <!-- 音频循环播放, 可选值: 'all', 'one', 'none'-->
    order: 'random',        <!-- 音频循环顺序, 可选值: 'list', 'random'-->
    preload: 'auto',        <!-- 预加载，可选值: 'none', 'metadata', 'auto'-->
    volume: 0.7,            <!-- 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效-->
    mutex: true,            <!-- 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器 -->
    listFolded: false,      <!-- 列表默认折叠， false表示不折叠-->
    listMaxHeight: '120px', <!-- 列表最大高度，超出此高度将有滚动条-->
    lrcType: 0,             <!-- 歌词类型0表示不显示歌词 -->
    
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