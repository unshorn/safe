  function testcase() 
  {
    var obj = {
      
    };
    var accessed = false;
    Object.defineProperty(obj, "property", {
      enumerable : "AB\n\\cd"
    });
    for(var prop in obj)
    {
      if (prop === "property")
      {
        accessed = true;
      }
    }
    return accessed;
  }
  {
    var __result1 = testcase();
    var __expect1 = true;
  }
  