function Fatorial () {
        
          // Obtem o elemento
        
      const inputNumber = document.getElementById( "Inserir" );
      const result = document.getElementById( "Resultado" );
        
        // Obtem o valor e converte para um numero inteiro
        
      const number = parseInt( inputNumber.value );

        
        // Verifica se o número e valido
        
      if ( isNaN ( number ) || number < 0 ) {

        result.innerHTML = "Esse numero é invalido";
        return;

      }

         // Começa o fatorial com 1
        
      let factorial = 1;

         // Calcula o fatorial
        
      for ( let i = number; i >= 1; i-- ) {

        factorial *= i;

      }

        // Mostra o resultado 
        
      result.innerHTML = `O resuldado do fatorial de ${number} é ${factorial}.`;

    }
