import MemberCardB from '@/components/organisms/MemberCardB.vue'

export default {
  components: { MemberCardB },
  data() {
    return {
      members: [
        {
          name: '南本 寛茂',
          txt: '主将・短長パート長',
          imgSrc: require('@/assets/member-img/主将-2026.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
        {
          name: '原 萌琉',
          txt: '女子主将',
          imgSrc: require('@/assets/member-img/女子主将-2026.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
        // {
        // name: '嘉藤 和真',
        // txt: 'フィールドパート長',
        // imgSrc: require('@/assets/member-img/フィールド-2025.jpg'),
        // // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
        // // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        // },
        // {
        //  name: '南本 寛茂',
        //  txt: '短長パート長',
        //  imgSrc: require('@/assets/member-img/短長-2025.jpg'),
        //  // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
        //  // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        // },
        {
          name: '田畑 慧太',
          txt: '短短パート長',
          imgSrc: require('@/assets/member-img/短短-2026.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
        {
          name: '吉村 成央',
          txt: 'ミドルパート長',
          imgSrc: require('@/assets/member-img/ミドル-2026.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
        {
          name: '藤村 修冬',
          txt: '投擲パート長',
          imgSrc: require('@/assets/member-img/投擲-2026.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
        {
          name: '金光 将英',
          txt: '跳躍パート長',
          imgSrc: require('@/assets/member-img/跳躍-2026.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
        // {
        //   name: '佐藤肇',
        //   txt: '混成パート長',
        //   imgSrc: require('@/assets/member-img/混成.jpg'),
        //   // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
        //   // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        // },
        {
          name: '杉林 直人',
          txt: '競歩パート長',
          imgSrc: require('@/assets/member-img/競歩-2026.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
        {
          name: '隅垣 宏太',
          txt: 'ロングパート長',
          imgSrc: require('@/assets/member-img/ロング-2026.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
        {
          name: '佐々木 梨花',
          txt: 'マネージャー',
          imgSrc: require('@/assets/member-img/マネ-2026.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
      ],
    }
  },
  props: {
    btnTxt: {
      type: String,
      default: 'メンバー紹介ページ（公式HP）',
    },

    btnColor: {
      type: String,
      default: 'primary',
    },
  },
}
