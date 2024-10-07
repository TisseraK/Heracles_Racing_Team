'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "33b02bc15ce9557d2dd8484d58f95ac4",
".git/config": "b0a3891602e41b2bd9e8b5e3ee3f3020",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "561f0c296671aafa143dec02f18fe163",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3774f7016fff2d41e77e5a45ea01f497",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "62c16a0938f2cd23ed48cb8b7373ef12",
".git/logs/refs/heads/main": "9bd7b889fd7038dab6510f55add11bfd",
".git/logs/refs/remotes/origin/main": "e42c5adb686899c9d8599e15b1ab0c04",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/09/599b80acd23fd7af6213ec422ca94b4f99b66f": "edb862a4e375b35fbcda95be576481b4",
".git/objects/0b/c9e745a383cf09e52552def1b631ad637786ba": "f492051e0e2eeccd1524b67e8a3eedb3",
".git/objects/0f/327f09cde549dec131b148bbec134f2190d8ef": "8d9d8f4677367bd99092f8637c90a79a",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/11/35e391c609e8d825f102e07f0c14915a08a126": "0fb932971ebe88053d2a9fa25f5587fd",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/b1befa9f298b94c1bf1f925f63ccb5911d7e78": "124af1aa0864f2913543440044b135a8",
".git/objects/1a/765934243e0923914927b206e7a325997c9126": "a2fb2f420a0fbd3e16cb6c83f3f24e24",
".git/objects/1a/938718712d6d028c5745b6c60f0b32a7e256b4": "867edd863f61c3d0abd5e078ae05aeb9",
".git/objects/1c/8ba6b74b95fae3629984f5b4c444f8d9802e57": "b45ffdeb858a2947b61813941c340f6d",
".git/objects/1c/ba033297690c042ae6d4f157131ed874a31c9b": "87f5f95f20adb9a623914169c9eade4d",
".git/objects/1e/9828598bd85a78f4eba02cca34dcab85b4c6e4": "8f2573248530cd2b064fe77280b15da2",
".git/objects/1f/2cfde95e4b3b6c55c134e0e1ee82d07ec45de0": "7c29a0c1522dbb9dd70a5c147fb04a78",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/3ae64dcee9bd31fa62f90f3987c7cd80769d16": "970a3763409bf06e466d39ee98a0c1a2",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/597ad776a59657f149df57d24fca0d0ee1de37": "a40251e62caa72a1630bc440eb76d1c5",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/d74767443fb09859a68cf1a326e6ccd53ce112": "288cd4384104580d5b87bcc656e53342",
".git/objects/2b/e2e407064d0197845aea2f2bdc1c0f7bd52483": "82919a0f1580443d9800c151e485d6f1",
".git/objects/2d/dd5ad3cbcc057d8165a3ebe16cf02db99a6b42": "986e78a59a4b16378483739dd9a9335b",
".git/objects/2e/54ea0c8e38fb01b668de8befbe0aef85286141": "3406e5e0398c8e0776b636016f37d0ae",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2e/d31735b947ea6371c479b3cab256338a3b3765": "09118515b9de2e3d19140951ccfde8c7",
".git/objects/32/62dba43bfd8cb1c0a5c1eef2e966dcff95e6d6": "bde5ce0bb921cc871bb4cd28fd239712",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/36/a89755cbbd3071f43a79b0f755a356406e5235": "92cbd48efd95d649f189159794c3b11b",
".git/objects/39/a72e9eb89acd06f856157aac94c6c2356a4adb": "9527f9a54bf551022bf74c04be17dc35",
".git/objects/3a/16b1de2ea5f6f6522f558215c1e919a52439cb": "ad153f393f54111b0941d313d1b5bb6c",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/1300e875017de016edc47266a5b902f9441a66": "dc55aa03e4fd130935caa48a390b01d4",
".git/objects/3e/133cd1f67ced19becb269750c02295604d66a9": "d3408fe62960bc458181d30136f5c56c",
".git/objects/40/580397066191ab25552e3546ba55ff06a2acef": "0cd75074662efaf6a8bb9dc4e0417ea8",
".git/objects/40/800e178b4c98e2151c5ff2bebc43cc9ada0c9a": "74cbe7e0c2cd20e5a239e1f5b7039c79",
".git/objects/40/ea03e7441b105bdef77a21a16c776d341a0cc6": "9eacba16a5bd701a424ead1a7c691e65",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/e9c6615f10b54d0e992df3f31e55143c7b7235": "f28c193e6a4203eb44aeceef6c12e8c2",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/ba9fe0479b281f9abe468559521f60d16bf170": "580432b95691a66e4e59f04cddac48e8",
".git/objects/4a/3d3ff11c0cd9b785ba1a10885c130a7a718c15": "4ac9c1157181cb6300b87cfc82a96730",
".git/objects/4c/16118c5749277032bdc73b3ed01455f4b72b34": "616fde1589deac73adbd1c812c20e3fe",
".git/objects/53/d5fa21d1bd430eb11cc63adb8055025f3607d9": "7bd4e46195fc1f3821aff45f83c86d61",
".git/objects/55/a01edaf3acfb0ec85d8a8493c6ba71af9c6197": "3b0059d6790c2c0ba5c69ec33a7be2ee",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/06600edb79bbd59f10e551de5bc55d250b1dde": "e054f417bed2cac3cd6199888b7525a2",
".git/objects/59/3343805df50f4ce40c042ed638f03c821641ef": "9eb13370d8f6ffb2024c106189818c1c",
".git/objects/59/6d4ead5e0b552538180c75702c412e07bca789": "e2c853ba5e39e9397f9c072d80262482",
".git/objects/5f/1163b75be99a7b55db86855b7df7f2fb0d3c11": "1c8b99792faa69d08c304c99e04f56b8",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/67/bbaf8717632d2268157e2680768c1b88eb7553": "a364de1805b5195a7d30798e1f7d9c24",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/5101b91f37da3d5c7b8988d8ced310baed5803": "5aa53cbbb9311b5eda281f113877c184",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/685921b24250a61c4464c9ea8bae8c28ca37af": "dd3e899ccf908e1c0e8e34e6a755fe75",
".git/objects/7a/75c6027d206df65bf9a882bed1c2fbcc282de1": "502218bb425945bbf88651142ec59d24",
".git/objects/7b/b80cf808f9ba3933d1a042e2aee2d2759db9cf": "0f233752a822935ff290571dec8fab25",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7d/0172f916a2c136fe33affd07773f4da685012b": "1ee75e1056a84e4859790892214ddf5f",
".git/objects/80/08d748d503f24be53d136fc8711427cc1c1023": "893328a1273030e03f3aa126e29b07f2",
".git/objects/80/16cf013a1c69f0c3ed1ad4a88e00c46546b554": "df3e2d7c94838e77767ea12da55ad9a7",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/7efd06a13c4640a9cb8a22a97b350a6f9542c6": "2c939c6fe0ff8831ad4b05678ea7aed4",
".git/objects/88/a675d0756cf8db1b780d829d3adce21c1cff82": "84e6b3e9c5c7179bef5549bda6e53aa1",
".git/objects/8a/e18556fbe153eb95300963dbbc94d871e0a28e": "c531111edd5654fc8508aa6a8006d057",
".git/objects/8e/15c1dabecb13209974efe2741e37fd43529fb8": "d628f529a886bcb64f5de80f56e6c450",
".git/objects/8e/c676ff2ffd307a6b7b0253204f8755d40ef44a": "1aa75e888ec95f4a934af168d8fcc211",
".git/objects/8f/b182ec718c6e4f07ef944b435fb5892cb7f2f2": "924eefb25af545f4ddae301c083f08e8",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/119d6b4f4790e1e46feb3d4c270bffb6b04838": "7e347baa3c2af611b2efe26d7c4af881",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a0/d9387cd3e6d47b762682418905557a1997625f": "284ca6ca54eea6cc9b804de8f6c54d0e",
".git/objects/a6/b6cf358272ce59fc6b0addd6d6bc775b0d4b9d": "93288398fa4a6dfabc87f122a5affd33",
".git/objects/ad/f25acaa0972ae8aa00913a4673ddd54c8066cb": "f434263beb084c4823b70d67bc774f42",
".git/objects/af/0dd41f51d63efce6d2a8866544da4f95be506d": "0116eeeda45cf25757a41aa8d52af305",
".git/objects/af/4c849bcb82756a83b71ba5d0c3bff2b5bace7f": "65f70d509c252f76622b73a506720d71",
".git/objects/af/8a16e38c9f57e98c43115973cfd2c11f536e98": "de21c865a6dda45833fdbb371331d491",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/9ae90df5979aad60077cd66b263f6fffe98322": "e5dd48a7f24c5cd6eb5a81fe03e6d4bc",
".git/objects/b3/d0ccb3c1ea8541489e754f5aae83559629d9a6": "330abf8b079952200d42044e022251e4",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/e9151498e83ccae839c7ed0f86427b75f53585": "095bac3b4d4cae137af2a01077e0612e",
".git/objects/c5/b265775aee1b4388249a8febb9d552f62f0aee": "a867926c37945d082aacaa01055cf96d",
".git/objects/c5/efec61e224ee7e7bd9a0a80f71223a505ad65c": "6715afbc8dcd615dcf9a7fc35faada0b",
".git/objects/c9/ad7bc08e2794dab8d57eee3552877754cbdb04": "042b35eb964266beac24bd78b1aec64b",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ce/cd28ec666e478fc95bd411a9241d8cf6999846": "0c81bc0fa1f53098f24eed376a1fb85d",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/6e03813904ae24113d9793df285ecc79bb08b5": "28a3c3fd9ff02017adeaef7fd7cb30e5",
".git/objects/d5/813e5ace1fe056d563b789a653c0aac40d9f71": "d8ced2e26eae19a40c6b894160d3b9f0",
".git/objects/d8/9833e1edbcbab8b1a3eb6979f24fff64abb024": "49bb1d09272e6bfae531ef4a995f24aa",
".git/objects/d9/4681026608f150c1e58c45a41ae5dd5922fab7": "210c87599fa3f69bdf7628cac34f6f30",
".git/objects/d9/eb79d9f788660653f0749340b03dff846efe85": "3d105be5e1d01c12e424cf3a97670d96",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/367aebc7e03e1e37c92c54120424c0377d471d": "39e135cec6281b61c843e429c5a99e9b",
".git/objects/dc/4fb2f3285aa2e21ad68bf48b924f52afaa74c0": "8754604357303048771277747e8e6192",
".git/objects/dd/95fff045a6abb31e9384834d4173df78e2fd4a": "38c279aa1743044907d65d43d4174fd3",
".git/objects/e3/d700c4110dc659cbca100df9841b73259b2974": "86daacff1365b0c48df5c68ce4aea2de",
".git/objects/e4/bc724eae9fda9a47ed409093b8baf894f49559": "688e5e3ade0f6caee36117bd2fbd67f9",
".git/objects/e6/2d01324e891cc744a6e4e1b25c33d72c1dd0d1": "dc4cab35c808b23039d0de037fe5b6cc",
".git/objects/ea/a5150f44be9ea4b456b8a3bed682734eff2f04": "ec2fac444ada57e11d5d153663b28fa3",
".git/objects/ec/54244be7ee9af720d70914a2e3ae14eb3f9c08": "99cc2210599b63c8047e5bf08147d4b1",
".git/objects/ec/558d4386bf8705bed0fcae8dfe05332b6ab2e2": "b18e117524aecf1928de97f3250fabe1",
".git/objects/ee/616d34e00bd2e9ef03528d8dc60bb6e450d366": "8d86a4e0f7bdd0c2e804828714f51b66",
".git/objects/ef/3fdd400bd8139ab5b342b042f1cce8684b09ec": "189cfef4023b1542650e6b3447b09d09",
".git/objects/f1/d6794c1f6fcd528714e11f61ef7ce143e713ce": "572ba328b887cc24c215ebefc4b2de79",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/ec4405494fcf07a1ebd5abeb700a008cbf5973": "0d2aa4b16e91e28f80cd9c5bdc2080dc",
".git/objects/f5/ab8f30213454386edc6b98e485e213784cca26": "f4adaf934c8f976fdd51c535bcaa7eb4",
".git/objects/f6/907b27194fbd424b5de3a92d2b42ff859d905f": "e9cfeeb9256b1a4761e2d7aaf16f5070",
".git/objects/f7/1add6661e03178c154cc1d5f86213ae0dc2f95": "45ed52a5e0ed2b3bca08036a36e67e95",
".git/objects/f7/ac09f7570df13b483f84040115dc2df7e9f35b": "fb27ff8c0577f550b842bbb53ac21f85",
".git/objects/f9/8d095d43c8ee8702f721113bbcf9e7046d5e5e": "0fc8865d1b52b99cc25b4b34e27eb232",
".git/objects/fa/8452e24fca42a71f26e924e859213f8f05ee16": "e4785bd388b70fd04f6fdc40a83f5f41",
".git/objects/fb/656fa7be983296ea364926eb155026382585cb": "bdc36371c3ccbaa07b8023004346a24b",
".git/objects/fc/35db385d56e177e5a033f24b58c9b0502c15a4": "f103da843e82df338d388df0d7719b7e",
".git/ORIG_HEAD": "eb196a89a96c51e501f3709c2289e8e6",
".git/refs/heads/main": "9e899ea32979959ebbc8ab209a6109c9",
".git/refs/remotes/origin/main": "9e899ea32979959ebbc8ab209a6109c9",
"assets/AssetManifest.bin": "0b448a912fddd1b9d5e554bd6d9835e5",
"assets/AssetManifest.bin.json": "fac857a2515652e5e3076eb2cba156a5",
"assets/AssetManifest.json": "87a28cfda83ae7e047d8dfa83bbc047e",
"assets/assets/logo.png": "b444d48a5e96ae318a7f875717e9c9a0",
"assets/assets/logoComplet.png": "9d4d8786c706639164a8da0b9decc64f",
"assets/assets/team.jpg": "f00fc7587702af89937319b2513a57ce",
"assets/assets/tisserak.png": "ac622058548fd89dfdbba18f5e4bdedf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "9faf9f106278c34e16ac147c2a1d9223",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "76cade6eb0e2782fd954e87009745672",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "ff0ea62437fb9fa6892b8fb0d5d404e6",
"icons/Icon-192.png": "76cade6eb0e2782fd954e87009745672",
"icons/Icon-512.png": "d25eed2a6c261f8932e425c74bacf922",
"icons/Icon-maskable-192.png": "76cade6eb0e2782fd954e87009745672",
"icons/Icon-maskable-512.png": "d25eed2a6c261f8932e425c74bacf922",
"index.html": "bf8bb4ec4cac99ee80d85b907fa293ad",
"/": "bf8bb4ec4cac99ee80d85b907fa293ad",
"main.dart.js": "bd3d5c9d586738550f40d0fcdec9639d",
"manifest.json": "a698b3094ec35ba8d3df439e1031c926",
"README.md": "a1d32edcda1ba9f97206d3d0f6f49ec4",
"version.json": "db2650ccdb6e1d039b9d5be8c2487c7d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
