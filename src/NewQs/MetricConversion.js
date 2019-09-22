import { metricConversion } from './QTypes';

const conversionPairs = [
  'zeroQ',
    {large:['metres', 'm'], small:['centimetres', 'cm'], ratio:100},
    {large:['metres', 'm'], small:['millimetres', 'mm'], ratio:1000},
    {large:['kilometres', 'Km'], small:['metres', 'm'], ratio:1000},

    {large:['grams', 'g'], small:['milligrams', 'mg'], ratio:1000},
    {large:['kilograms', 'Kg'], small:['grams', 'g'], ratio:1000},

    {large:['litres', 'L'], small:['centilitres', 'cL'], ratio:100},
    {large:['litres', 'L'], small:['millimetres', 'mL'], ratio:1000},
]

const MetricConversionQ = (subQType) => {
    var Qtype = Number(subQType) || Math.floor(Math.random()*(conversionPairs.length-1))+1;
    //console.log(metricConversion+'-'+Qtype);
    var convFacts = conversionPairs[Qtype];
    let forward = Math.random() < 0.5 ? true : false,
        extraLarge = Math.random() < 0.25 ? 1 : Math.random() < 0.8 ? 10 : 100;
    let small = Math.floor(Math.random()*convFacts.ratio)*extraLarge,
        large = small/convFacts.ratio;
    return forward ? 
      {q:"Convert "+small+convFacts.small[1]+" to "+convFacts.large[0], 
        a:''+large, QType:metricConversion+'-'+Qtype} : 
      {q:"Convert "+large+convFacts.large[1]+" to "+convFacts.small[0], 
        a:''+small, QType:metricConversion+'-'+Qtype} 
}

export default MetricConversionQ;
