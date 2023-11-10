public class Example {

    public void exampleMethod() {
        // Uso de una variable no utilizada
        int unusedVariable = 42;

        // Comprobación innecesaria, SonarCloud puede detectar esto como redundante
        if (true) {
            System.out.println("This block is always executed.");
        }

        // Division por cero, un posible error que puede ser detectado
        int a = 5;
        int b = 0;
        int result = a / b;

        // Uso de código depreciado
        String deprecatedMethod = "This method is deprecated.";
        System.out.println(deprecatedMethod.hashCode());

        // Creación innecesaria de objetos
        String repeatedString = "Repeated String";
        String anotherString = new String("Repeated String"); // Este objeto no es necesario

        // Comprobación de nulo sin necesidad
        String nullableString = null;
        if (nullableString != null) {
            System.out.println(nullableString.length());
        }

        // Intento de cierre de un recurso no cerrable
        try {
            int[] array = new int[5];
            // Este bloque try-with-resources genera un error en SonarCloud porque el array no es autocerrable
            try (array) {
                // Hacer algo con el array
            }
        } catch (Exception e) {
            System.out.println("Exception caught: " + e.getMessage());
        }
    }
}
