package algorithms;

import java.util.LinkedHashMap;
import java.util.Map;

public class IntToRoman {
    public String intToRoman(int num) {
        Map<Integer, String> symbolMap = new LinkedHashMap<>();
        symbolMap.put(1000, "M");
        symbolMap.put(900, "CM");
        symbolMap.put(500, "D");
        symbolMap.put(400, "CD");
        symbolMap.put(100, "C");
        symbolMap.put(90, "XC");
        symbolMap.put(50, "L");
        symbolMap.put(40, "XL");
        symbolMap.put(10, "X");
        symbolMap.put(9, "IX");
        symbolMap.put(5, "V");
        symbolMap.put(4, "IV");
        symbolMap.put(1, "I");

        StringBuilder result = new StringBuilder();

        for (Map.Entry<Integer, String> entry : symbolMap.entrySet()) {

            int key = entry.getKey();
            String value = entry.getValue();

            int count = num / key;
            if (count > 0) {
                result.append(value.repeat(count));
                num -= key * count;
            }
        }
        return result.toString();
    }
}
