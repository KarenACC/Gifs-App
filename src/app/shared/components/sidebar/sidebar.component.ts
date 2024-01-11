import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor( private gifsService:GifsService){}

  get tags():string[]{
    return this.gifsService.tagsHistory
  }

  reSearch(newTag:string){
    this.gifsService.searchTag (newTag);
  }


}
