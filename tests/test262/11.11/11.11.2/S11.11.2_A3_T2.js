  if ((0 || - 0) !== 0)
  {
    $ERROR('#1.1: (0 || -0) === 0');
  }
  else
  {
    {
      var __result1 = (1 / (0 || - 0)) !== Number.NEGATIVE_INFINITY;
      var __expect1 = false;
    }
  }
  if ((- 0 || 0) !== 0)
  {
    $ERROR('#2.1: (-0 || 0) === 0');
  }
  else
  {
    {
      var __result2 = (1 / (- 0 || 0)) !== Number.POSITIVE_INFINITY;
      var __expect2 = false;
    }
  }
  var y = new Number(- 1);
  {
    var __result3 = (0 || y) !== y;
    var __expect3 = false;
  }
  var y = new Number(0);
  {
    var __result4 = (NaN || y) !== y;
    var __expect4 = false;
  }
  