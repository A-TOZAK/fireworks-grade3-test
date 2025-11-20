document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const homeView = document.getElementById('home-view');
    const categoryView = document.getElementById('category-view');
    const categoryContent = document.getElementById('category-content');
    const backButton = document.getElementById('back-button');
    const sourcesButton = document.getElementById('sources-button');
    const sourcesModal = document.getElementById('sources-modal');
    const closeModalButton = document.getElementById('close-modal');
    const navCards = document.querySelectorAll('.nav-card');

    // Content Data (Simulated for now, or we could pull from hidden HTML elements)
    const categoryData = {
        community: {
            title: '地域の人と一緒に',
            color: 'blue',
            icon: '🤝',
            content: `
                <div class="space-y-6 animate-fadeIn">
                    <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                        <h3 class="text-xl font-bold text-blue-800 mb-3"><ruby>避難訓練<rt>ひなんくんれん</rt></ruby>に<ruby>参加<rt>さんか</rt></ruby>しよう</h3>
                        <p class="text-gray-700 leading-relaxed">
                            <ruby>地域<rt>ちいき</rt></ruby>では、<ruby>火事<rt>かじ</rt></ruby>や<ruby>地震<rt>じしん</rt></ruby>にそなえて、<ruby>避難訓練<rt>ひなんくんれん</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>っています。
                            おとなの<ruby>人<rt>ひと</rt></ruby>といっしょに<ruby>参加<rt>さんか</rt></ruby>して、<ruby>避難場所<rt>ひなんばしょ</rt></ruby>や<ruby>逃<rt>に</rt></ruby>げ<ruby>方<rt>かた</rt></ruby>をおぼえましょう。
                        </p>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 class="text-xl font-bold text-gray-800 mb-3"><ruby>消防団<rt>しょうぼうだん</rt></ruby>ってなに？</h3>
                        <p class="text-gray-700 leading-relaxed mb-4">
                            <ruby>消防署<rt>しょうぼうしょ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>だけでなく、<ruby>地域<rt>ちいき</rt></ruby>には「<ruby>消防団<rt>しょうぼうだん</rt></ruby>」という<ruby>人<rt>ひと</rt></ruby>たちがいます。
                            <ruby>普段<rt>ふだん</rt></ruby>は<ruby>別<rt>べつ</rt></ruby>の<ruby>仕事<rt>しごと</rt></ruby>をしていますが、<ruby>火事<rt>かじ</rt></ruby>がおきるとかけつけて、<ruby>消火<rt>しょうか</rt></ruby><ruby>活動<rt>かつどう</rt></ruby>をします。
                        </p>
                        <div class="flex justify-center">
                            <span class="text-4xl">🚒</span>
                        </div>
                    </div>
                </div>
            `
        },
        doors: {
            title: '安全な逃げ道',
            color: 'red',
            icon: '🚪',
            content: `
                <div class="space-y-6 animate-fadeIn">
                    <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                        <h3 class="text-xl font-bold text-red-800 mb-3"><ruby>防火扉<rt>ぼうかとびら</rt></ruby>のまわり</h3>
                        <p class="text-gray-700 leading-relaxed">
                            <ruby>学校<rt>がっこう</rt></ruby>やマンションには「<ruby>防火扉<rt>ぼうかとびら</rt></ruby>」があります。
                            <ruby>火事<rt>かじ</rt></ruby>のとき、<ruby>煙<rt>けむり</rt></ruby>や<ruby>火<rt>ひ</rt></ruby>が<ruby>広<rt>ひろ</rt></ruby>がらないようにするための<ruby>扉<rt>とびら</rt></ruby>です。
                            このまわりに<ruby>物<rt>もの</rt></ruby>を<ruby>置<rt>お</rt></ruby>くと、<ruby>扉<rt>とびら</rt></ruby>が<ruby>閉<rt>し</rt></ruby>まらなくなってしまいます。
                        </p>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 class="text-xl font-bold text-gray-800 mb-3"><ruby>廊下<rt>ろうか</rt></ruby>はきれいに</h3>
                        <p class="text-gray-700 leading-relaxed">
                            <ruby>逃<rt>に</rt></ruby>げるときに<ruby>転<rt>ころ</rt></ruby>ばないように、<ruby>廊下<rt>ろうか</rt></ruby>や<ruby>階段<rt>かいだん</rt></ruby>には<ruby>物<rt>もの</rt></ruby>を<ruby>置<rt>お</rt></ruby>かないようにしましょう。
                        </p>
                    </div>
                </div>
            `
        },
        fire_check: {
            title: 'おうちの火の元チェック',
            color: 'orange',
            icon: '🔥',
            content: `
                <div class="space-y-6 animate-fadeIn">
                    <div class="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                        <h3 class="text-xl font-bold text-orange-800 mb-3">おうちの<ruby>人<rt>ひと</rt></ruby>とチェックしよう</h3>
                        <ul class="list-disc list-inside space-y-2 text-gray-700">
                            <li>ストーブのまわりに<ruby>燃<rt>も</rt></ruby>えやすいものはないかな？</li>
                            <li>コンロのまわりはきれいかな？</li>
                            <li>タコ<ruby>足配線<rt>あしはいせん</rt></ruby>になっていないかな？</li>
                        </ul>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 class="text-xl font-bold text-gray-800 mb-3"><ruby>住宅用火災警報器<rt>じゅうたくようかさいけいほうき</rt></ruby></h3>
                        <p class="text-gray-700 leading-relaxed">
                            <ruby>天井<rt>てんじょう</rt></ruby>についている「<ruby>火災警報器<rt>かさいけいほうき</rt></ruby>」を<ruby>知<rt>し</rt></ruby>っていますか？
                            <ruby>煙<rt>けむり</rt></ruby>や<ruby>熱<rt>ねつ</rt></ruby>を<ruby>感<rt>かん</rt></ruby>じて、<ruby>音<rt>おと</rt></ruby>で<ruby>知<rt>し</rt></ruby>らせてくれます。
                            <ruby>電池<rt>でんち</rt></ruby>が<ruby>切<rt>き</rt></ruby>れていないか、ボタンを<ruby>押<rt>お</rt></ruby>して<ruby>確<rt>たし</rt></ruby>かめてみましょう。
                        </p>
                    </div>
                </div>
            `
        },
        cleaning: {
            title: 'お掃除も防火',
            color: 'teal',
            icon: '🧹',
            content: `
                <div class="space-y-6 animate-fadeIn">
                    <div class="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-500">
                        <h3 class="text-xl font-bold text-teal-800 mb-3">コンセントのほこり</h3>
                        <p class="text-gray-700 leading-relaxed">
                            コンセントとプラグの<ruby>間<rt>あいだ</rt></ruby>にほこりがたまると、そこから<ruby>火<rt>ひ</rt></ruby>が<ruby>出<rt>で</rt></ruby>ることがあります。
                            これを「トラッキング<ruby>現象<rt>げんしょう</rt></ruby>」といいます。
                            <ruby>定期的<rt>ていきてき</rt></ruby>に<ruby>掃除<rt>そうじ</rt></ruby>をして、ほこりを<ruby>取<rt>と</rt></ruby>りましょう。
                        </p>
                    </div>
                </div>
            `
        },
        planning: {
            title: '計画してやってみよう',
            color: 'purple',
            icon: '📝',
            content: `
                <div class="space-y-6 animate-fadeIn">
                    <div class="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                        <h3 class="text-xl font-bold text-purple-800 mb-3"><ruby>防火<rt>ぼうか</rt></ruby>ポスターを<ruby>作<rt>つく</rt></ruby>ろう</h3>
                        <p class="text-gray-700 leading-relaxed">
                            <ruby>火事<rt>かじ</rt></ruby>の<ruby>怖<rt>こわ</rt></ruby>さや、<ruby>気<rt>き</rt></ruby>をつけることを<ruby>絵<rt>え</rt></ruby>と<ruby>文字<rt>もじ</rt></ruby>で<ruby>伝<rt>つた</rt></ruby>えるポスターを<ruby>描<rt>か</rt></ruby>いてみましょう。
                            <ruby>学校<rt>がっこう</rt></ruby>や<ruby>地域<rt>ちいき</rt></ruby>に<ruby>貼<rt>は</rt></ruby>ってもらうと、みんなの<ruby>役<rt>やく</rt></ruby>に<ruby>立<rt>た</rt></ruby>ちます。
                        </p>
                    </div>
                </div>
            `
        },
        telling: {
            title: 'みんなに伝えよう',
            color: 'pink',
            icon: '📢',
            content: `
                <div class="space-y-6 animate-fadeIn">
                    <div class="bg-pink-50 p-6 rounded-xl border-l-4 border-pink-500">
                        <h3 class="text-xl font-bold text-pink-800 mb-3"><ruby>家族<rt>かぞく</rt></ruby>と<ruby>話<rt>はな</rt></ruby>そう</h3>
                        <p class="text-gray-700 leading-relaxed">
                            <ruby>今日<rt>きょう</rt></ruby><ruby>学<rt>まな</rt></ruby>んだことを、おうちの<ruby>人<rt>ひと</rt></ruby>に<ruby>話<rt>はな</rt></ruby>してみましょう。
                            「<ruby>避難場所<rt>ひなんばしょ</rt></ruby>はどこ？」「<ruby>消火器<rt>しょうかき</rt></ruby>はある？」など、<ruby>質問<rt>しつもん</rt></ruby>してみるのもいいですね。
                        </p>
                    </div>
                </div>
            `
        }
    };

    // Navigation Logic
    navCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            const data = categoryData[category];

            if (data) {
                // Update Header
                const header = document.getElementById('category-header');
                header.className = `p-5 bg-${data.color}-500 transition-colors duration-300`;

                // Update Content
                categoryContent.innerHTML = `
                    <div class="text-center mb-8">
                        <div class="inline-block p-4 rounded-full bg-${data.color}-100 text-4xl mb-4 animate-bounce-gentle">
                            ${data.icon}
                        </div>
                        <h2 class="text-3xl font-bold text-${data.color}-800 mb-2">${data.title}</h2>
                    </div>
                    ${data.content}
                `;

                // Switch Views
                homeView.classList.add('hidden');
                categoryView.classList.remove('hidden');
                window.scrollTo(0, 0);
            }
        });
    });

    backButton.addEventListener('click', () => {
        categoryView.classList.add('hidden');
        homeView.classList.remove('hidden');
    });

    // Modal Logic
    sourcesButton.addEventListener('click', () => {
        sourcesModal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    const closeModal = () => {
        sourcesModal.classList.remove('show');
        document.body.style.overflow = '';
    };

    closeModalButton.addEventListener('click', closeModal);

    // Close on click outside
    window.addEventListener('click', (e) => {
        if (e.target === sourcesModal) {
            closeModal();
        }
    });

    // Add animation classes on scroll (Simple version)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    });
});
