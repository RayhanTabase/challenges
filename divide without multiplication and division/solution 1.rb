# Not very time efficient

def divide(dividend, divisor)
    is_positive = true
    if dividend > 0 && divisor < 0 || dividend < 0 && divisor > 0
        is_positive = false
    end
    divisor = divisor.abs
    dividend = dividend.abs

    answer = 0
    number_add = 0
    if divisor == 1
        answer = dividend
    else
        while number_add <= dividend
            number_add += divisor
            answer += 1 if number_add <= dividend
        end
    end
    min = -2**31
    max = (2**31) - 1
    if is_positive
        return [max, answer].min
    else
        return [min, -answer].max
    end
end
