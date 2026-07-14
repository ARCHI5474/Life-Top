/* ========================    管理者用：お知らせ枠書き換えエリア
========================================= */
const UPDATE_CONFIG = {
    notice: "LifeTopへの進化完了！ブックマーク編集（削除）モード、10色の追加テーマ＆アクセントカラー、充実の9ニュースジャンルを搭載しました。",
    tag: "LifeTop v1.0" 
};
/* ========================================= */

const STORAGE_KEY = 'lifetop_v1_0_data';
const themes = [
    "#2196F3", "#00BFA5", "#E91E63", "#673AB7", "#FF5722", "#4CAF50",
    "#FF2E93", "#FF8A00", "#FFD600", "#AEEA00", "#00E5FF", "#3F51B5",
    "#9C27B0", "#E040FB", "#795548", "#607D8B"
];
const fontStyles = [
    { name: 'Standard', family: "'Outfit', sans-serif" },
    { name: 'Digital', family: "'DotGothic16', sans-serif" },
    { name: 'Modern', family: "'Oswald', sans-serif" },
    { name: 'Mono', family: "'Roboto Mono', monospace" },
    { name: 'Classic', family: "'Courier Prime', monospace" }
];

const bgGradients = {
    'gradient-blue': 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    'gradient-sunset': 'linear-gradient(135deg, #440c19 0%, #762f07 50%, #9a5f07 100%)',
    'gradient-forest': 'linear-gradient(135deg, #0b2f28 0%, #134e42 100%)',
    'gradient-aurora': 'linear-gradient(135deg, #3b0d4c 0%, #173b5c 50%, #0d5440 100%)',
    'gradient-cyber': 'linear-gradient(135deg, #f72585 0%, #7209b7 50%, #3f37c9 100%)',
    'gradient-lavender': 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)',
    'gradient-peach': 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
    'gradient-midnight': 'linear-gradient(135deg, #090979 0%, #00d4ff 100%)',
    'gradient-deepsea': 'linear-gradient(135deg, #020024 0%, #090979 35%, #00d4ff 100%)',
    'gradient-sakura': 'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)',
    'gradient-autumn': 'linear-gradient(135deg, #f83600 0%, #f9d423 100%)',
    'gradient-neon': 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
    'gradient-monochrome': 'linear-gradient(135deg, #232526 0%, #414345 100%)',
    'gradient-matcha': 'linear-gradient(135deg, #556b2f 0%, #8fbc8f 100%)'
};

const unsplashImages = [
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1600&q=80"
];

const searchEngines = {
    google: {
        action: "https://www.google.com/search",
        placeholder: "Google で検索",
        icon: "search"
    },
    bing: {
        action: "https://www.bing.com/search",
        placeholder: "Bing で検索",
        icon: "travel_explore"
    },
    duckduckgo: {
        action: "https://duckduckgo.com/",
        placeholder: "DuckDuckGo で検索",
        icon: "shield_with_heart"
    }
};

const newsFeeds = {
    all: "https://news.google.com/rss?hl=ja&gl=JP&ceid=JP:ja",
    technology: "https://news.google.com/rss/headlines/section/topic/TECHNOLOGY?hl=ja&gl=JP&ceid=JP:ja",
    business: "https://news.google.com/rss/headlines/section/topic/BUSINESS?hl=ja&gl=JP&ceid=JP:ja",
    entertainment: "https://news.google.com/rss/headlines/section/topic/ENTERTAINMENT?hl=ja&gl=JP&ceid=JP:ja",
    sports: "https://news.google.com/rss/headlines/section/topic/SPORTS?hl=ja&gl=JP&ceid=JP:ja",
    science: "https://news.google.com/rss/headlines/section/topic/SCIENCE?hl=ja&gl=JP&ceid=JP:ja",
    health: "https://news.google.com/rss/headlines/section/topic/HEALTH?hl=ja&gl=JP&ceid=JP:ja",
    world: "https://news.google.com/rss/headlines/section/topic/WORLD?hl=ja&gl=JP&ceid=JP:ja",
    nation: "https://news.google.com/rss/headlines/section/topic/NATION?hl=ja&gl=JP&ceid=JP:ja"
};

