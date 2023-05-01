// Sim Mat of 50 Vec, 200 Epochs

const NRSIMMAT_02 = [[1.0000000000000002, -0.07664339381557861, -0.2064869395747222, 0.06976295920590585, -0.2608587809401185, -0.03677330002071415, -0.24630999840253487, -0.08314194177186951, 0.05696040283776634, 0.287485222581938, 0.1307714312107243, 0.1572948253217613, 0.06422529875477426, 0.12068034108693222, 0.2709184306541833, -0.042018958557216164, -0.059126010189257026, -0.0009145846684436797, -0.2479177543152229, 0.3016294704422148, 0.3333084400325363, 0.006290294550555815, 0.20971380840230106, 0.04584322261859932, -0.1252657311891833, -0.12453337274526716, 0.041518597960031864, 0.1612786267229198, 0.1989287670322757, 0.263393971375375, 0.17416652453565268, 0.30153624646300115, -0.12516340404761225], [-0.07664339381557861, 1.0, -0.015545738148573, -0.009463902984333462, 0.2112322104266203, 0.0053249059754486685, 0.3331219357998871, 0.4008093908141516, 0.22955596819930582, -0.02432070642535009, 0.07323662249886054, 0.010014675234314986, -0.1064948373776069, 0.2665023217960134, -0.23078868718532058, -0.01963192876318322, -0.29914654586856315, 0.08447674460382651, 0.1441655996779436, -0.3041723281807922, 0.08926859324754005, 0.19616693076356226, -0.3642851500054879, 0.02716181811845131, 0.3176333763921243, 0.2727564362043195, 0.14384912099513894, 0.0985083258491293, -0.007443080060996019, -0.0377822361978538, -0.003123308456034078, -0.08012969451645487, -0.012815807856575098], [-0.2064869395747222, -0.015545738148573, 1.0, 0.2927196952644592, 0.1384371502066791, 0.21424464823328612, 0.4395619816079293, -0.00974440446807858, 0.29529810894941055, -0.040738432656232774, 0.22376445911576018, 0.3487273356599143, 0.23996898663467203, 0.03323668927413041, 0.020285890656362746, -0.0362182347865797, 0.20366956968097147, -0.029598486158859908, -0.0336953451288706, 0.08376948216326671, -0.018066667297024875, -0.02327106634232321, 0.08871275883843796, 0.24375509980590648, 0.10816487641039849, 0.07214798186460442, 0.06613790172479765, -0.14915381025637842, -0.1271912577322561, 0.11457651370970491, 0.06144737284746036, 0.021671998388951428, -0.09897765955937449], [0.06976295920590585, -0.009463902984333462, 0.2927196952644592, 0.9999999999999998, 0.20280420564031584, 0.3814766217547952, 0.24457169811791882, 0.16059641886650344, 0.1763468574989086, -0.08526934576151408, 0.11658572822966465, 0.21212708766883753, 0.2871342267234103, 0.13215497949979832, -0.010160135159895927, -0.07602860565686945, 0.10220080091316382, -0.0075395236048926995, -0.15145316269188505, 0.03229758364948463, 0.22963639167790328, -0.028526581892651306, -0.03618419018300396, 0.008760194309093442, 0.03858903486921459, 0.0733843214274414, 0.1420801290687251, -0.007445358811149756, -0.1552959975300034, -0.10671865391718802, 0.10330004459356645, -0.20023380088708684, 0.06826338309959097], [-0.2608587809401185, 0.2112322104266203, 0.1384371502066791, 0.20280420564031584, 1.0, 0.09494377093592019, 0.3370815973560721, 0.19180017460520263, 0.02074596929042634, 0.21114526387453633, 0.1810422128552738, 0.06757733719106886, 0.07301667086012129, -0.06368783556807714, -0.11233158415798165, 0.19950507499702114, 0.049490747575445505, -0.026426953246558242, 0.0754430392280096, -0.09243679861724793, 0.0007458820368844802, 0.07600074814423907, 0.03940440965855041, -0.017240587603345046, 0.20259723507523567, -0.08033511638083889, 0.14093519209124042, -0.15941612176961945, -0.13555788343525876, -0.007801934860499447, -0.246544599578744, -0.11419730935722686, 0.08889108895015678], [-0.03677330002071415, 0.0053249059754486685, 0.21424464823328612, 0.3814766217547952, 0.09494377093592019, 1.0, 0.20742066445941068, 0.34970476692204394, 0.21706351327738882, -0.09317184902409655, -0.10434848290707102, 0.16161901404779078, 0.21938679441626346, 0.28740197969649117, -0.09369047089330619, 0.06757780913634856, 0.03577015978813298, -0.03953348334620061, -0.09529848371229793, 0.07310246904149714, 0.13886825472403003, -0.06980488097263572, -0.05758391698745009, -0.01083093874971166, -0.14090240258215114, 0.11851674360858316, 0.33208201294239365, 0.2608496212428389, 0.12063766610909893, -0.18663372741116943, -0.20550157098068997, -0.19855234872188973, 0.27449714490199917], [-0.24630999840253487, 0.3331219357998871, 0.4395619816079293, 0.24457169811791882, 0.3370815973560721, 0.20742066445941068, 1.0000000000000002, 0.1807360565404234, 0.10795898396751905, 0.07188436464023486, 0.04731778954997128, 0.1571418536961542, 0.2377829458337421, 0.11593207261160814, -0.01273283132453789, 0.03858434226385951, -0.009665348204982794, 0.09217984854437956, 0.06338038559188043, -0.2448545864691986, 0.01825197280267636, 0.22224622425573526, -0.08274753477198743, 0.1772339007376501, 0.14060356692448267, 0.028489940196742655, 0.19021203802228626, 0.020091289163911463, -0.14484365690870074, 0.08486906603700371, -0.08500326751937488, -0.11207166545858234, -0.0178226397717175], [-0.08314194177186951, 0.4008093908141516, -0.00974440446807858, 0.16059641886650344, 0.19180017460520263, 0.34970476692204394, 0.1807360565404234, 1.0, 0.2745737788740091, -0.004739507357895017, 0.04626874565412592, 0.06878485245896895, 0.19440171583100466, 0.3058154300394532, -0.06624393726785897, 0.061488368051021244, -0.11321942960449323, -0.15307298761688498, 0.4932976218845278, -0.15198141239290802, 0.04121166564837993, 0.22463587809396598, -0.21741062079499154, 0.11110480710819956, -0.07381685571560694, 0.005096109116866867, 0.26290904623145817, 0.32594865204605467, 0.03244173789256122, -0.18914170333763772, -0.1827948523970365, -0.04094922856127301, 0.38438346701319126], [0.05696040283776634, 0.22955596819930582, 0.29529810894941055, 0.1763468574989086, 0.02074596929042634, 0.21706351327738882, 0.10795898396751905, 0.2745737788740091, 0.9999999999999999, 0.08735658075192282, 0.31810376898196974, 0.1888330762668967, 0.11887500775872814, 0.14938466105997397, -0.025864479922851943, -0.036366802959522215, 0.10722802403065924, 0.004083479307389625, 0.09823913959843375, 0.185164754847276, 0.1250976471880603, 0.2621582185195263, -0.005470192381261173, 0.21898790224770123, 0.04229014700492684, 0.4179313182110147, 0.22039989727734918, 0.026585093215191966, 0.05316622158815375, 0.17400932063362382, 0.08802737079450469, 0.3050217084862249, -0.04275531072391267], [0.287485222581938, -0.02432070642535009, -0.040738432656232774, -0.08526934576151408, 0.21114526387453633, -0.09317184902409655, 0.07188436464023486, -0.004739507357895017, 0.08735658075192282, 0.9999999999999999, 0.4673273683748372, 0.09361298199041648, 0.011249686416725909, 0.0379031240611958, 0.1690273872839035, 0.2371845874362643, 0.2244233634455644, 0.12155242291009237, 0.09192815412602463, -0.06682942738023943, 0.05416494668888376, 0.12359403532842202, 0.05298072805915614, 0.17226958244441642, 0.060338870871697176, -0.09145339937941091, 0.18134450180002876, -0.03925022999814403, 0.17315557702950482, 0.1363165669196457, -0.0464562633552434, 0.167158338047356, 0.1401869432198713], [0.1307714312107243, 0.07323662249886054, 0.22376445911576018, 0.11658572822966465, 0.1810422128552738, -0.10434848290707102, 0.04731778954997128, 0.04626874565412592, 0.31810376898196974, 0.4673273683748372, 1.0, 0.25983990438009286, 0.04716195967410056, 0.30861160171612534, 0.13419646141791589, 0.3365113137251609, 0.2570509962169052, 0.3141383824299959, 0.11748528668081752, 0.019037497799258153, 0.20911772761089642, 0.32631478917541834, 0.09898913016401757, 0.18236506917889964, 0.1442466684826659, 0.14335355588175566, 0.39009128631102846, -0.15121915441804554, 0.08099952818329477, 0.368326888631166, 0.16712443667408905, 0.1891943359834093, -0.0500226946031589], [0.1572948253217613, 0.010014675234314986, 0.3487273356599143, 0.21212708766883753, 0.06757733719106886, 0.16161901404779078, 0.1571418536961542, 0.06878485245896895, 0.1888330762668967, 0.09361298199041648, 0.25983990438009286, 1.0000000000000002, 0.39317637997523947, 0.2243749135716054, 0.19087489298829347, 0.029534320727547296, 0.10285661165159773, 0.17975126292685317, 0.010681589844203754, 0.019209061628640743, 0.051829476299451074, 0.14084194771653755, 0.2693230735096559, 0.25213735109203705, 0.2688890112032204, -0.05405808577907148, 0.23007042016278684, 0.0541221165549558, 0.02213054625068724, 0.13264794097799978, 0.11762882537135355, 0.049872409713465994, 0.056354683226162966], [0.06422529875477426, -0.1064948373776069, 0.23996898663467203, 0.2871342267234103, 0.07301667086012129, 0.21938679441626346, 0.2377829458337421, 0.19440171583100466, 0.11887500775872814, 0.011249686416725909, 0.04716195967410056, 0.39317637997523947, 1.0, 0.30922912225705484, 0.1847348801762298, 0.11117160596011036, 0.07971435471936313, 0.03388872511624699, -0.06183333531383302, -0.07579675618416422, -0.034637668500436716, 0.07113898336060383, 0.2361113608808055, 0.20042907183866965, 0.06270014198444498, 0.0936099821652311, 0.2450200252837709, 0.4362866601895161, 0.12903508429715022, 0.015521191140584485, -0.0020373198344655875, -0.025835338416798685, 0.10768521748425391], [0.12068034108693222, 0.2665023217960134, 0.03323668927413041, 0.13215497949979832, -0.06368783556807714, 0.28740197969649117, 0.11593207261160814, 0.3058154300394532, 0.14938466105997397, 0.0379031240611958, 0.30861160171612534, 0.2243749135716054, 0.30922912225705484, 1.0, 0.1485829386843266, 0.36153956184464703, -0.02913037774451368, 0.1097410441625732, -0.04317631383911807, -0.15571949321030515, -0.06656529492873979, 0.3872912426333332, -0.06292476267055563, 0.21896852689398802, 0.14169935775179657, 0.3351106223729885, 0.4945438152910346, 0.3185396380511163, 0.0878059169344714, 0.243961543476823, 0.014839706434404826, 0.018242611243511547, 0.3267245088511311], [0.2709184306541833, -0.23078868718532058, 0.020285890656362746, -0.010160135159895927, -0.11233158415798165, -0.09369047089330619, -0.01273283132453789, -0.06624393726785897, -0.025864479922851943, 0.1690273872839035, 0.13419646141791589, 0.19087489298829347, 0.1847348801762298, 0.1485829386843266, 1.0, 0.2587450296210315, 0.21653462266937587, 0.012659580370267343, 0.12788343074116265, 0.3735502705197147, 0.13523405576804062, 0.2165997545901196, 0.41940879611148485, 0.04001596715437509, 0.05177087637069432, -0.1273567008689715, 0.01906668951774354, 0.12619346925908503, 0.3152586935357776, 0.22803441734596208, -0.022866019517991082, 0.1378157613060804, -0.14599716875490978], [-0.042018958557216164, -0.01963192876318322, -0.0362182347865797, -0.07602860565686945, 0.19950507499702114, 0.06757780913634856, 0.03858434226385951, 0.061488368051021244, -0.036366802959522215, 0.2371845874362643, 0.3365113137251609, 0.029534320727547296, 0.11117160596011036, 0.36153956184464703, 0.2587450296210315, 1.0000000000000002, 0.34207937152209067, 0.45905137459360534, 0.20998737530659298, 0.16346134333827225, 0.255292000829505, 0.267358719070556, 0.26051602441436117, 0.26148317377713315, -0.11580888767439061, -0.024778865594383703, 0.27592949483881746, 0.09785779468374972, 0.2619220597672106, 0.07838395128166141, -0.04096471640304905, 0.011635808584543089, 0.2188982969022677], [-0.059126010189257026, -0.29914654586856315, 0.20366956968097147, 0.10220080091316382, 0.049490747575445505, 0.03577015978813298, -0.009665348204982794, -0.11321942960449323, 0.10722802403065924, 0.2244233634455644, 0.2570509962169052, 0.10285661165159773, 0.07971435471936313, -0.02913037774451368, 0.21653462266937587, 0.34207937152209067, 0.9999999999999999, 0.35286000054851563, -0.061634674229141206, 0.37202480303091384, 0.14616889501935257, 0.09318360719083607, 0.3643233824055568, 0.4618675692118146, -0.21339445541569074, -0.13056301262610043, -0.024245715272653158, -0.2988039785881794, 0.07142731153185068, 0.1697510108617111, 0.02798564037783804, -0.003059224759500868, 0.1474414064900314], [-0.0009145846684436797, 0.08447674460382651, -0.029598486158859908, -0.0075395236048926995, -0.026426953246558242, -0.03953348334620061, 0.09217984854437956, -0.15307298761688498, 0.004083479307389625, 0.12155242291009237, 0.3141383824299959, 0.17975126292685317, 0.03388872511624699, 0.1097410441625732, 0.012659580370267343, 0.45905137459360534, 0.35286000054851563, 1.0, 0.06240083412483987, 0.10372948697231275, 0.23768190006185314, 0.10155851112676503, 0.20968754203399387, 0.31921056177492385, -0.1296159757673664, -0.02339165595072792, 0.2380583666750018, 0.01704795292053777, 0.035536401713876266, 0.0506037900885311, 0.1413127549327589, -0.09156831667450822, 0.09643040466443878], [-0.2479177543152229, 0.1441655996779436, -0.0336953451288706, -0.15145316269188505, 0.0754430392280096, -0.09529848371229793, 0.06338038559188043, 0.4932976218845278, 0.09823913959843375, 0.09192815412602463, 0.11748528668081752, 0.010681589844203754, -0.06183333531383302, -0.04317631383911807, 0.12788343074116265, 0.20998737530659298, -0.061634674229141206, 0.06240083412483987, 1.0, 0.019109995133994778, -0.11212452870727908, 0.3295521121812535, -0.0405121063656312, -0.01520787766169181, 0.012743119160972493, -0.042565770199800616, 0.08728696392499637, 0.18866197009503, 0.14838469422091485, 0.04845378835887409, 0.14200549450997993, 0.11444478773458068, -0.019735612722372023], [0.3016294704422148, -0.3041723281807922, 0.08376948216326671, 0.03229758364948463, -0.09243679861724793, 0.07310246904149714, -0.2448545864691986, -0.15198141239290802, 0.185164754847276, -0.06682942738023943, 0.019037497799258153, 0.019209061628640743, -0.07579675618416422, -0.15571949321030515, 0.3735502705197147, 0.16346134333827225, 0.37202480303091384, 0.10372948697231275, 0.019109995133994778, 0.9999999999999999, 0.1922809169474607, 0.0023977753934744162, 0.42725366900949047, 0.013645815228720933, -0.37090695983531113, -0.054084105340436325, 0.06225857176892039, -0.0878050610648805, 0.025262459592396518, 0.28386776869616803, 0.08149209422815683, 0.2509641233698451, -0.35599081409017924], [0.3333084400325363, 0.08926859324754005, -0.018066667297024875, 0.22963639167790328, 0.0007458820368844802, 0.13886825472403003, 0.01825197280267636, 0.04121166564837993, 0.1250976471880603, 0.05416494668888376, 0.20911772761089642, 0.051829476299451074, -0.034637668500436716, -0.06656529492873979, 0.13523405576804062, 0.255292000829505, 0.14616889501935257, 0.23768190006185314, -0.11212452870727908, 0.1922809169474607, 1.0, 0.07002894177785994, 0.09346824357974526, 0.04982268132995621, -0.25812945748685134, -0.1525946345462543, 0.09868094879815949, 0.16282350525932693, 0.322255770908243, 0.07130500346424569, -0.03314862821823726, -0.006445615101694452, -0.08926979588456425], [0.006290294550555815, 0.19616693076356226, -0.02327106634232321, -0.028526581892651306, 0.07600074814423907, -0.06980488097263572, 0.22224622425573526, 0.22463587809396598, 0.2621582185195263, 0.12359403532842202, 0.32631478917541834, 0.14084194771653755, 0.07113898336060383, 0.3872912426333332, 0.2165997545901196, 0.267358719070556, 0.09318360719083607, 0.10155851112676503, 0.3295521121812535, 0.0023977753934744162, 0.07002894177785994, 1.0, 0.0794422753713771, 0.13824318250204015, 0.11610075180942543, 0.16208833357583324, 0.2755511257346257, 0.21112108256787943, 0.28246996498642224, 0.2231897166934787, -0.07882267026397834, 0.1780465055766592, -0.1560879842088416], [0.20971380840230106, -0.3642851500054879, 0.08871275883843796, -0.03618419018300396, 0.03940440965855041, -0.05758391698745009, -0.08274753477198743, -0.21741062079499154, -0.005470192381261173, 0.05298072805915614, 0.09898913016401757, 0.2693230735096559, 0.2361113608808055, -0.06292476267055563, 0.41940879611148485, 0.26051602441436117, 0.3643233824055568, 0.20968754203399387, -0.0405121063656312, 0.42725366900949047, 0.09346824357974526, 0.0794422753713771, 1.0, 0.0703293137275441, -0.004943616277054006, -0.31197909945839264, -0.03466817079476865, 0.015847439564552906, 0.15641593736019707, 0.1807295261625959, 0.10993756110142408, 0.23402166233925265, -0.12754984635309063], [0.04584322261859932, 0.02716181811845131, 0.24375509980590648, 0.008760194309093442, -0.017240587603345046, -0.01083093874971166, 0.1772339007376501, 0.11110480710819956, 0.21898790224770123, 0.17226958244441642, 0.18236506917889964, 0.25213735109203705, 0.20042907183866965, 0.21896852689398802, 0.04001596715437509, 0.26148317377713315, 0.4618675692118146, 0.31921056177492385, -0.01520787766169181, 0.013645815228720933, 0.04982268132995621, 0.13824318250204015, 0.0703293137275441, 1.0000000000000002, -0.009413787585651208, 0.11951916536639913, 0.23141372425868847, -0.01127256247212691, 0.05833546790675668, 0.12524687186702818, -0.0015564021127638596, -0.1345736828043314, 0.2970817965631545], [-0.1252657311891833, 0.3176333763921243, 0.10816487641039849, 0.03858903486921459, 0.20259723507523567, -0.14090240258215114, 0.14060356692448267, -0.07381685571560694, 0.04229014700492684, 0.060338870871697176, 0.1442466684826659, 0.2688890112032204, 0.06270014198444498, 0.14169935775179657, 0.05177087637069432, -0.11580888767439061, -0.21339445541569074, -0.1296159757673664, 0.012743119160972493, -0.37090695983531113, -0.25812945748685134, 0.11610075180942543, -0.004943616277054006, -0.009413787585651208, 1.0, 0.3710928304565247, 0.13922911571194552, -0.03400279274517474, -0.002036446346176635, -0.057034384730913844, 0.0007720653089942003, -0.23640179737046305, 0.07850584577901643], [-0.12453337274526716, 0.2727564362043195, 0.07214798186460442, 0.0733843214274414, -0.08033511638083889, 0.11851674360858316, 0.028489940196742655, 0.005096109116866867, 0.4179313182110147, -0.09145339937941091, 0.14335355588175566, -0.05405808577907148, 0.0936099821652311, 0.3351106223729885, -0.1273567008689715, -0.024778865594383703, -0.13056301262610043, -0.02339165595072792, -0.042565770199800616, -0.054084105340436325, -0.1525946345462543, 0.16208833357583324, -0.31197909945839264, 0.11951916536639913, 0.3710928304565247, 1.0, 0.30170828207646855, 0.15566183451523646, 0.03975879106875107, 0.15344429229154558, -0.03268615274371225, -0.06043383268151209, -0.015915044835748453], [0.041518597960031864, 0.14384912099513894, 0.06613790172479765, 0.1420801290687251, 0.14093519209124042, 0.33208201294239365, 0.19021203802228626, 0.26290904623145817, 0.22039989727734918, 0.18134450180002876, 0.39009128631102846, 0.23007042016278684, 0.2450200252837709, 0.4945438152910346, 0.01906668951774354, 0.27592949483881746, -0.024245715272653158, 0.2380583666750018, 0.08728696392499637, 0.06225857176892039, 0.09868094879815949, 0.2755511257346257, -0.03466817079476865, 0.23141372425868847, 0.13922911571194552, 0.30170828207646855, 1.0, 0.33178617952905065, 0.08221845021952612, 0.19363608495191242, -0.12460135847970492, -0.12753036281439106, 0.18304090152055108], [0.1612786267229198, 0.0985083258491293, -0.14915381025637842, -0.007445358811149756, -0.15941612176961945, 0.2608496212428389, 0.020091289163911463, 0.32594865204605467, 0.026585093215191966, -0.03925022999814403, -0.15121915441804554, 0.0541221165549558, 0.4362866601895161, 0.3185396380511163, 0.12619346925908503, 0.09785779468374972, -0.2988039785881794, 0.01704795292053777, 0.18866197009503, -0.0878050610648805, 0.16282350525932693, 0.21112108256787943, 0.015847439564552906, -0.01127256247212691, -0.03400279274517474, 0.15566183451523646, 0.33178617952905065, 1.0, 0.4852273770817564, -0.07133252660967007, -0.20286541705032604, -0.002875134919813991, 0.22193314157184366], [0.1989287670322757, -0.007443080060996019, -0.1271912577322561, -0.1552959975300034, -0.13555788343525876, 0.12063766610909893, -0.14484365690870074, 0.03244173789256122, 0.05316622158815375, 0.17315557702950482, 0.08099952818329477, 0.02213054625068724, 0.12903508429715022, 0.0878059169344714, 0.3152586935357776, 0.2619220597672106, 0.07142731153185068, 0.035536401713876266, 0.14838469422091485, 0.025262459592396518, 0.322255770908243, 0.28246996498642224, 0.15641593736019707, 0.05833546790675668, -0.002036446346176635, 0.03975879106875107, 0.08221845021952612, 0.4852273770817564, 1.0000000000000002, 0.056853363073782824, -0.015105595552630033, 0.2370046046202549, -0.028797094600100274], [0.263393971375375, -0.0377822361978538, 0.11457651370970491, -0.10671865391718802, -0.007801934860499447, -0.18663372741116943, 0.08486906603700371, -0.18914170333763772, 0.17400932063362382, 0.1363165669196457, 0.368326888631166, 0.13264794097799978, 0.015521191140584485, 0.243961543476823, 0.22803441734596208, 0.07838395128166141, 0.1697510108617111, 0.0506037900885311, 0.04845378835887409, 0.28386776869616803, 0.07130500346424569, 0.2231897166934787, 0.1807295261625959, 0.12524687186702818, -0.057034384730913844, 0.15344429229154558, 0.19363608495191242, -0.07133252660967007, 0.056853363073782824, 0.9999999999999999, 0.2679200010226773, 0.4979156321440662, -0.34465138512787014], [0.17416652453565268, -0.003123308456034078, 0.06144737284746036, 0.10330004459356645, -0.246544599578744, -0.20550157098068997, -0.08500326751937488, -0.1827948523970365, 0.08802737079450469, -0.0464562633552434, 0.16712443667408905, 0.11762882537135355, -0.0020373198344655875, 0.014839706434404826, -0.022866019517991082, -0.04096471640304905, 0.02798564037783804, 0.1413127549327589, 0.14200549450997993, 0.08149209422815683, -0.03314862821823726, -0.07882267026397834, 0.10993756110142408, -0.0015564021127638596, 0.0007720653089942003, -0.03268615274371225, -0.12460135847970492, -0.20286541705032604, -0.015105595552630033, 0.2679200010226773, 1.0, 0.25972069590202795, -0.3546634112316448], [0.30153624646300115, -0.08012969451645487, 0.021671998388951428, -0.20023380088708684, -0.11419730935722686, -0.19855234872188973, -0.11207166545858234, -0.04094922856127301, 0.3050217084862249, 0.167158338047356, 0.1891943359834093, 0.049872409713465994, -0.025835338416798685, 0.018242611243511547, 0.1378157613060804, 0.011635808584543089, -0.003059224759500868, -0.09156831667450822, 0.11444478773458068, 0.2509641233698451, -0.006445615101694452, 0.1780465055766592, 0.23402166233925265, -0.1345736828043314, -0.23640179737046305, -0.06043383268151209, -0.12753036281439106, -0.002875134919813991, 0.2370046046202549, 0.4979156321440662, 0.25972069590202795, 1.0, -0.3222510003822192], [-0.12516340404761225, -0.012815807856575098, -0.09897765955937449, 0.06826338309959097, 0.08889108895015678, 0.27449714490199917, -0.0178226397717175, 0.38438346701319126, -0.04275531072391267, 0.1401869432198713, -0.0500226946031589, 0.056354683226162966, 0.10768521748425391, 0.3267245088511311, -0.14599716875490978, 0.2188982969022677, 0.1474414064900314, 0.09643040466443878, -0.019735612722372023, -0.35599081409017924, -0.08926979588456425, -0.1560879842088416, -0.12754984635309063, 0.2970817965631545, 0.07850584577901643, -0.015915044835748453, 0.18304090152055108, 0.22193314157184366, -0.028797094600100274, -0.34465138512787014, -0.3546634112316448, -0.3222510003822192, 1.0]];

export default NRSIMMAT_02;