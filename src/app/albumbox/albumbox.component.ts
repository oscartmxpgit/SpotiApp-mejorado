import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-albumbox',
  templateUrl: './albumbox.component.html',
  styleUrls: ['./albumbox.component.scss']
})
export class AlbumboxComponent implements OnInit {

  @Input()
  public album: any;


  constructor() { }

  ngOnInit(): void {
  }

}
