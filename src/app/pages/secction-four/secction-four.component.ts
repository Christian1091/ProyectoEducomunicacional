import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-secction-four',
  templateUrl: './secction-four.component.html',
  styleUrl: './secction-four.component.css'
})
export class SecctionFourComponent {
  // Datos de las preguntas (puedes modificar las preguntas y opciones)
  questions = [
    {
      question: "¿Cuál es tu color favorito?",
      options: ["Rojo", "Azul", "Verde", "Amarillo"],
      answer: null as string | null  // Puede ser null o un string
    },
    {
      question: "¿Qué lenguaje de programación prefieres?",
      options: ["JavaScript", "Python", "Java", "C++"],
      answer: null as string | null
    },
    {
      question: "¿Te gustaría aprender Angular?",
      options: ["Sí", "No"],
      answer: null as string | null
    }
  ];

  currentIndex = 0;
  isFinished = false;  // Controla si el formulario ha sido completado

  // Función que maneja el cambio de respuesta
  onAnswerChange(option: string) {
    this.questions[this.currentIndex].answer = option;
  }

  // Función para regresar a la pregunta anterior
  goBack() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  // Función para avanzar a la siguiente pregunta
  goForward() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    }
  }

  // Función para mostrar los resultados
  viewResults() {
    this.isFinished = true;
  }

  // Función de envío (aunque no usamos un backend aquí)
  onSubmit() {
    alert('Formulario enviado');
    console.log(this.questions);
  }
}
