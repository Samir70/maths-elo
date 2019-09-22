import MetricConversionQ from './MetricConversion';
import TimeConversionQ from './TimeConversion';
import { MultiplyNumberQ } from './NumberOperations';
import { metricConversion, TimeConversion, MultiplyNumbers } from './QTypes';
const QTypes = [metricConversion, TimeConversion, MultiplyNumbers];

const GetNewQ = (QType, subQType) => {
  //console.log('QType and subQType', QType, subQType)
  var type = QType || QTypes[Math.floor(Math.random()*QTypes.length)]
  switch (type) {
      case metricConversion : return MetricConversionQ(subQType);
      case MultiplyNumbers : return MultiplyNumberQ(subQType);
      case TimeConversion : return TimeConversionQ(subQType)
      default: return {q:"How many mathematicians does it take to change a light bulb", a:"1"}
  }
}

export default GetNewQ;
