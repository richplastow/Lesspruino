01 Lesspruino Constructor
=========================

    tudor.add [
      "01 Lesspruino Constructor"
      tudor.is




      "The class and instance are expected types"

Prepare a test-instance. 

      -> [new Lesspruino]


      "The Lesspruino class is a function"
      oo.F
      -> Lesspruino


      "`new` returns an object"
      oo.O
      (lesspruino) -> lesspruino


      tudor.equal


      "`Lesspruino::C` is 'Lesspruino'"
      'Lesspruino'
      (lesspruino) -> lesspruino.C


      "`Lesspruino::toString()` is '[object Lesspruino]'"
      '[object Lesspruino]'
      (lesspruino) -> lesspruino+''




      "Instance properties as expected"


      tudor.equal





    ];


