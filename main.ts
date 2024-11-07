function menu(): number {
    
    
    
    celsius_fahrenheit_selection = game.askForString("Escull la teva unitat Cº (C) o Fahrenheit (F)", 1)
    celsius_fahrenheit_name = getName(celsius_fahrenheit_selection.toUpperCase())
    celsius_fahrenheit_number = game.askForNumber("Escriu el numero de graus " + celsius_fahrenheit_name, 3)
    conversor(celsius_fahrenheit_selection.toUpperCase(), celsius_fahrenheit_number)
    return celsius_fahrenheit_number
}

function getName(celsius_fahrenheit_selection: string): string {
    let name = "Celsius"
    if (celsius_fahrenheit_selection == "C") {
        name = "Celsius"
        game.showLongText("Has escollit Celsius", DialogLayout.Top)
    } else if (celsius_fahrenheit_selection == "F") {
        name = "Fahrenheit"
        game.showLongText("Has escollit Fahrenheit", DialogLayout.Top)
    } else {
        name = ""
        game.showLongText("Opcio incorrecta", DialogLayout.Bottom)
        menu()
    }
    
    //  Tornar al menu quan s'escull una opció incorrecta
    return name
}

function conversor(opcio: string, num: number) {
    let operation_result: number;
    if (opcio == "C") {
        operation_result = from_celsius_to_fahrenheit(num)
        game.showLongText(num + ` graus Celsius equivalen a:
` + Math.roundWithPrecision(operation_result, 2) + " graus Fahrenheit", DialogLayout.Top)
    } else if (opcio == "F") {
        operation_result = from_fahrenheit_to_celsius(num)
        game.showLongText(num + ` graus Fahrenheit equivalen a:
` + Math.roundWithPrecision(operation_result, 2) + " graus Celsius", DialogLayout.Top)
    } else {
        game.showLongText("Unexpected error", DialogLayout.Bottom)
    }
    
    menu()
}

//  Tornar al menu quan s'ha fet la conversió o hi ha hagut un error
function from_celsius_to_fahrenheit(num: number): number {
    return parseInt(num * 9 / 5 + 32)
}

function from_fahrenheit_to_celsius(num: number): number {
    return Math.trunc((num - 32) * 5 / 9)
}

let celsius_fahrenheit_number = 0
let celsius_fahrenheit_selection = "C"
let celsius_fahrenheit_name = "Celsius"
//  MAIN DE LA APP
menu()
