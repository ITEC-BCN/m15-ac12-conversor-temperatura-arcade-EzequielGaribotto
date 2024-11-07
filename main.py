import Math
def menu():
    global celsius_fahrenheit_number
    global celsius_fahrenheit_selection
    global celsius_fahrenheit_name
    celsius_fahrenheit_selection = game.ask_for_string("Escull la teva unitat Cº (C) o Fahrenheit (F)", 1)
    celsius_fahrenheit_name = getName(celsius_fahrenheit_selection.to_upper_case())
    celsius_fahrenheit_number = game.ask_for_number("Escriu el numero de graus " + celsius_fahrenheit_name, 3)
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
        menu() # Tornar al menu quan s'escull una opció incorrecta
    return name

def conversor(opcio: string, num: int):
    if (opcio == "C"):
        operation_result = from_celsius_to_fahrenheit(num)
        game.show_long_text(num+" graus Celsius equivalen a:\n" + Math.round(operation_result, 2) +" graus Fahrenheit", DialogLayout.TOP)
    elif (opcio == "F"):
        operation_result = from_fahrenheit_to_celsius(num)
        game.show_long_text(num+" graus Fahrenheit equivalen a:\n" + Math.round_with_precision(operation_result, 2) +" graus Celsius", DialogLayout.TOP)
    else:
        game.show_long_text("Unexpected error", DialogLayout.BOTTOM)
    menu() # Tornar al menu quan s'ha fet la conversió o hi ha hagut un error
            

def from_celsius_to_fahrenheit(num: int):
    return int((num * 9 / 5) + 32)
def from_fahrenheit_to_celsius(num:int):
    return int((num - 32) * 5/9)

celsius_fahrenheit_number = 0
celsius_fahrenheit_selection = "C"
celsius_fahrenheit_name = "Celsius"
# MAIN DE LA APP
menu()