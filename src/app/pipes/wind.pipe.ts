import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wind'
})
export class WindPipe implements PipeTransform {

  transform(speed: string, direction: string): unknown {

    if (Number(speed)) {
      var index = (Math.round(Number(direction) / 22.5)) % 16;
      var directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
      var symbol = directions[index];

      return `${speed} Mph ${symbol}`;
    } else {
      return
    }
  }

}
