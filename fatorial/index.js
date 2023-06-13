function Fatorial () {
        
      const inputNumber = document.getElementById( "Inserir" );
      const result = document.getElementById( "Resultado" );
      const number = parseInt( inputNumber.value );

      if ( isNaN ( number ) || number < 0 ) {

        result.innerHTML = "Esse numero é invalido";
        return;

      }

      let factorial = 1;

      for ( let i = number; i >= 1; i-- ) {

        factorial *= i;

      }

      result.innerHTML = `O resuldado do fatorial de ${number} é ${factorial}.`;

    }
