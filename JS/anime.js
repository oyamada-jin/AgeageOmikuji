// anime
var anime_meigen = ['自分が死ぬときのことは分からんけど　生き様で後悔はしたくない',
'誰かを呪う暇があったら　大切な人のことを考えていたいの',
'『死んで勝つ』と『死んでも勝つ』は　全然違うよ',
'敵だからって根絶やしにしていいのかな？',
'自分の判断を信じろエマ　そしてそれでどんな結果が出ても前へ進め',
'納得してねぇならとことん向き合った方がいい',
'君が救けを求める顔してた',
'なれるかなれねぇかなんてくだらねぇこと言うんじゃねぇ！！　信じると言われたならそれに応えること以外考えんじゃねぇ！！',
'生殺与奪の権を他人に握らせるな！！',
'老いることも死ぬことも人間という儚い生き物の美しさだ　老いるからこそ死ぬからこそ　堪らなく愛おしく尊いのだ',
'存在することは罪にはならねェ！！！',
'失ったものばかり数えるな！！！！',
'人はいつ死ぬと思う…？ 心臓を銃で撃ち抜かれた時……違う 不治の病に犯された時……違う 猛毒キノコのスープを飲んだ時……違う!!! …人に 忘れられた時さ…!!!',
'奇跡は諦めない奴の頭上にしか降りて来ない!!!!“奇跡”ナメるんじゃないよォ!!!!',
'戦わなければ　勝てない…',
'何かを変えることができる人間がいるとすれば　その人は　きっと大事なものを捨てることができる人だ',
'真理は残酷だが正しい',
'俺が信じるお前でもない。お前が信じる俺でもない。お前が信じる、お前を信じろ！',
'嫌な時はなぁ、逃げたっていいんだよ！',
'全部は手に入らねぇ。だから手に入れたものを大切にするんだ。欲張るな。俺は仲間がいれば他に何も要らねぇよ',
'生きるのを諦めるな',
'どんなにどんなに落ちぶれたって、自分は自分の目指す自分になれるんです！自分がなりたい自分になれるんです！',
'昨日の私よりも、今日の私がちょっとだけ優しい人間であればいいなと思いながら生きています',
'心を燃やせ',
'なりてえもん ちゃんと見ろ!!',
'間違っているとか正しいとか、誰が決められるっていうのよ',
'あなたの判断で行動すればいい。未来における自分の責任は現在の自分が負うべき。それがあなたの未来',
'他人が俺のことを幸せとか不幸とか言うんじゃねぇよ！それが見下してるって言うんだ',
'負けたことがあるというのが、いつか大きな財産になる',
'大事なのは、どんな道を選んだとしても、それを言い訳にしないことだ。'
];
var b = Math.floor(Math.random() * anime_meigen.length);
var anime = anime_meigen[b];
// アニメのキャラクター
var anime_hito = [
'虎杖悠二',
'津美紀',
'五条悟',
'エマ',
'ユウゴ',
'レイ',
'緑谷出久',
'嘴平伊之助',
'冨岡義勇',
'煉獄杏寿郎',
'フランキー',
'ジンベエ',
'ヒルルク',
'エンポリオ・イワンコフ',
'ミカサ・アッカーマン',
'アルミン',
'イズミ・カーティス',
'カミナ',
'霊幻新隆',
'ナツ・ドラグニル',
'天羽奏',
'シャーロック・シェリンフォード',
'牧之原翔子',
'煉獄杏寿郎',
'轟焦凍',
'紅月 カレン',
'長門 有希',
'カズマ',
'堂本監督',
'スナフキン'
]
var hito_2 = anime_hito[b];
// animeのやつ
function start_button_2() {
    const yurasu = document.getElementById('img_yureru');
    if (yurasu.className == null || yurasu.className == "") {
        yurasu.className = 'omikuji_img';
    }
    const StartButton = document.getElementById("button_start_2");
    const StopButton = document.getElementById("button_stop_2");
    StartButton.style.display = 'none';
    StopButton.style.display = 'block';
}

function stop_button_2() {
    const yurasu = document.getElementById('img_yureru');
    yurasu.className = '';
    const StartButton = document.getElementById("button_start_2");
    const StopButton = document.getElementById("button_stop_2");
    StartButton.style.display = 'block';
    StopButton.style.display = 'none';
    location.href ='./anime1-2.html';
}
window.onload = function(){
      document.getElementById('kekka').innerHTML = anime;
      document.getElementById('hito').innerHTML = hito_2;
}