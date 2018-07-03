import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  @Output() addProject = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitClick() {
    this.addProject.emit();
  }

}