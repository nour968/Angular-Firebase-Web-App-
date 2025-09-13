import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Note, Notes } from '../../notes';

import { CrudService } from '../../services/crud.service';
@Component({
  selector: 'app-note',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent  {

note:Notes=new Notes("","");
update:Note=new Note("","","")

  id :string=""

  constructor(private crudService: CrudService) {}

   GetData() {
    this.crudService.getNotes().subscribe({
      next(res) {
        console.log(res);
      },

      error(err) {
        console.log(err);
      },
    });
  }

  AddNote(){
    this.crudService.createNote(this.note)
  }


  deleteNote(){

    this.crudService.deleteNote(this.id)
  }
UpdateNote() {
    if (!this.update.id) {
      alert('Please enter Note ID');
      return;
    }

    this.crudService.updateNote(this.update.id, this.update);
  }

}

