// poem
var words=[
    '爆竹声中一岁除',
    '春风送暖入屠苏',
    '共祝明朝属日好',
    '梅花满眼踏新年',
    '共欢新故岁',
    '迎送一宵中',
    '愿天上人间',
    '占得欢娱',
    '年年今夜',
    '从今诸事愿',
    '胜如旧',
    '人生强健',
    '老去又逢新岁月',
    '春来更好有花枝',
    '东风吹暖娄江树',
    '三衢九陌凝烟雾',
    '愿新春以后',
    '吉吉利利',
    '百事都如意',
    '一愿世清平',
    '二愿身强健',
    '三愿临老头',
    '数与君相见',
    '生盆火烈轰鸣竹',
    '守岁筳开听颂椒',
    '淮滨益时候',
    '了似中秋月',
    '愿君千万岁',
    '无岁不逢春',
    '寒辞去冬雪',
    '暖带入春风',
    '韶华长在',
    '明年依旧',
    '相与笑春风',
    '年年约',
    '常相见',
    '但无事',
    '身强健',
    '日有熹',
    '月有光',
    '富且昌',
    '寿而康',
    '新春嘉平',
    '长乐未央',
    '残日东风',
    '不放岁华去',
    '有人添烛西窗',
    '不眠侵晓',
    '笑声转',
    '新年莺语',
    '若有知音见采',
    '不辞唱遍阳春',
    '众里嫣然通一顾',
    '人间颜色如尘土',
    '若非群玉山头见',
    '会向瑶台月下逢',
    '沉鱼落雁鸟惊喧',
    '羞花闭月花愁颤',
    '解释春风无限恨',
    '沉香亭北倚阑干'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '宋体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '祝君，年年开心，万事如意。';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '宋体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '宋体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '宋体'
          texttwo.innerHTML = '';
      },28000)
      setTimeout(function(){
        textone.innerHTML = '从前从前,有个人爱你很久';
        texttwo.innerHTML = '但偏偏，风渐渐';
        textthree.innerHTML = '把距离吹的好远';
      },112500)


 
