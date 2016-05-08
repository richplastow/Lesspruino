Export Module
=============

#### The module’s only entry-point is the `Lesspruino` class


Prevent properties being accidentally modified or added to the module. 
@todo automate this

    oo.lock Lesspruino
    oo.lock SomeClass
    oo.lock SomeClass.FirstSubClass
    oo.lock SomeClass.SecondSubClass

First, try defining an AMD module, eg for [RequireJS](http://requirejs.org/). 

    if oo.F == typeof define and define.amd
      define -> Lesspruino

Next, try exporting for CommonJS, eg for [Node.js](http://goo.gl/Lf84YI):  
`var Lesspruino = require('lesspruino');`

    else if oo.O == typeof module and module and module.exports
      module.exports = Lesspruino

Otherwise, add the `Lesspruino` class to global scope.  
Browser usage: `var lesspruino = new window.Lesspruino();`

    else oo.G.Lesspruino = Lesspruino


    ;
