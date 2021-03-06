// Generated by CoffeeScript 1.9.2
/*! Lesspruino 0.0.2 //// MIT Licence //// http://lesspruino.richplastow.com/ */
(function(global) {

/* Define the Oopish container. 
Rather than just a generic object, the Oopish container can also be used as 
a handy shortcut for console.log(). Note bind() (http://goo.gl/66ffgl), and 
unusual IE8-9 behaviour (http://goo.gl/ZmG9Xs). */
var oo = (function (c) { return (
(!c || !c.log) // IE8-9 without F12 dev-tools, IE6-7, FF1-3.6
? function () {}
: ("object" === typeof c.log) // IE8-9 with F12 dev-tools
? function () { c.log([].slice.call(arguments).join(" ")) }
: (! Function.prototype.bind) // OP10.6-11.5, SF4-5.0, iOS3-5.1, ADRD2.1-3.0?
? function () { c.log.apply(c, arguments) }
: c.log.bind(c)
)}(global.console));

/* Define constants generated by oopish-build and injected into app-scope. */
oo.G = global // global scope, passed into the closure as an argument
oo.T = "Lesspruino" // project title, from package.json
oo.V = "0.0.2" // project version, from package.json


/*! Lesspruino 0.0.2 */
var Lesspruino, Mcu, x, xx,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

oo.A = 'array';

oo.B = 'boolean';

oo.D = 'document';

oo.E = 'error';

oo.F = 'function';

oo.I = 'integer';

oo.N = 'number';

oo.O = 'object';

oo.R = 'regexp';

oo.S = 'string';

oo.U = 'undefined';

oo.X = 'null';

oo._ = (Math.random().toString(36) + '00000000').substr(2, 8);

oo.ROBUSTABLE = (function() {
  if (!Object.preventExtensions) {
    return false;
  } else if (Object.defineProperty) {
    try {
      Object.defineProperty({}, 'x', {});
      return true;
    } catch (_error) {
      return false;
    }
  } else {
    return true;
  }
})();

oo.is = function(c, t, f) {
  if (t == null) {
    t = true;
  }
  if (f == null) {
    f = false;
  }
  if (c) {
    return t;
  } else {
    return f;
  }
};

oo.isU = function(x) {
  return oo.U === typeof x;
};

oo.isX = function(x) {
  return null === x;
};

oo.type = function(a) {
  var ta;
  if (oo.isX(a)) {
    return oo.X;
  }
  ta = typeof a;
  if ({
    undefined: 1,
    string: 1,
    number: 1,
    boolean: 1
  }[ta]) {
    return ta;
  }
  if (!a.nodeName && a.constructor !== Array && /function/i.test('' + a)) {
    return oo.F;
  }
  return {}.toString.call(a).match(/\s([a-z0-9]+)/i)[1].toLowerCase();
};

oo.ex = function(x, a, b) {
  var pos;
  if (-1 === (pos = a.indexOf(x))) {
    return x;
  } else {
    return b.charAt(pos);
  }
};

oo.has = function(h, n, t, f) {
  if (t == null) {
    t = true;
  }
  if (f == null) {
    f = false;
  }
  if (-1 !== h.indexOf(n)) {
    return t;
  } else {
    return f;
  }
};

oo.uid = function(p) {
  if (p == null) {
    p = 'id';
  }
  return p + '_' + (Math.random().toString(36) + '00000000').substr(2, 8);
};

oo.uid62 = function(p, l) {
  var c;
  if (p == null) {
    p = 'id';
  }
  if (l == null) {
    l = 8;
  }
  c = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  return p + '_' + ((function() {
    var results;
    results = [];
    while (l--) {
      results.push(c.charAt(Math.floor(Math.random() * 62)));
    }
    return results;
  })()).join('');
};

oo.pad = oo.lpad = function(s, l, c) {
  if (c == null) {
    c = ' ';
  }
  return s + Array(l - s.length + 1).join(c);
};

oo.rpad = function(s, l, c) {
  if (c == null) {
    c = ' ';
  }
  return Array(l - s.length + 1).join(c) + s;
};

oo.insert = function(basis, overlay, offset) {
  return basis.slice(0, offset) + overlay + basis.slice(offset + overlay.length);
};

if (oo.ROBUSTABLE) {
  oo.define = function(obj, name, value, kind) {
    switch (kind) {
      case 'constant':
        return Object.defineProperty(obj, name, {
          value: value,
          enumerable: true
        });
      case 'private':
        return Object.defineProperty(obj, name, {
          value: value,
          enumerable: false
        });
    }
  };
} else {
  oo.define = function(obj, name, value, kind) {
    return obj[name] = value;
  };
}

if (oo.ROBUSTABLE) {
  oo.lock = function(obj) {
    var j, key, len, ref;
    ref = Object.keys(obj);
    for (j = 0, len = ref.length; j < len; j++) {
      key = ref[j];
      Object.defineProperty(obj, key, {
        writable: false,
        configurable: false
      });
    }
    Object.preventExtensions(obj);
    if (obj.prototype && obj !== obj.prototype) {
      return oo.lock(obj.prototype);
    }
  };
} else {
  oo.lock = function() {};
}

oo.vArray = function(M, arr, signature, fallback) {
  var i, j, k, len, len1, limit, matches, max, min, pass, ref, ref1, ref2, rule, tv, type, types, value;
  matches = signature.match(/^<\[([|a-z]+)\s*(.*)\](\d+-\d+)?>$/i);
  if (!matches) {
    throw RangeError("/lesspruino/oopish/oo-helpers.litcoffee oo.vArray()\n  signature " + signature + " is invalid");
  }
  signature = matches[0], types = matches[1], rule = matches[2], limit = matches[3];
  if (!arr) {
    return fallback;
  }
  if (oo.A !== oo.type(arr)) {
    throw RangeError(M + (" is type " + (oo.type(arr)) + " not array"));
  }
  if (limit) {
    ref = limit.split('-'), min = ref[0], max = ref[1];
    if (arr.length < min || arr.length > max) {
      throw RangeError(M + (".length is " + arr.length + " (must be " + limit + ")"));
    }
  }
  if ('any' === types) {
    return arr;
  }
  for (i = j = 0, len = arr.length; j < len; i = ++j) {
    value = arr[i];
    tv = oo.type(value);
    pass = false;
    ref1 = types.split('|');
    for (k = 0, len1 = ref1.length; k < len1; k++) {
      type = ref1[k];
      if ((oo.N === type || oo.I === type) && oo.N === tv) {
        if (oo.I === type && value % 1) {
          throw RangeError(M + ("[" + i + "] is a number but not an integer"));
        }
        if (rule) {
          ref2 = rule.split('-'), min = ref2[0], max = ref2[1];
          if (value < min || value > max) {
            throw RangeError(M + ("[" + i + "] is " + value + " (must be " + rule + ")"));
          }
        }
        pass = true;
        break;
      }
      if (type === tv) {
        if (oo.S === tv && rule) {
          if (!RegExp(rule).test(value)) {
            throw RangeError(M + ("[" + i + "] fails " + rule));
          }
        }
        pass = true;
        break;
      }
      if (/^[A-Z]/.test(type)) {
        if (oo.O === tv) {
          if (eval("value instanceof " + type)) {
            pass = true;
            break;
          }
        }
      }
    }
    if (pass) {
      continue;
    }
    throw TypeError(M + ("[" + i + "] is type " + tv + " not " + types));
  }
  return arr;
};

oo.vArg = function(M, value, signature, fallback) {
  var j, key, len, matches, max, min, pfx, ref, ref1, rule, tv, type, types;
  matches = signature.match(/^([_a-z][_a-z0-9]*)\s+<([|a-z]+)\s*(.*)>$/i);
  if (!matches) {
    throw RangeError("/lesspruino/oopish/oo-helpers.litcoffee oo.vArg()\n  signature " + signature + " is invalid");
  }
  signature = matches[0], key = matches[1], types = matches[2], rule = matches[3];
  pfx = M + ("argument " + key + " ");
  tv = oo.type(value);
  if (oo.U === tv) {
    if (4 === arguments.length) {
      return fallback;
    }
    throw TypeError(pfx + "is undefined and has no fallback");
  }
  ref = types.split('|');
  for (j = 0, len = ref.length; j < len; j++) {
    type = ref[j];
    if ((oo.N === type || oo.I === type) && oo.N === tv) {
      if (oo.I === type && value % 1) {
        throw RangeError(pfx + "is a number but not an integer");
      }
      if (rule) {
        ref1 = rule.split('-'), min = ref1[0], max = ref1[1];
        if (value < min || value > max) {
          throw RangeError(pfx + ("is " + value + " (must be " + rule + ")"));
        }
      }
      return value;
    }
    if (type === tv) {
      if (oo.S === tv && rule) {
        if (!RegExp(rule).test(value)) {
          throw RangeError(pfx + ("fails " + rule));
        }
      }
      return value;
    }
    if (/^[A-Z]/.test(type)) {
      if (oo.O === tv) {
        if (eval("value instanceof " + type)) {
          return value;
        }
      }
    }
  }
  throw TypeError(pfx + ("is type " + tv + " not " + types));
};

oo.vObject = function(M, objName, obj) {
  if (oo.O !== oo.type(obj)) {
    throw TypeError(M + objName + (" is type " + (oo.type(obj)) + " not object"));
  }
  return function(signature, fallback) {
    var j, key, len, matches, max, min, ref, ref1, rule, tv, type, types, value;
    matches = signature.match(/^([_a-z][_a-z0-9]*)\s+<([|a-z]+)\s*(.*)>$/i);
    if (!matches) {
      throw RangeError("/lesspruino/oopish/oo-helpers.litcoffee oo.vObject()\n  signature " + signature + " is invalid");
    }
    signature = matches[0], key = matches[1], types = matches[2], rule = matches[3];
    value = obj[key];
    tv = oo.type(value);
    if (oo.U === tv) {
      if (2 === arguments.length) {
        return fallback;
      }
      throw TypeError(M + objName + '.' + key + " is undefined and has no fallback");
    }
    ref = types.split('|');
    for (j = 0, len = ref.length; j < len; j++) {
      type = ref[j];
      if ((oo.N === type || oo.I === type) && oo.N === tv) {
        if (oo.I === type && value % 1) {
          throw RangeError(M + objName + '.' + key + " is a number but not an integer");
        }
        if (rule) {
          ref1 = rule.split('-'), min = ref1[0], max = ref1[1];
          if (value < min || value > max) {
            throw RangeError(M + objName + '.' + key + (" is " + value + " (must be " + rule + ")"));
          }
        }
        return value;
      }
      if (type === tv) {
        if (oo.S === tv && rule) {
          if (!RegExp(rule).test(value)) {
            throw RangeError(M + objName + '.' + key + (" fails " + rule));
          }
        }
        return value;
      }
      if (/^[A-Z]/.test(type)) {
        if (oo.O === tv) {
          if (eval("value instanceof " + type)) {
            return value;
          }
        }
      }
    }
    throw TypeError(M + objName + '.' + key + (" is type " + tv + " not " + types));
  };
};

Lesspruino = (function() {
  Lesspruino.prototype.C = 'Lesspruino';

  Lesspruino.prototype.toString = function() {
    return '[object Lesspruino]';
  };

  function Lesspruino(config) {
    var M, v;
    if (config == null) {
      config = {};
    }
    M = '/lesspruino/src/Lesspruino.litcoffee Lesspruino()\n  ';
    v = oo.vObject(M, 'config', config);
    this.width = v('width  <integer>', 80);
    this.height = v('height <integer>', 24);
    oo.define(this, oo._, {}, 'private');
    this[oo._]._mcus = [];
    if ('Lesspruino' === this.C) {
      oo.lock(this);
    }
  }

  Lesspruino.prototype.add = function(config) {
    var M, kind, v;
    if (config == null) {
      config = {};
    }
    M = '/lesspruino/src/Lesspruino.litcoffee Lesspruino::add()\n  ';
    v = oo.vObject(M, 'config', config);
    kind = v('kind <string>', 'VirtualEspruino');
    if ('RealEspruino' === kind) {
      config.id = 're' + this[oo._]._mcus.length;
      this[oo._]._mcus.push(new Mcu.RealEspruino(config));
    } else if ('VirtualEspruino' === kind) {
      config.id = 've' + this[oo._]._mcus.length;
      this[oo._]._mcus.push(new Mcu.VirtualEspruino(config));
    } else {
      throw RangeError(M + '`config.kind` not recognized');
    }
    return config.id;
  };

  Lesspruino.prototype.browse = function(config) {
    var M, format, i, j, k, len, len1, m, mcu, o, out, ref, ref1, ref2, row, v, x, y;
    if (config == null) {
      config = {};
    }
    M = '/lesspruino/src/Lesspruino.litcoffee Lesspruino::browse()\n  ';
    v = oo.vObject(M, 'config', config);
    format = v('format <string>', 'ascii');
    if ('ascii' === format) {
      out = [];
      for (y = j = 0, ref = this.height - 1; 0 <= ref ? j <= ref : j >= ref; y = 0 <= ref ? ++j : --j) {
        out.push(row = []);
        for (x = k = 0, ref1 = this.width; 0 <= ref1 ? k <= ref1 : k >= ref1; x = 0 <= ref1 ? ++k : --k) {
          row.push('.');
        }
      }
      ref2 = this[oo._]._mcus;
      for (m = 0, len = ref2.length; m < len; m++) {
        mcu = ref2[m];
        mcu.render(out);
      }
      for (i = o = 0, len1 = out.length; o < len1; i = ++o) {
        row = out[i];
        out[i] = row.join('');
      }
      return out.join('\n');
    }
  };

  return Lesspruino;

})();

Lesspruino.xx = function(yy) {
  var M;
  M = '/lesspruino/src/Lesspruino.litcoffee Lesspruino.xx()\n  ';
  return yy = oo.vArg(M, yy, 'yy <number>', 123);
};

x = null;

xx = function(yy) {
  var M;
  return M = '/lesspruino/src/Lesspruino.litcoffee xx()\n  ';
};

Mcu = (function() {
  Mcu.prototype.C = 'Mcu';

  Mcu.prototype.toString = function() {
    return '[object Mcu]';
  };

  function Mcu(config) {
    var M, v;
    if (config == null) {
      config = {};
    }
    M = '/lesspruino/src/Mcu.litcoffee Mcu()\n  ';
    v = oo.vObject(M, 'config', config);
    this.id = v('id <string>');
    this.x = v('x <integer>', 0);
    this.y = v('y <integer>', 0);
    oo.define(this, oo._, {}, 'private');
    this[oo._]._x = null;
    if ('Mcu' === this.C) {
      oo.lock(this);
    }
  }

  Mcu.prototype.render = function(out) {
    var M, j, ref, ref1, results, y;
    M = '/lesspruino/src/Mcu.litcoffee Mcu::render()\n  ';
    results = [];
    for (y = j = ref = this.y, ref1 = this.y + this.height; ref <= ref1 ? j <= ref1 : j >= ref1; y = ref <= ref1 ? ++j : --j) {
      results.push((function() {
        var k, ref2, ref3, results1;
        results1 = [];
        for (x = k = ref2 = this.x, ref3 = this.x + this.width; ref2 <= ref3 ? k <= ref3 : k >= ref3; x = ref2 <= ref3 ? ++k : --k) {
          results1.push(out[y][x] = '#');
        }
        return results1;
      }).call(this));
    }
    return results;
  };

  return Mcu;

})();

Mcu.xx = function(yy) {
  var M;
  M = '/lesspruino/src/Mcu.litcoffee Mcu.xx()\n  ';
  return yy = oo.vArg(M, yy, 'yy <number>', 123);
};

Mcu.RealEspruino = (function(superClass) {
  extend(RealEspruino, superClass);

  RealEspruino.prototype.C = 'Mcu.RealEspruino';

  RealEspruino.prototype.toString = function() {
    return '[object Mcu.RealEspruino]';
  };

  function RealEspruino(config) {
    var M, v;
    if (config == null) {
      config = {};
    }
    M = '/lesspruino/src/Mcu/RealEspruino.litcoffee Mcu.RealEspruino()\n  ';
    RealEspruino.__super__.constructor.call(this, config);
    v = oo.vObject(M, 'config', config);
    this[oo._]._x = null;
    if ('Mcu.RealEspruino' === this.C) {
      oo.lock(this);
    }
  }

  RealEspruino.prototype.xx = function(yy) {
    var M;
    M = '/lesspruino/src/Mcu/RealEspruino.litcoffee Mcu::xx()\n  ';
    return yy = oo.vArg(M, yy, 'yy <number>', 123);
  };

  return RealEspruino;

})(Mcu);

Mcu.RealEspruino.xx = function(yy) {
  var M;
  M = '/lesspruino/src/Mcu/RealEspruino.litcoffee Mcu.RealEspruino.xx()\n  ';
  return yy = oo.vArg(M, yy, 'yy <number>', 123);
};

Mcu.VirtualEspruino = (function(superClass) {
  extend(VirtualEspruino, superClass);

  VirtualEspruino.prototype.C = 'Mcu.VirtualEspruino';

  VirtualEspruino.prototype.toString = function() {
    return '[object Mcu.VirtualEspruino]';
  };

  function VirtualEspruino(config) {
    var M, v;
    if (config == null) {
      config = {};
    }
    M = '/lesspruino/src/Mcu/VirtualEspruino.litcoffee Mcu.VirtualEspruino()\n  ';
    VirtualEspruino.__super__.constructor.call(this, config);
    v = oo.vObject(M, 'config', config);
    this.width = 15;
    this.height = 20;
    this[oo._]._x = null;
    if ('Mcu.VirtualEspruino' === this.C) {
      oo.lock(this);
    }
  }

  VirtualEspruino.prototype.xx = function(yy) {
    var M;
    M = '/lesspruino/src/Mcu/VirtualEspruino.litcoffee Mcu::xx()\n  ';
    return yy = oo.vArg(M, yy, 'yy <number>', 123);
  };

  return VirtualEspruino;

})(Mcu);

Mcu.VirtualEspruino.xx = function(yy) {
  var M;
  M = '/lesspruino/src/Mcu/VirtualEspruino.litcoffee Mcu.VirtualEspruino.xx()\n  ';
  return yy = oo.vArg(M, yy, 'yy <number>', 123);
};

oo.lock(Lesspruino);

oo.lock(Mcu);

oo.lock(Mcu.RealEspruino);

oo.lock(Mcu.VirtualEspruino);

if (oo.F === typeof define && define.amd) {
  define(function() {
    return Lesspruino;
  });
} else if (oo.O === typeof module && module && module.exports) {
  module.exports = Lesspruino;
} else {
  oo.G.Lesspruino = Lesspruino;
}
}).call(this,this);
// Example vendor file. 
