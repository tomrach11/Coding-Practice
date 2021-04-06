package com.tr.exercises;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


public class JavaExercisesApplication {

	public static void main(String[] args) {
		CodingExercise1 ex1 = new CodingExercise1();

		ex1.wordCheck("contraption"); //# => "long"
		ex1.wordCheck("fruit");       //# => "short"
		ex1.wordCheck("puzzle");      //# => "medium"
	}



}
