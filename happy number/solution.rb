def find_square(n, checked)
    if n < 10
        return n if n == 1
        return n if checked.include? n
        checked << n
    end
    #find square
    n = n.to_s
    result = 0
    n.split("").each do |character|
        newNumber = character.to_i
        newNumberSquare = newNumber **2
        result += newNumberSquare
    end
    #call function
    find_square(result, checked)
end

def is_happy(n)
    result = find_square(n, [])
    return true if result == 1
    false
end
