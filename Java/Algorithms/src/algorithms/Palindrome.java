/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package algorithms;

public class Palindrome {

    public boolean isPalindrome(int x) {
        if (x < 0 || (x % 10 == 0 && x != 0)) {
            return false;
        }

        int reverse = 0;
        int org = x;

        while (x > 0) {
            reverse = reverse * 10 + (x % 10);
            x = x / 10;
        }
        return org == reverse;
    }
}
