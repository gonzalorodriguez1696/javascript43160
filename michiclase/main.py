edad=int(input("ingrese su edad"))
banco = 1000
if edad<1:
    print("usted no existe, viejo mentiroso e.e")
elif edad<18:
    print("usted es menor de edad")
elif edad>150:
    print("COMO LE HACES WE")
    banco = 1000 * 1.3
    print("Su salario es de:",banco)
elif edad>=60:
    print("usted es jubilado")
    banco = 1000 * 1.2
    print("Su salario es de:",banco)
elif edad>=18:
    print("usted es mayor de edad")
    banco = 1000 * 1.1
    print("Su salario es de:",banco)
else:
    print("escriba su edad wey")