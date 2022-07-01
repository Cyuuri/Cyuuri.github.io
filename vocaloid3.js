let miku = document.getElementById('im1');
let RinLen = document.getElementById('im2');
let luka = document.getElementById('im3');
let MEIKO = document.getElementById('im4');
let KAITO = document.getElementById('im5');
let bigpicture = document.getElementById('bigpic1');
let nameya = document.getElementById('name1');
let cv = document.getElementById('cv1');
let text = document.getElementById('jianjie1');

miku.addEventListener('click',()=>{
    bigpicture.src = 'picture/fm/MikuNewType_main.png';
    nameya.innerHTML = '初音未来'
    cv.innerHTML = '音源:藤田咲'
    text.innerHTML = '初音未来 日语：初音(はつね) ミク，平文式罗马字：(Hatsune Miku)是Crypton Future Media株式会社企划，开发，贩售，使用YAMAHA的VOCALOID引擎和Crypton自主研发的NT歌声合成引擎的声音库软件及其拟人化形象。初音未来也是Crypton“角色主唱系列”（Character Vocal Series）的第一作，代号为CV01。'
})

RinLen.addEventListener('click',()=>{
    bigpicture.src = 'picture/fm/800px-RinLen_v4x.png';
    nameya.innerHTML = '镜音双子'
    cv.innerHTML = '音源:下田麻美'
    text.innerHTML = '镜音铃·连，即镜音铃（鏡音リン，Kagamine Rin）与镜音连（鏡音レン，Kagamine Len）的合称，是Crypton Future Media以YAMAHA的VOCALOID歌声合成引擎为基础，开发贩售的虚拟歌手软件，是角色主唱系列（キャラクター・ボーカル・シリーズ）的第二作；也可看作是此软件的拟人化角色。'
})

luka.addEventListener('click',()=>{
    bigpicture.src = 'picture/fm/Luka_v4x_final.png';
    nameya.innerHTML = '巡音流歌'
    cv.innerHTML = '音源:浅川悠'
    text.innerHTML = '巡音流歌（日语：巡音（めぐりね） ルカ）（英语：Megurine Luka）是Crypton Future Media以Yamaha的VOCALOID歌声合成引擎为基础，开发贩售的歌声合成软件声音库及其拟人化形象。巡音流歌是角色主唱系列的第三作(CV03)及此软件的印象角色,其中收录有日语和英语两种歌声，她作为第一款双语VOCALOID软件而面世。'
})

MEIKO.addEventListener('click',()=>{
    bigpicture.src = 'picture/fm/Ch_img_meikov3.png';
    nameya.innerHTML = 'MEIKO'
    cv.innerHTML = '音源:拜乡芽衣子'
    text.innerHTML = 'MEIKO（日语：メイコ）是Crypton Future Media以Yamaha的VOCALOID语音合成引擎为基础，开发贩售的语音合成软件的声源之一及其拟人化形象。MEIKO是第四个发表的VOCALOID，第一个日语VOCALOID，也是第一个有人设的VOCALOID歌姬。很多人都以为MEIKO是第一个VOCALOID，实际上Leon、Lola和MIRIAM比她还早面世。'
})

KAITO.addEventListener('click',()=>{
    bigpicture.src = 'picture/fm/Ch_img_kaitov3.png';
    nameya.innerHTML = 'KAITO'
    cv.innerHTML = '音源:风雅直人'
    text.innerHTML = 'KAITO（日语：カイト）是Crypton Future Media以Yamaha的VOCALOID歌声合成引擎为基础，开发贩售的歌声合成软件声音库及其拟人化形象。也是全球首个日本语男声VOCALOID声库、第一个有人设的VOCALOID男歌手。'
})

let lty = document.getElementById('ic1');
let lzl = document.getElementById('ic2');
let lzly = document.getElementById('ic3');
let xc = document.getElementById('ic4');
let hy = document.getElementById('ic5');
let bigpicturex = document.getElementById('bigpic2');
let nameyax = document.getElementById('name2');
let cvx = document.getElementById('cv2');
let textx = document.getElementById('jianjie2');

lty.addEventListener('click',()=>{
    bigpicturex.src = 'picture/fm/洛天依.png';
    nameyax.innerHTML = '洛天依'
    cvx.innerHTML = '音源:山新'
    textx.innerHTML = '洛天依（日语：洛天依（ルォ・テンイ）；英语：Luo Tianyi）是Vsinger（上海禾念信息科技有限公司）旗下以Yamaha的VOCALOID语音合成引擎为基础开发贩售的虚拟女性歌手软件角色制品之一，软件演唱语言为中文。V3声库于2012年7月12日正式发布，是首个VOCALOID中文声库。V4中日文声库分别于2017年12月30日、2018年5月21日正式发售。'
})

lzl.addEventListener('click',()=>{
    bigpicturex.src = 'picture/fm/lezhenglin.png';
    nameyax.innerHTML = '乐正绫'
    cvx.innerHTML = '音源:祈Inory'
    textx.innerHTML = '乐正绫是Vsinger（上海禾念信息科技有限公司）旗下以Yamaha的VOCALOID 3语音合成引擎为基础开发贩售的虚拟女性歌手软件角色制品之一，软件演唱语言为中文。该声库2015年7月17日正式发布。'
})

lzly.addEventListener('click',()=>{
    bigpicturex.src = 'picture/fm/longya.png';
    nameyax.innerHTML = '乐正龙牙'
    cvx.innerHTML = '音源:阿杰'
    textx.innerHTML = '乐正龙牙是Vsinger（上海禾念信息科技有限公司）旗下以Yamaha的VOCALOID 4语音合成引擎为基础开发贩售的虚拟男性歌手软件角色制品之一，软件演唱语言为中文。2017年5月10日该声库正式发布，为第一个中文VOCALOID男性歌手软件。'
})

xc.addEventListener('click',()=>{
    bigpicturex.src = 'picture/fm/星尘Infinity.png';
    nameyax.innerHTML = '星尘'
    cvx.innerHTML = '音源:茶理理'
    textx.innerHTML = '星尘Stardust是平行四界委托上海禾念信息科技有限公司，以Yamaha的VOCALOID 4语音合成引擎为基础开发贩售的虚拟女性歌手软件角色制品之一，软件演唱语言为中文。2016年4月13日，声库正式发售，为首个VOCALOID 4中文声库。'
})

hy.addEventListener('click',()=>{
    bigpicturex.src = 'picture/fm/海伊人設(new).png';
    nameyax.innerHTML = '海伊'
    cvx.innerHTML = '音源:花筝Anly'
    textx.innerHTML = '海伊是平行四界（北京福托科技开发有限责任公司）出品，以Dreamtonics公司独立开发的语音合成引擎Synthesizer V为基础打造的虚拟女性歌手软件角色制品之一，软件演唱语言为中文。第一代声库于2019年8月22日正式发布，第二代声库于2020年6月27日正式发布。'
})

const dhl = document.querySelectorAll('.daoleft');
let txtbox = document.querySelector('.c2txt')
let index = 0;




let uio = document.getElementById('uio')
uio.onclick = function(){
    txtbox.style.top = -100 + "%";

}

let oiu = document.getElementById('oiu')
oiu.onclick = function(){
    txtbox.style.top = 0 + "%";

}