import {
  ChainId,
  Metric,
  Swapr,
  // Mochi,
  PairLiquidityMetric,
  TokenPriceMetric,
  TvlMetric,
  Agave,
  Honeyswap,
  EmptyMetric,
  // UniswapV2,
  // Honeyswap,
} from '@carrot-kpi/sdk-core'
// import { AddressZero } from '@ethersproject/constants'
import { DateTime } from 'luxon'
import {
  Creator,
  /* DAPPNODE, */ DXDAO,
  HOPR as HOPR_CREATOR /* MOCHI */,
  HUNDRED_FINANCE,
  AUGMENTED_FINANCE,
  COW as COW_CREATOR,
  AGAVE,
} from '../creators'
import {
  DXD,
  GNOSIS_WETH,
  SWPR,
  HOPR,
  WXDAI,
  HND,
  COW,
  AGF,
  /* USDM,
  MOCHI_TEST_KPI_TOKEN, */
  /* DAPPNODE_TEST_KPI_TOKEN_1,
  XDAI_NODE,
  DAPPNODE_TEST_KPI_TOKEN_3, */
  /* DAPPNODE_TEST_KPI_TOKEN_2,
  MAINNET_NODE,
  MAINNET_WETH, */
} from '../tokens'

export interface Campaign {
  metrics: Metric[]
  id: string
  kpiId: string
  creator: Creator
  featured: boolean
}

const swapr = new Swapr()
const agave = new Agave()
// const mochi = new Mochi()
// const uniswapV2 = new UniswapV2()
const honeyswap = new Honeyswap()

