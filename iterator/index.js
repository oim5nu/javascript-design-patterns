/* internal iterator */
var each = function(ary, callback) {
  for( var i = 0; i < ary.length; i ++ ) {
    callback.call(ary[i], i, ary[i]);
  }
};

each([12, 25, 38], function(i, n) {
  console.log(i, n);
});

/* external iterator */
var Iterator = function(obj) {
  var current = 0;

  var next  = function() {
    current +=1;
  };

  var isDone = function() {
    return current >= obj.length;
  };

  var getCurrentItem = function() {
    return obj[current];
  };

  var length = function() {
    return obj.length;
  };

  return {
    length: length,
    next: next,
    isDone: isDone,
    getCurrentItem: getCurrentItem
  };
};

var compare = function(iterator1, iterator2) {
  if (iterator1.length() !== iterator2.length() ) {
    return false;
  }
  while(!iterator1.isDone() && !iterator2.isDone()) {
    if (iterator1.getCurrentItem() !== iterator2.getCurrentItem()) {
      return false;
      break;
    }
    iterator1.next();
    iterator2.next();
  }
  return true;
};

console.log(compare(Iterator([4, 5, 8]), Iterator([4, 5, 8, 9])));
