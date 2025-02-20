import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-secction-three',
  templateUrl: './secction-three.component.html',
  styleUrl: './secction-three.component.css'
})
export class SecctionThreeComponent {

  selectedOptionTrans: string = '';
  transportType: string = ''; // Guarda si es Combustión o Eléctrico
  MensajeNotificacion = '';

  distSemanal: number = 0;
  litroConsumido: number = 0;
  precioLitro: number = 0;
  tiempo: number = 48;
  costGasoAnual: number= 0;

  emiCo2: number = 0.97;

  co2: number = 0;
  numArb: number = 0;


  // Opciones de transporte
  combustionOptions = [
    { label: 'A Pie', value: 'A Pie', img: '../../../assets/icons/hombre.png' },
    { label: 'Camioneta', value: 'Camioneta', img: '../../../assets/icons/camioneta.png' },
    { label: 'Bicicleta', value: 'Bicicleta', img: '../../../assets/icons/bicicleta.png' },
    { label: 'Moto', value: 'Moto', img: '../../../assets/icons/moto.png' },
    { label: 'Auto', value: 'Auto', img: '../../../assets/icons/carro.png' },
    { label: 'Bus', value: 'Bus', img: '../../../assets/icons/autobus.png' }
  ];

  electricOptions = [
    { label: 'Taxi Eléctrico', value: 'TaxiElectrico', img: './../../assets/icons/hombre.png' },
    { label: 'Scooter Eléctrico', value: 'ScooterElectrico', img: '../../../assets/icons/scooter.png' },
    { label: 'Bicicleta Eléctrica', value: 'BicicletaElectrica', img: '../../../assets/icons/bicicletaElec.png' },
    { label: 'Moto Eléctrica', value: 'MotoElectrica', img: '../../../assets/icons/motoElec.png' },
    { label: 'Auto Eléctrico', value: 'AutoElectrico', img: '../../../assets/icons/autoElec.png' },
    { label: 'Tranvía', value: 'Tranvía', img: '../../../assets/icons/tranvia.png' }
  ];

  constructor (private router: Router, private dataService: DataService){}

  // Método para detectar si es transporte de combustión o eléctrico
  setTransportType(type: string) {
    this.transportType = type;
    console.log(`Transporte seleccionado: ${this.selectedOptionTrans} - Tipo: ${this.transportType}`);
  }

  
  enviar() {
    if(this.selectedOptionTrans == null || this.selectedOptionTrans == '') {
      this.MensajeNotificacion = 'Debe seleccionar una opción.';
      return;
    }
    if(this.selectedOptionTrans !== null) {
      this.dataService.saveDataThree({transporte: this.selectedOptionTrans});

      //Calcular distancia semanal
      this.distSemanal = this.dataService.getKilometro() * 5;
      console.log('Kilometros a la semana: ' + this.distSemanal)

      //Calcular litros consumidos
      this.litroConsumido = (8 * this.distSemanal)/100;
      console.log('litros consumidos: ' + this.litroConsumido)

      //Calcular precio litro
      this.precioLitro = (this.litroConsumido * 2.71)/3.78;
      const precioLitroDecimal = parseFloat(this.precioLitro.toFixed(2))
      console.log('Precio litro: $ ' + precioLitroDecimal)

      // Calcula costo gasolina anual
      this.costGasoAnual = precioLitroDecimal * this.tiempo;
      console.log('Costo consumo anual: $ ' + this.costGasoAnual)

      //Calcular emision Co2
      this.co2 = parseFloat((this.emiCo2 * this.distSemanal).toFixed(2));

      //Recompensar Ã¡rboles
      this.numArb = Math.round(this.co2 / 0.27);

      this.dataService.saveDataFour({precioGasolina: this.costGasoAnual, emisionCo2: this.co2, recomArbol: this.numArb});
      this.dataService.setTransportType(this.transportType);
      console.log(`✅ Transporte seleccionado: ${this.transportType}`);
      this.dataService.setOptions(this.combustionOptions, this.electricOptions);
      console.log('selectedOptionTrans ' + this.selectedOptionTrans, ' getElectricOptions ',this.dataService.getElectricOptions())

      this.router.navigateByUrl('/home/secctionFour');
    }

   

  }
  

  goToNextSeccionFour() {
    this.router.navigateByUrl('/home/secctionFour');
  }

  goBackSeccionTwo() {
    this.router.navigateByUrl('/home/secctionTwo');
  }
  /*onSubmit() {
    // AquÃ­ obtenemos el valor seleccionado del radio button
    // Ya que estamos usando ngModel, lo podemos acceder directamente
    console.log("Ha seleccionado la opcion ==> " + this.selectedOption);
    // Navegamos a la siguiente secciÃ³n, pasando los datos por el router
    // De preferencia, utiliza un servicio para almacenar datos globalmente.
    this.router.navigate(['/home/secctionFour'], {
      state: { selectedOption: this.selectedOption },
    });
  }*/

  // RECUPERA VALORES DE LA SECCION DOS
  /*ngOnInit() {
    // Acceder a los datos enviados a travÃ©s del router state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.selectedOption = navigation.extras.state['selectedOption'];
    }
    //console.log('Valor seleccionado: ' + this.selectedOption);
  }*/

}
