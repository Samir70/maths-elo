import { Vocab } from './QTypes';

const VocabQList = [
    // circle vocab
    {q:'What do you call a line that goes from the edge of a circle, through the centre, to the other side?', 
     a:'diameter'},
    {q:'What do you call a line from the centre of a circle to the edge of the circle?', a:'radius'},
    {q:'What do you call a line that just touches the outside of a circle?', a:'tangent'},
    {q:'What do you call a line cuts across a circle, but not necessarily through the centre?', a:'chord'},
    {q:'A chord cuts a circle into two ...?', a:'segments'},
    {q:'Two radii (radiuses) cut out a piece like a slice of pie, called a ...?', a:'sector'}
]

const VocabQ = () => {
    var question = Math.floor(Math.random()*VocabQList.length);
    return {...VocabQList[question], answerFormat:'string', QType:Vocab}
}

export default VocabQ;
