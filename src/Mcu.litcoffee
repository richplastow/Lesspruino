Mcu
===


#### Base class for all classes which represent microcontrollers

    class Mcu
      C: 'Mcu'
      toString: -> '[object Mcu]'


#### `constructor()`
- `config <object> {}`       initial configuration
  - `config.id <string>`     @todo describe
  - `config.x <integer> 0`   x-coordinate of the new item
  - `config.y <integer> 0`   y-coordinate of the new item
- `<undefined>`              does not return anything

@todo describe

      constructor: (config={}) ->
        M = '/lesspruino/src/Mcu.litcoffee
          Mcu()\n  '


Make `v()`, a function for checking that `config` properties are ok. 

        v = oo.vObject M, 'config', config




Public Properties
-----------------


#### `id <string>`
From `config.id` @todo describe

        @id = v 'id <string>'


#### `x <integer>`, `y <integer>`
From `config.x` and `config.y`, @todo describe

        @x = v 'x <integer>', 0 # @todo validate min/max
        @y = v 'y <integer>', 0 # @todo validate min/max




Private Properties
------------------

Create `@[oo._]`, a non-enumerable property with an unguessable name. 

        oo.define @, oo._, {}, 'private'


#### `_x <null>`
@todo describe

        @[oo._]._x = null




Prevent properties being accidentally modified or added to the instance. 

        if 'Mcu' == @C then oo.lock @




Public Methods
--------------


#### `render()`
- `out <[[char]]>`  @todo describe
- `<undefined>`     does not return anything (modifies `out` in place)

@todo describe

      render: (out) ->
        M = '/lesspruino/src/Mcu.litcoffee
          Mcu::render()\n  '

Xx. 

        for y in [@y..@y+@height]
          for x in [@x..@x+@width]
            out[y][x] = '#'




Public Static Functions
-----------------------


#### `xx()`
- `yy <number> 123`  @todo describe
- `<undefined>`      does not return anything

@todo describe

    Mcu.xx = (yy) ->
      M = '/lesspruino/src/Mcu.litcoffee
        Mcu.xx()\n  '

Check that the arguments are valid, or fallback to defaults if undefined. 

      yy = oo.vArg M, yy, 'yy <number>', 123




    ;
