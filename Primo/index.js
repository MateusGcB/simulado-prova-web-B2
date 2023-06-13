function isPrime ( number ) {

      if ( number < 2 ) {

        return false;

      }

      for ( let i = 2; i <= Math.sqrt(number); i++ ) {

        if ( number % i === 0 ) {

          return false;

        }

      }

      return true;
    }



    function Checagem () {

      const inputNumber = document.getElementById( "Inserir" );
      const result = document.getElementById( "Resultado" );
      const number = parseInt( inputNumber.value );

      if ( isPrime ( number )) {

        result.innerHTML = number + " é primo.";
      } 
      
      else {

        result.innerHTML = number + " não é primo.";
      }

    }
