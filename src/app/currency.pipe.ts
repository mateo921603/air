// currency.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

interface ConversionRates {
  [key: string]: number;
}

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {
  private conversionRates: ConversionRates = {
    'USD': 1,
    'EUR': 0.9,
    'COL': 3954
    // Agrega más tasas de cambio según tus necesidades
  };

  transform(value: number, currentCurrency: string, targetCurrency: string): number {
    if (!this.conversionRates[currentCurrency] || !this.conversionRates[targetCurrency]) {
      console.error('Tasas de cambio no definidas para las monedas seleccionadas');
      return value;
    }

    // Aplica la conversión
    const convertedValue = value * this.conversionRates[currentCurrency];

    // Redondea a dos decimales
    return Math.round(convertedValue * 100) / 100; currentCurrency
  }
}
