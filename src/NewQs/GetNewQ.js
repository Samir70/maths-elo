import MetricConversionQ from './MetricConversion';
import { MultiplyNumberQ } from './NumberOperations';
import { metricConversion, MultiplyNumbers } from './QTypes';
const QTypes = [ MultiplyNumbers];

const GetNewQ = (QType, subQType) => {
  console.log('QType and subQType', QType, subQType)
  var type = QTypes[QType || Math.floor(Math.random()*QTypes.length)]
  switch (type) {
      case metricConversion : return MetricConversionQ(subQType);
      case MultiplyNumbers : return MultiplyNumberQ(subQType);
      default: return {q:"How many mathematicians does it take to change a light bulb", a:"1"}
  }
}

export default GetNewQ;
