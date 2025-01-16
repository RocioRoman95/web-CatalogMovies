import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genre'
})


export class GenrePipe implements PipeTransform {

 
  transform(value: string): string {
    const genreMap: { [key: string]: string } = {
      'sci-fi': 'Sci-Fi',
      'action': 'Action',
      'comedy': 'Comedy',
      'drama': 'Drama',
      'romance': 'Romance',
      'horror': 'Horror',
      'adventure': 'Adventure',
      'animation': 'Animation'
    };

    return genreMap[value.toLowerCase()] || value;
  }
}
