function PRIMO ( number ) {

      
        // Confere se o numero e menor que 2
      
      if ( number < 2 ) {

        return false;

      }

      
      // Ve se o numero e divisivel por um número de 2 ate a raiz quadrada
      
      for ( let i = 2; i <= Math.sqrt(number); i++ ) {

        if ( number % i === 0 ) {

          return false;

        }

      }

      return true;
    }


      // Checa se o numero e primo

    function Checagem () {

      const inputNumber = document.getElementById( "Inserir" );
      const result = document.getElementById( "Resultado" );
      const number = parseInt( inputNumber.value );

          // Da a resposta afirmativa se o numero for primo
          
      if ( PRIMO ( number )) {

        result.innerHTML = number + " é primo.";
      } 
      
           // Da a resposta negativa se o numero nao e primo
          
      else {

        result.innerHTML = number + " não é primo.";
      }

    }
