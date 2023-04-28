const SIMMAT = '[[1.0, 0.1009161667461733, -0.12231830676724952, -0.033877458125793285, -0.08064621345854592, -0.008231422610758373, -0.2604022246131281, 0.0014627563846181396, 0.10782300536093226, -0.06097793339045393, 0.09663022482947173, 0.21804836770792216, 0.09307384379568287, 0.2807223751123406, 0.22877045913009908, 0.2911086426119686, 0.33353299832232497, 0.18977713737876323, 0.18777081975125504, 0.23418225609618656, 0.03622304292790607, 0.12872750616463122, 0.08669839857820927, 0.1300446980589348, -0.02930250955595317, 0.13871156521393008, 0.18440734828987396, 0.12222421666264674, 0.19465050316727478, 0.0240984134048007, 0.26135291645832376, 0.3722236480133508, 0.03781492770689288], [0.1009161667461733, 1.0, 0.12725608143927092, 0.23451219908819892, 0.1338482556243311, 0.27616121790983095, 0.11714337061881143, 0.43334434441563985, 0.2579701903115705, -0.15538763130873562, -0.05835583457006868, 0.2028505961233923, 0.08660524933774175, 0.3995180270718194, -0.01503935541082954, 0.12711678115609196, 0.09591015993210977, -0.04958521364980644, 0.1852021993440894, -0.15700648546982512, 0.04068579297641773, 0.28072511634353253, 0.021272710934683553, 0.19836793672546435, -0.09890186501348604, 0.1576757440494682, 0.020122910812174388, -0.10995202548528993, 0.06760262574756148, -0.1361827082378763, -0.05416106317842894, 0.08396111295221932, 0.25314737458333236], [-0.12231830676724952, 0.12725608143927092, 1.0, 0.3111701897255706, 0.2349562969423629, 0.1571306590234253, 0.357317315901491, 0.04860500200701631, 0.16806084558647838, 0.06841861739280022, 0.055541853364175824, 0.09383973170839105, 0.14997634520107214, -0.0020543097371340294, -0.21732434516654392, 0.12487644790295815, 0.15688062794306645, -0.05990672857612273, -0.01874704636534475, 0.1806083170172237, -0.06823830944250463, 0.09109768167010239, 0.048425275131142004, 0.12710439407805033, -0.011004823200881635, -0.03445139993063713, 0.011118510538960328, -0.04077639965198121, -0.020517492373485175, 0.09743969667990703, -0.04466385253564033, -0.04013551209783029, -0.0778071241734556], [-0.033877458125793285, 0.23451219908819892, 0.3111701897255706, 1.0, 0.22461661886403744, 0.15491343507839686, 0.14025762973796907, 0.1714976655986723, 0.11961813346043962, 0.05843709184161076, 0.020959963937405818, 0.17856786191310356, 0.19814353700914733, 0.20029747722324667, 0.048230236839742285, 0.010745106627781125, -0.03338860051299201, 0.08955815655692682, -0.22537429042132923, -0.056303253190159074, 0.05935012732183572, -0.121475681624845, 0.00013152732757207273, 0.02911405691278191, -0.00223694508857902, -0.05333520075002511, -0.009058129011089086, 0.03326143732960902, 0.037085132807652035, 0.039742257025104845, 0.10959235886058834, -0.036734773756848985, 0.14155042602872425], [-0.08064621345854592, 0.1338482556243311, 0.2349562969423629, 0.22461661886403744, 1.0, 0.1104787848209425, 0.37999964372518585, 0.3308937525693886, 0.07618343492254345, 0.12728112243009232, 0.15161314374064744, 0.021673787122973156, 0.15310687305657059, 0.11694244891231767, 0.07450128563950205, -0.03515936627249674, 0.01768158180316134, -0.08894441418828807, -0.036496579523948004, -0.10712548303249235, -0.05432600586499609, 0.09001582313311868, -0.08475365597672183, -0.02739982574935337, 0.19358945773047623, 0.1420681870096759, 0.0629691850173124, -0.07251402017199142, -0.05424566392781, 0.03930753551710786, -0.1311217166055545, -0.12281708509429726, 0.10635148464676646], [-0.008231422610758373, 0.27616121790983095, 0.1571306590234253, 0.15491343507839686, 0.1104787848209425, 0.9999999999999999, 0.12421658289459549, 0.3076241403998134, 0.3159656519066389, 0.16463714969349028, -0.03638809470566236, 0.19610733958852256, 0.1011515198276416, 0.33211590250165096, 0.07789735598867864, 0.13510646708382373, 0.033841070789849007, 0.04139388649427047, 0.13229558800724692, 0.048468588639443096, -0.0673162943523282, 0.15732723573936483, 0.008511329211922429, 0.12213470202343873, -0.0752664295251149, 0.06427665753228026, 0.26985168935240295, -0.03388441818085012, -0.04619943275410352, -0.20823682292525156, -0.14632465426285257, -0.18828635202250169, 0.3468277817199249], [-0.2604022246131281, 0.11714337061881143, 0.357317315901491, 0.14025762973796907, 0.37999964372518585, 0.12421658289459549, 1.0, 0.3065800287544286, 0.0864208536485125, 0.12012607584094295, 0.1446591152505409, 0.05347895057766255, 0.2389504792825137, -0.0453125079107743, -0.031046050996510352, 0.07412509946926221, -0.13711788506693748, 0.04460782890458951, 0.006043540070133161, -0.06608951017412386, 0.038367725068891294, 0.11536601044180109, 0.016581553190903844, 0.05099318482002716, 0.08275094499297879, -0.07949763945282701, 0.07582212943029713, 0.05695565799694033, -0.04917191982554658, 0.06743850100172916, -0.21891996882234183, -0.1446440716741626, -0.02089610720760513], [0.0014627563846181396, 0.43334434441563985, 0.04860500200701631, 0.1714976655986723, 0.3308937525693886, 0.3076241403998134, 0.3065800287544286, 1.0, 0.2701881212243986, 0.03778182628236466, 0.0038624011742686747, 0.09278923012508601, 0.2590236322124503, 0.28052824058889486, 0.11967380911139756, 0.03855349910770317, 0.13505261738570148, -0.3217816253383684, 0.2641716116892151, -0.11570549660473958, -0.006299908360053999, 0.16072305365068457, 0.11373317144149346, 0.16107643087069912, 0.05225221238548218, 0.21493327085384778, 0.03876923376541102, -0.16592888374582318, 0.20918827674442853, -0.13810740772777086, -0.13594608566564903, -0.06598949838346274, 0.30620731312410504], [0.10782300536093226, 0.2579701903115705, 0.16806084558647838, 0.11961813346043962, 0.07618343492254345, 0.3159656519066389, 0.0864208536485125, 0.2701881212243986, 1.0, 0.11862385201287047, 0.0012556173108644836, 0.2561955486030676, 0.1615105116946412, 0.1785391530596639, 0.028276840174057606, 0.09746461574524011, 0.08147630004584205, -0.0839674544164699, 0.17019030188122863, -0.007282243124475489, -0.15262756111906375, 0.22464654539293552, 0.10570570329673341, 0.1649243768129601, -0.003561081864107332, 0.2204604265907648, 0.16473873251196683, 0.024033244812066507, 0.16281012226082428, 0.07228468943066099, -0.009916677279349142, 0.1788302166252203, 0.2495060489238803], [-0.06097793339045393, -0.15538763130873562, 0.06841861739280022, 0.05843709184161076, 0.12728112243009232, 0.16463714969349028, 0.12012607584094295, 0.03778182628236466, 0.11862385201287047, 0.9999999999999998, 0.29468931039024576, -0.008543414355167847, -0.01181128155098857, 0.06608510826125329, 0.19321867245829363, 0.07984898431966742, -0.00720551254143763, -0.06952470802692655, 0.17815739034879643, 0.17189789462833938, -0.003937531574089488, 0.24093710774082477, 0.16385603513167787, 0.0034024075268070937, 0.004088015385117097, -0.07944385534138397, 0.15834547422927775, 0.04823675580946417, 0.14125795000692115, 0.046665314800061364, 0.06685620713496222, -0.19630140709051055, -0.014448251156277712], [0.09663022482947173, -0.05835583457006868, 0.055541853364175824, 0.020959963937405818, 0.15161314374064744, -0.03638809470566236, 0.1446591152505409, 0.0038624011742686747, 0.0012556173108644836, 0.29468931039024576, 0.9999999999999999, 0.18890182621968768, 0.10725879557984269, 0.08880491979788005, 0.09990762717200626, -0.05758023923099249, 0.21284685709201304, 0.16405552212000063, 0.2048076768807543, 0.047914237244297025, 0.06938611683601371, 0.21031821605088977, 0.09803237741871172, 0.05841417941780866, 0.04213796598209478, 0.00456989585924219, 0.2679649064488879, 0.13148302779804638, 0.13323606770655305, 0.2668186049068577, 0.042904419729096484, 0.2697086774508287, 0.0073489842479908425], [0.21804836770792216, 0.2028505961233923, 0.09383973170839105, 0.17856786191310356, 0.021673787122973156, 0.19610733958852256, 0.05347895057766255, 0.09278923012508601, 0.2561955486030676, -0.008543414355167847, 0.18890182621968768, 0.9999999999999998, 0.2908423954273898, 0.2813315574339421, 0.18605342616478818, 0.12189117938871029, 0.28952369082967383, 0.1571496551619019, 0.1867138980102517, 0.09137491841656559, 0.0037484789699599864, 0.12092671327838077, 0.21426150014860312, -0.019712161115649218, 0.12137446113033488, -0.03345982332958769, -0.011339158418110954, 0.029810065579717496, 0.15817690466650416, 0.1636314263073056, 0.09442260347730007, 0.13086751266958754, 0.030478085621318953], [0.09307384379568287, 0.08660524933774175, 0.14997634520107214, 0.19814353700914733, 0.15310687305657059, 0.1011515198276416, 0.2389504792825137, 0.2590236322124503, 0.1615105116946412, -0.01181128155098857, 0.10725879557984269, 0.2908423954273898, 1.0, 0.19429387266834278, 0.16595910200743325, 0.06451682493191081, 0.23900032097412005, 0.08353729475213108, 0.31812710893347756, 0.06456819866990371, -0.044159772291151866, 0.14087479395846017, 0.35924918313566145, 0.11289458550803463, 0.1607020498552922, 0.06953794239567511, 0.20223148599195515, -0.010599645881958558, 0.25434617137481247, -0.032943171585670145, 0.016262373551028914, -0.04146871011057359, 0.06783600776997742], [0.2807223751123406, 0.3995180270718194, -0.0020543097371340294, 0.20029747722324667, 0.11694244891231767, 0.33211590250165096, -0.0453125079107743, 0.28052824058889486, 0.1785391530596639, 0.06608510826125329, 0.08880491979788005, 0.2813315574339421, 0.19429387266834278, 1.0, 0.2225099237024359, 0.23363206593268757, 0.2349467032668664, 0.08921691600930895, 0.19926439161339563, -0.1412814072738584, -0.05008934242707216, 0.3111171381216558, 0.16916647611162353, 0.2265227791326872, -0.0903195111890817, 0.0977445812773377, 0.2452364192629588, -0.0790891383351882, 0.2133224331694179, 0.0343068504478137, 0.05989047579936407, 0.14065912670813405, 0.2942533093391011], [0.22877045913009908, -0.01503935541082954, -0.21732434516654392, 0.048230236839742285, 0.07450128563950205, 0.07789735598867864, -0.031046050996510352, 0.11967380911139756, 0.028276840174057606, 0.19321867245829363, 0.09990762717200626, 0.18605342616478818, 0.16595910200743325, 0.2225099237024359, 0.9999999999999998, 0.07813552068492317, 0.1742828294695141, 0.11962540409908584, 0.3123747951074711, 0.1876907997518816, -0.022628177316113808, 0.3329968989237075, 0.19509818003553192, 0.011096609052747659, 0.13301392239069532, 0.06564203431912335, 0.08462481292642468, 0.09451186211129212, 0.2501884431756213, 0.13916261254337778, 0.01547170848527741, 0.10091867437634013, -0.036757162958536385], [0.2911086426119686, 0.12711678115609196, 0.12487644790295815, 0.010745106627781125, -0.03515936627249674, 0.13510646708382373, 0.07412509946926221, 0.03855349910770317, 0.09746461574524011, 0.07984898431966742, -0.05758023923099249, 0.12189117938871029, 0.06451682493191081, 0.23363206593268757, 0.07813552068492317, 1.0, 0.3505953744891032, 0.2826232998376533, 0.20456866994273892, 0.35390871911255634, -0.16517366431115596, 0.2965038454174011, 0.219136448822864, 0.10133023022197665, -0.19909489348127984, -0.08234891121692205, 0.19833129189268445, 0.0640596784944958, 0.1833002198724953, -0.10334409339701281, -0.06860181211571453, 0.0029327318795723594, -0.017299328128855908], [0.33353299832232497, 0.09591015993210977, 0.15688062794306645, -0.03338860051299201, 0.01768158180316134, 0.033841070789849007, -0.13711788506693748, 0.13505261738570148, 0.08147630004584205, -0.00720551254143763, 0.21284685709201304, 0.28952369082967383, 0.23900032097412005, 0.2349467032668664, 0.1742828294695141, 0.3505953744891032, 1.0000000000000002, 0.060457036302386254, 0.4696279588533936, 0.2532371436961664, -0.13532467189129216, 0.3722621811160823, 0.40496061872849426, 0.2799775803363398, 0.0709887770136451, 0.12118721360723124, 0.1494656346435348, 0.03541709977357474, 0.5173552030878643, 0.16039798873767078, 0.12136038876298628, 0.259811272127082, -0.042130103337343086], [0.18977713737876323, -0.04958521364980644, -0.05990672857612273, 0.08955815655692682, -0.08894441418828807, 0.04139388649427047, 0.04460782890458951, -0.3217816253383684, -0.0839674544164699, -0.06952470802692655, 0.16405552212000063, 0.1571496551619019, 0.08353729475213108, 0.08921691600930895, 0.11962540409908584, 0.2826232998376533, 0.060457036302386254, 1.0, 0.02488970578654582, 0.13875325706836675, -0.032506400088000514, -0.0459688489789077, 0.03542133444803656, 0.022343686267427568, 0.0036633221606279798, -0.09415809902866247, 0.19597142254663416, 0.1959004580355506, -0.07803495577025699, 0.11079661698892351, 0.12183869057779287, 0.024507673275767757, 0.01970573032498461], [0.18777081975125504, 0.1852021993440894, -0.01874704636534475, -0.22537429042132923, -0.036496579523948004, 0.13229558800724692, 0.006043540070133161, 0.2641716116892151, 0.17019030188122863, 0.17815739034879643, 0.2048076768807543, 0.1867138980102517, 0.31812710893347756, 0.19926439161339563, 0.3123747951074711, 0.20456866994273892, 0.4696279588533936, 0.02488970578654582, 1.0, 0.1350881744039036, -0.027381798437087577, 0.3996485737562426, 0.3349474903608808, 0.11013575837686264, 0.04682779753865978, 0.21354359979225065, 0.331462844912582, 0.059862444464518154, 0.34090678682155623, 0.0980295702708871, 0.05331379028813913, 0.2388296526602144, -0.048025060501765714], [0.23418225609618656, -0.15700648546982512, 0.1806083170172237, -0.056303253190159074, -0.10712548303249235, 0.048468588639443096, -0.06608951017412386, -0.11570549660473958, -0.007282243124475489, 0.17189789462833938, 0.047914237244297025, 0.09137491841656559, 0.06456819866990371, -0.1412814072738584, 0.1876907997518816, 0.35390871911255634, 0.2532371436961664, 0.13875325706836675, 0.1350881744039036, 1.0, 0.010600335741460852, 0.19247787594389115, 0.21106323092359305, -0.04125839235348496, -0.18901142754833153, -0.05371574894960068, 0.17734196301896774, 0.20406176469262632, 0.12640994977367834, 0.026323998382626126, 0.040758170893464146, 0.05844478603041064, -0.24010081497542415], [0.03622304292790607, 0.04068579297641773, -0.06823830944250463, 0.05935012732183572, -0.05432600586499609, -0.0673162943523282, 0.038367725068891294, -0.006299908360053999, -0.15262756111906375, -0.003937531574089488, 0.06938611683601371, 0.0037484789699599864, -0.044159772291151866, -0.05008934242707216, -0.022628177316113808, -0.16517366431115596, -0.13532467189129216, -0.032506400088000514, -0.027381798437087577, 0.010600335741460852, 0.9999999999999999, -0.1705028886695044, -0.10638461423360826, -0.05816393266485097, -0.03633869376105292, -0.08565073900983038, 0.05628437129977992, -0.13572195880767768, -0.15677072839615805, 0.04347881982513088, -0.0069703775779697665, 0.07251148160867077, 0.16173776227003728], [0.12872750616463122, 0.28072511634353253, 0.09109768167010239, -0.121475681624845, 0.09001582313311868, 0.15732723573936483, 0.11536601044180109, 0.16072305365068457, 0.22464654539293552, 0.24093710774082477, 0.21031821605088977, 0.12092671327838077, 0.14087479395846017, 0.3111171381216558, 0.3329968989237075, 0.2965038454174011, 0.3722621811160823, -0.0459688489789077, 0.3996485737562426, 0.19247787594389115, -0.1705028886695044, 1.0, 0.2516863956538634, 0.23494809274861816, 0.06766165081045639, 0.10793483738706987, 0.16173329139584533, 0.11265776942984707, 0.3480741429260839, 0.1816151646675099, -0.06407887056442849, 0.1838814532033086, -0.11887787079416062], [0.08669839857820927, 0.021272710934683553, 0.048425275131142004, 0.00013152732757207273, -0.08475365597672183, 0.008511329211922429, 0.016581553190903844, 0.11373317144149346, 0.10570570329673341, 0.16385603513167787, 0.09803237741871172, 0.21426150014860312, 0.35924918313566145, 0.16916647611162353, 0.19509818003553192, 0.219136448822864, 0.40496061872849426, 0.03542133444803656, 0.3349474903608808, 0.21106323092359305, -0.10638461423360826, 0.2516863956538634, 1.0, 0.10738817361994633, 0.16644211471794657, 0.14438694320643905, 0.25796950259831364, 0.0017280803824311882, 0.6441907109115177, 0.1824037823829692, 0.11821841140715587, 0.1335147508837502, -0.09138204260052019], [0.1300446980589348, 0.19836793672546435, 0.12710439407805033, 0.02911405691278191, -0.02739982574935337, 0.12213470202343873, 0.05099318482002716, 0.16107643087069912, 0.1649243768129601, 0.0034024075268070937, 0.05841417941780866, -0.019712161115649218, 0.11289458550803463, 0.2265227791326872, 0.011096609052747659, 0.10133023022197665, 0.2799775803363398, 0.022343686267427568, 0.11013575837686264, -0.04125839235348496, -0.05816393266485097, 0.23494809274861816, 0.10738817361994633, 1.0, -0.07196838131375251, 0.037776666757481536, 0.21047393275353649, 0.08722147294444048, 0.1388802892083863, -0.02034009702238012, -0.19845504800347216, 0.009605137238142821, 0.28327686996354373], [-0.02930250955595317, -0.09890186501348604, -0.011004823200881635, -0.00223694508857902, 0.19358945773047623, -0.0752664295251149, 0.08275094499297879, 0.05225221238548218, -0.003561081864107332, 0.004088015385117097, 0.04213796598209478, 0.12137446113033488, 0.1607020498552922, -0.0903195111890817, 0.13301392239069532, -0.19909489348127984, 0.0709887770136451, 0.0036633221606279798, 0.04682779753865978, -0.18901142754833153, -0.03633869376105292, 0.06766165081045639, 0.16644211471794657, -0.07196838131375251, 1.0, 0.4625514616423477, -0.024932887035093537, -0.08116231457910004, 0.13815383173648146, 0.0337735625415406, -0.0698163141545291, -0.19520185695378003, -0.058304135794031646], [0.13871156521393008, 0.1576757440494682, -0.03445139993063713, -0.05333520075002511, 0.1420681870096759, 0.06427665753228026, -0.07949763945282701, 0.21493327085384778, 0.2204604265907648, -0.07944385534138397, 0.00456989585924219, -0.03345982332958769, 0.06953794239567511, 0.0977445812773377, 0.06564203431912335, -0.08234891121692205, 0.12118721360723124, -0.09415809902866247, 0.21354359979225065, -0.05371574894960068, -0.08565073900983038, 0.10793483738706987, 0.14438694320643905, 0.037776666757481536, 0.4625514616423477, 1.0, 0.28707663397132527, -0.05287022909911641, 0.25175619495237445, 0.018656062953378256, -0.018712016300888517, -0.04273892725969135, 0.05899776558479187], [0.18440734828987396, 0.020122910812174388, 0.011118510538960328, -0.009058129011089086, 0.0629691850173124, 0.26985168935240295, 0.07582212943029713, 0.03876923376541102, 0.16473873251196683, 0.15834547422927775, 0.2679649064488879, -0.011339158418110954, 0.20223148599195515, 0.2452364192629588, 0.08462481292642468, 0.19833129189268445, 0.1494656346435348, 0.19597142254663416, 0.331462844912582, 0.17734196301896774, 0.05628437129977992, 0.16173329139584533, 0.25796950259831364, 0.21047393275353649, -0.024932887035093537, 0.28707663397132527, 1.0, 0.14912441608315768, 0.12601171277746578, 0.08698621381878449, -0.005752548981656646, 0.022484358042098897, 0.2857346611209862], [0.12222421666264674, -0.10995202548528993, -0.04077639965198121, 0.03326143732960902, -0.07251402017199142, -0.03388441818085012, 0.05695565799694033, -0.16592888374582318, 0.024033244812066507, 0.04823675580946417, 0.13148302779804638, 0.029810065579717496, -0.010599645881958558, -0.0790891383351882, 0.09451186211129212, 0.0640596784944958, 0.03541709977357474, 0.1959004580355506, 0.059862444464518154, 0.20406176469262632, -0.13572195880767768, 0.11265776942984707, 0.0017280803824311882, 0.08722147294444048, -0.08116231457910004, -0.05287022909911641, 0.14912441608315768, 1.0, 0.0644315381794212, 0.12669057653990906, 0.06410131365807568, -0.024052280835350923, -0.254588285148522], [0.19465050316727478, 0.06760262574756148, -0.020517492373485175, 0.037085132807652035, -0.05424566392781, -0.04619943275410352, -0.04917191982554658, 0.20918827674442853, 0.16281012226082428, 0.14125795000692115, 0.13323606770655305, 0.15817690466650416, 0.25434617137481247, 0.2133224331694179, 0.2501884431756213, 0.1833002198724953, 0.5173552030878643, -0.07803495577025699, 0.34090678682155623, 0.12640994977367834, -0.15677072839615805, 0.3480741429260839, 0.6441907109115177, 0.1388802892083863, 0.13815383173648146, 0.25175619495237445, 0.12601171277746578, 0.0644315381794212, 1.0, 0.2135539751619078, 0.11378926154081405, 0.2551592359727782, -0.06672452911779529], [0.0240984134048007, -0.1361827082378763, 0.09743969667990703, 0.039742257025104845, 0.03930753551710786, -0.20823682292525156, 0.06743850100172916, -0.13810740772777086, 0.07228468943066099, 0.046665314800061364, 0.2668186049068577, 0.1636314263073056, -0.032943171585670145, 0.0343068504478137, 0.13916261254337778, -0.10334409339701281, 0.16039798873767078, 0.11079661698892351, 0.0980295702708871, 0.026323998382626126, 0.04347881982513088, 0.1816151646675099, 0.1824037823829692, -0.02034009702238012, 0.0337735625415406, 0.018656062953378256, 0.08698621381878449, 0.12669057653990906, 0.2135539751619078, 0.9999999999999998, 0.1526787730044944, 0.32253488126928564, -0.2320386518174566], [0.26135291645832376, -0.05416106317842894, -0.04466385253564033, 0.10959235886058834, -0.1311217166055545, -0.14632465426285257, -0.21891996882234183, -0.13594608566564903, -0.009916677279349142, 0.06685620713496222, 0.042904419729096484, 0.09442260347730007, 0.016262373551028914, 0.05989047579936407, 0.01547170848527741, -0.06860181211571453, 0.12136038876298628, 0.12183869057779287, 0.05331379028813913, 0.040758170893464146, -0.0069703775779697665, -0.06407887056442849, 0.11821841140715587, -0.19845504800347216, -0.0698163141545291, -0.018712016300888517, -0.005752548981656646, 0.06410131365807568, 0.11378926154081405, 0.1526787730044944, 1.0, 0.36930474985124795, -0.16921571024339935], [0.3722236480133508, 0.08396111295221932, -0.04013551209783029, -0.036734773756848985, -0.12281708509429726, -0.18828635202250169, -0.1446440716741626, -0.06598949838346274, 0.1788302166252203, -0.19630140709051055, 0.2697086774508287, 0.13086751266958754, -0.04146871011057359, 0.14065912670813405, 0.10091867437634013, 0.0029327318795723594, 0.259811272127082, 0.024507673275767757, 0.2388296526602144, 0.05844478603041064, 0.07251148160867077, 0.1838814532033086, 0.1335147508837502, 0.009605137238142821, -0.19520185695378003, -0.04273892725969135, 0.022484358042098897, -0.024052280835350923, 0.2551592359727782, 0.32253488126928564, 0.36930474985124795, 1.0, -0.06318820766440233], [0.03781492770689288, 0.25314737458333236, -0.0778071241734556, 0.14155042602872425, 0.10635148464676646, 0.3468277817199249, -0.02089610720760513, 0.30620731312410504, 0.2495060489238803, -0.014448251156277712, 0.0073489842479908425, 0.030478085621318953, 0.06783600776997742, 0.2942533093391011, -0.036757162958536385, -0.017299328128855908, -0.042130103337343086, 0.01970573032498461, -0.048025060501765714, -0.24010081497542415, 0.16173776227003728, -0.11887787079416062, -0.09138204260052019, 0.28327686996354373, -0.058304135794031646, 0.05899776558479187, 0.2857346611209862, -0.254588285148522, -0.06672452911779529, -0.2320386518174566, -0.16921571024339935, -0.06318820766440233, 0.9999999999999999]]';

export default SIMMAT;