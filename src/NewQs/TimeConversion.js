import { TimeConversion } from './QTypes';

// so ohr 2min 28sec => 148sec
const hms2sec = (h, m, s) => h*3600+m*60+s

const conversionPairs = [
    'null',
    'secMin', 'secMinHr',
    //'minHr', 'minHrDays',
    //'hrDays', 'hrWeeks', 'hrDaysWeeks'
]

const rnd = (outof) => Math.floor(Math.random()*outof);

const TimeConversionQ = (subType) => {
    var subQType = Number(subType) || Math.floor(Math.random()*(conversionPairs.length-1))+1;
    /* direction of conversion decided by forward variable
    * before composing quAndA: parts are labeled left, middle and right
    * so 1min 78sec will give
    * LMR: 138, 1, 78
    * and the Qs
    * 138 seconds is 1min and how many seconds?
    * 138 seconds is 18seconds and how many minutes?
    * Convert 1min 78sec into seconds
    * because answer should be a number
    */

    let forward = Math.random() < 0.5 ? true : false;
    var left, right, leftUnits, rightUnits;
    var sec = rnd(60), min = rnd(60), hr = rnd(24);
    switch (conversionPairs[subQType]) {
        case 'secMin' : {
            var totalSec = hms2sec(0, min, sec);
            left =''+totalSec; right = min+'min '+sec+'sec';
            leftUnits = 'seconds'; rightUnits = 'minutes and seconds';
            break
        }
        case 'secMinHr' : {
            totalSec = hms2sec(hr, min, sec);
            left = ''+totalSec; right=hr+'hr '+min+'min '+sec+'sec';
            leftUnits='seconds'; rightUnits = 'hours minutes and seconds';
            break
        }
        default: return { q:'TimeConversion default Q', a:'625' }
    }
    subQType = TimeConversion+'-'+subQType;
    console.log(subQType);
    return forward ? 
        { q:'Convert '+left+leftUnits+' to '+rightUnits, 
          a:right, QType:subQType, answerFormat:'string' } :
        { q:'Convert '+right+' to '+leftUnits,
          a:left, QType:subQType, answerFormat:'number' }
}

export default TimeConversionQ
