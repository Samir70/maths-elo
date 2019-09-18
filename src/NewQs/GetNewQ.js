import MetricConversionQ from './MetricConversion';
import { MultiplyNumberQ } from './MultiplyNumbers';
import { metricConversion, gridMethod } from './QTypes';

const GetNewQ = (types = [metricConversion, gridMethod]) => {
  var type = Math.floor(Math.random()*types.length)
  switch (types[type]) {
      case metricConversion : return MetricConversionQ();
      case gridMethod : return MultiplyNumberQ();
      default: return {q:"How many mathematicians does it take to change a light bulb", a:"1"}
  }
}

export default GetNewQ;
