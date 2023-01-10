//歌詞のやつ
var meigen_music = ['少しくらいは不安だってばこれが私の生きる道',
'別れる理由3つあるなら別れない理由100探すから',
'世界中に定められたどんな記念日なんかよりあなたが生きている今日はどんなに素晴らしいだろう',
'人間なんて誰だってとてもふつうで出会いはどれだって特別だろう',
'あぁあなたに出逢えたただそれだけで私のこの人生は価値があると言える',
'帰りたくなったよ君が待つ家に聞いてほしい話があるよ笑ってくれたなら嬉しいな',
'いつもいつもありがとねなんでそれが言えないかな',
'僕らは知っている奇跡は死んでいる努力も孤独も報われないことがあるだけどねそれでもね今日まで歩いてきた日々を人は呼ぶそれがね、軌跡だと',
'僕はこんな歌であんな歌で恋を乗り越えてきた',
'上手くはいかぬこともあるけれど天を仰げばそれさえ小さくて',
'恋しちゃったんだたぶん気づいてないでしょう？',
'人生の全てに意味があるから恐れずにあなたの夢を育てて',
'あなたの笑顔に何度助けられただろうありがとうありがとうBestFriend',
'愛しぬけるポイントがひとつありゃいいのにそれだけでいいのに',
'難しく考え出すと結局全てが嫌になってそっとそっと逃げ出したくなるけど高ければ高い壁の方が登った時気持ちいいもんなまだ限界だなんて認めちゃいないさ',
'誰もが無限の可能性を抱きしめて生まれてきたんでしょうねぇ',
'もしそれが君のほんのイチブだとしても何よりも確実にはっきり好きなところなんだ',
'光を求め歩きつづける君の情熱がいつの日か誰かにとっての光となるでしょう誰かにとっての兆しとなるでしょう',
'さよならなんかは言わないで弱音を吐くならさあ聞いてやる',
'できることできないことがそんなあっさりわかるの？',
'要するに感謝の気持ちを忘れて僕ら離れ離れになったもしかしたら忘れ物ってそれじゃないの？',
'でっかい理想謳うのもいいでもキミが泣いているのならどんな夢も足元からぐらつく',
'ちょっとの誤解も錯覚も許せない余裕のなさそれが命とり',
'ありえないと言いながらいつかこうなる日がきますようにと強く願っていたんだ人のせいにゃできないだろう',
'なにもかもがいやになったってかまわないただ嘆くそれだけでもいい',
'笑う奴には唾を吐けにっちもさっちもいかない？綺麗事に踊り踊らされ大人の言う常識なんてものは丸めて捨てちまえ',
'人はそれぞれ「正義」があって、争い合うのは仕方ないのかも知れないだけど僕の嫌いな彼も彼なりの理由があるとおもうんだ',
'自分で自分を分類するなよ壊して見せろよそのBadHabit',
'心は誰にも見えないのだから見えるものよりも大事にするといい',
'僕らは日々をスクロールしてたまに自己嫌悪になるけどクヨクヨしても意味ないからあるだけの力振り絞ってギリギリ明日へとヘッドスライディング'
];
var c  = Math.floor(Math.random() * meigen_music.length);
var music = meigen_music[c];
// 歌手たち
var music_hito =['PUFFY',
'RADWIMPS',
'THE BLUE HEARTS',
"B'z",
'FIREBALL',
'いきものがかり',
'DISH',
'Mrs. GREEN APPLE',
'あいみょん',
'レミオロメン',
'YUI',
'アンジェラ・アキ',
'Kiroro',
"B'z",
'Mr.children',
"B'z",
"B'z",
"B'z",
"B'z",
"B'z",
"B'z",
"B'z",
"B'z",
"B'z",
"B'z",
'優里',
'SEKAINOOWARI',
'SEKAINOOWARI',
'backnumber',
"IDon'tLikeMondays"];
var hito_3 = music_hito[c];
//musicのやつ
function start_button_3() {
    const yurasu = document.getElementById('img_yureru');
    if (yurasu.className == null || yurasu.className == "") {
        yurasu.className = 'omikuji_img';
    }
    const StartButton = document.getElementById("button_start_3");
    const StopButton = document.getElementById("button_stop_3");
    StartButton.style.display = 'none';
    StopButton.style.display = 'block';
}

function stop_button_3() {
    const yurasu = document.getElementById('img_yureru');
    yurasu.className = '';
    const StartButton = document.getElementById("button_start_3");
    const StopButton = document.getElementById("button_stop_3");
    StartButton.style.display = 'block';
    StopButton.style.display = 'none';
    location.href ='./music1-2.html';
}
window.onload = function(){
      document.getElementById('kekka').innerHTML = music;
      document.getElementById('hito').innerHTML = hito_3;
}