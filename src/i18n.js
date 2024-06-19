import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    language: 'EN',
    zhongwen: 'Chinese',
    yinwen: 'English',
    navigation: {
      'Aboutus': 'About us',
      'ProductArchitecture': 'Product Architecture',
      'NBCToken': 'NBC Token',
      'Roadmap': 'Roadmap',
      'Backer': 'Backer',
      'Community': 'Community'
    },
    AboutUs: {
      DISTRIBUTED: 'DISTRIBUTED AUTONOMO',
      ORGANIZATION: 'CO-RICH ORGANIZATION',
      Using:'Using cutting-edge technology and innovative models to build a new era of decentralized wealth sharing. Join us to lead the future of digital finance!',
      Building: 'Start Building',
      LearnMore: 'Learn More',
    },
    product: {
      title: 'PRODUCT ARCHITECTURE',
      AISystem: 'NBC Token AI System',
      andtrust: 'NBC Token AI System The NBC Token AI system drives the ecosystem using neural networks and big data to quantify value and trust.',
      CreditSystem: 'NBC Social Credit System',
      InitialCredit: "Initial Credit Degree (ICD): The ICD algorithm assesses new users' credit based on various metrics, with ratings from 1 to 10. NBC Credit Rating (CR): A proprietary system rating users from 1 to 10. Users with a CR of 5 or higher receive exclusive incentives and services.",
      IndustryInsight: 'Industry Insight',
      NBCemploys: 'NBC employs quantum AI to analyze industry trends and potential across short-term (1 year), mid-term (2-5 years), and long-term (5+ years) horizons, providing ratings from 1 to 5.',
      DecentralizedGovernance: 'Decentralized Governance',
      efficientgovernance: 'Decentralized Governance Utilizing smart contracts and blockchain technology, NBC ensures transparent and efficient governance.',
      ComprehensiveEcosystem: 'Comprehensive Ecosystem Integration',
      overallutility: 'Comprehensive Ecosystem Integration NBC integrates various financial and business applications, enhancing the overall utility and value of the token.',
    },
    nBCToken: {
      Witha: 'With a fixed total issuance of 1 billion tokens, NBC empowers the decentralized finance ecosystem of distributed commerce, driving global digital economic innovation and growth.',
      TotalSupply: 'Total Supply',
      OperationPool: '50% Ecosystem Operation Pool',
      andsettlement: '500 million tokens for business and financial ecosystem integration and settlement.',
      EcologicalMining: '30% Ecological Mining Pool',
      noderewards: '300 million tokens for community POA mining and node rewards.',
      GenesisPool: '10% Genesis Pool',
      technicalteams: '100 million tokens to incentivize the founding and technical teams.',
      CharitableEcosystem: '10% Charitable Ecosystem',
      socialcontributions: '100 million tokens for financial investments, asset management, and social contributions.',
    },
    roadmap: {
      Strategicplans: 'Strategic plans to achieve sustainable growth and development in the NBC ecosystem.',
      FirePhase: 'Fire Phase',

      NBCvalue: 'Goal: Complete the whitepaper and seed funding. \n Action: Establish a DAO through smart contracts. \n  Outcome: Launch consensus and angel funds,  stabilize NBC value.',
      StonePhase: 'Stone Phase',
      thebrand: 'Goal: Increase revenue. \n  Action: Develop a financial platform, decentralized exchange, and storage solutions. \n  Outcome: Enhance value, expand consensus, and establish the brand.',
      WritingPhase: 'Writing Phase',
      SecondUniverse: 'Goal: Achieve TOP 100 ranking. \n  Action: Launch financial platform 3.0 and develop NBC SWAP. \n  Outcome: Strengthen the brand, initiate quantum AI, and develop the "Second Universe.',
      MachinePhase: 'Machine Phase',
      SecondUniverse2: 'Goal: Reach TOP 60 ranking. \n  Action: Deploy smart contracts and launch NBC SWAP 3.0. \n  Outcome: Facilitate global trading, develop storage 3.0, and the "Second Universe.',
      ComputerPhase: 'Computer Phase',
      assettransactions: 'Goal: Achieve TOP 30 ranking. \n Action: Integrate storage 3.0 and "Second Universe" 3.0. \n Outcome: Enhance global trading and drive digital asset transactions.',
      QuantumAI: 'Quantum AI Phase',
      integratequantum: 'Goal: Enter TOP 20 ranking. \n Action: Launch platform 5.0 and integrate quantum AI. \n Outcome: Drive global consensus and value.',
      SecondUniversePhase: 'Second Universe Phase',
      platformgrowth: 'Goal: Enter TOP 10 ranking. \n Action: Launch quantum AI and "Second Universe" 3.0. \n Outcome: Maximize digital asset transactions and platform growth.',
    },
  },
  zh: {
    zhongwen: '中文',
    yinwen: '英文',
    language: 'CN',
    navigation: {
      'Aboutus': '关于我们',
      'ProductArchitecture': '产品架构',
      'NBCToken': 'NBC Token',
      'Roadmap': '路线图',
      'Backer': '支持者',
      'Community': '社区'
    },
    AboutUs: {
      DISTRIBUTED: '全球首个分布式商业',
      ORGANIZATION: '自治共富组织',
      Using:'致力于通过去中心化的金融管理实现全球财富共享。结合了先进的区块链技术、AI系统和前瞻性的理念，重新定义了财富分配和管理。',
      Building: '开始构建',
      LearnMore: '了解更多',
    },
    product: {
      title: 'NBC通证AI系统',
      AISystem: 'NBC通证AI系统',
      andtrust: 'NBC通证AI系统通过神经网络和大数据驱动生态系统，量化价值和信任。',
      CreditSystem: 'NBC社会信用体系',
      InitialCredit: '初始信用度（ICD）： ICD算法基于多项指标评估新用户信用，评级从1到10。NBC信用评级（CR）： 专有系统，评级从1到10。CR达到5级以上的用户享有独特的激励和服务。',
      IndustryInsight: '行业洞察',
      NBCemploys: 'NBC利用量子AI分析行业短期（1年）、中期（2-5年）和长期（5年以上）的趋势和潜力，评级从1到5。',
      DecentralizedGovernance: '去中心化治理',
      efficientgovernance: '通过智能合约和区块链技术，NBC确保治理的透明和高效。',
      ComprehensiveEcosystem: '全面生态系统整合',
      overallutility: 'NBC整合各种金融和商业应用，提升通证的整体实用性和价值。',

    },
    nBCToken: {
      Witha: '恒定总发行量为10亿枚，赋能分布式商业去中心化金融生态，推动全球数字经济创新与发展。',
      TotalSupply: '总供应量',
      OperationPool: '50% 生态运营池 (NBC基金会)',
      andsettlement: '5亿枚用于商业和金融生态系统的价值整合与结算。',
      EcologicalMining: '30% 生态矿池',
      noderewards: '5亿枚用于商业和金融生态系统的价值整合与结算。',
      GenesisPool: '10% 创世池',
      technicalteams: '1亿枚用于激励创始团队与技术团队。',
      CharitableEcosystem: '10% 慈善生态',
      socialcontributions: '1亿枚用于金融投资、资产管理及社会贡献。',
    },
    roadmap: {
      Strategicplans: '构建可持续且包容的金融生态系统',
      FirePhase: '火种阶段',

      NBCvalue: '目标: 完成白皮书和种子轮募资。\n 行动: 通过智能合约设立DAO。\n 成果: 发行共识和天使基金，稳定NBC价值。',
      StonePhase: '石器阶段',
      thebrand: '目标: 增加收益。\n 行动: 开发金融平台、去中心化交易所和存储。\n 成果: 提升价值，扩展共识，建立品牌。',
      WritingPhase: '文字阶段',
      SecondUniverse: '目标: 进入TOP 100。\n 行动: 上线金融平台3.0，发展NBC SWAP。\n 成果: 强化品牌，启动量子AI，开发“第二宇宙”。',
      MachinePhase: '机器阶段',
      SecondUniverse2: '目标: 达到TOP 60。\n 行动: 上线智能合约，NBC SWAP 3.0。\n 成果: 全球交易，开发存储3.0和“第二宇宙”。',
      ComputerPhase: '电脑阶段',
      assettransactions: '目标: 达到TOP 30。\n 行动: 集成存储3.0和“第二宇宙”3.0。\n 成果: 增强全球交易，推动数字资产交易。',
      QuantumAI: '量子AI阶段',
      integratequantum: '目标: 进入TOP 20。\n 行动: 上线平台5.0，集成量子AI。\n 成果: 推动全球共识和价值。',
      SecondUniversePhase: '第二宇宙阶段',
      platformgrowth: '目标: 进入TOP 10。\n 行动: 上线量子AI和“第二宇宙”3.0。\n 成果: 最大化数字资产交易和平台增长。',
    },
  }
}

let language = localStorage.getItem("language") || 'en'; //  获取本地存储 || 根据浏览器语言设置

const i18n = createI18n({
  locale: language, // 默认显示语言
  fallbackLocale: 'en',
  messages,
})

export default i18n