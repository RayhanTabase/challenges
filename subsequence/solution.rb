#Link to challenge -> https://leetcode.com/submissions/detail/711106398/


# @param {String} s
# @param {String} t
# @return {Boolean}
def is_subsequence(s, t)
    result = false
    count = 0
    limit = s.length
    
    return true if s == '' && t == ''
    
    t.split('').each do |character|  
        count += 1 if s[count] == character
        result = true if count == limit
    end
    
    result
end
