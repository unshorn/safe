  {
    var __result1 = Number.NEGATIVE_INFINITY * - 1 !== Number.POSITIVE_INFINITY;
    var __expect1 = false;
  }
  {
    var __result2 = - 1 * Number.NEGATIVE_INFINITY !== Number.POSITIVE_INFINITY;
    var __expect2 = false;
  }
  {
    var __result3 = Number.POSITIVE_INFINITY * - 1 !== Number.NEGATIVE_INFINITY;
    var __expect3 = false;
  }
  {
    var __result4 = - 1 * Number.POSITIVE_INFINITY !== Number.NEGATIVE_INFINITY;
    var __expect4 = false;
  }
  {
    var __result5 = Number.POSITIVE_INFINITY * Number.MAX_VALUE !== Number.POSITIVE_INFINITY;
    var __expect5 = false;
  }
  {
    var __result6 = Number.POSITIVE_INFINITY * Number.MAX_VALUE !== Number.MAX_VALUE * Number.POSITIVE_INFINITY;
    var __expect6 = false;
  }
  {
    var __result7 = Number.NEGATIVE_INFINITY * Number.MIN_VALUE !== Number.NEGATIVE_INFINITY;
    var __expect7 = false;
  }
  {
    var __result8 = Number.NEGATIVE_INFINITY * Number.MIN_VALUE !== Number.MIN_VALUE * Number.NEGATIVE_INFINITY;
    var __expect8 = false;
  }
  