export const CAMPAIGNS: { [chainId in ChainId]: Campaign[] } = {
  // TODO: remove this, it's for test purposes!
  [ChainId.MAINNET]: [
    /* {
      metrics: [
        new TokenPriceMetric(
          USDM,
          mochi,
          DateTime.fromSeconds(1638360000), // Dec 1st 1200 UTC
          DateTime.fromSeconds(1640952000), // Dec 31th 1200 UTC
          86400
        ),
        new TvlMetric(
          ChainId.MAINNET,
          mochi, // ignored
          mochi,
          DateTime.fromSeconds(1635771600), // Dec 1st 1200 UTC
          DateTime.fromSeconds(1638280800), // Dec 31th 1200 UTC
          86400
        ),
      ],
      id: AddressZero,
      kpiId: MOCHI_TEST_KPI_TOKEN.kpiId,
      creator: MOCHI,
    },
    {
      metrics: [
        new PairLiquidityMetric(
          MAINNET_NODE,
          MAINNET_WETH,
          uniswapV2,
          DateTime.fromSeconds(1638360000), // Dec 1st 1200 UTC
          DateTime.fromSeconds(1640952000), // Dec 31th 1200 UTC
          86400
        ),
      ],
      id: AddressZero,
      kpiId: DAPPNODE_TEST_KPI_TOKEN_2.kpiId,
      creator: DAPPNODE,
    }, */
  ],
  [ChainId.RINKEBY]: [
    {
      metrics: [
        new PairLiquidityMetric(
          DXD,
          GNOSIS_WETH,
          swapr,
          DateTime.fromSeconds(1638360000), // Dec 1st 1200 UTC
          DateTime.fromSeconds(1640952000), // Dec 31th 1200 UTC
          86400
        ),
      ],
      id: '0xc94460e20d1c749879d68407718e61b6aed4d5b2',
      kpiId: '0x7806f9d92282783ee2b23cc7d2fa69861f66c0369c42ed41ac4c185fcc41ca4e',
      creator: DXDAO,
      featured: true,
    },
    {
      metrics: [
        new TokenPriceMetric(
          SWPR,
          swapr,
          DateTime.fromSeconds(1638360000), // Dec 1st 1200 UTC
          DateTime.fromSeconds(1640952000), // Dec 31th 1200 UTC
          86400
        ),
      ],
      id: '0x4a791d577476ffd1e1fd1543f6fce0f71e1b04ef',
      kpiId: '0xe7b8d84f1b786de5ee9e3b52db613379aeccaa373ab880229d5adadc6348348c',
      creator: DXDAO,
      featured: true,
    },
  ],
  [ChainId.GNOSIS]: [
    {
      metrics: [
        new TvlMetric(
          ChainId.GNOSIS,
          swapr,
          swapr,
          DateTime.fromSeconds(1645110000), // Feb 17th 1500 UTC
          DateTime.fromSeconds(1647529200), // Mar 17th 1500 UTC
          86400
        ),
      ],
      id: '0x17e0106ec9aa44b4a659b144fb93ae481f06c74d',
      kpiId: '0xff160f93b0ab8e4470176218e7963f1290277a4cfdb67d509a38419ee6f39488',
      creator: DXDAO,
      featured: false,
    },
    {
      metrics: [
        new TvlMetric(
          ChainId.GNOSIS,
          swapr,
          swapr,
          DateTime.fromSeconds(1645110000), // Feb 17th 1500 UTC
          DateTime.fromSeconds(1647529200), // Mar 17th 1500 UTC
          86400
        ),
      ],
      id: '0x3ee29f26cd964c03572443730a5f503da8fe0004',
      kpiId: '0xa5bb8d05a96adc31880b740e61efacd4213bd8f7ab9ce5f44f37193cff17439a',
      creator: DXDAO,
      featured: false,
    },
    {
      metrics: [
        new PairLiquidityMetric(
          WXDAI,
          HOPR,
          swapr,
          DateTime.fromSeconds(1645110000), // Feb 17th 1500 UTC
          DateTime.fromSeconds(1647529200), // Mar 17th 1500 UTC
          86400
        ),
      ],
      id: '0x715e1bb4948253050cd41d11f282c366a5564477',
      kpiId: '0x4aabf5bb8662f4538bf9ab883b2eafa7e1a61211bdf8edbc2c9dc1ed24053418',
      creator: HOPR_CREATOR,
      featured: false,
    },
    {
      metrics: [new EmptyMetric(DateTime.fromSeconds(1643371200))],
      id: '0x50b95f4cd35db87c9ee36b5a653e1ad397e93927',
      kpiId: '0xc32b79923358551009f7fade6f91d119911eebe0e4030fbce798d799aae7afdb',
      creator: DXDAO,
      featured: false,
    },
    {
      metrics: [
        new TvlMetric(
          ChainId.GNOSIS,
          swapr,
          swapr,
          DateTime.fromSeconds(1647529200), // Mar 17th 1500 UTC
          DateTime.fromSeconds(1649948400), // Apr 14th 1500 UTC
          86400
        ),
      ],
      id: '0xb56db053585850306d55971e8b9c1396429e33a1',
      kpiId: '0x50c2c3036a31d508a41836cd0d64c806deca223da7d5166562b4d89537aebcae',
      creator: DXDAO,
      featured: false,
    },
    {
      metrics: [
        new TvlMetric(
          ChainId.GNOSIS,
          swapr,
          swapr,
          DateTime.fromSeconds(1647529200), // Mar 17th 1500 UTC
          DateTime.fromSeconds(1649948400), // Apr 14th 1500 UTC
          86400
        ),
      ],
      id: '0x6a175ba204123d08f91d9e20d34fceac7a4ab43d',
      kpiId: '0xda924e9cd6e1a6ce3220db202ef8e188cae5440b27e6e70a3defd18abe5772c7',
      creator: DXDAO,
      featured: false,
    },
    {
      metrics: [
        new PairLiquidityMetric(
          WXDAI,
          HOPR,
          swapr,
          DateTime.fromSeconds(1647529200), // Mar 17th 1500 UTC
          DateTime.fromSeconds(1649948400), // Apr 14th 1500 UTC
          86400
        ),
      ],
      id: '0x51c975e56a96c434b9a1b843cbf10bc37b56632e',
      kpiId: '0xe3899be8de3fe5f82e47a1474a30fd7fd262f9bbb61ccc32d0da6aab7e0616c6',
      creator: HOPR_CREATOR,
      featured: false,
    },
    {
      metrics: [
        new PairLiquidityMetric(
          WXDAI,
          HND,
          swapr,
          DateTime.fromSeconds(1647993600), // Mar 23rd 1500 UTC
          DateTime.fromSeconds(1649948400), // Apr 14th 1500 UTC
          86400
        ),
      ],
      id: '0xf859bab2889e22e4e5a612780abaf71a8f226a0d',
      kpiId: '0xd415b798f6f5e2af57fca69aba19bb8ae6615b74cf917021593d42f3960eda7a',
      creator: HUNDRED_FINANCE,
      featured: false,
    },
    {
      metrics: [
        new PairLiquidityMetric(
          GNOSIS_WETH,
          COW,
          swapr,
          DateTime.fromSeconds(1648566000), // Mar 29th 1500 UTC
          DateTime.fromSeconds(1649948400), // Apr 14th 1500 UTC
          86400
        ),
      ],
      id: '0x2569db67431b30f027083345208e77232f470e7f',
      kpiId: '0x8d96b649698862bb79638b5e6a249dfee4bf9c2e0e153033da7c5a84a94d94e9',
      creator: COW_CREATOR,
      featured: false,
    },
    {
      metrics: [
        new PairLiquidityMetric(
          HND,
          WXDAI,
          swapr,
          DateTime.fromSeconds(1650466800), // Apr 20th 1500 UTC
          DateTime.fromSeconds(1652367600), // May 12th 1500 UTC
          86400
        ),
      ],
      id: '0x97f7b8405654b1bf6592b5353487d94c58f9470a',
      kpiId: '0x921c18a1b7e39ca00b4324602792e67f6b8aee60af96a9450f28429baba6ab7c',
      creator: HUNDRED_FINANCE,
      featured: true,
    },
    {
      metrics: [
        new PairLiquidityMetric(
          AGF,
          GNOSIS_WETH,
          swapr,
          DateTime.fromSeconds(1650466800), // Apr 20th 1500 UTC
          DateTime.fromSeconds(1652367600), // May 12th 1500 UTC
          86400
        ),
      ],
      id: '0xb02dfcd4fd2ef513c307656e85b1cfca6eba79e6',
      kpiId: '0xffd71e580450d7c7e350a78cd1990d37b61422bb9775d7094b33109d1907bd97',
      creator: AUGMENTED_FINANCE,
      featured: true,
    },
    {
      metrics: [
        new PairLiquidityMetric(
          COW,
          GNOSIS_WETH,
          swapr,
          DateTime.fromSeconds(1649948400), // Apr 14th 1500 UTC
          DateTime.fromSeconds(1652367600), // May 12th 1500 UTC
          86400
        ),
      ],
      id: '0x539b99985f7d977c2073c8fb79259fec0c4b59f7',
      kpiId: '0x77f6cfbd16b87692f1953daa1abd6a1fd3b2e4e8df43c7d914c3243336cf1d65',
      creator: COW_CREATOR,
      featured: true,
    },

    {
      metrics: [
        new TvlMetric(
          ChainId.GNOSIS,
          swapr,
          swapr,
          DateTime.fromSeconds(1649948400), // Apr 14th 1500 UTC
          DateTime.fromSeconds(1652367600), // May 12th 1500 UTC
          86400
        ),
      ],
      id: '0x8086cda2e9a218bf8c6858a3bf30f7fab7833365',
      kpiId: '0xcc29766288f2ec988e760add4c30c5b22bca88c81a8170d98a0704211ad289ea',
      creator: DXDAO,
      featured: true,
    },

    {
      metrics: [
        new PairLiquidityMetric(
          DXD,
          GNOSIS_WETH,
          swapr,
          DateTime.fromSeconds(1638360000), // Dec 1st 2021 1200 UTC
          DateTime.fromSeconds(1640952000), // Dec 31st 2021 1200 UTC
          86400
        ),
      ],
      id: '0x81bfbf1ed75b5d725c6bb60817ca0a5e30589907',
      kpiId: '0xb14fbca57adf524a30a517eaaf012cafc1227782aea1e900fbba1fb7c8ba5993',
      creator: DXDAO,
      featured: false,
    },

    {
      metrics: [
        new TokenPriceMetric(
          SWPR,
          swapr,
          DateTime.fromSeconds(1638360000), // Dec 1st 2021 1200 UTC
          DateTime.fromSeconds(1640952000), // Dec 31st 2021 1200 UTC
          86400
        ),
      ],
      id: '0x8dc2a6919eb14ea6ea1869240965322ec092aada',
      kpiId: '0xbf6d4e50a9142bf3466c7ec687f1ddb403994a28bfe78d457301a5230d07c281',
      creator: DXDAO,
      featured: false,
    },

    {
      metrics: [
        new PairLiquidityMetric(
          HOPR,
          WXDAI,
          swapr,
          DateTime.fromSeconds(1649948400), // Apr 14th 1500 UTC
          DateTime.fromSeconds(1652367600), // May 12th 1500 UTC
          86400
        ),
      ],
      id: '0xbb148a7d482517c83632e051707c830ec4ec217b',
      kpiId: '0x2c78cb63725a89689babcc4470cab507d45b2e9eda91da0b2a7b78211b0cb05d',
      creator: HOPR_CREATOR,
      featured: true,
    },

    {
      metrics: [
        new TvlMetric(
          ChainId.GNOSIS,
          swapr,
          swapr,
          DateTime.fromSeconds(1649948400), // Apr 14th 1500 UTC
          DateTime.fromSeconds(1652367600), // May 12th 1500 UTC
          86400
        ),
      ],
      id: '0xc1d84d359cccbdaa2b29f80dbc72f935dfacb3e4',
      kpiId: '0x00a35f4d71a3aa545ec4c6ab4ad0ec2a5ec36819424d9c7637122a7523c8aa46',
      creator: DXDAO,
      featured: true,
    },

    {
      metrics: [new EmptyMetric(DateTime.fromSeconds(1649934000))],
      id: '0xdf1364e289d9c4a60bd5f4f731811b77d2f0d1c8',
      kpiId: '0x7b102433b1f83fb8ac8d9eaa0ef925886254e95bada654a52282bbd0a241442b',
      creator: DXDAO,
      featured: false,
    },

    {
      metrics: [
        new TvlMetric(
          ChainId.GNOSIS,
          honeyswap,
          agave,
          DateTime.fromSeconds(1640433600),
          DateTime.fromSeconds(1640952000),
          86400
        ),
      ],
      id: '0xfd7e71a6b82c423b3dfc3b9b4dd854e3f1e468d2',
      kpiId: '0xa196c0e33df7a4b7729a2b3d3d3083d00510f05f932bfadabaa56bf8a8253c55',
      creator: AGAVE,
      featured: false,
    },
  ],
}
