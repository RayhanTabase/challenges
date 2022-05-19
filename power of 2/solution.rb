# @param {Integer} n
# @return {Boolean}


# Link to challenge -> https://leetcode.com/submissions/detail/702625943/

def divisor(n)
    return true if n == 1
    return false if n < 2
    divisor(n.to_f/2)
end
    
  
def is_power_of_two(n)
    divisor(n)
end