// --- 固定ブックマーク（削除不可・フォルダ分け）の定義 ---
const FIXED_BOOKMARKS = {
    "検索・AI": [
        { title: "Google", url: "https://www.google.com" },
        { title: "Bing", url: "https://www.bing.com" },
        { title: "goo", url: "https://www.goo.ne.jp" },
        { title: "Gemini", url: "https://gemini.google.com" },
        { title: "ChatGPT", url: "https://chatgpt.com" },
        { title: "Claude", url: "https://claude.ai" }
    ],
    "マップ・路線": [
        { title: "Googleマップ", url: "https://www.google.co.jp/maps" },
        { title: "Bingマップ", url: "https://www.bing.com/maps" },
        { title: "ヤフーマップ", url: "https://map.yahoo.co.jp" },
        { title: "NAVITIME", url: "https://www.navitime.co.jp" },
        { title: "駅探", url: "https://ekitan.com" },
        { title: "ジョルダン", url: "https://www.jorudan.co.jp" },
        { title: "Yahoo!路線情報", url: "https://transit.yahoo.co.jp" },
        { title: "カーシェアマップ", url: "https://www.carsharemap.jp" }
    ],
    "交通・ライフ": [
        { title: "タイムズカー", url: "https://share.timescar.jp" },
        { title: "LUUP", url: "https://luup.sc" },
        { title: "日本郵便", url: "https://www.post.japanpost.jp" },
        { title: "ヤマト運輸", url: "https://www.kuronekoyamato.co.jp" },
        { title: "佐川急便", url: "https://www.sagawa-exp.co.jp" },
        { title: "17TRACK", url: "https://www.17track.net" },
        { title: "気象庁", url: "https://www.jma.go.jp" },
        { title: "Yahoo!天気", url: "https://weather.yahoo.co.jp" }
    ],
    "エンタメ・SNS": [
        { title: "YouTube", url: "https://www.youtube.com" },
        { title: "YouTube Music", url: "https://music.youtube.com" },
        { title: "Spotify", url: "https://open.spotify.com" },
        { title: "Apple Music", url: "https://music.apple.com" },
        { title: "Netflix", url: "https://www.netflix.com" },
        { title: "ニコニコ", url: "https://www.nicovideo.jp" },
        { title: "TVer", url: "https://tver.jp" },
        { title: "ABEMA", url: "https://abema.tv" },
        { title: "radiko", url: "https://radiko.jp" },
        { title: "NHKプラス", url: "https://plus.nhk.jp" },
        { title: "BOOK☆WALKER", url: "https://bookwalker.jp" },
        { title: "DMM", url: "https://www.dmm.com" },
        { title: "BOOTH", url: "https://booth.pm" },
        { title: "Pixiv", url: "https://www.pixiv.net" },
        { title: "Pixiv FANBOX", url: "https://www.fanbox.cc" },
        { title: "ニコニコ静画", url: "https://seiga.nicovideo.jp" },
        { title: "Discord", url: "https://discord.com" },
        { title: "Steam", url: "https://store.steampowered.com" }
    ],
    "ショッピング": [
        { title: "Amazon", url: "https://www.amazon.co.jp" },
        { title: "ヤフーショッピング", url: "https://shopping.yahoo.co.jp" },
        { title: "楽天市場", url: "https://www.rakuten.co.jp" },
        { title: "メルカリ", url: "https://jp.mercari.com" },
        { title: "ラクマ", url: "https://fril.jp" },
        { title: "PayPayフリマ", url: "https://paypayfleamarket.yahoo.co.jp" },
        { title: "Yahoo!オークション", url: "https://auctions.yahoo.co.jp" },
        { title: "ヨドバシ.com", url: "https://www.yodobashi.com" },
        { title: "ビックカメラ.com", url: "https://www.biccamera.com" },
        { title: "ヤマダウェブコム", url: "https://www.yamada-denkiweb.com" },
        { title: "ノジマオンライン", url: "https://online.nojima.co.jp" },
        { title: "モノタロウ", url: "https://www.monotaro.com" },
        { title: "ヨドバシ店舗在庫", url: "https://www.yodobashi.com/ec/support/service/receive/index.html" },
        { title: "価格.com", url: "https://kakaku.com" }
    ],
    "開発・技術": [
        { title: "GitHub", url: "https://github.com" },
        { title: "Replit", url: "https://replit.com" },
        { title: "Canva", url: "https://www.canva.com" },
        { title: "MDN Web Docs", url: "https://developer.mozilla.org" },
        { title: "DevDocs", url: "https://devdocs.io" },
        { title: "CodePen", url: "https://codepen.io" },
        { title: "JSFiddle", url: "https://jsfiddle.net" },
        { title: "Qiita", url: "https://qiita.com" },
        { title: "Zenn", url: "https://zenn.dev" },
        { title: "teratail", url: "https://teratail.com" },
        { title: "note", url: "https://note.com" },
        { title: "はてなブックマーク", url: "https://b.hatena.ne.jp" }
    ],
    "開発ツール": [
        { title: "DNS Checker", url: "https://dnschecker.org" },
        { title: "VirusTotal", url: "https://www.virustotal.com" },
        { title: "Fast.com", url: "https://fast.com" },
        { title: "TinyPNG", url: "https://tinypng.com" },
        { title: "ギガファイル便", url: "https://gigafile.nu" },
        { title: "RIPEstat", url: "https://stat.ripe.net" },
        { title: "bgp.he.net", url: "https://bgp.he.net" },
        { title: "BGP.Tools", url: "https://bgp.tools" },
        { title: "HE Looking Glass", url: "https://lg.he.net" },
        { title: "PeeringDB", url: "https://www.peeringdb.com" },
        { title: "Cloudflare Radar", url: "https://radar.cloudflare.com" },
        { title: "DNSViz", url: "https://dnsviz.net" },
        { title: "MXToolbox", url: "https://mxtoolbox.com" },
        { title: "IPinfo", url: "https://ipinfo.io" },
        { title: "ip.me", url: "https://ip.me" },
        { title: "WhatIsMyIP", url: "https://www.whatismyip.com" },
        { title: "ASN Lookup", url: "https://asn.cyanre.co" },
        { title: "JSONLint", url: "https://jsonlint.com" },
        { title: "JSON Formatter", url: "https://jsonformatter.curiousconcept.com" },
        { title: "regex101", url: "https://regex101.com" },
        { title: "CyberChef", url: "https://gchq.github.io/CyberChef" },
        { title: "Base64 Guru", url: "https://base64.guru" }
    ],
    "ビジネス・官公庁": [
        { title: "Notion", url: "https://www.notion.so" },
        { title: "GoogleToDo", url: "https://assistant.google.com/tasks" },
        { title: "Googleカレンダー", url: "https://calendar.google.com" },
        { title: "Googleドライブ", url: "https://drive.google.com" },
        { title: "MEGA", url: "https://mega.nz" },
        { title: "Dropbox", url: "https://www.dropbox.com" },
        { title: "iCloud", url: "https://www.icloud.com" },
        { title: "Gmail", url: "https://mail.google.com" },
        { title: "Outlook", url: "https://outlook.live.com" },
        { title: "OneDrive", url: "https://onedrive.live.com" },
        { title: "Googleストア", url: "https://store.google.com" },
        { title: "Apple Store", url: "https://www.apple.com/jp/store" },
        { title: "Playストア", url: "https://play.google.com" },
        { title: "Microsoft Store", url: "https://apps.microsoft.com" },
        { title: "日本年金機構", url: "https://www.nenkin.go.jp" },
        { title: "e-Tax", url: "https://www.e-tax.nta.go.jp" },
        { title: "マイナポータル", url: "https://myna.go.jp" },
        { title: "デジタル庁", url: "https://www.digital.go.jp" }
    ],
    "仕事・生活・住まい": [
        { title: "ハローワーク", url: "https://www.hellowork.mhlw.go.jp" },
        { title: "求人ボックス", url: "https://kyujinbox.com" },
        { title: "Indeed", url: "https://jp.indeed.com" },
        { title: "タイミー", url: "https://timee.co.jp" },
        { title: "CrowdWorks", url: "https://crowdworks.jp" },
        { title: "ランサーズ", url: "https://www.lancers.jp" },
        { title: "ココナラ", url: "https://coconala.com" },
        { title: "食べログ", url: "https://tabelog.com" },
        { title: "ぐるなび", url: "https://www.gnavi.co.jp" },
        { title: "ホットペッパーグルメ", url: "https://www.hotpepper.jp" },
        { title: "ホットペッパービューティー", url: "https://beauty.hotpepper.jp" },
        { title: "EPARK", url: "https://epark.jp" },
        { title: "SUUMO", url: "https://suumo.jp" },
        { title: "LIFULL HOME'S", url: "https://www.homes.co.jp" },
        { title: "at home", url: "https://www.athome.co.jp" },
        { title: "ジモティー", url: "https://jmty.jp" },
        { title: "Peing", url: "https://peing.net" },
        { title: "Mond", url: "https://mond.how" }
    ]
};

