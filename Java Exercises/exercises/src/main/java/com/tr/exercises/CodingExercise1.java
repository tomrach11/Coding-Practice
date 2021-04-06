package com.tr.exercises;

public class CodingExercise1 {
    //function, condition (Easy)

    //Function

    // Average Of Three
    // Write a method average_of_three(num1, num2, num3) that returns the average of three numbers
    public void averageOfThree(float num1, float num2, float num3) {
        float sum = 0;
        sum = num1 + num2 + num3;
        float avg = sum / 3;
        System.out.println(avg);
    }

    // Goodbye
    // Write a method goodbye(name) that takes in a string name and returns a string saying bye to that name. See the example calls.
    public void goodbye(String name) {
        System.out.println("Bye " + name);
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------
    //Conditional (IF)

    // Is Div By Five
    // Write a method is_div_by_5(number) that takes in a number and returns the boolean true if the given number is divisible by 5, false otherwise
    public void divByFive(int num) {
        if (num % 5 == 0) {
            System.out.println(true);
        }
        else {
            System.out.println(false);
        }
    }

    // Either Only
    // Write a method either_only(number) that takes in a number and returns true if the number is divisible by either 3 or 5, but not both. The method should return false otherwise.
    public void eitherOnly(int num) {
        if ((num % 5 == 0 || num % 3 == 0) && !(num % 5 == 0 && num % 3 == 0)) {
            System.out.println(true);
        } else {
            System.out.println(false);
        }
    }

    // Larger Number
    // Write a method larger_number(num1, num2) that takes in two numbers and returns the larger of the two numbers.
    public void largeNumber(int num1, int num2) {
        if (num1 > num2) {
            System.out.println(num1);
        } else {
            System.out.println(num2);
        }
    }

    // Number Check
    // Write a method number_check(num) that takes in a number and returns a string. The method should return the string 'positive' if the num is positive, 'negative' if the num is negative, and 'zero' if the num is zero.
    public void numberCheck(int num) {
        if (num > 0) {
            System.out.println("positive");
        } else if (num == 0) {
            System.out.println("zero");
        } else {
            System.out.println("negative");
        }
    }

    // Word Check
    // Write a method word_check(word) that takes in a word and returns a string. The method should return the string "long" if the word is longer than 6 characters, "short" if it is less than 6 characters, and "medium" if it is exactly 6 characters long.
    public void wordCheck(String word) {
        if (word.length() > 6) {
            System.out.println("long");
        } else if (word.length() == 6) {
            System.out.println("medium");
        } else {
            System.out.println("short");
        }
    }

}
