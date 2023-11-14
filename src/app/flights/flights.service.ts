import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Citie } from './IATA.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
cities:Citie[]=[    
  //colombia
new Citie("Bogota", "BOG"),
new Citie("Medellin", "MDE"),
new Citie("Cali", "CLO"),
new Citie("Cartagena", "CTG"),
new Citie("Barranquilla", "BAQ"),
new Citie("Santa Marta", "SMR"),
new Citie("Pereira", "PEI"),
new Citie("Manizales", "MZL"),
new Citie("Cucuta", "CUC"),
new Citie("Villavicencio", "VVC"),
new Citie("Ibague", "IBE"),
new Citie("Neiva", "NVA"),
new Citie("Armenia", "AXM"),
new Citie("Popayan", "PPN"),
new Citie("Bucaramanga", "BGA"),
new Citie("Pasto", "PSO"),
new Citie("Monteria", "MTR"),
new Citie("Valledupar", "VUP"),
new Citie("Sincelejo", "SJE"),
new Citie("Riohacha", "RCH"),
//ciudade de América
new Citie("Nueva York", "NYC" ),
new Citie("Los angeles", "LAX" ),
new Citie("Mexico", "MEX" ),
new Citie("Buenos Aires", "EZE" ),
new Citie("Río de Janeiro", "GIG" ),
new Citie("Lima", "LIM" ),
new Citie("Toronto", "YYZ" ),
new Citie("Sao Paulo", "GRU" ),
new Citie("Chicago", "ORD" ),
new Citie("Miami", "MIA" ),
new Citie("Tokio", "HND" ),
new Citie("Santiago", "SCL" ),
//ciudade de Europa
new Citie("Londres", "LON" ),
new Citie("Paris", "CDG" ),
new Citie("Berlin", "BER" ),
new Citie("Roma", "FCO" ),
new Citie("Madrid", "MAD" ),
new Citie("amsterdam", "AMS" ),
new Citie("Barcelona", "BCN" ),
new Citie("Francfort", "FRA" ),
new Citie("Moscu", "SVO" ),
new Citie("Estocolmo", "ARN" ),
new Citie("Atenas", "ATH" ),
new Citie("Viena", "VIE" ),
//ciudade de Asia
new Citie("Pekin", "PEK" ),
new Citie("Seul", "ICN" ),
new Citie("Bangkok", "BKK" ),
new Citie("Mumbai", "BOM" ),
new Citie("Singapur", "SIN" ),
new Citie("Dubai", "DXB" ),
new Citie("Hong Kong", "HKG" ),
new Citie("Shanghai", "PVG" ),
new Citie("Istambul", "IST" ),
new Citie("Tokio", "NRT" ),
new Citie("Delhi", "DEL" ),
//ciudade de África
new Citie("El Cairo", "CAI"),
new Citie("Ciudad del Cabo", "CPT"),
new Citie("Casablanca", "CMN"),
new Citie("Johannesburgo", "JNB"),
new Citie("Lagos", "LOS"),
new Citie("Nairobi", "NBO"),
//ciudade de Oceanía
new Citie("Sidney", "SYD"),
new Citie("Melbourne", "MEL"),
new Citie("Auckland", "AKL"),
new Citie("Brisbane", "BNE"),
new Citie("Honolulu", "HNL"),
//ciudade de Medio Oriente
new Citie("Doha", "DOH"),
new Citie("Tel Aviv", "TLV"),
new Citie("Kuwait City", "KWI"),
new Citie("Riad", "RUH"),
new Citie("Abu Dhabi", "AUH"),
];

originIata= '';
destinIata= '';
origiMult:any[]=[];
destinMult:any[]=[];
origin:any[]=[];
destin:any[]=[];

data:any[]=[];

dateRegister:any[]=[];

private urlApi = 'https://recruiting-api.newshore.es/api/flights/2';
constructor(
  private http:HttpClient,
) { }

public getData(): Observable<any>{
  return this.http.get<any>(this.urlApi);
}

addData(){
  this.getData().subscribe(data => {
    this.data = data;
  })
}

private getIATACode(cityName: string): string {
  const city = this.cities.find((c) => c.name.toLowerCase() === cityName.toLowerCase());

  if (city) {
    return city.iataCode;
  } else {
    return 'N/A'; 
  }
}  

convertToIATACode(originUpper:string, destinUpper:string, dataSearch:any[]) {
  this.data = dataSearch;
  this.originIata = this.getIATACode(originUpper);
  this.destinIata = this.getIATACode(destinUpper);
  
  this.origiMult = this.data.filter((c) => c.departureStation === this.originIata);
  this.destinMult = this.data.filter((c) => c.arrivalStation === this.originIata);
  
  this.origin = this.data.filter((c) => c.departureStation === this.originIata);
  this.destin = this.origin.filter((c) => c.arrivalStation === this.destinIata);
}
  
}
