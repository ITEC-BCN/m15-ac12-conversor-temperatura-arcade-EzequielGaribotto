let celsius_fahrenheit_number = 0
let celsius_fahrenheit_selection = "C"
let celsius_fahrenheit_name = "Celsius"
let operation_result = 0
function menu(): number {
    
    
    
    
    celsius_fahrenheit_selection = game.askForString("Escull la teva unitat Cº (C) o Fahrenheit (F)", 1)
    celsius_fahrenheit_name = getName(celsius_fahrenheit_selection.toUpperCase())
    celsius_fahrenheit_number = game.askForNumber("Escriu el numero de graus " + celsius_fahrenheit_name + "=" + operation_result, 3)
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
    
    return name
}

controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    let operation_result = conversor(celsius_fahrenheit_selection.toUpperCase(), celsius_fahrenheit_number, false)
})
function conversor(opcio: string, num: number, ui: boolean = true): number {
    let operation_result = -1
    if (opcio == "C") {
        operation_result = from_celsius_to_fahrenheit(num)
        if (ui == true) {
            game.showLongText(num + ` graus Celsius equivalen a:
` + operation_result + " graus Fahrenheit", DialogLayout.Top)
        }
        
    } else if (opcio == "F") {
        operation_result = from_fahrenheit_to_celsius(num)
        if (ui == true) {
            game.showLongText(num + ` graus Fahrenheit equivalen a:
` + operation_result + " graus Celsius", DialogLayout.Top)
        }
        
    } else {
        game.showLongText("Unexpected error", DialogLayout.Bottom)
    }
    
    game.reset()
    return operation_result
}

function from_celsius_to_fahrenheit(num: number): number {
    let result = num * 9 / 5 + 32
    return Math.trunc(result * 100) / 100
}

function from_fahrenheit_to_celsius(num: number): number {
    let result = (num - 32) * 5 / 9
    return Math.trunc(result * 100) / 100
}

//  MAIN DE LA APP
menu()
