  function testcase() 
  {
    var desc = Object.getOwnPropertyDescriptor(Array.prototype, "slice");
    if (desc.value === Array.prototype.slice && desc.writable === true && desc.enumerable === false && desc.configurable === true)
    {
      return true;
    }
  }
  {
    var __result1 = testcase();
    var __expect1 = true;
  }
  