# https://leetcode.com/problems/find-the-difference/submissions/
def find_the_difference(s, t)    
    length_t = t.length
    count = 0
    map_s = {}
    map_t = {}

    while count < s.length
        letter = s[count]
        if map_s.has_key?(letter)
            map_s[letter] += 1
        else
            map_s[letter] = 1
        end
        count += 1
    end
    count = 0
    while count < t.length
        letter = t[count]
        return letter if !map_s.has_key?(letter)
        if map_t.has_key?(letter)
            map_t[letter] += 1
        else
            map_t[letter] = 1
        end
        return letter if map_t[letter] > map_s[letter]
        count += 1
    end
end
