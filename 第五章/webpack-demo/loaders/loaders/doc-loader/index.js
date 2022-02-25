const Markdown = require('markdown-it')


module.exports = function (source){
    source.log(source)
    return `export default \`${source}\``
}