let userConfig = {
    username: "ゲスト",
    memo: "",
    bookmarks: [
        { title: "Google", url: "https://www.google.com" },
        { title: "YouTube", url: "https://www.youtube.com" },
        { title: "GitHub", url: "https://github.com" }
    ],
    todoList: [
        { id: 1, text: "LifeTopを自分好みに設定する", completed: false }
    ],
    theme: themes[0],
    fontFamily: fontStyles[0].family,
    bgType: "gradient-blue",
    clock12h: false,
    clockShowSec: false,
    searchEngine: "google",
    newsCategory: "all"
};

// 編集モードの状態管理
let bookmarkEditMode = false;
// 現在選択されているブックマークのカテゴリ/フォルダ
let currentBookmarkTab = "お気に入り"; 

// データのロード
function loadData() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if(saved) {
        try {
            const parsed = JSON.parse(saved);
            userConfig = {...userConfig, ...parsed};
        } catch (e) {
            console.error("Failed to parse settings", e);
        }
    }
    
    // UIへの値のセット
    document.getElementById('memo-area').value = userConfig.memo || "";
    document.getElementById('username-input').value = userConfig.username || "";
    document.getElementById('clock-12h-toggle').checked = userConfig.clock12h;
    document.getElementById('clock-show-sec-toggle').checked = userConfig.clockShowSec;
    
    // 管理者設定の反映
    document.getElementById('notice-text').innerText = UPDATE_CONFIG.notice;
    document.querySelector('.notice-tag').innerText = UPDATE_CONFIG.tag;

    applyStyles();
    renderBookmarks();
    renderTodoList();
    renderBgSelector();
    initPickers();
    selectEngine(userConfig.searchEngine, false);
    changeNewsCategory(userConfig.newsCategory, false);
}

