document.getElementById("calculate").addEventListener("click", function() {

    // Obtener los valores de los inputs
    
    const num1 = parseFloat(document.getElementById("num1").value);
    
    const num2 = parseFloat(document.getElementById("num2").value);
    
    
    
    // Validar si los números son válidos
    
    if (isNaN(num1) || isNaN(num2)) {
    
    document.getElementById("result").innerText = "Por favor, ingresa números válidos.";
    
    } else {
    
    
    
    // Realizar la operación y mostrar el resultado
    
      const sum = num1 + num2;
    
 
      document.getElementById("result").innerText = "Resultado:" + sum;

    }

    });