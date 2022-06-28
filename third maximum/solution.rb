#https://leetcode.com/problems/third-maximum-number/submissions/


# @param {Integer[]} nums
# @return {Integer}
def third_max(nums)
    first_max = nil
    second_max = nil
    third_max = nil
    memoize = {}
    nums.each do |num|
        next if memoize.has_key?(num)
        memoize[num] = true
        current_value = num
        if first_max.nil? || current_value > first_max
            temp = first_max
            first_max = current_value
            current_value = temp 
        end
        if second_max.nil? || current_value.nil? || current_value > second_max
            temp = second_max
            second_max = current_value
            current_value = temp
        end
        if third_max.nil? || current_value.nil? || current_value > third_max
            temp = third_max
            third_max = current_value
            current_value = temp
        end
    end
    puts first_max,  second_max, third_max
    
    return first_max if third_max.nil?
    third_max
end
