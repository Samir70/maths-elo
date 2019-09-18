const QTypes = [
    'sq', 'cube', 
    //'twos', 'threes', 'fours', 'fives', 'sixes', 'sevens', 'eights', 'nines', 'tens',
    //'sqEnd5', 'sqEnd1',
    'gridWhole'//, 'decimal'
]

export const MultiplyNumberQ = (types = QTypes) => {
    var type = Math.floor(Math.random()*types.length);
    var a = Math.ceil(Math.random()*9)+1, 
        b = Math.ceil(Math.random()*9)+1,
        c = Math.ceil(Math.random()*90)+9;
    switch (types[type]) {
        case 'sq': return {q:'What is '+a+' squared?', a:''+(a*a)}
        case 'cube': return {q:'What is '+a+' cubed?', a:''+(a*a*a)}
        case 'gridWhole': return {q:'What is '+c+' times '+(a*b)+'?', a:''+(a*b*c) }
        default: return { q:'MultiplyNumberQ default Q', a:'625' }
    }
}