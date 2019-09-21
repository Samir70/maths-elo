import { MultiplyNumbers } from './QTypes';

const subQTypes = [
    'zeroQ',
    'sq', 'cube', 
    //'twos', 'threes', 'fours', 'fives', 'sixes', 'sevens', 'eights', 'nines', 'tens',
    'sqEnd5', 'sqEnd1',
    'gridWhole'//, 'decimal'
]

export const MultiplyNumberQ = (subQType) => {
    var type = Number(subQType) || Math.floor(Math.random()*(subQTypes.length-1))+1;
    console.log(MultiplyNumbers+'-'+type)
    var a = Math.ceil(Math.random()*9)+1, 
        b = Math.ceil(Math.random()*9)+1,
        c = Math.ceil(Math.random()*90)+10;
    var returnable = {QType:MultiplyNumbers+'-'+type}
    switch (subQTypes[type]) {
        case 'sq': return {...returnable, q:'What is '+a+' squared?', a:''+(a*a)}
        case 'sqEnd5': {
            a = a*10+5;
            return {...returnable, q:'What is '+a+' squared?', a:''+(a*a)}
        }
        case 'sqEnd1': {
            a = a*10+1;
            return {...returnable, q:'What is '+a+' squared?', a:''+(a*a)}
        }
        case 'cube': return {...returnable, q:'What is '+a+' cubed?', a:''+(a*a*a)}
        case 'gridWhole': return {...returnable, q:'What is '+c+' times '+(a*b)+'?', a:''+(a*b*c) }
        default: return { q:'MultiplyNumberQ default Q', a:'625' }
    }
}