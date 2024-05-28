var val=document.getElementById('text-area')

val.addEventListener('input', function() {
    var text = this.value;
    
    var wordCount = text.trim().split(/\s+/).filter(function(word) {
        return word.length > 0;
    }).length;

    var charCount = text.length;

    var paraCount = text.trim().split(/\n+/).filter(function(para) {
        return para.length > 0;
    }).length;

    var numberCount = (text.match(/\d/g) || []).length;
    var specialCount = text.match(/[^\w\s]/g) ? text.match(/[^\w\s]/g).length : 0;

    var word=document.getElementById('word-count')
    word.textContent = wordCount;
    var char=document.getElementById('char-count')
    char.textContent = charCount;
    var para=document.getElementById('para-count')
    para.textContent = paraCount;
    var num=document.getElementById('number-count')
    num.textContent = numberCount;
    var spcount=document.getElementById('special-count')
    spcount.textContent = specialCount;
});
