91 Robust Lesspruino Constructor
================================

    if oo.ROBUSTABLE
      tudor.add [
        "91 Robust Lesspruino Constructor (for modern UAs)"
        tudor.is




        "Class members are immutable in modern UAs"

Prepare a test-instance. 

        -> [new Lesspruino]


        "Cannot add a property to the Lesspruino class"
        oo.U
        -> Lesspruino.nope = 123; Lesspruino.nope


        "Cannot add a property to the Lesspruino class’s prototype object"
        oo.U
        (lesspruino) -> Lesspruino::nope = 456; lesspruino.nope


        tudor.equal


        "`Lesspruino::C` is a constant"
        'Lesspruino'
        (lesspruino) -> lesspruino.C = 'changed!'; lesspruino.C



      ];

