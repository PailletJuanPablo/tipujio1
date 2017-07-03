import { Injectable } from "@angular/core";
import { Geolocation } from '@ionic-native/geolocation';

@Injectable()
export class LocationService {
    constructor(
        private geolocation: Geolocation
    ) {

    }

    currentLatitude: any;
    currentLongitude: any;
    currentAltitude: any;
    geolocationOptions: {
        maximumAge: 0,
        timeout: 3000,
        enableHighAccuracy: true
    };

    getCurrentLocation() {
        return new Promise((resolve, reject) => {
            this.geolocation.getCurrentPosition(this.geolocationOptions)
            .then((geoposition) => {
                this.currentLatitude = geoposition.coords.latitude;
                this.currentLongitude = geoposition.coords.longitude;
                this.currentAltitude = geoposition.coords.altitude;
                resolve();
            }).catch((err) => {
              this.currentLatitude = 'no se pudo determinar ubicación';
              this.currentLongitude = ' ';
              this.currentAltitude = ' ';
              //  reject(err);
            });
        });
    }

    checkPermission() {
        return new Promise((resolve, reject) => {
            this.geolocation.getCurrentPosition(this.geolocationOptions)
            .then(() => {
                resolve();
            })
            .catch((err) => {
                if(err.code == 1) {
                    // permission denied stop the app until user grants permission
                    reject({
                        permission: false,
                        message: 'Safety Net needs access to Location Services in order to alert your selected contacts.'
                    });
                } else {
                  this.currentLatitude = 'no se pudo determinar ubicación';
                  this.currentLongitude = ' ';
                  this.currentAltitude = ' ';
                }
            });
        });
    }
}
