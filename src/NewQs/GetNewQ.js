import MetricConversionQ from './MetricConversion';
import { metricConversion } from './QTypes';

const GetNewQ = (types = [metricConversion]) => {
  var type = Math.floor(Math.random()*types.length)
  switch (types[type]) {
      case metricConversion : return MetricConversionQ()
      default: return {q:"How many mathematicians does it take to change a light bulb", a:"1"}
  }
}

export default GetNewQ;
