package algorithms;

import java.util.HashMap;
import java.util.Map;

public class RomanToInt {
    public int RomanToInt(String s) {
        Map<Character, Integer> symbol = new HashMap<>();
        symbol.put('I', 1);
        symbol.put('V', 5);
        symbol.put('X', 10);
        symbol.put('L', 50);
        symbol.put('C', 100);
        symbol.put('D', 500);
        symbol.put('M', 1000);

        int total = 0;
        int prevValue = 0;

        // Convert the string to a character array and use a for-each loop to iterate
        
        for (char currentChar : s.toCharArray()) {
            int currentValue = symbol.get(currentChar);
            
            if (currentValue > prevValue) {
                total += currentValue - 2 * prevValue;
            } else {
                total += currentValue;
            }

            prevValue = currentValue;
        }

        return total;
    }
}
