Mcu.RealEspruino
================


#### Inherits from `Mcu` ...@todo describe

    class Mcu.RealEspruino extends Mcu
      C: 'Mcu.RealEspruino'
      toString: -> '[object Mcu.RealEspruino]'


#### `constructor()`
- `config <object> {}`       initial configuration
- `<undefined>`              does not return anything

@todo describe

      constructor: (config={}) ->
        M = '/lesspruino/src/Mcu/RealEspruino.litcoffee
          Mcu.RealEspruino()\n  '

Call `Mcu::constructor(config)`. This will create the `@[oo._]` object. 

        super config


Make `v()`, a function for checking that `config` properties are ok. 

        v = oo.vObject M, 'config', config




Public Properties
-----------------




Private Properties
------------------


#### `_x <null>`
@todo describe

        @[oo._]._x = null




Prevent properties being accidentally modified or added to the instance. 

        if 'Mcu.RealEspruino' == @C then oo.lock @




Public Methods
--------------


#### `xx()`
- `yy <number> 123`  @todo describe
- `<undefined>`      does not return anything

@todo describe

      xx: (yy) ->
        M = '/lesspruino/src/Mcu/RealEspruino.litcoffee
          Mcu::xx()\n  '

Check that the arguments are valid, or fallback to defaults if undefined. 

        yy = oo.vArg M, yy, 'yy <number>', 123




Public Static Functions
-----------------------


#### `xx()`
- `yy <number> 123`  @todo describe
- `<undefined>`      does not return anything

@todo describe

    Mcu.RealEspruino.xx = (yy) ->
      M = '/lesspruino/src/Mcu/RealEspruino.litcoffee
        Mcu.RealEspruino.xx()\n  '

Check that the arguments are valid, or fallback to defaults if undefined. 

      yy = oo.vArg M, yy, 'yy <number>', 123




    ;