function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userConfig));
}

// スタイルの適用
function applyStyles() {
    document.documentElement.style.setProperty('--p', userConfig.theme);
    const rgb = hexToRgb(userConfig.theme);
    if (rgb) {
        document.documentElement.style.setProperty('--p-rgb', `${rgb.r}, ${rgb.g}, ${rgb.b}`);
    }
    document.documentElement.style.setProperty('--clock-f', userConfig.fontFamily);
    
    // 背景の適用
    const bgOverlay = document.getElementById('bg-overlay');
    if (userConfig.bgType === 'unsplash') {
        const day = new Date().getDate();
        const imgUrl = unsplashImages[day % unsplashImages.length];
        bgOverlay.style.background = `url('${imgUrl}')`;
        bgOverlay.style.backgroundSize = 'cover';
        bgOverlay.style.backgroundPosition = 'center';
    } else {
        const gradient = bgGradients[userConfig.bgType] || bgGradients['gradient-blue'];
        bgOverlay.style.background = gradient;
    }
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// 背景デザイン選択ボタンの動的レンダリング
function renderBgSelector() {
    const container = document.getElementById('bg-selector-grid');
    if (!container) return;
    
    let html = "";
    Object.keys(bgGradients).forEach(key => {
        const activeClass = (userConfig.bgType === key) ? 'active' : '';
        html += `<div class="bg-option ${activeClass}" style="background: ${bgGradients[key]}" onclick="setBg('${key}', this)"></div>`;
    });
    
    const unsplashActive = (userConfig.bgType === 'unsplash') ? 'active' : '';
    html += `
        <div class="bg-option bg-img-option ${unsplashActive}" id="unsplash-bg-btn" onclick="setBg('unsplash', this)">
            <span class="material-symbols-outlined">image</span>
        </div>
    `;
    
    container.innerHTML = html;
}

// ピッカーの初期化
function initPickers() {
    // アクセントカラーピッカー
    const colorsContainer = document.getElementById('theme-colors');
    colorsContainer.innerHTML = themes.map(c => {
        const activeClass = (c.toLowerCase() === userConfig.theme.toLowerCase()) ? 'active' : '';
        return `<div class="color-dot ${activeClass}" style="background:${c}" onclick="setTheme('${c}', this)"></div>`;
    }).join('');

    // フォントピッカー
    const fontsContainer = document.getElementById('font-styles');
    fontsContainer.innerHTML = fontStyles.map(f => {
        const activeClass = (f.family === userConfig.fontFamily) ? 'active' : '';
        return `<button class="font-btn ${activeClass}" style="font-family:${f.family}" onclick="setFontFamily('${f.family}', this)">${f.name}</button>`;
    }).join('');
}

// 設定変更
function setTheme(c, element) {
    userConfig.theme = c;
    applyStyles();
    save();
    
    document.querySelectorAll('#theme-colors .color-dot').forEach(el => el.classList.remove('active'));
    if (element) element.classList.add('active');
}

function setFontFamily(f, element) {
    userConfig.fontFamily = f;
    applyStyles();
    save();
    
    document.querySelectorAll('#font-styles .font-btn').forEach(el => el.classList.remove('active'));
    if (element) element.classList.add('active');
}

function saveUsername(val) {
    userConfig.username = val || "ゲスト";
    save();
    updateGreeting();
}

function toggleClock12h(checked) {
    userConfig.clock12h = checked;
    save();
    updateClock();
}

function toggleClockSec(checked) {
    userConfig.clockShowSec = checked;
    save();
    
    const secEl = document.getElementById('clock-sec');
    secEl.style.display = checked ? 'block' : 'none';
    updateClock();
}

// 背景の選択
function setBg(type, element) {
    userConfig.bgType = type;
    applyStyles();
    save();
    
    document.querySelectorAll('.bg-option').forEach(el => el.classList.remove('active'));
    if (element) {
        element.classList.add('active');
    } else {
        renderBgSelector();
    }
}

// 設定パネルトグル
function toggleSettings() {
    const panel = document.getElementById('settings-panel');
    panel.classList.toggle('active');
}

// 挨拶と時計の更新
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    let ampm = "";
    if (userConfig.clock12h) {
        ampm = hours >= 12 ? " PM" : " AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
    }
    
    const hourStr = hours.toString().padStart(2, '0');
    document.getElementById('clock').innerText = `${hourStr}:${minutes}${ampm}`;
    document.getElementById('clock-sec').innerText = seconds;
    
    const days = ['日', '月', '火', '水', '木', '金', '土'];
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const dayName = days[now.getDay()];
    document.getElementById('date-display').innerText = `${year}年${month}月${date}日 (${dayName})`;
}

function updateGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greetingText = "こんにちは";
    
    if (hours >= 4 && hours < 11) {
        greetingText = "おはようございます";
    } else if (hours >= 11 && hours < 17) {
        greetingText = "こんにちは";
    } else {
        greetingText = "こんばんは";
    }
    
    const name = userConfig.username || "ゲスト";
    document.getElementById('greeting').innerText = `${greetingText}、${name}さん。`;
}

// 検索エンジンの制御
function toggleSearchEngines(e) {
    e.stopPropagation();
    const dropdown = document.getElementById('engines-dropdown');
    dropdown.classList.toggle('active');
}

function selectEngine(key, isSave = true) {
    const engine = searchEngines[key] || searchEngines.google;
    userConfig.searchEngine = key;
    if (isSave) save();
    
    const form = document.getElementById('search-form');
    const bar = form.querySelector('.search-bar');
    const icon = document.getElementById('current-engine-icon');
    
    form.action = engine.action;
    bar.placeholder = engine.placeholder;
    icon.innerText = engine.icon;
    
    document.getElementById('engines-dropdown').classList.remove('active');
}

// ブックマーク編集モード切り替え
function toggleBookmarkEditMode() {
    bookmarkEditMode = !bookmarkEditMode;
    const card = document.querySelector('.bookmark-card');
    const btn = document.getElementById('edit-bookmarks-btn');
    
    if (bookmarkEditMode) {
        card.classList.add('edit-mode');
        btn.classList.add('active');
    } else {
        card.classList.remove('edit-mode');
        btn.classList.remove('active');
    }
}

