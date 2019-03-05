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
        name: "追光者",
        artist: 'fade',
        url: "http://tx.stream.kg.qq.com/shkge-btfs/41cefe9bf0bfa1f5b1550f0a0c43e76fd287634b?ftnrkey=3d3d4b69de7b311b7c56e6534ac14b51b654f91e0f9e1c42a36a7e0d476fcd7f1eea05c7dfeb46423829d4660d07650ea3d03641c7beb418be0edad5d87cc534&vkey=DA98618A6201982EA91A483B3AF928CD5C7C140E31A69A2389D85D829746A6EC63771A850CF104C1EC48DFE47A0A3A4E079E1A9CE742CD54BE3F7A027BC7B611558B7F1AE746E81180527D8CC9F2B730B1F306C2D1958A0A&fname=1021_f62dd9ec7caee2af547e47ef83f984fc7081e9ad.0.m4a",
        cover: "http://y.gtimg.cn/music/photo_new/T002R300x300M000001qHmKU29WX7K.jpg",
      },
      {
        name: "青春纪念册",
        artist: '可米小子',
        url: '/musics/青春纪念册.mp3',
        cover: '/musics/pics/青春纪念册.jpg',
      },
      {
        name: "淘汰",
        artist: '陈奕迅',
        url: 'http://www.ytmp3.cn/down/49842.mp3',
        cover: '/musics/pics/不过是爱情.jpg',
      },
      {
        name: "不过是爱情",
        artist: '刘惜君',
        url: '/musics/不过是爱情_刘惜君.mp3',
        cover: '/musics/pics/不过是爱情.jpg',
      },
      {
        name: "风吹麦浪",
        artist: '李健',
        url: 'http://www.ytmp3.cn/down/7274.mp3',
        cover: '/musics/pics/不过是爱情.jpg',
      },
      {
        name: "说谎",
        artist: '林宥嘉',
        url: '/musics/林宥嘉-说谎.mp3',
        cover: '/musics/pics/林宥嘉-说谎.jpg',
      },
      {
        name: "成全",
        artist: 'Boss',
        url: 'http://tx.stream.kg.qq.com/szkge-btfs/7d42bdf06c90d552d5234854cf16e46928be812c?ftnrkey=9078b90520d45853d4bd80c708ad16fbae34c070180590bcc269af338da1fa2817d45f05691e55ae27984ca859692df97c4e82af69f993ed9a6b798b06ea5cbf&vkey=396FEE2607AA44DE016C4AD0E6202ED7819529414489B86A866B08A9FEAC6A647413B06CA88279B00FA86540F64B53C011BD7EA15261420A26939AF1C848A98E541FD19CE5115A7A9A3B8853AF21BFD64DD2F324854FD7DF&fname=1021_e48e9bee7caf2ebb547e47ef80f985fc6f8109ae.0.m4a',
        cover: 'http://shp.qpic.cn/ttkg/0/8e889bee7caf2ebb047e47ef83f9fafc598134ad/200?j=PiajxSqBRaEIf0bHhsJQ0QVoFSjos8ibuwib8icMibSGWGru7aj84uAW826V84GUk58dtqf27eKC51gRtLapYyjVa47icRlMXGW5PapPk9nc7T8iaS4vnpvzTG8SB8pk98oL23Zhic3rkJl8xSQ',
      },
      {
        name: "年少有为",
        artist: 'Boss',
        url: 'http://tx.stream.kg.qq.com/szkge/6368fc15f3b5f879c840aad1de24ca75e19470f7?ftnrkey=ca6387f4035ca90c0fd47364fd1bce7a2465390bc6ba8517b9ca734f505794b3ba551756c2c89a9e9bcc9571e4de26fe72223b512c9c08a65dd2b2307e7d3141&vkey=F83B524F52B75BF28F66F22E34DF7849940DFD2BFEEA8DCFB73AB6EFEC986DC9DB3C3A931D9DA607F882D337F5695122D34A6EB75B294EF974F673CA1D4B533D7A5C5FB08A3C353E4CD497E8DDF0062E1F454FA6D9D01111&fname=1021_52cef0e97caf2ebb547e47ef80f9fafc5981ddaf.96.m4a',
        cover: 'http://shp.qpic.cn/ttkg/0/aac8f0e97caf2ebb047e47ef83f9fafc598164af/200?j=PiajxSqBRaEIf0bHhsJQ0QVoFSjos8ibuwib8icMibSGWGru7aj84uAW826V84GUk58dtqf27eKC51gRtLapYyjVa45JUzF5fDdYO70AIgjgdQXkpdLe5fga9a92Y1GWiaHx8qJP6lyGPmDO0',
      },
      {
        name: '听妈妈的话',
        artist: '周杰伦',
        url: 'http://www.ytmp3.cn/down/51577.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/11.jpg',
      }
    ]
});