celsius_fahrenheit_number = 0
celsius_fahrenheit_selection = "C"
celsius_fahrenheit_name = "Celsius"
operation_result = 0

def menu():
    global celsius_fahrenheit_number
    global celsius_fahrenheit_selection
    global celsius_fahrenheit_name
    celsius_fahrenheit_selection = game.ask_for_string("Escull la teva unitat Cº (C) o Fahrenheit (F)", 1)
    celsius_fahrenheit_name = getName(celsius_fahrenheit_selection.to_upper_case())
    celsius_fahrenheit_number = game.ask_for_number("Escriu el numero de graus " + celsius_fahrenheit_name + "=" + conversor(celsius_fahrenheit_selection.to_upper_case(), celsius_fahrenheit_number, False), 3)
    conversor(celsius_fahrenheit_selection.to_upper_case(), celsius_fahrenheit_number)
    return celsius_fahrenheit_number

def getName(celsius_fahrenheit_selection):
    name = "Celsius"
    if (celsius_fahrenheit_selection == "C"):
        name = "Celsius"
        game.show_long_text("Has escollit Celsius", DialogLayout.TOP)
    elif (celsius_fahrenheit_selection == "F"):
        name = "Fahrenheit"
        game.show_long_text("Has escollit Fahrenheit", DialogLayout.TOP)
    else:
        name = ""
        game.show_long_text("Opcio incorrecta", DialogLayout.BOTTOM)
        menu()
    return name

def conversor(opcio: string, num: int, ui: boolean = True):
    operation_result = -1
    if (opcio == "C"):
        operation_result = from_celsius_to_fahrenheit(num)
        if (ui == True):
            game.show_long_text(num+" graus Celsius equivalen a:\n" + operation_result +" graus Fahrenheit", DialogLayout.TOP)
    elif (opcio == "F"):
        operation_result = from_fahrenheit_to_celsius(num)
        if (ui == True):
            game.show_long_text(num+" graus Fahrenheit equivalen a:\n" + operation_result +" graus Celsius", DialogLayout.TOP)
    else:
        game.show_long_text("Unexpected error", DialogLayout.BOTTOM)
    return operation_result

def from_celsius_to_fahrenheit(num: int):
    result = (num * 9 / 5) + 32
    return int(result * 100) / 100

def from_fahrenheit_to_celsius(num: int):
    result = (num - 32) * 5 / 9
    return int(result * 100) / 100



# MAIN DE LA APP
menu()