const NRSIMMAT_WESTERN = [[1.0, -0.07059082475003074, -0.05082210132875246, -0.034957007950527745, 0.06234561518420344, -0.09141337078294229, 0.03959421231967602, 0.052781501345704085, -0.13966117356815486, -0.24748612310508958, -0.1470315389796464, 1.0, 0.13702009999149214, -0.0813849217325968, -0.07329460593410739, 0.028122524577389476, -0.13550496566362313, 0.06440423648676281, 0.019559396024982134, -0.06229024478091757, -0.06624701611723884, -0.07401075869674452, 0.04258179497699476, -0.0028197392386942275, 0.1995683695960163, 0.05090430160111637, -0.038302266268520464, 1.0, -0.1415153350018204, -0.01727028359672995, 0.0418619219762688, 0.02651530947486532, -0.039646755724712456], [-0.07059082475003074, 0.9999999999999999, 0.5542550133237066, 0.38076349546035165, 0.4457219979321245, 0.4854412796854521, 0.7634807527296206, 0.5686682739115696, 0.6622050816671863, 0.3984728352229118, 0.2712694907920429, -0.07059082475003074, 0.4091767525489507, 0.17751644868572347, 0.1868118278416232, 0.2514273071925833, 0.1646520062101943, 0.035449630592573785, 0.08815690860922734, 0.09242495743559555, 0.3771545277542892, 0.24052980798231058, -0.09674044358617939, 0.43546571147690905, 0.2725084669763728, 0.12819179343462764, 0.14176294375694934, -0.07059082475003074, 0.31490149663878375, 0.2745722516084631, -0.012216116612085312, 0.20175586298332643, 0.3406056558136687], [-0.05082210132875246, 0.5542550133237066, 1.0000000000000002, 0.6530847416809059, 0.5331048743753054, 0.4666102308178339, 0.5845145992035876, 0.42301188283813645, 0.505809368161814, 0.516309833364285, 0.4558015760600462, -0.05082210132875246, 0.14493949311708615, 0.24038939900180364, 0.37979072724494484, 0.5968863543856636, 0.507193407859524, 0.3687788397130549, 0.31355308412045385, 0.29953986397388727, 0.42323509332108306, 0.15886763170030938, 0.029157766576664777, 0.4547375238440116, 0.38589367347743164, 0.2926007458621332, 0.3220841371010338, -0.05082210132875246, 0.2868846261899012, 0.06926349832633866, 0.006610513509725622, -0.17189281137622836, 0.34978687173696354], [-0.034957007950527745, 0.38076349546035165, 0.6530847416809059, 0.9999999999999999, 0.49812977648839124, 0.49200281949680513, 0.39505489442945557, 0.5824360411662036, 0.3276847316339948, 0.531092748607455, 0.3577373384796129, -0.034957007950527745, 0.1038649322879199, 0.3685307432921013, 0.4054646256505788, 0.36219711583992126, 0.35545296209757643, 0.3203187397318339, 0.34836229883786946, 0.20191307895659033, 0.18911974141949037, 0.1134034764961487, 0.08126796399229634, 0.3253476489726615, 0.3891950433361972, 0.32516101379822737, 0.25628026703233003, -0.034957007950527745, 0.06628159218709252, 0.15198249122061774, 0.18608029132229115, -0.14926122881803283, 0.3763704606136304], [0.06234561518420344, 0.4457219979321245, 0.5331048743753054, 0.49812977648839124, 1.0, 0.4620935219209068, 0.4856965333231503, 0.2842179439215228, 0.5284955166216296, 0.5387665190935024, 0.49046023384872917, 0.06234561518420344, 0.25065891243060645, 0.09978766719493522, 0.3933627074522557, 0.21717066209000335, 0.39088107717951176, 0.3428216999750254, 0.5281930589531061, 0.20714103917552382, 0.2408316350701467, 0.39892678531644554, 0.010630247881359656, 0.45161399446241074, 0.43280891576322505, 0.6526869067274857, 0.3706042565176248, 0.06234561518420344, 0.2742223383723071, 0.13348712656962705, 0.13995036868781108, -0.14422405476232691, 0.3751472113228228], [-0.09141337078294229, 0.4854412796854521, 0.4666102308178339, 0.49200281949680513, 0.4620935219209068, 1.0000000000000002, 0.5616800152799915, 0.4699605239458917, 0.43379593266808153, 0.4159508925182231, 0.24533116629302762, -0.09141337078294229, 0.1689184926572519, 0.2567173732494015, 0.23714758956617876, 0.3189045808390931, 0.22863689265388798, 0.3175502521868071, 0.19820322602839133, 0.10276217725400483, 0.28468576832777504, 0.21066796777754937, 0.017520466234439643, 0.4631282578977863, 0.30626664457417707, 0.26074465072975195, 0.34907949811921624, -0.09141337078294229, 0.2656217292958755, 0.07978841421294512, -0.03798568075121245, -0.010563917588551512, 0.4179971319699298], [0.03959421231967602, 0.7634807527296206, 0.5845145992035876, 0.39505489442945557, 0.4856965333231503, 0.5616800152799915, 1.0, 0.5286981321304556, 0.6244032960363728, 0.34174033750420363, 0.3522920429496898, 0.03959421231967602, 0.323260597794577, 0.01216448436740219, 0.1730038471906013, 0.2360328651424771, 0.26395024336364215, 0.10995599590256576, 0.16598355420162403, 0.12993438301026572, 0.4560362061313933, 0.2463960069292731, -0.06547125905000041, 0.48984503735053, 0.2988829414015681, 0.17343042036093687, 0.21485781571052345, 0.03959421231967602, 0.3534403601563061, 0.19925798209515325, -0.0694548464991465, 0.10861464799087552, 0.4035885756142113], [0.052781501345704085, 0.5686682739115696, 0.42301188283813645, 0.5824360411662036, 0.2842179439215228, 0.4699605239458917, 0.5286981321304556, 1.0, 0.38445835282671675, 0.2074930032734687, 0.12076288434550207, 0.052781501345704085, 0.18335075669065698, 0.21913585613539185, 0.2108167725062175, 0.22706313707709366, 0.1316870539544475, 0.07813923864948598, 0.10795328881243722, 0.06624760913309695, 0.2995427517924032, 0.03255866916712371, -0.18535530397163816, 0.20618397659339044, 0.23422401022829492, 0.11785964612616598, 0.14042787444447344, 0.052781501345704085, 0.09214536668704698, 0.21615336354118148, 0.01735608290290089, 0.14615506846127438, 0.08009801141363743], [-0.13966117356815486, 0.6622050816671863, 0.505809368161814, 0.3276847316339948, 0.5284955166216296, 0.43379593266808153, 0.6244032960363728, 0.38445835282671675, 0.9999999999999999, 0.5715977948657754, 0.4730486715242915, -0.13966117356815486, 0.32766346731719215, 0.15099334201012013, 0.41993353259556915, 0.3405867587912317, 0.3881288690289902, 0.21281691939197692, 0.28947771638539443, 0.2760841248139476, 0.2972527492389133, 0.442228085269647, -0.07500854129544618, 0.5395923201843588, 0.31971609506658866, 0.2088790596256743, 0.2034509792542541, -0.13966117356815486, 0.4165085953078969, 0.21658991216269624, -0.004908380568148407, 0.042132233718303214, 0.34018409819387085], [-0.24748612310508958, 0.3984728352229118, 0.516309833364285, 0.531092748607455, 0.5387665190935024, 0.4159508925182231, 0.34174033750420363, 0.2074930032734687, 0.5715977948657754, 1.0, 0.7046834028325343, -0.24748612310508958, 0.22622276970978783, 0.40745516278214167, 0.6404235362525247, 0.3423216664708322, 0.4853960917595749, 0.3267446895248406, 0.5286587428267193, 0.4193594839765662, 0.3636628602150059, 0.4514810292532464, 0.19227877717626377, 0.5672807056086332, 0.3286830310800043, 0.4235830775323216, 0.2426218442933686, -0.24748612310508958, 0.37078764684061544, 0.28872030896157164, 0.1632427417797787, -0.13613173382264276, 0.502225842621728], [-0.1470315389796464, 0.2712694907920429, 0.4558015760600462, 0.3577373384796129, 0.49046023384872917, 0.24533116629302762, 0.3522920429496898, 0.12076288434550207, 0.4730486715242915, 0.7046834028325343, 1.0, -0.1470315389796464, 0.23810472948469558, 0.22610145909959453, 0.5789100719734088, 0.3537721188031419, 0.530299913921427, 0.403163467800684, 0.5814381510111208, 0.4003625091099368, 0.4675421225887171, 0.4770402653530759, 0.20110320645539584, 0.49745359642514914, 0.33680070933034123, 0.36034320732710784, 0.24591087876887807, -0.1470315389796464, 0.5085637674052403, 0.13621925908230909, 0.12285747816731266, -0.1658777617579106, 0.2489154301411957], [1.0, -0.07059082475003074, -0.05082210132875246, -0.034957007950527745, 0.06234561518420344, -0.09141337078294229, 0.03959421231967602, 0.052781501345704085, -0.13966117356815486, -0.24748612310508958, -0.1470315389796464, 1.0, 0.13702009999149214, -0.0813849217325968, -0.07329460593410739, 0.028122524577389476, -0.13550496566362313, 0.06440423648676281, 0.019559396024982134, -0.06229024478091757, -0.06624701611723884, -0.07401075869674452, 0.04258179497699476, -0.0028197392386942275, 0.1995683695960163, 0.05090430160111637, -0.038302266268520464, 1.0, -0.1415153350018204, -0.01727028359672995, 0.0418619219762688, 0.02651530947486532, -0.039646755724712456], [0.13702009999149214, 0.4091767525489507, 0.14493949311708615, 0.1038649322879199, 0.25065891243060645, 0.1689184926572519, 0.323260597794577, 0.18335075669065698, 0.32766346731719215, 0.22622276970978783, 0.23810472948469558, 0.13702009999149214, 1.0000000000000002, -0.009510026659888076, 0.08112112486931104, 0.1336468663064485, -0.022193414806916847, -0.0018899703126285684, 0.032754473648260805, 0.12591451272298668, 0.28543026289747514, 0.30881955426599345, 0.1300908850059469, 0.24135701931681142, -0.014571194415257413, 0.05105685794273879, -0.17346913510365888, 0.13702009999149214, 0.2844327553307746, 0.22156877413098633, 0.07507963377697532, 0.22117472402954014, 0.15101878215729717], [-0.0813849217325968, 0.17751644868572347, 0.24038939900180364, 0.3685307432921013, 0.09978766719493522, 0.2567173732494015, 0.01216448436740219, 0.21913585613539185, 0.15099334201012013, 0.40745516278214167, 0.22610145909959453, -0.0813849217325968, -0.009510026659888076, 1.0000000000000002, 0.35270348410312263, 0.2643379926789687, 0.2875433410016942, 0.26917848100903213, 0.24885993793539626, 0.3205954089731492, 0.08007224588823045, 0.033486546067206455, 0.12462351781829198, 0.28715086032816717, 0.19285305534395547, 0.1603651951500793, 0.0923688451646802, -0.0813849217325968, -0.010917086330695824, 0.19744635900910656, 0.1536856961903111, -0.11899760166188586, 0.41846159403929223], [-0.07329460593410739, 0.1868118278416232, 0.37979072724494484, 0.4054646256505788, 0.3933627074522557, 0.23714758956617876, 0.1730038471906013, 0.2108167725062175, 0.41993353259556915, 0.6404235362525247, 0.5789100719734088, -0.07329460593410739, 0.08112112486931104, 0.35270348410312263, 1.0, 0.31199727799268623, 0.5247698508612775, 0.4426370021057917, 0.46930089132770564, 0.32498705405117045, 0.23550389753378131, 0.5006049045985672, 0.09998738424943565, 0.47550651102876934, 0.4193827134149445, 0.368966957331359, 0.27613180727305864, -0.07329460593410739, 0.1683909479212185, 0.0949960330798557, 0.20745127910577568, -0.2700748773521625, 0.21958777729070827], [0.028122524577389476, 0.2514273071925833, 0.5968863543856636, 0.36219711583992126, 0.21717066209000335, 0.3189045808390931, 0.2360328651424771, 0.22706313707709366, 0.3405867587912317, 0.3423216664708322, 0.3537721188031419, 0.028122524577389476, 0.1336468663064485, 0.2643379926789687, 0.31199727799268623, 1.0, 0.4268178116915077, 0.46927398943499465, 0.20187606853628565, 0.33106797549860323, 0.3505305603979351, 0.11736051249494116, 0.1449370905572167, 0.3203266647218661, 0.1415620877681322, 0.10980267324915065, 0.21725118367630875, 0.028122524577389476, 0.20528913789419198, 0.009499525701934183, 0.036895010180968, -0.162138957018775, 0.1490023642984901], [-0.13550496566362313, 0.1646520062101943, 0.507193407859524, 0.35545296209757643, 0.39088107717951176, 0.22863689265388798, 0.26395024336364215, 0.1316870539544475, 0.3881288690289902, 0.4853960917595749, 0.530299913921427, -0.13550496566362313, -0.022193414806916847, 0.2875433410016942, 0.5247698508612775, 0.4268178116915077, 1.0, 0.37938844929190213, 0.5585630229230025, 0.42921227927295996, 0.37535424189267097, 0.2011581843519435, 0.23596596028652575, 0.5280662928483429, 0.2700511363178687, 0.24058664731683055, 0.31252527806532737, -0.13550496566362313, 0.3567147462363012, -0.02159444171621756, 0.1296533299255946, -0.23543239663069548, 0.2516328475297538], [0.06440423648676281, 0.035449630592573785, 0.3687788397130549, 0.3203187397318339, 0.3428216999750254, 0.3175502521868071, 0.10995599590256576, 0.07813923864948598, 0.21281691939197692, 0.3267446895248406, 0.403163467800684, 0.06440423648676281, -0.0018899703126285684, 0.26917848100903213, 0.4426370021057917, 0.46927398943499465, 0.37938844929190213, 1.0000000000000002, 0.37739450312047645, 0.4334783596129691, 0.275544596268075, 0.21522746005360857, 0.26063713215097284, 0.2993247798180751, 0.2823025282313313, 0.2196743754467866, 0.41762787733124035, 0.06440423648676281, 0.22012873241080838, 0.12639929788170765, 0.30311298692552896, -0.3029210809156797, 0.21101511453243052], [0.019559396024982134, 0.08815690860922734, 0.31355308412045385, 0.34836229883786946, 0.5281930589531061, 0.19820322602839133, 0.16598355420162403, 0.10795328881243722, 0.28947771638539443, 0.5286587428267193, 0.5814381510111208, 0.019559396024982134, 0.032754473648260805, 0.24885993793539626, 0.46930089132770564, 0.20187606853628565, 0.5585630229230025, 0.37739450312047645, 0.9999999999999999, 0.3009874853417254, 0.09833876866084242, 0.3031659394698895, 0.19220765281771982, 0.3925607289033844, 0.3712266472599647, 0.564195772916118, 0.23880664814977534, 0.019559396024982134, 0.2786368759031616, 0.09321751402876327, 0.21786570602308405, -0.25317790039451954, 0.2749158644970233], [-0.06229024478091757, 0.09242495743559555, 0.29953986397388727, 0.20191307895659033, 0.20714103917552382, 0.10276217725400483, 0.12993438301026572, 0.06624760913309695, 0.2760841248139476, 0.4193594839765662, 0.4003625091099368, -0.06229024478091757, 0.12591451272298668, 0.3205954089731492, 0.32498705405117045, 0.33106797549860323, 0.42921227927295996, 0.4334783596129691, 0.3009874853417254, 0.9999999999999998, 0.2566654643507894, 0.2740817808392207, 0.3104575991442311, 0.4367821484629203, 0.1010032657665684, 0.1813067293632147, 0.10517924303410131, -0.06229024478091757, 0.02649487012914524, 0.4147050058375836, 0.2486447707382303, 0.02158031254374091, 0.3090154429697704], [-0.06624701611723884, 0.3771545277542892, 0.42323509332108306, 0.18911974141949037, 0.2408316350701467, 0.28468576832777504, 0.4560362061313933, 0.2995427517924032, 0.2972527492389133, 0.3636628602150059, 0.4675421225887171, -0.06624701611723884, 0.28543026289747514, 0.08007224588823045, 0.23550389753378131, 0.3505305603979351, 0.37535424189267097, 0.275544596268075, 0.09833876866084242, 0.2566654643507894, 1.0, 0.30855419723780647, 0.15694161388532804, 0.32291108662209855, 0.16721527351578933, 0.08037304437169696, 0.20157723812832154, -0.06624701611723884, 0.5774276093554267, 0.20271357485835376, 0.02867985169251674, 0.08532672108138273, 0.22282273524368978], [-0.07401075869674452, 0.24052980798231058, 0.15886763170030938, 0.1134034764961487, 0.39892678531644554, 0.21066796777754937, 0.2463960069292731, 0.03255866916712371, 0.442228085269647, 0.4514810292532464, 0.4770402653530759, -0.07401075869674452, 0.30881955426599345, 0.033486546067206455, 0.5006049045985672, 0.11736051249494116, 0.2011581843519435, 0.21522746005360857, 0.3031659394698895, 0.2740817808392207, 0.30855419723780647, 1.0, 0.0809432046927209, 0.3187612192019559, 0.18812352993118994, 0.36004825938973883, 0.14882137366856527, -0.07401075869674452, 0.3293069590587976, 0.2650082147703507, 0.0011957123751916514, -0.0020916212077516875, 0.16023840810477974], [0.04258179497699476, -0.09674044358617939, 0.029157766576664777, 0.08126796399229634, 0.010630247881359656, 0.017520466234439643, -0.06547125905000041, -0.18535530397163816, -0.07500854129544618, 0.19227877717626377, 0.20110320645539584, 0.04258179497699476, 0.1300908850059469, 0.12462351781829198, 0.09998738424943565, 0.1449370905572167, 0.23596596028652575, 0.26063713215097284, 0.19220765281771982, 0.3104575991442311, 0.15694161388532804, 0.0809432046927209, 0.9999999999999998, 0.17097588191836421, 0.03729728354363634, 0.029103029798400352, 0.01884387340506099, 0.04258179497699476, 0.06759003277403236, 0.23708702373188545, 0.2275796919900764, -0.037309720048588346, 0.2790143942117341], [-0.0028197392386942275, 0.43546571147690905, 0.4547375238440116, 0.3253476489726615, 0.45161399446241074, 0.4631282578977863, 0.48984503735053, 0.20618397659339044, 0.5395923201843588, 0.5672807056086332, 0.49745359642514914, -0.0028197392386942275, 0.24135701931681142, 0.28715086032816717, 0.47550651102876934, 0.3203266647218661, 0.5280662928483429, 0.2993247798180751, 0.3925607289033844, 0.4367821484629203, 0.32291108662209855, 0.3187612192019559, 0.17097588191836421, 1.0, 0.4140070179147208, 0.3093950381984119, 0.23225580332583645, -0.0028197392386942275, 0.21889684539232085, 0.17740495870717388, -0.08128879992114257, -0.10306391730553957, 0.5391697749154537], [0.1995683695960163, 0.2725084669763728, 0.38589367347743164, 0.3891950433361972, 0.43280891576322505, 0.30626664457417707, 0.2988829414015681, 0.23422401022829492, 0.31971609506658866, 0.3286830310800043, 0.33680070933034123, 0.1995683695960163, -0.014571194415257413, 0.19285305534395547, 0.4193827134149445, 0.1415620877681322, 0.2700511363178687, 0.2823025282313313, 0.3712266472599647, 0.1010032657665684, 0.16721527351578933, 0.18812352993118994, 0.03729728354363634, 0.4140070179147208, 1.0000000000000002, 0.35698070068752347, 0.445103205206053, 0.1995683695960163, 0.13045689532983515, 0.019682902705501708, 0.04587284759558508, -0.14310665705866527, 0.350478272098616], [0.05090430160111637, 0.12819179343462764, 0.2926007458621332, 0.32516101379822737, 0.6526869067274857, 0.26074465072975195, 0.17343042036093687, 0.11785964612616598, 0.2088790596256743, 0.4235830775323216, 0.36034320732710784, 0.05090430160111637, 0.05105685794273879, 0.1603651951500793, 0.368966957331359, 0.10980267324915065, 0.24058664731683055, 0.2196743754467866, 0.564195772916118, 0.1813067293632147, 0.08037304437169696, 0.36004825938973883, 0.029103029798400352, 0.3093950381984119, 0.35698070068752347, 1.0000000000000002, 0.17672314905530281, 0.05090430160111637, 0.06486296662217124, 0.12713490510923758, 0.10106762358767037, -0.15433854380576428, 0.33296458281165026], [-0.038302266268520464, 0.14176294375694934, 0.3220841371010338, 0.25628026703233003, 0.3706042565176248, 0.34907949811921624, 0.21485781571052345, 0.14042787444447344, 0.2034509792542541, 0.2426218442933686, 0.24591087876887807, -0.038302266268520464, -0.17346913510365888, 0.0923688451646802, 0.27613180727305864, 0.21725118367630875, 0.31252527806532737, 0.41762787733124035, 0.23880664814977534, 0.10517924303410131, 0.20157723812832154, 0.14882137366856527, 0.01884387340506099, 0.23225580332583645, 0.445103205206053, 0.17672314905530281, 1.0, -0.038302266268520464, 0.13738329545444178, -0.012153433290493815, 0.15958101253448256, -0.2067298682036565, 0.1729751727289181], [1.0, -0.07059082475003074, -0.05082210132875246, -0.034957007950527745, 0.06234561518420344, -0.09141337078294229, 0.03959421231967602, 0.052781501345704085, -0.13966117356815486, -0.24748612310508958, -0.1470315389796464, 1.0, 0.13702009999149214, -0.0813849217325968, -0.07329460593410739, 0.028122524577389476, -0.13550496566362313, 0.06440423648676281, 0.019559396024982134, -0.06229024478091757, -0.06624701611723884, -0.07401075869674452, 0.04258179497699476, -0.0028197392386942275, 0.1995683695960163, 0.05090430160111637, -0.038302266268520464, 1.0, -0.1415153350018204, -0.01727028359672995, 0.0418619219762688, 0.02651530947486532, -0.039646755724712456], [-0.1415153350018204, 0.31490149663878375, 0.2868846261899012, 0.06628159218709252, 0.2742223383723071, 0.2656217292958755, 0.3534403601563061, 0.09214536668704698, 0.4165085953078969, 0.37078764684061544, 0.5085637674052403, -0.1415153350018204, 0.2844327553307746, -0.010917086330695824, 0.1683909479212185, 0.20528913789419198, 0.3567147462363012, 0.22012873241080838, 0.2786368759031616, 0.02649487012914524, 0.5774276093554267, 0.3293069590587976, 0.06759003277403236, 0.21889684539232085, 0.13045689532983515, 0.06486296662217124, 0.13738329545444178, -0.1415153350018204, 1.0000000000000002, 0.054857273232969586, 0.07755388343076701, 0.0009403063132928729, 0.0352534166102016], [-0.01727028359672995, 0.2745722516084631, 0.06926349832633866, 0.15198249122061774, 0.13348712656962705, 0.07978841421294512, 0.19925798209515325, 0.21615336354118148, 0.21658991216269624, 0.28872030896157164, 0.13621925908230909, -0.01727028359672995, 0.22156877413098633, 0.19744635900910656, 0.0949960330798557, 0.009499525701934183, -0.02159444171621756, 0.12639929788170765, 0.09321751402876327, 0.4147050058375836, 0.20271357485835376, 0.2650082147703507, 0.23708702373188545, 0.17740495870717388, 0.019682902705501708, 0.12713490510923758, -0.012153433290493815, -0.01727028359672995, 0.054857273232969586, 1.0, 0.430646969154411, 0.49463852288368365, 0.23657354548053766], [0.0418619219762688, -0.012216116612085312, 0.006610513509725622, 0.18608029132229115, 0.13995036868781108, -0.03798568075121245, -0.0694548464991465, 0.01735608290290089, -0.004908380568148407, 0.1632427417797787, 0.12285747816731266, 0.0418619219762688, 0.07507963377697532, 0.1536856961903111, 0.20745127910577568, 0.036895010180968, 0.1296533299255946, 0.30311298692552896, 0.21786570602308405, 0.2486447707382303, 0.02867985169251674, 0.0011957123751916514, 0.2275796919900764, -0.08128879992114257, 0.04587284759558508, 0.10106762358767037, 0.15958101253448256, 0.0418619219762688, 0.07755388343076701, 0.430646969154411, 1.0, 0.23177777331376234, -0.0010085860943064376], [0.02651530947486532, 0.20175586298332643, -0.17189281137622836, -0.14926122881803283, -0.14422405476232691, -0.010563917588551512, 0.10861464799087552, 0.14615506846127438, 0.042132233718303214, -0.13613173382264276, -0.1658777617579106, 0.02651530947486532, 0.22117472402954014, -0.11899760166188586, -0.2700748773521625, -0.162138957018775, -0.23543239663069548, -0.3029210809156797, -0.25317790039451954, 0.02158031254374091, 0.08532672108138273, -0.0020916212077516875, -0.037309720048588346, -0.10306391730553957, -0.14310665705866527, -0.15433854380576428, -0.2067298682036565, 0.02651530947486532, 0.0009403063132928729, 0.49463852288368365, 0.23177777331376234, 1.0, -0.03278749085953513], [-0.039646755724712456, 0.3406056558136687, 0.34978687173696354, 0.3763704606136304, 0.3751472113228228, 0.4179971319699298, 0.4035885756142113, 0.08009801141363743, 0.34018409819387085, 0.502225842621728, 0.2489154301411957, -0.039646755724712456, 0.15101878215729717, 0.41846159403929223, 0.21958777729070827, 0.1490023642984901, 0.2516328475297538, 0.21101511453243052, 0.2749158644970233, 0.3090154429697704, 0.22282273524368978, 0.16023840810477974, 0.2790143942117341, 0.5391697749154537, 0.350478272098616, 0.33296458281165026, 0.1729751727289181, -0.039646755724712456, 0.0352534166102016, 0.23657354548053766, -0.0010085860943064376, -0.03278749085953513, 1.0]];

export default NRSIMMAT_WESTERN;