import indexTxt from './src/index.txt'
import logo from './images/11.jpg'
import indexCss from './src/index.css'
import doc from './src/doc.docx'
console.log(indexTxt);
console.log(logo);
console.log(indexCss);
console.log(indexCss.toString());
console.log(doc);


// 初始化 -> 开始编译 -> 确认入口 -> 编译模块 ->整合依赖输出

const img = new Image()
img.src = logo
document.body.appendChild(img)

const style = document.createElement('style')
style.innerHTML = indexCss.toString()
document.head.appendChild(style)