// ブックマークのレンダリング（フォルダ分け・固定データ対応版）
function renderBookmarks() {
    const grid = document.getElementById('bookmark-grid');
    const tabsContainer = document.getElementById('bookmark-tabs');
    const addBtn = document.querySelector('.add-bookmark-btn');
    const editBtn = document.getElementById('edit-bookmarks-btn');
    
    // --- 1. カテゴリタブのレンダリング ---
    const allCategories = ["お気に入り", ...Object.keys(FIXED_BOOKMARKS)];
    tabsContainer.innerHTML = allCategories.map(cat => {
        const activeClass = (cat === currentBookmarkTab) ? 'active' : '';
        return `<span class="bookmark-tab-item ${activeClass}" onclick="switchBookmarkTab('${cat}')">${cat}</span>`;
    }).join('');

    // 「お気に入り」フォルダ以外のときは、編集モードを解除し、追加/編集ボタンを非表示にする
    if (currentBookmarkTab !== "お気に入り") {
        bookmarkEditMode = false;
        const card = document.querySelector('.bookmark-card');
        card.classList.remove('edit-mode');
        editBtn.classList.remove('active');
        
        addBtn.style.display = 'none';
        editBtn.style.display = 'none';
    } else {
        addBtn.style.display = 'flex';
        editBtn.style.display = 'grid';
    }

    // --- 2. ブックマークリストの取得 ---
    let bookmarksToRender = [];
    let isFixed = false;

    if (currentBookmarkTab === "お気に入り") {
        bookmarksToRender = userConfig.bookmarks || [];
    } else {
        bookmarksToRender = FIXED_BOOKMARKS[currentBookmarkTab] || [];
        isFixed = true; // 固定フォルダフラグ
    }

    if (bookmarksToRender.length === 0) {
        grid.innerHTML = `<div style="grid-column: span 4; text-align: center; color: var(--text-secondary); font-size: 0.85rem; padding: 20px 0;">ブックマークがありません</div>`;
        return;
    }
    
    grid.innerHTML = bookmarksToRender.map((b, index) => {
        let domain = "";
        try {
            domain = new URL(b.url).hostname;
        } catch (e) {
            domain = "";
        }
        
        const faviconUrl = domain 
            ? `https://www.google.com/s2/favicons?domain=${domain}&sz=64` 
            : "";
            
        const iconHtml = faviconUrl 
            ? `<img src="${faviconUrl}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block'" alt="${b.title}"><span class="icon-letter" style="display:none">${b.title[0]}</span>`
            : `<span class="icon-letter">${b.title[0]}</span>`;
            
        // 固定ブックマークの場合は削除ボタンを非表示にする
        const deleteBtnHtml = isFixed ? "" : `
            <button class="bookmark-delete-btn" onclick="deleteBookmark(${index}, event)">
                <span class="material-symbols-outlined" style="font-size:12px">close</span>
            </button>
        `;

        return `
            <div class="bookmark-item-wrapper" style="position: relative;">
                <a href="${b.url}" class="bookmark-item" target="_blank" title="${b.title}">
                    <div class="icon-wrapper">
                        ${iconHtml}
                    </div>
                    <span class="bookmark-title">${b.title}</span>
                </a>
                ${deleteBtnHtml}
            </div>
        `;
    }).join('');
}

// フォルダ（タブ）切り替え
function switchBookmarkTab(cat) {
    currentBookmarkTab = cat;
    renderBookmarks();
}

// タブを矢印ボタンで左右にスムーズスクロールさせる関数
function scrollTabs(distance) {
    const tabsContainer = document.getElementById('bookmark-tabs');
    if (tabsContainer) {
        tabsContainer.scrollBy({
            left: distance,
            behavior: 'smooth'
        });
    }
}

