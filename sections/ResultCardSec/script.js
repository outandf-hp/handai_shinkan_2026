export default {
  name: 'ResultCardSec',
  data() {
    return {
      items: [
        {
          name: '関西インカレ',
          img: require('@/assets/games/kankare-2026.jpg'),
          url: 'http://www.osaka-u-athlete-club.com/OUTF/record/%e9%96%a2%e8%a5%bf%e3%82%a4%e3%83%b3%e3%82%ab%e3%83%ac-9/',
        },
        {
          name: '全日本インカレ',
          img: require('@/assets/games/zenkare-2026.jpg'),
          url: 'http://www.osaka-u-athlete-club.com/OUTF/record/%e6%97%a5%e6%9c%ac%e3%82%a4%e3%83%b3%e3%82%ab%e3%83%ac-3/',
        },
        {
          name: '七大戦',
          img: require('@/assets/games/nanadai-2026.jpg'),
          url: 'https://new.osaka-u-athlete-club.com/record/16428/',
        },
        {
          name: '駅伝',
          img: require('@/assets/games/ekiden-2026.jpg'),
          url: 'http://www.osaka-u-athlete-club.com/OUTF/record/%e4%b8%b9%e5%be%8c%e9%a7%85%e4%bc%9d-8/',
        },
        {
          name: 'その他の試合',
          img: require('@/assets/games/その他-2025.jpg'),
          url: 'http://www.osaka-u-athlete-club.com/OUTF/records-top/result/',
        },
      ],
    }
  },
}
