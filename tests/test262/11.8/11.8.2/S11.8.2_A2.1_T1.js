  {
    var __result1 = 2 > 1 !== true;
    var __expect1 = false;
  }
  var x = 2;
  {
    var __result2 = x > 1 !== true;
    var __expect2 = false;
  }
  var y = 1;
  {
    var __result3 = 2 > y !== true;
    var __expect3 = false;
  }
  var x = 2;
  var y = 1;
  {
    var __result4 = x > y !== true;
    var __expect4 = false;
  }
  var objectx = new Object();
  var objecty = new Object();
  objectx.prop = 2;
  objecty.prop = 1;
  {
    var __result5 = objectx.prop > objecty.prop !== true;
    var __expect5 = false;
  }
  