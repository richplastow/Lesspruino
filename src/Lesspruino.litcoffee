Lesspruino
==========


#### The main class, used for creating a prototyping environment

    class Lesspruino
      C: 'Lesspruino'
      toString: -> '[object Lesspruino]'


#### `constructor()`
- `config <object> {}`       initial configuration
  - `config.x <number> 123`  @todo describe
- `<undefined>`              does not return anything

@todo describe

      constructor: (config={}) ->
        M = '/lesspruino/src/Lesspruino.litcoffee
          Lesspruino()\n  '


Make `v()`, a function for checking that `config` properties are ok. 

        v = oo.vObject M, 'config', config




Public Properties
-----------------


#### `width <integer> 80`, `height <integer> 24`
From `config.width` and `config.height`. The number of pinds on the virtual PCB.

        @width  = v 'width  <integer>', 80
        @height = v 'height <integer>', 24




Private Properties
------------------

Create `@[oo._]`, a non-enumerable property with an unguessable name. 

        oo.define @, oo._, {}, 'private'


#### `_mcus <[Mcu]> []`
@todo describe

        @[oo._]._mcus = []




Prevent properties being accidentally modified or added to the instance. 

        if 'Lesspruino' == @C then oo.lock @




Public Methods
--------------


#### `add()`
- `config <object> {}`                        what to add, how to configure it
  - `config.kind <string> 'VirtualEspruino'`  @todo describe
- `<string>`                                  Unique identifier of the new item

@todo describe

      add: (config={}) ->
        M = '/lesspruino/src/Lesspruino.litcoffee
          Lesspruino::add()\n  '

Check that config is valid, or fallback to defaults if undefined. 

        v = oo.vObject M, 'config', config # checks `config`’s properties
        kind = v 'kind <string>', 'VirtualEspruino' # @todo other kinds

Add a real Espruino to the PCB. 

        if 'RealEspruino' == kind
          config.id = 're' + @[oo._]._mcus.length
          @[oo._]._mcus.push new Mcu.RealEspruino config

Add a virtual Espruino to the PCB. 

        else if 'VirtualEspruino' == kind
          config.id = 've' + @[oo._]._mcus.length
          @[oo._]._mcus.push new Mcu.VirtualEspruino config

        else
          throw RangeError M + '`config.kind` not recognized'
        return config.id




#### `browse()`
- `config <object> {}`                what to browse, how to render it
  - `config.format <string> 'ascii'`  @todo describe
- `<string>`                          @todo describe

@todo describe

      browse: (config={}) ->
        M = '/lesspruino/src/Lesspruino.litcoffee
          Lesspruino::browse()\n  '

Check that config is valid, or fallback to defaults if undefined. 

        v = oo.vObject M, 'config', config # checks `config`’s properties
        format = v 'format <string>', 'ascii' # @todo other formats

Render the browse-result as ascii. 

        if 'ascii' == format
          out = []
          for y in [0..@height-1]
            out.push row = []
            row.push '.' for x in [0..@width]

Render each component. @todo other components

          mcu.render out for mcu in @[oo._]._mcus

Output the finished ascii representation. 

          out[i] = row.join '' for row,i in out
            
          out.join '\n'




Public Static Functions
-----------------------


#### `xx()`
- `yy <number> 123`  @todo describe
- `<undefined>`      does not return anything

@todo describe

    Lesspruino.xx = (yy) ->
      M = '/lesspruino/src/Lesspruino.litcoffee
        Lesspruino.xx()\n  '

Check that the arguments are valid, or fallback to defaults if undefined. 

      yy = oo.vArg M, yy, 'yy <number>', 123





Private Variables and Functions
-------------------------------

These have module-wide scope. Any code in the Lesspruino module can access them. 


#### `x <null>`
@todo describe

    x = null


#### `xx()`
- `yy <number>`  @todo describe
- `<undefined>`  does not return anything

To simulate a private method, use `xx.call(@, yy)`. @todo describe

    xx = (yy) ->
      M = '/lesspruino/src/Lesspruino.litcoffee
        xx()\n  '




    ;
