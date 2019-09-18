import MetricConversionQ from './MetricConversion';
import { MultiplyNumberQ } from './NumberOperations';
import { metricConversion, MultiplyNumbers } from './QTypes';

const GetNewQ = (types = [metricConversion, MultiplyNumbers]) => {
  var type = Math.floor(Math.random()*types.length)
  switch (types[type]) {
      case metricConversion : return MetricConversionQ();
      case MultiplyNumbers : return MultiplyNumberQ();
      default: return {q:"How many mathematicians does it take to change a light bulb", a:"1"}
  }
}

export default GetNewQ;
