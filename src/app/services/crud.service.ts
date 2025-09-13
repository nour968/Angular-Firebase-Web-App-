import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection,  collectionData, deleteDoc, doc, updateDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Notes } from '../notes';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

 constructor(private fireStore: Firestore) {}
  // CRUD
  //1-Create => add to databasr

  createNote(note: Notes) {

    console.log(note)

  

    const noteRef = collection(this.fireStore, 'Notes');
    addDoc( noteRef , {
      name: note.name,
      content: note.content
    } )

    

      .then(() => {
        alert('created');
      })


      .catch((err) => alert('error: ' + err));
  }


    //2- Read => get from database
  getNotes(): Observable<any[]> {
    const notesRef = collection(this.fireStore, 'Notes');
    return collectionData(notesRef, { idField: 'id' }); //, { idField: 'id' }
  }


    //3- Update  => update doc

    updateNote(id: string, note: Notes) {
      const noteRef = doc(this.fireStore, 'Notes', id);

      return updateDoc(noteRef, {
        name: note.name,
        content: note.content
      })
        .then(() => {
          alert('Updated successfully');
        })
        .catch((err) => {
          alert('Error: ' + err);
        });
    }


  //4- Delete => remove

    deleteNote(id:string)
  {
    const noteRef =  doc(this.fireStore, "Notes", id)
    deleteDoc(noteRef)
    .then( res=>  alert("deleted: "+res) )
    .catch( err =>  alert("error: "+ err) )

}
}
