const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

// ================================
// YES BUTTON
// ================================

yesButton.addEventListener("click", function () {

    document.querySelector(".question-screen").innerHTML = `
        <div class="heart">💗</div>

        <h1>Yayyy! ❤️</h1>

        <p>
            Naku telusu nuvu vasthavu ani... ❤️<br><br>
            Daa veli okasari nuvu nenu ela kalusukunamo gurthu chestha ...
        </p>

        <button id="continueButton">Continue ❤️</button>
    `;

    const continueButton =
        document.getElementById("continueButton");

    continueButton.addEventListener("click", function () {

        document.querySelector(".question-screen").innerHTML = `
            <div class="heart">💗</div>

            <h1>Where It All Began... 💕</h1>

            <p>
                Every beautiful story has a beginning...<br><br>
                And ours began in college. ❤️
            </p>

            <button id="nextButton">Next ❤️</button>
        `;

        const nextButton =
            document.getElementById("nextButton");

        nextButton.addEventListener("click", function () {

            document.querySelector(".question-screen").innerHTML = `
                <div class="heart">💗</div>

                <h1>The First Meeting..!!💟</h1>

                <p>
                    It all started with our common friend, Madhu. ❤️

                    <br><br>

                    Asalu dhanitho frndshp chesi undaka pothe nuvu dhorike vadive kadhu ra babu 🙆...
                    bidda enthaina chala manchidhi ninu naku antakattindhi 😑

                    <br><br>

                    Nrml ga vedi peru rajesh ani chpindhi...
                    peru kastha vinthaga undhi anukuna...
                    but ne voice vinaka...abbahh ani anukuna...
                    apati nunchi ne vaipu nunchi dhaniki call vasthe nene chuse dhani 1stu...
                    nene lift chesi dhaniki iche dhani 😅

                    <br><br>

                    And then, mhp degara aa roju nuvu ala matladesariki...
                    edho teliyali feeling chala bagundhi...
                    chala nachindhi...
                    ala netho kalisipothu una inka...
                    nuvu chesina panulu...ne matalu bale undevi eheee 💋

                    <br><br>

                    <strong>
                    nuvu natho ana 1st sentence
                    "Dhanitho thirigithe nashanam ayipothavu nuvu kuda ani anavu" 😂...
                    inka gurthu naku aa roju ne face ne hairstyle ne matalu anniii
                    </strong>

                    <br><br>

                    Little did we know that one small introduction
                    would become the beginning of our story. 💗
                </p>

                <button id="memoryButton">
                    One More Memory 💕
                </button>
            `;

            const memoryButton =
                document.getElementById("memoryButton");

            memoryButton.addEventListener("click", function () {

                document.querySelector(".question-screen").innerHTML = `
                    <div class="heart">💗</div>

                    <h1>And Look At Us Now... ❤️</h1>

                    <p>
                        From a random introduction by Madhu...
                        <br><br>

                        to becoming such an important part of
                        each other's lives. 🥺

                        <br><br>

                        Funny how the smallest moments can become
                        the most beautiful memories. 💕
                    </p>

                    <button id="nextChapterButton">
                        Next Chapter ❤️
                    </button>
                `;

                const nextChapterButton =
                    document.getElementById("nextChapterButton");

                nextChapterButton.addEventListener("click", function () {

                    document.querySelector(".question-screen").innerHTML = `
                        <div class="heart">💗</div>

                        <h1>Our Next Chapter... ❤️</h1>

                        <img
                            src="Photo 1.jpeg"
                            class="couple-photo"
                        >

                        <p>
                            <!-- Your photo page -->
                        </p>

                        <button id="storyButton">
                            Continue ❤️
                        </button>
                    `;

                    const storyButton =
                        document.getElementById("storyButton");

                    storyButton.addEventListener("click", function () {

                        document.querySelector(".question-screen").innerHTML = `
                            <div class="heart">💗</div>

                            <h1>Our Memory... 💕</h1>

                            <p>

                                Bhargavi eh ra naku anni...dhanine namme dhani nenu inka evaru odhu anukune dhani...asalu idharam abbailu eh odhu mana lyf lo ani decide ayamu...aa tym lo ichavu entry na lyf lokiiii...ala oka yadhava laga

                                <br><br>

                                Nakemo tension bhargavi velipothundhi...intlo pampanu antunaru...phn kuda undedhi kadhu...okadhane velali ante bayamu naku...evarini nammali anipile

                                <br><br>

                                Actuallyy aa tym lo gupta ne kastha close naku ne kana...vadini kuda adagali anipiledhu naku...netho apatiki just oka 2 tyms call anukunta anthe...ekuva meet kuda avala...chat cheskole but naku nine adagali anipichindhi...nine nammali anipichindhi...

                                <br><br>

                                asalu boys touch antene bad ga feel aye nenu...oka roju ne kaala madhilo kurchopetukuna i felt safe and nrml...vachi adiga ne medha hopes petesukuna inka motham

                                <br><br>

                                nuvu avadhu ante inka edchesa aa roju...last ki vastha anavu..hammayaa anukuna...aa bike medha inka ela patukovali ekada patukovali ra nuvu antha fast ga velthe...malla nanu antunavu nuve patukunavu ani...

                                <br><br>

                                nuve na cheyyi patukoni lakuni ala chusthe inka ela feel avali...frnd gane chusa apatiki nenu...but nenu frnd la kuda chala possessive feel avtha...

                                <br><br>

                                aa roje nuvu bhargavi tho ala undatam nachale naku...naku ne medha aa roje istam vachindhi...but adhi chpthe ekada pedthavo ani bayam vesi chpale...

                                <br><br>

                                coz madhu naku chpindhi rajesh ki evaraina prop chesina reject chesthadu ani...antha manchiga unavalan reject chesavu nanu chyakunda endhuku untavu ani bayam vesi niku chpaledhu...

                                <br><br>

                                naku bike medhe chpdham anukuna but bayam vesi agipoya

                                <br><br>

                                But nuvu mudhu adagagane em chyalo ardham kaledhu...mind panichyale naku...vedu enti ila adigesadu ani...odhu ana...malli adigavu...inka em aalochinchale...petesaaa...

                                <br><br>

                                edho teliyali feeling inka...petesaka...chala happy ga chala edho teliyani manchi feeling

                                <br><br>

                                but inko doubt nxt day madhu tho velthunavu adhi niku pettesthe😑...no once na kallu padaka adhi nadhe inka...sarele em kadhu le ani vadhilesa

                                <br><br>

                                Next day nuvu vachi madhu gadi matter lo godava paddamu...h block lo...i said sorry...but nuvu sorry ela chpalo kuda nene nerpichala ani anavu apudu ardham ayindhi so malli mudhu peta...

                                <br><br>

                                ala eye contact oka 5 secs ala chusthu unavu...ala chusthunte nuvu...heartbeat raise ayipoyi ayasam vachesindhi bro 🤥

                                <br><br>

                                nuvu kuda same feel ayavu...inka tharvatha idhi ati em chyakundane ayasam vachesthundhi ani dhooram ga velipoyavu inka...naku apudu just ne medha istam mathrame undhi inkem ledhu

                                <br><br>

                                slow ga slow ga feelings peruguthu vachayi but ne medha oka doubt undedhi...nuvu kuda just na meeda serious ga undava emo ani...but i just like you niku no chpalekapoya...

                                <br><br>

                                asalu apudu love odhu anukuna andhuke netho una lekapothe asalu apude dhooram ayipoye dhani but apudu feelings peruguthayi ani teliyaka undipoya ipudu chudu entha perigipoindho 🫠

                                <br><br>

                                Naku aa doubt manam meet aye dhaka undhi...manam meet avadam kuda naku apudu bayam ga nammakam lekunda ne aya

                                <br><br>

                                Mana meet naku ela feel ayindho chptha but aa lopu niku oka chinnaaa question nana 😁

                            </p>

                            <button id="storyQuestionButton">
                                Continue ❤️
                            </button>
                        `;

                        const storyQuestionButton =
                            document.getElementById("storyQuestionButton");

                        storyQuestionButton.addEventListener("click", function () {

                            document.querySelector(".question-screen").innerHTML = `
                                <div class="heart">💗</div>

                                <h1>Oka chinna question nana... 😁</h1>

                                <p>
                                    Rajeshhhh manam meet ayina date gurthu undha? ❤️
                                </p>

                                <button id="dateYesButton">
                                    YES ❤️
                                </button>

                                <button id="dateNoButton">
                                    NO 😐
                                </button>
                            `;

                            const dateYesButton =
                                document.getElementById("dateYesButton");

                            const dateNoButton =
                                document.getElementById("dateNoButton");

                            // ================================
                            // YES ANSWER
                            // ================================

                            dateYesButton.addEventListener("click", function () {

                                document.querySelector(".question-screen").innerHTML = `
                                    <div class="heart">💗</div>

                                    <h1>YESSSS ❤️</h1>

                                    <p>
                                        Good boy ne pranalu ela kapadukovalo niku telusu ra...
                                        19th November 2025...
                                        one of the spcl day in my entire lifeeeee

                                        <br><br>

                                        Kindha una button nokku podham nxt page ki...
                                        naku ela feel ayindho chpthaaa
                                    </p>

                                    <button id="yesNextButton">
                                        Padhaaaa ❤️
                                    </button>
                                `;

                                const yesNextButton =
                                    document.getElementById("yesNextButton");

                                yesNextButton.addEventListener("click", function () {

                                    document.querySelector(".question-screen").innerHTML = `
                                        <div class="heart">💗</div>

                                        <h1>
                                            Hahaha naku telusu nuvu vasthavu bro ani 👐🏻
                                        </h1>

                                        <p>
                                            Mana 1st hug🫂...chala safe and chala pure ga anipichindhi...asalu physical touch antene nachani naku...ne hug oka safe place la anipichindhi
                                            asalu boys sex kosame approach avtharu ani anukune dhani...nammakam ledhu....ninu nammale...asalu sex ante chiraku yaak anukunedhani....but adhi pure thing ani prove chesavu 🥹...nuvu sex kosam e approach ayavu ani nenu antale but naku 1st lo adhe anipichindhi🙂...kani mana meet tharvatha...chala haayi ga undhi...bayam emi lekunda prashanthamuga undhi😮‍💨...ne kiss ne hug ne touch ne look anni safe anipichini🤞🏻...nuvu eh thought tho chesavo telidhu kani...naku mathram lust kanipile bro...evaru natho chyanivi chesavu...chudanivi nuvu chusavu...evaru nanu touch chyani way lo chesavu...chala safe and happy ga anipichindhi nana 😚
                                            aa roju gudiki veli swamy ki chpukuna...chala pure ga anipichindhi swamy...vadni etti paristhithulalo naku dhooram chyaku ani 🥺...love ani chpalenu but oka positive feeling ne medha😌...chala bagundhii nana aa feeling 
                                            Asalu dheeni vala love vachindhi ani chpatale nenu...just safe feel vachindhi...safe ani andhari degara anipidhu naku...ne degara anipichindhi chaalaa safe gaa...my safest place is ur armsss nanaaaa 😘
                                        <br><br>
                                        So finally em chpthuna ante...mana meet vala naku ne medha inka impression perigindhi...inka istam perigindhi😚
                                        <br><br>
                                        Enti alisipoyava chahdivi chadivi...inka unai daaa😁
                                        </p>

                                        <button id="nextStoryButton">
                                            Nokkavalenu 😆
                                        </button>
                                    `;

                                    const nextStoryButton =
                                        document.getElementById("nextStoryButton");

                                    nextStoryButton.addEventListener("click", function () {

                                        document.querySelector(".question-screen").innerHTML = `
                                            <div class="heart">💗</div>

                                            <h1>Before you and After you</h1>

                                            <p>
                                                Aa title enta anukuntunava...nuvu na life loki raka mundhu ela undedhi...nuvu vachaka ela undedhi ani chpabothunaaaaaaaaaaa....
                                                Nuvu raka mundhu varaku...boys tho antha manesa inka...malli aa madhu vala parichayam ayaru thapa...valatho kuda limits lone undedhani...intiki vastha padukunta...edhoakti thidtharu padutha...happiness ledhu na lyf lo...daddy ni byt ki teskuvelamante chinna pillava ani thitte valu...intlo intlone una nenu almost 1 yr motham...aa tv thappa vere lokam ledhu...pichi ekkedhi...evaru matladaru natho roju thitte valu eamcet raledhu mains raledhu ani...nau interest ledhu vatilo ante vinale asalu...chiraku vachedhi...chachipodham anukune dhani...asalu oka peak level ki velipoya dhookedham anukuna ma terrace nunchi...naku jaanu ki himaja ki godavalu...evaru leru naku inka...sibi tho manesa...vaditho undalekapoya...act chyalekapoya...vadu chachipotha adhi idhi ani matladadu...em chyalo ardham kaka vad em ana silent udne dhani...oka point lo sex topic techadu naku nachale naku inka chala uncomfrotable ga anipichi manes avaditho blokced loki veipoyadu...dhaniki mundhu ma annayaaa ani udnevadu vadu anthe chesadu abadhalu chpi nanu restrict chesi nanu cntrl chesi...inka jeevitham emdha virakthi vachesindhi...apude chparu orientation start ani...hammayaaa anukuna vela orientation ki kastha relief anipichindhi...                          
                                                Boys medha nammakam ledhu...aa surya vala motham nammakam poindhi...asalu evaritho odhu anukuna...asalu frndshps odhu rlnshps odhu asalu manushule odhu ani depress ayipoya...alantapudu nuvu vachavu ninu nammale nenu...meet ayamu kiss cheskunamu bane unamu but nana nuvu vachaka motham maripoindhi na lyf lo...
                                                Happy ga unde dhani...heartful ga navve dhani 😘...manushulatho kalavadam start chesa...nammakam vasthundhi😘...nuvu nenu 1st tym byt ki vellindhi vjd ki 😙...tharvatha oka chinna drive ki vellamu 👐🏻...tharvatha nanu bike medha intiki drop chesavu🤓...annitilo baga gurthu undhi enti ante...beach chala istam naku😋...aa roju netho aa tym spend chyadam chala nachindhi naku...chaala haayiga anipichindhi...netho nenu na laga undagalanu nana...aa roju entha happyyyy anpichindhii ante chpalenuu words lo...chalaaaaa ante chalaaaaaaaaaa...
                                                Nalo una chinna pilaa ne degara vachindhi aa rojuu😩...chusava ela undedhani ela ayipoyanoooo
                                            </p>
                   
    <button id="finalButton">
        nextuuuu :)
    </button>

`;

const finalButton = document.getElementById("finalButton");

finalButton.addEventListener("click", function () {

    document.querySelector(".question-screen").innerHTML = `

        <div class="heart">💗</div>

        <h1>Wanna Watch Our Videos? 🎥</h1>

        <p>
            Mana memories lo konni chinna moments...
            <br><br>
            Chusthava nana? ❤️
        </p>

        <div class="buttons">

            <button id="videoYesButton">
                YESSS ❤️
            </button>

            <button id="videoNoButton">
                NO 😭
            </button>

        </div>

    `;

    const videoYesButton =
        document.getElementById("videoYesButton");

    const videoNoButton =
        document.getElementById("videoNoButton");


    // ================================
    // VIDEO YES
    // ================================

videoYesButton.addEventListener("click", function () {

    document.querySelector(".question-screen").innerHTML = `

        <div class="heart">💗</div>

        <h1>Our Little Moments 🎥❤️</h1>

        <p>
            Chudu nana... ❤️
        </p>

       <video
    controls
    playsinline
    class="memory-video"
>
    <source
        src="our-video.mp4"
        type="video/mp4"
    >
</video>

        <br><br>

        <button id="waitButton">
            dishummm ❤️
        </button>

    `;


    // ================================
    // NEXT → WAIT PAGE
    // ================================

    const waitButton =
        document.getElementById("waitButton");

    waitButton.addEventListener("click", function () {

        document.querySelector(".question-screen").innerHTML = `

            <div class="heart">❤️</div>

            <h1>
                Nowww... You Have To Wait 🤭
            </h1>

            <p>
                Inka konni rojulu wait cheyyali nana... 
                <br><br>

                Appati varaku ee memories anni
                mind lo pettukoni undu. ❤️

                <br><br>

                Something special is waiting for you... 👀❤️
            </p>

        `;

    });

});

    // ================================
    // VIDEO NO
    // ================================

    videoNoButton.addEventListener("click", function () {

        document.querySelector(".question-screen").innerHTML = `

            <div class="heart"></div>

            <h1>Ayyo sareee 😭❤️</h1>

            <p>
                Inka niku naku ayipoindhii dhobbeyiiiii
            </p>

        `;

    });

});


                                    });

                                });

                            });

                            // ================================
                            // NO ANSWER = END
                            // ================================

                            dateNoButton.addEventListener("click", function () {

                                document.querySelector(".question-screen").innerHTML = `
                                    <div class="heart">🥹</div>

                                    <h1>Ohh... 😭❤️</h1>

                                    <p>
                                        I hateeee youuuuu...dhobbeyiiii
                                        <br><br>
                                        Inka nuvu telusukoniki emi ledhu
                                        <br><br>
                                        Good byeeeeeeeeeeee 😤
                                    </p>

                                    <h2>The End... 💔</h2>
                                `;

                            });

                        });

                    });

                });

            });

        });

    });

});

// ================================
// NO BUTTON - RUNS AWAY
// ================================

noButton.addEventListener("mouseover", function () {

    const screen =
        document.querySelector(".question-screen");

    const maxX =
        screen.clientWidth - noButton.offsetWidth - 20;

    const maxY =
        screen.clientHeight - noButton.offsetHeight - 20;

    const randomX =
        Math.random() * maxX;

    const randomY =
        Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

});
