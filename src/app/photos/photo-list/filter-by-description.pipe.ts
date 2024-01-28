import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({
  name:'filterByDescription'
})
export class FilterByDescription implements PipeTransform{
  transform(photos: Photo[], descriptionQuery:string) {
    descriptionQuery = descriptionQuery.trim().toLocaleLowerCase();

    if(descriptionQuery){
      return photos.filter(p =>
        p.description.toLocaleLowerCase().includes(descriptionQuery));
    } else {
      return photos;
    }
  }
}
