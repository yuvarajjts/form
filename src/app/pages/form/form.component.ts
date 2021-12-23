import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'  
import { home } from 'src/app/model/home.model';



interface Case {
  value: string;
  viewValue: string;
}




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  personform!: FormGroup;

  home = new home()
  dataarray:any = [];
 
  ahome = new home()
  adataarray:any = [];

  chome = new home()
  cdataarray:any = [];

  rhome = new home()
  rdataarray:any = [];

  imghome = new home()
  imgdataarray:any = [];


  personForm = new FormGroup({
    name: new FormControl('',Validators.required),
    lname: new FormControl('',Validators.required),
    alias: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    addresslabel: new FormControl('',Validators.required),
    addresstext: new FormControl('',Validators.required),
    history: new FormControl('',Validators.required),
    modus: new FormControl('',Validators.required),
  })

  get name(){
    return this.personForm.get('name')
  }
  get lname(){
    return this.personForm.get('lname')
  }
  get  alias(){
    return this.personForm.get(' alias')
  }
  get address(){
    return this.personForm.get('address')
  }
  get   addresslabel(){
    return this.personForm.get('  addresslabel')
  }
  get addresstext(){
    return this.personForm.get('addresstext')
  }
  get history(){
    return this.personForm.get('history')
  }
  get  modus(){
    return this.personForm.get(' modus')
  }
  
  
  url="";

  
  cases: Case[] = [
    {value: 'Lorem Ipsum one', viewValue: 'Lorem Ipsum one'},
    {value: 'Lorem Ipsum two', viewValue: 'Lorem Ipsum one'},
    {value: 'Lorem Ipsum three', viewValue: 'Lorem Ipsum three'},
    {value: 'Lorem Ipsum four', viewValue: 'Lorem Ipsum four'},
  ];
  formForm: any;
  

  constructor(private fb:FormBuilder){
  
    }
  

  ngOnInit() {

    this.home=new home()
    this.dataarray.push(this.home);

    
    this.ahome=new home()
    this.adataarray.push(this.home);
  
    this.chome=new home()
    this.cdataarray.push(this.home);

    this.rhome=new home()
    this.rdataarray.push(this.home);

    this.imghome=new home()
    this.imgdataarray.push(this.home);
  
    
    
  }

  
// address
  aremoveForm(index: any){
    this.adataarray.splice(index,1);
  }

  aaddForm(){
    this.home=new home()
    this.adataarray.push(this.home);
  }
  


//case history
  cremoveForm(index: any){
    this.cdataarray.splice(index,1);
  }

  caddForm(){
    this.home=new home()
    this.cdataarray.push(this.home);
  }


//rival
  rremoveForm(index: any){
    this.rdataarray.splice(index,1);
  }

  raddForm(){
    this.home=new home()
    this.rdataarray.push(this.home);
  }

  imgremoveForm(index: any){
    this.rdataarray.splice(index,1);
  }

  imgaddForm(){
    this.home=new home()
    this.rdataarray.push(this.home);
  }

  
  



// alias
  removeForm(index: any){
    this.dataarray.splice(index,1);
  }

  addForm(){
    this.home=new home()
    this.dataarray.push(this.home);
  }

 
  onsubmit(){

    console.log(this.dataarray)
    console.log(this.home)

  }

  onselectfile(e:any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }

  }
 

//   selectedFile: any = File 
//   ArrayOfSelectedFile = new Array<string>();
  
//   onFileChanged(event : any) {
//     this.ArrayOfSelectedFile= [];
//     this.selectedFile = event.target.files;
//     this.ArrayOfSelectedFile.push(event.target.files);
//   }
  
//   removeSelectedFile(index: number){
//     this.ArrayOfSelectedFile.splice(index,1);
//   }

  @ViewChild('attachments') attachment: any;

fileList: File[] = [];
listOfFiles: any[] = [];

onFileChanged(event: any) {
    for (var i = 0; i <= event.target.files.length - 1; i++) {
      var selectedFile = event.target.files[i];
      this.fileList.push(selectedFile);
      this.listOfFiles.push(selectedFile.name)
  }

  this.attachment.nativeElement.value = '';
}



removeSelectedFile(index: number) {
 // Delete the item from fileNames list
 this.listOfFiles.splice(index, 1);
 // delete file from FileList
 this.fileList.splice(index, 1);
}


removeAddress(index: number){
  this.dataarray.splice(index,1);
}

}

