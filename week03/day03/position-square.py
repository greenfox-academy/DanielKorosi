from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a square drawing function that takes 2 parameters:
# the x and y coordinates of the square's top left corner
# and draws a 50x50 square from that point.
# draw 3 squares with that function.

def drawsquere(x, y):
    squere = canvas.create_rectangle(x, y, x+50, y+50)

drawsquere(10,10)
drawsquere(100,100)
drawsquere(200,200)

root.mainloop()