function addBookmark() {
    const title = prompt("ブックマーク名を入力してください:");
    if (!title) return;
    let url = prompt("URLを入力してください:", "https://");
    if (!url) return;
    
    if (!/^https?:\/\//i.test(url)) {
        url = "https://" + url;
    }
    
    userConfig.bookmarks.push({ title, url });
    save();
    renderBookmarks();
}

function deleteBookmark(index, event) {
    event.preventDefault();
    event.stopPropagation();
    if (confirm(`「${userConfig.bookmarks[index].title}」を削除しますか？`)) {
        userConfig.bookmarks.splice(index, 1);
        save();
        renderBookmarks();
    }
}

// ToDo / メモ タブ切り替え
function switchUtilityTab(tabName) {
    document.querySelectorAll('.utility-tabs .tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.querySelectorAll('.utility-card .tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    if (tabName === 'todo') {
        document.querySelector(".utility-tabs button:nth-child(1)").classList.add('active');
        document.getElementById('todo-tab-content').classList.add('active');
    } else {
        document.querySelector(".utility-tabs button:nth-child(2)").classList.add('active');
        document.getElementById('memo-tab-content').classList.add('active');
    }
}

// ToDo操作
function renderTodoList() {
    const list = document.getElementById('todo-list');
    if (!userConfig.todoList || userConfig.todoList.length === 0) {
        list.innerHTML = `<li style="text-align: center; color: var(--text-secondary); font-size: 0.85rem; padding: 20px 0;">タスクはありません。</li>`;
        return;
    }
    
    list.innerHTML = userConfig.todoList.map(t => {
        const completedClass = t.completed ? 'completed' : '';
        return `
            <li class="todo-item ${completedClass}" id="todo-item-${t.id}">
                <div class="todo-item-left" onclick="toggleTodo(${t.id})">
                    <div class="todo-checkbox">
                        <span class="material-symbols-outlined">check</span>
                    </div>
                    <span class="todo-text">${escapeHtml(t.text)}</span>
                </div>
                <button class="todo-delete" onclick="deleteTodo(${t.id})">
                    <span class="material-symbols-outlined" style="font-size: 18px">delete</span>
                </button>
            </li>
        `;
    }).join('');
}

function addTodo() {
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    if (!text) return;
    
    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    
    if (!userConfig.todoList) userConfig.todoList = [];
    userConfig.todoList.push(newTodo);
    save();
    renderTodoList();
    input.value = "";
}

function toggleTodo(id) {
    const todo = userConfig.todoList.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        save();
        renderTodoList();
    }
}

function deleteTodo(id) {
    userConfig.todoList = userConfig.todoList.filter(t => t.id !== id);
    save();
    renderTodoList();
}

function escapeHtml(string) {
    if (typeof string !== 'string') {
        return string;
    }
    return string.replace(/[&'`"<>]/g, function(match) {
        return {
            '&': '&amp;',
            "'": '&#x27;',
            '`': '&#x60;',
            '"': '&quot;',
            '<': '&lt;',
            '>': '&gt;'
        }[match];
    });
}

