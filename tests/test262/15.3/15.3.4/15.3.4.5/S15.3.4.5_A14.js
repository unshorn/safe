  var __result1 = false;
  try
  {
    Function.prototype.bind.call(null, {});
  }
  catch (e)
  {
    if (e instanceof TypeError)
    {
      __result1 = true;
    }
  }

  var __expect1 = true;
   
