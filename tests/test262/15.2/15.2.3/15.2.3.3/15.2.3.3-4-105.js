  function testcase() 
  {
    var desc = Object.getOwnPropertyDescriptor(Math, "log");
    if (desc.value === Math.log && desc.writable === true && desc.enumerable === false && desc.configurable === true)
    {
      return true;
    }
  }
  {
    var __result1 = testcase();
    var __expect1 = true;
  }
  