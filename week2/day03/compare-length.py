# - Create a variable named `p1`
#   with the following content: `[1, 2, 3]`
# - Create a variable named `p2`
#   with the following content: `[4, 5]`
# - Print if `p2` has more elements than `p1`

p1 = [1, 2, 3]
p2 = [4, 5]

def compare_length(p1, p2):
    if len(p2) > len(p1):
        print ("p2 has more elements")

compare_length(p1,p2)