// ニュース
async function changeNewsCategory(cat, isSave = true) {
    userConfig.newsCategory = cat;
    if (isSave) save();
    
    const tabs = document.querySelectorAll('.news-categories .news-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    const catKeys = Object.keys(newsFeeds);
    const catIndex = catKeys.indexOf(cat);
    if (catIndex !== -1 && tabs[catIndex]) {
        tabs[catIndex].classList.add('active');
    }
    
    await fetchNews();
}

async function fetchNews() {
    const list = document.getElementById('news-list');
    list.innerHTML = `<li style="text-align:center; padding: 20px 0;"><span class="material-symbols-outlined" style="animation: spin 1s linear infinite;">autorenew</span> ニュースを読み込み中...</li>`;
    
    const rssUrl = newsFeeds[userConfig.newsCategory] || newsFeeds.all;
    
    try {
        const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
        const data = await res.json();
        
        if (data.status === 'ok' && data.items && data.items.length > 0) {
            list.innerHTML = data.items.slice(0, 10).map((item, index) => {
                const titleParts = item.title.split(' - ');
                const title = titleParts[0];
                const source = titleParts[1] ? `<span style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 4px; display: block;">${titleParts[1]}</span>` : "";
                
                const delay = (index * 0.05).toFixed(2);
                return `<li style="animation-delay: ${delay}s"><a href="${item.link}" target="_blank">${title}${source}</a></li>`;
            }).join('');
        } else {
            throw new Error("Invalid RSS response");
        }
    } catch (e) {
        list.innerHTML = `<li style="color: #ef4444; text-align: center; padding: 20px 0;">ニュースの取得に失敗しました。<br><span style="font-size:0.8rem; opacity:0.7;">ネットワーク状況またはAPI制限の可能性があります。</span></li>`;
    }
}

// 天気ウィジェット (位置情報 or デフォルト東京)
async function fetchWeather() {
    let lat = 35.6785;
    let lon = 139.6823;
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                lat = position.coords.latitude;
                lon = position.coords.longitude;
                getWeatherData(lat, lon);
            },
            (error) => {
                console.log("位置情報の取得失敗。東京の天気を表示します。");
                getWeatherData(lat, lon);
            },
            { timeout: 5000 }
        );
    } else {
        getWeatherData(lat, lon);
    }
}

async function getWeatherData(lat, lon) {
    const tempEl = document.getElementById('weather-temp');
    const descEl = document.getElementById('weather-desc');
    const iconEl = document.getElementById('weather-icon');
    
    try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`);
        const data = await res.json();
        
        if (data && data.current_weather) {
            const temp = Math.round(data.current_weather.temperature);
            const code = data.current_weather.weathercode;
            
            tempEl.innerText = `${temp}°C`;
            const wInfo = parseWeatherCode(code);
            descEl.innerText = wInfo.text;
            iconEl.innerText = wInfo.icon;
        } else {
            throw new Error("Invalid weather response");
        }
    } catch (e) {
        tempEl.innerText = "--°C";
        descEl.innerText = "エラー";
        iconEl.innerText = "cloud_off";
    }
}

function parseWeatherCode(code) {
    const mapping = {
        0: { text: "快晴", icon: "wb_sunny" },
        1: { text: "晴れ", icon: "wb_sunny" },
        2: { text: "一部曇", icon: "filter_drama" },
        3: { text: "曇り", icon: "cloud" },
        45: { text: "霧", icon: "foggy" },
        48: { text: "霧", icon: "foggy" },
        51: { text: "弱い霧雨", icon: "rainy" },
        53: { text: "霧雨", icon: "rainy" },
        55: { text: "強い霧雨", icon: "rainy" },
        61: { text: "小雨", icon: "rainy" },
        63: { text: "雨", icon: "rainy" },
        65: { text: "大雨", icon: "rainy" },
        71: { text: "小雪", icon: "ac_unit" },
        73: { text: "雪", icon: "ac_unit" },
        75: { text: "大雪", icon: "ac_unit" },
        77: { text: "細かい雪", icon: "ac_unit" },
        80: { text: "にわか雨", icon: "rainy_light" },
        81: { text: "にわか雨", icon: "rainy" },
        82: { text: "激しいにわか雨", icon: "rainy" },
        85: { text: "にわか雪", icon: "ac_unit" },
        86: { text: "激しいにわか雪", icon: "ac_unit" },
        95: { text: "雷雨", icon: "thunderstorm" },
        96: { text: "ひょうを伴う雷雨", icon: "thunderstorm" },
        99: { text: "激しい雷雨", icon: "thunderstorm" }
    };
    
    return mapping[code] || { text: "不明", icon: "filter_drama" };
}

window.addEventListener('click', function(e) {
    const dropdown = document.getElementById('engines-dropdown');
    const selector = document.querySelector('.search-engine-selector');
    if (dropdown && dropdown.classList.contains('active') && e.target !== selector && !selector.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

document.getElementById('memo-area').addEventListener('input', () => {
    userConfig.memo = document.getElementById('memo-area').value;
    save();
});

window.onload = () => {
    loadData();
    updateClock();
    updateGreeting();
    
    setInterval(updateClock, 1000);
    setInterval(updateGreeting, 1800000);
    
    fetchWeather();
    setInterval(fetchWeather, 3600000);
};
