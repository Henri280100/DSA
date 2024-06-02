/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package algorithms;

/**
 *
 * @author User
 */
public class Algorithms {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // RomanToInt rti = new RomanToInt();
        // String roman = "XIV";

        // Palindrome pal = new Palindrome();
        // int num = 9876789;

        IntToRoman itr = new IntToRoman();
        int num = 1994;
        System.out.println(itr.intToRoman(num));
    }

}
