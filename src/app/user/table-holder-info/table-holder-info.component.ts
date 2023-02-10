import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table-holder-info',
  templateUrl: './table-holder-info.component.html',
  styleUrls: ['./table-holder-info.component.css']
})
export class TableHolderInfoComponent implements OnInit {

  number = 2

  tableForm: FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder) {
  }

  ngOnInit(): void {
    this.tableForm = this.formBuilder.group({

    })
  }

  increament(){
    this.number++
  }

  decreament(){
    if(this.number > 2){
      this.number--
    }
  }

  onSubmit(){
    
  }

}
