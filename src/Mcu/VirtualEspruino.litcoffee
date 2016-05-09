Mcu.VirtualEspruino
===================


#### Inherits from `Mcu` ...@todo describe

    class Mcu.VirtualEspruino extends Mcu
      C: 'Mcu.VirtualEspruino'
      toString: -> '[object Mcu.VirtualEspruino]'


#### `constructor()`
- `config <object> {}`       initial configuration
- `<undefined>`              does not return anything

@todo describe

      constructor: (config={}) ->
        M = '/lesspruino/src/Mcu/VirtualEspruino.litcoffee
          Mcu.VirtualEspruino()\n  '

Call `Mcu::constructor(config)`. This will create the `@[oo._]` object. 

        super config


Make `v()`, a function for checking that `config` properties are ok. 

        v = oo.vObject M, 'config', config




Public Properties
-----------------


#### `width <integer>`, `height <integer>`
@todo describe

        @width  = 15 # pico is 8
        @height = 20 # pico is 9




Private Properties
------------------


#### `_x <null>`
@todo describe

        @[oo._]._x = null




Prevent properties being accidentally modified or added to the instance. 

        if 'Mcu.VirtualEspruino' == @C then oo.lock @




Public Methods
--------------


#### `xx()`
- `yy <number> 123`  @todo describe
- `<undefined>`      does not return anything

@todo describe

      xx: (yy) ->
        M = '/lesspruino/src/Mcu/VirtualEspruino.litcoffee
          Mcu::xx()\n  '

Check that the arguments are valid, or fallback to defaults if undefined. 

        yy = oo.vArg M, yy, 'yy <number>', 123




Public Static Functions
-----------------------


#### `xx()`
- `yy <number> 123`  @todo describe
- `<undefined>`      does not return anything

@todo describe

    Mcu.VirtualEspruino.xx = (yy) ->
      M = '/lesspruino/src/Mcu/VirtualEspruino.litcoffee
        Mcu.VirtualEspruino.xx()\n  '

Check that the arguments are valid, or fallback to defaults if undefined. 

      yy = oo.vArg M, yy, 'yy <number>', 123




    ;
