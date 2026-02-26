'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e68d010c37733f2acfc1d4e24c236e07",
"version.json": "f9b227e53088f9e81e31bd2abced4873",
"index.html": "768f34c8a30795046d226beb2dc24dca",
"/": "768f34c8a30795046d226beb2dc24dca",
"main.dart.js": "c461079f883b462b4a1db0434c4896ea",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "81a09439fd617b50d65390cd92f2c0fc",
".git/config": "04ac7e9ff2765f1b2ae87f04ef5be690",
".git/objects/66/e1274eb0b06bbdfcdb4f729c6f4c189621bb8c": "bc4339fb1839244a3cacd331116e4de8",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/68/7b1bae2275132ad3da8d6314502f262827be01": "99c80019a0d2c7a415d0a696ba14c665",
".git/objects/03/722f1dedbadb50ddff957cf89ededb1c76171a": "eed0fabefbeff8f2f8de35caf83d5162",
".git/objects/03/ba1ad4e36aa83c54c132dc0a0cb37861eb29f6": "b95b88abab0b946ec9de1c3e43250ed0",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/9231fbc07878ad480d68fea996e274b14ab30a": "c44b8ca0c62f73f23d5c11743aa69549",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/04/cf67a506ba7d0bcd818804b65a87b2dd227d59": "6d0a1847105825dede64929b68dd92c9",
".git/objects/32/f341771f03584c369ac86b1d429960ce75077b": "bba05542e087026c989bf51447ab1238",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/51/eece5b7e6d609e570e538ed885e522e5fcc2b6": "01313e1dccd8fc8da9e386033d3d7d78",
".git/objects/58/caccb8ffa4090beb05e60dbf5d0d00d2705ed6": "241c38af29c74aaa2ca42a40f27b73f9",
".git/objects/58/633715f98a1afddcecb909aaa17f2f9db6e53a": "5604de044f03190ea5617d5869d5a5eb",
".git/objects/93/5747077c069dea05d9acac67af42d137ff1508": "f40fc55a3978bbdd1bf4d6540c4192ac",
".git/objects/0e/228d1645fb5fdd032e6b3def0652c5293a77ad": "17bddb38b1bf016dca913bc4cecb6044",
".git/objects/0e/5a330f202a012368599ee2ab4acb45488deb8c": "7dccdfe20f5382f5149852356eb6a127",
".git/objects/34/c2bb62a4bd439d85cd34b538d36293fae295e3": "9a727ff217077f9905c7bec4e83cb910",
".git/objects/5a/07beada8c8e3f2d3ca5c5317524b64a68c8b10": "e0224f57a574b3f0fbfc3896a9ab85cb",
".git/objects/5a/64e57030a7cc3ad954375975c605326480d39e": "d6483d22f5ca317de8cfd91786ce9975",
".git/objects/5f/70cb82aaa0d023352a84929705305c802d6478": "8abe8a7dd8b6c3fb582c4cdacf856e0c",
".git/objects/05/c9a50b90f6efc464a746a3a2c35c2174c0e7ea": "813eb435d8ca393a02926d12bb8cb86c",
".git/objects/9c/30f2aff4c481071e251fee3427826f507b1d37": "1cddc453b5a7fa451c51f2a8a7a2efbf",
".git/objects/b2/c3585ef535b74bbd1bc272e6b676611386d02b": "a7429780bb5b0fb2e777ff8164ce7dc9",
".git/objects/b2/401f56011367f47a7aeb7de9a1a56aa3c5c24f": "bcccf96e63743f5de4f45149f0428f49",
".git/objects/b2/440375eba6caa5235d6c8d79c37b105479a8e1": "47ee365a3021bb7c4dfc60ec2854c3cd",
".git/objects/ad/6fb74369dbcf0f90bcac2218178c0b54e7c36e": "ab012a16abfec557358b653b8d861b8a",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d0/78c80a84a2e0bb6337ce6a458da5a913ed9e7a": "2a8bcc025da9f29052b965a42ab0dc09",
".git/objects/b3/492bae38e0b503d585e201beffce9ee48c5ae5": "9a64589a74f7777aec9bf0f4e4a03b6a",
".git/objects/da/841d8fe91b2c40c33e90eb6c7cf7485d74c107": "18a8eebd5ec8c732c0ea20b6ced12980",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/a2/53e561af5bd28d36b16b2cc634ede3d9da9aff": "3bb9c9b711f55929a846545cadd66b49",
".git/objects/a5/bc92eeb1cbe2ca63fcb5104a0f0efec7c2824b": "d1003096d636cc79b630b064636b9d1b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/0b79192ffeaf05ac4c481899cddc5372d48119": "1e8f3a64eb5e589b88914c409ea67137",
".git/objects/bc/7d52421e8125edd51bef030d9b33134412f56c": "3acc8e356bfa05d7c87d43d7c9750341",
".git/objects/ae/edd3aa60f131047165fcefdb893a4c4098e6dc": "b0d3f1efdf9a579d17d586681f6e55df",
".git/objects/ae/9b75e5214dbe212cffa1de118970c9a539c8e4": "8debc5612595bce698363673981dac6a",
".git/objects/ae/2dfbf40f0859a893e0bd91cfe8dd25802621bf": "4bc3ee2a94e2e8d07924bfb80c2019d2",
".git/objects/ae/e637d676f11b13acb8bc1ae54de7e68a6cb8a7": "ea29fc30dd1e912ad13c438183ace9ed",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/d8/cbacade079d203db32f207f4b3cfbbac915622": "f85498f07ec1f5e7e6b61310af235fde",
".git/objects/e5/07c851b27edaaf3e54f3fafb1332af23b7718e": "7727a7b74f55c95130a2ddd1e15db604",
".git/objects/e5/0f9b7cf048cd96a958eea5c9834fd9121adf11": "e0b86ad876aaace6e1aef664102c89b6",
".git/objects/f3/69337062a45bec47d3ff7dfdd4b049c2f2a9db": "9201d29f4c46b5c04d72fdd7ff3ece5c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/461c2faeff6fc1ec02703bf791f35721f7f9fb": "bd8fb7c3d9915fe48a3a3c95bdd79e6c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/b24a2ca5fba200f24e30855d7ddd6e7cb33a3a": "fa8e67fc0282be0985ae9f8e41cfe202",
".git/objects/f5/082c0ca52fce50355ecddb3a951c58b68503ff": "b73a4181078a68a3a5e44e266c7924e4",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/60a055171f9d0ad6c1074ee17183a47b1ec722": "b0af62ae75091353a8f7957924860bd2",
".git/objects/ca/a760a5a6a47d29b2e7bbb80d311e8b76f98cfa": "cad5a068a758037a72e4605ceea9307b",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/e4/2c0e1d93391dd5cb3e8012646e870174a54f8a": "c890df0dc68ae0a3ebfca14212282878",
".git/objects/fe/48e231319dade3b228028c99bf0c9e38ed1c9a": "94bd27e7eb9d7eecc62110d6a877a900",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/c8/3c012ab1c9a3446cef785e374010db6c495aaa": "ce39f53fc49620d3c60653777413bb34",
".git/objects/fb/62f33821997cd93235f23777b6fcd6dcf20082": "92bb9363f15db3d721f2ab140465c7f8",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/c6/8486eb3b62ced6aefe68141fdd3fc63d5ff643": "9e559415a136d410e996ec75da102fe5",
".git/objects/20/c75dda43e8a130972748d42afe864a5291a747": "8cb596f806768344537a72f62fe3b9ff",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/4b/30c75e424329f4df7e494cecb336aa02bb5b82": "4d564e71da2260ca3fa47e6281a25408",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/73/57f4c54a49ea0587ada7832755902810640ac4": "bcb02f59c9bb78184dbed5ff1169d7ee",
".git/objects/80/3a52f1bfd597a697332dcf1e4f0c2790176af1": "1fdfbcbf496d9adecf1c4441b49be76c",
".git/objects/1a/e92b2420ec71973b90b9016f308b720afd6d06": "219e760ae62ac1af9afe85fb862b3427",
".git/objects/8f/9e7322486ef748844d0cf3b53efb4fe13f4795": "8081afdaaac5a6cca425e19b0c0b6e57",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/c482f71e48b92a996fa9ee461a70a1c63483e9": "4b55fb3c890c8cb50f6b31201597d895",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/dac023186b66ff4631459719ea0f43a4a9a4d0": "c32108b86b78c2c5c12b908ec8344575",
".git/objects/4d/dd0565cd5ed581bf0a930892b0f2e772fdacff": "f51a8ca777f7f029332cccf6c0d83fc6",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/72/eae216cc7dc516c8ca5a3543aaad00a27e9c05": "29067c367db929aadc10baab2a707d3f",
".git/objects/2f/c69a57b70497e292af427367865ed7005bfeb3": "d0abf85bf5393bd15bd629a763ddc664",
".git/objects/88/77b40ca9f4cf3539e4c63afa2c361c6232ba6e": "5ce8d3c02f61a52c53b2862c11bc4392",
".git/objects/88/69f3166daa6da1d4290aeaff5b74004a868ab9": "a205f1bd3976dbcea99214e2c0f6c625",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/316edb64286965437f73a126dfdceb5c81d9a6": "273b639d5d2b13b7c6642c518bd776eb",
".git/objects/6b/24a4bf19089406805b0ae0205af2636b9c321f": "7818c3a874bfe69e8138a03b2e06ceda",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/ac489ca8a4dd9c7d42c1e0960c38d02f36e544": "b1f5da4e400f1406665edcb0d7c7d569",
".git/objects/09/63ff9e1305324fd3159a2156133f270814d29e": "ed172d8369f39630d13e00df532943cc",
".git/objects/5d/2b6dd159942233a21600161dceb5c7f92d1c39": "e9c3c143ea2ddbaf46c69be085da51d8",
".git/objects/31/a5ce769f808f7ff4b88d7dd975ec4e37f41be8": "6161931f6ce7615d34be23d786bcc9d9",
".git/objects/31/0b19bc593cc5b472fc87aa25d0bfe4b3f441c5": "48f95381324b533ef699516206b9d380",
".git/objects/62/1224cab4218b25016196023f19212dc596393b": "e8c674cc5774de72e3b9849b3c1e7320",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/53/27cc391b94902a111c8d2ac8be574450f878d8": "d5310a67b2be6cd12e8011c0b64a3cfd",
".git/objects/53/7a42ee1cfd58059a1eb94e68e6882736b6d966": "cba3df737cdbff4539d7ecc5af44d6d2",
".git/objects/30/9a21e05ef162927898e70f7db26f35841a7712": "e0620efb0cc6e468ec14a9e06012a4ef",
".git/objects/6d/94cca8159783d0d61baa94c45291aed9595637": "ac88a932f7eb9f1bbcab5659837b2997",
".git/objects/6c/3984c905f4d45abb783de37cc2d1dc55508ac7": "f4e41006876a8729c32e3886c73eb7d3",
".git/objects/39/1ee4fdc4d5ec8e95a8a37ab20667adf021ded9": "4a804385c0da33d9d9e609900b003d83",
".git/objects/97/b4205ffd1fab72f2c2735da3680709728ded52": "37d2ad96629a6efd99c3ea3cabdbed0b",
".git/objects/90/d9f3f615243fd3a0d7488449761b0a7b5d44cd": "be114942a5a2d933330d6544bffe065d",
".git/objects/90/be75a875b9976a5312964bd85d6623c49328f5": "08c249c602d97a954e0a481ef97365e3",
".git/objects/d3/f5b45799c9948bbcb20fccd6ffc0a680ef672b": "975197f902578d9ffa35eb0ebbcb71ca",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b8/af43828ec5df89d69849cf2a2aadff0d134459": "48fb3a7527e88044f3179a08096f09bd",
".git/objects/b8/1394cb67ec78166dcb29f417e6034454a85e11": "db151ca3cd9126684e7a3878126e95a7",
".git/objects/b8/240fbba66363d6fdf7109d4a4bb461487eb27a": "134b52be9658df0e2198fd45b978f05c",
".git/objects/b1/3226ca4903bd87b1cb64a5ba09196df43796b5": "cd844de9b04a982fc9ddcd9b7fed3a9c",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/3bb521a87f3fa160745535ab82e6f0d4edeedb": "fc0733b8835c0d491eb15d64914270d3",
".git/objects/a6/41139e0f1eecb7566c565e895a5dfcd16f35c7": "b874b65abdae82d76f19017516288bad",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/8ebfc7cf16b544f7f3b07dd45384c24b7c6737": "fc40af2aa9c10113176ee32a2f74fbcc",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/cd/e3fe6d0e340dec67c5b6ee756f22baa111a24a": "7f9ed04378eaa34a05b428c35e84cf95",
".git/objects/e8/92be10eea2b0c07ecbb7c84d3701857afb6621": "f0ba80aae9ce1d4dc712a9e04531a741",
".git/objects/c5/7ef1fe7afec0225b5e729e4286a2e83c39e857": "6580d2046d6b49f7c9a1ce047372dc17",
".git/objects/f6/b450c17c014ba70f61d243013f07f6fb0dcf42": "595f681a49e83342786ccc66251e98a5",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f1/68e131072f2bd4200ade6068b1135480780eb9": "414fff6bde133cb898e1f76bdf7b5902",
".git/objects/f1/339a2ce76de85a116a960143b4a24f259a3a18": "3d613e3258dd9b5af319ac1e8c77324b",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/ce/0ed21c2f719a31c0a04836f4830ff0b423cb4b": "48f7552cf618c7245b3d566363c17dce",
".git/objects/ce/54a34c5a2293277ea21dfd90b57d7c07128d67": "6b010adcf91065434ad09a8dea6ddce8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/0b881e7d7d89bf2b57360e6bc476153790faa2": "b0a2686df3c5b432150ff07de69bfef8",
".git/objects/79/0f9a61768b2e10658b543d3f3f8154662449a2": "658ae9b070aa9f44dd93380341a20a84",
".git/objects/41/a9c9d4be47863dcc67684eb4a8ef65983ee955": "0c288e30649c1e378d681feefae0b7f5",
".git/objects/83/42447226755930cb209b930c167d98d80e389f": "e24436e1086dd0c75d7c5f754764b7ff",
".git/objects/1b/c133aadf8b2d8876e09c3bd09163139dcf5445": "06e1c9d47e77ebaeb9a78ca295f99d73",
".git/objects/48/681c0beaabd9821569f393a2b4ed7e629c96e8": "ec83eb5199b1640da4092b116ebf2efc",
".git/objects/1e/80f83a4fab4e555933b0751d673d2718678709": "7b55fca2c94b7da843ee7501f7f6bdc8",
".git/objects/84/30e7b23438c89d57633192f92be4de7c870be8": "c1181196e3773d5b2f8911d06e4608e4",
".git/objects/84/0d8e0d5fe4949a37307bff8825e5f8b319278f": "9b28d05e15755e2cbe44b6613ca4a463",
".git/objects/4a/24994d1a82fdedb263f9829a532893bc75d635": "0f7f3a65fffda0e2f62576a9459e08b5",
".git/objects/24/d1a53b29f57bdf9c61d3140ee164244f78fd41": "998b54958cf64590333c03ff1430b401",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/8d/41cd13a6e170551d6f5d019c61c577484cf21a": "190679b4371910d6175be83eab4178ca",
".git/objects/15/87a7d0db02407a246fddeb7f6ab273c82c3960": "31732b164422d60406235376d3bd6b32",
".git/objects/85/269821c195786e6c6f333760b220f1bbed886b": "94c03c1dc76499a16faa26f88293dba4",
".git/objects/1d/44e89ec5c1222e10095749ae3e0295f9aa8d8a": "520e940f49114ab4f087324cfa2141c3",
".git/objects/71/4f2720e8185d432c168c4a492388730d98b9f5": "3df6267abfd64620c94e93013406c803",
".git/objects/71/ab4424bb2e549878b2ebb4ed69ed15d73fafd9": "5d7accf4f36654385caa855e6d44ea8d",
".git/objects/49/942a9894ad54123c1d7197859a04ca8961cb92": "925299bae48a50cc527e05a23a682381",
".git/objects/2b/0b77dbe2b1f179c36fbcf04430628d626810e6": "d047b35c5652f85374bbfd0a6c86ebd0",
".git/objects/7f/1187074ee95b3cdf77428f77af4210cf6225a0": "18041355ed4e3dfa8a084f717778beb5",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7a/d18af55ed7d97f6078c20fd59785e74f96925e": "383bef497c1c344a6a65931fc0b710e5",
".git/objects/14/84c936020eefd8bd2f838f676981ab9001318b": "27e481fd2092decde05f46441706b0ee",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "008dbe21fa5bd93d99b88b3489428e43",
".git/logs/refs/heads/main": "694438132291b8ef3051c20f9c006ded",
".git/logs/refs/remotes/origin/main": "0a43acf3499ce9db510d250df8876447",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c137cbc50f5721c08c0015cb683b44e8",
".git/refs/remotes/origin/main": "c137cbc50f5721c08c0015cb683b44e8",
".git/index": "89380afc8458f867ed86c3bfe8b3e9e7",
".git/COMMIT_EDITMSG": "7df23ee175298442ac1677762d8eeb40",
"assets/AssetManifest.json": "5c65c4b0c73328224c871f5ebe7fded1",
"assets/NOTICES": "beceb316a5ae6b3fc1983329403c7982",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "ca6fb6ffd5e6c0426aad90197505c199",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c4c985f4576ba21e30580ae177852e1d",
"assets/fonts/MaterialIcons-Regular.otf": "deea0f5dba93813bade5621aec9b6b13",
"assets/assets/background.png": "f9fd28f476bb41d24a78717519d13a16",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
