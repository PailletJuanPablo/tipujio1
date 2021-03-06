import { Injectable } from "@angular/core";
import { ITimerOptions } from '../interfaces/timerOptions.interface';
import { INet } from '../interfaces/net.interface';
import { CustomMessage } from '../interfaces/customMessage.interface';
import { BackgroundMode } from '@ionic-native/background-mode';
import { SMSService } from './sms.service';
import { LocationService } from './location.service';

@Injectable()
export class TimerService {


    constructor(
        private backgroundMode: BackgroundMode,
        private smsService: SMSService,
        private locationService: LocationService,
    ) {

    }

    public countdownHours: number;
    public countdownMinutes: number;
    public countdownSeconds: number;
    private timerDuration: number;
    private countdownInterval: number;
    public timerActive: boolean = false;
    public denunciarealizada:boolean= false;
    public denunciastring:string = 'Enviando Alerta...';


    public startTimer(options: ITimerOptions) {
        let selectedPhoneNumbers: Array<string>;

        this.backgroundMode.enable();
        this.timerDuration = this.calculateDuration(options.hours, options.minutes);
        this.updateCountdownDisplay();
        selectedPhoneNumbers = this.parseSelectedNumbersFromNet(options.net);

        this.timerActive = true;

        this.countdownInterval = setInterval(() => {
            this.timerDuration -= 500;
            if(this.timerDuration > 0) {
                this.updateCountdownDisplay();
            } else {
                this.handleFinishedTimer(options, selectedPhoneNumbers);
            }
        }, 500);

    }

    public cancelTimer() {
        clearInterval(this.countdownInterval);


        this.backgroundMode.disable();
    }

    private updateCountdownDisplay() {
        this.countdownHours = Math.floor(this.timerDuration / (1000 * 60 * 60));
        this.countdownMinutes = Math.floor(this.timerDuration / 60000) % 60;
        this.countdownSeconds = Math.floor(this.timerDuration / 1000) % 60;
    }

    private calculateDuration(hours: number, minutes: number) {
        let duration: number = 0;
        let hoursToMilliSeconds = 0 * 60 * 60 * 1000;
        let minutesToMilliSeconds = 0 * 60 * 1000;
        let segundosamilisegundos = 1* 1000;
        duration = hoursToMilliSeconds + minutesToMilliSeconds + segundosamilisegundos;
        return duration;
    }

    private handleFinishedTimer(options: ITimerOptions, selectedPhoneNumbers: Array<string>) {
        let messageToSend = options.message;
        let locationMessage;
        this.cancelTimer();
        this.locationService.getCurrentLocation()
        .then(() => {
            locationMessage = this.createLocationMessage();
      //      this.sendAlert(selectedPhoneNumbers, messageToSend);
            this.sendAlert(selectedPhoneNumbers, locationMessage);
              this.denunciarealizada=true;
            this.timerActive = false;
            this.denunciastring="Alerta enviada Correctamente!"

        }).catch(err => {
    //        this.handleFinishedTimer(options, selectedPhoneNumbers);
            this.denunciastring="Necesita activar la ubicación para realizar la denuncia."
        })
    }

    private sendAlert(phoneNumbers: Array<string>, message: CustomMessage) {
        phoneNumbers.forEach((number) => {
            this.smsService.sendMessage(number, message);
        });
    }

    private parseSelectedNumbersFromNet(net: INet) {
        let selectedPhoneNumbers: Array<string> = [];
        try {
            net.contacts.forEach((contact) => {
                if(contact.selected) {
                    contact.phoneNumbers.forEach((numberField) => {
                        if(numberField.selected) {
                            let formattedPhoneNumberString = '';
                            for(let char of numberField.value) {
                                let charToNumber = parseInt(char);
                                if(charToNumber >= 0 || charToNumber < 10) {
                                    formattedPhoneNumberString += charToNumber;
                                }
                            }
                            selectedPhoneNumbers.push(formattedPhoneNumberString);
                        }
                    });
                }
            });
        } catch (err) {
            console.log('error parsing selected numbers');
            console.log('error: ' + err);
        }

        return selectedPhoneNumbers;
    }

    private createLocationMessage() {
        let googlemapsLinkText: string = 'Mensaje enviado en caso de una emergencia. Mis coordenadas son (abrir el siguiente link): ' + 'https://www.google.com/maps/search/' + this.locationService.currentLatitude + '+' + this.locationService.currentLongitude;
        let messageToSend: CustomMessage = {
            id: 1,
            title: 'Mensaje de Emergencia',
            message: googlemapsLinkText
        };

        return messageToSend;
    }

}
