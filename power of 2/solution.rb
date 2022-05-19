# @param {Integer} n
# @return {Boolean}

def divisor(n)
    return true if n == 1
    return false if n < 2
    result = n.to_f/2
    divisor(result)
end
    
  
def is_power_of_two(n)
    divisor(n)
end
