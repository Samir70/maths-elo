export const metricConversion = 'metricConversion';
export const TimeConversion = 'TimeConversion';
export const MultiplyNumbers = 'MultiplyNumbers';
export const Vocab = 'Vocab';

// Aiming for QCodes which the app can parse to produce a new question of the same type
// but with different numbers.

// Format will be a string beginning with a QType
// 'metricConversion-2'
// would get us the subQType with index 2 for that topic
// whereas: just 'metricConversion' (or 'metricConversion-0') 
// should allow for a random choice of subQType