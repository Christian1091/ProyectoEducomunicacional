import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-secction-four',
  templateUrl: './secction-four.component.html',
  styleUrl: './secction-four.component.css',
})
export class SecctionFourComponent {
  mostrarComparacion = false; // Controla la visibilidad de la segunda columna

  dropdownOpen = false;

  options = ['Opción 1', 'Opción 2', 'Opción 3'];

  constructor(private dataService: DataService) {}


  selectOption(option: string) {
    console.log('Seleccionaste:', option);
    this.dropdownOpen = false; // Cerrar el dropdown después de seleccionar
  }

  /*toggleComparacion() {

    //this.mostrarComparacion = !this.mostrarComparacion;
  }*/

  /*formulario: FormGroup;
  opcionesFiltrados: any[] = [];
  MensajeNotificacion = '';
  compararValores = false;
  opciones = [
    { id: 'electricos', label: 'Eléctricos' },
    { id: 'combustion', label: 'Combustión' },
  ];
  dataSet: any = {
    electricos: [
      { id: '01', label: 'A pie' },
      { id: '02', label: 'Scooter Eléctrico' },
      { id: '03', label: 'Bicicleta Eléctrico' },
      { id: '04', label: 'Moto Eléctrico' },
      { id: '05', label: 'Auto Eléctrico' },
      { id: '06', label: 'Tranvía' },
    ],
    combustion: [
      { id: '01', label: 'A Pie' },
      { id: '02', label: 'Camioneta' },
      { id: '01', label: 'Bicicleta' },
      { id: '02', label: 'Moto' },
      { id: '01', label: 'Auto' },
      { id: '02', label: 'Bus' },
    ],
  };

  constructor(
    private router: Router,
    private dataService: DataService,
    private fb: FormBuilder) {
    this.formulario = this.fb.group({
      dropPrincipal: [''],
      dropSecundario: [{ value: '', disabled: true }],
    });

    this.formulario.get('dropPrincipal')?.valueChanges.subscribe((valorSeleccionado) => {
      this.formulario.get('dropSecundario')?.setValue("");
      this.opcionesFiltrados = this.dataSet[valorSeleccionado] || [];
      if (this.opcionesFiltrados.length) {
        this.formulario.get('dropSecundario')?.enable();
      } else {
        this.formulario.get('dropSecundario')?.disable();
      }
    });
  }

  valorSeleccionado() {
    console.log('Materia seleccionada:', this.formulario.get('dropPrincipal')?.value);
    console.log('Curso seleccionado:', this.formulario.get('dropSecundario')?.value);

    if(this.formulario.get('dropSecundario')?.value === '') {
      this.MensajeNotificacion = 'Debe seleccionar una opción.'
      return;
    }
    this.MensajeNotificacion = ''
    console.log('Primera opción seleccionada:', this.formulario.get('dropPrincipal')?.value);
    console.log('Segunda opción seleccionado:', this.formulario.get('dropSecundario')?.value);
  }

  comparar() {
    this.compararValores = !this.compararValores
  }

  selectedOption: string = '';
=======
  opcionSeleccionada: string = '';
  opcionesComparacion: { label: string, value: string, img: string }[] = [];

  toggleComparacion() {
    this.mostrarComparacion = !this.mostrarComparacion;

    if (this.mostrarComparacion) {
      // Solo cuando el usuario presiona "Comparar", cargamos las opciones
      const transporteSeleccionado = this.dataService.getTransportType();
      const combustionOptions = this.dataService.getCombustionOptions();
      const electricOptions = this.dataService.getElectricOptions();

      console.log(`🚗 Transporte obtenido en Sección 4: ${transporteSeleccionado}`);
      console.log('🔥 Opciones de combustión obtenidas:', combustionOptions);
      console.log('⚡ Opciones eléctricas obtenidas:', electricOptions);

      // Determinar las opciones que mostrar según el transporte seleccionado
      if (transporteSeleccionado === 'Combustión') {
        this.opcionesComparacion = electricOptions;  // Mostrar opciones eléctricas
      } else if (transporteSeleccionado === 'Eléctrico') {
        this.opcionesComparacion = combustionOptions; // Mostrar opciones de combustión
      }
    } else {
      // Si se oculta el ComboBox, resetear todo
      this.opcionesComparacion = [];
      this.opcionSeleccionada = '';
    }
  }

  constructor(
    private router: Router,
    private dataService: DataService){}


  datos: any;


  ngOnInit() {
    this.datos = this.dataService.obtenerData();
    console.log(this.datos);

  }


  goToNextSeccionHome() {
    this.router.navigateByUrl('/home');
  }

  goBackSeccionThree() {
    this.router.navigateByUrl('/home/secctionThree');
  }*/

  // RECUPERA LOS VALORES DE LA SECCION TRES
  /*ngOnInit() {
    // Acceder a los datos enviados a través del router state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.selectedOption = navigation.extras.state['selectedOption'];
    }
  }*/




 // Método que se ejecuta cuando se selecciona una opción del ComboBox


}
