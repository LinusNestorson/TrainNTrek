const CalculateBMI = (weight, height) => {
    if( Number(weight) <= 0 || Number(height) <= 0 ) return 0
    return  ( [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1)
  };

module.exports={
    CalculateBMI,
}