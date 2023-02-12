import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableServiceService } from 'src/app/service/table-service.service';

@Component({
  selector: 'app-table-holder-info',
  templateUrl: './table-holder-info.component.html',
  styleUrls: ['./table-holder-info.component.css']
})
export class TableHolderInfoComponent implements OnInit {

  // @ViewChild('closebutton') closebutton;

  number = 2
  isDisabled = true
  tableHolderName : string = ''
  tableMember : number = 2
  tableData : any
  
  tableForm: FormGroup = new FormGroup({});
  

  constructor(private formBuilder : FormBuilder,
              private service: TableServiceService) {
  }

  ngOnInit(): void {
    this.tableForm = this.formBuilder.group({
      tableHolderName: ['', Validators.required],
      tableMember: [{ value: this.number, disabled: this.isDisabled }, Validators.required]
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
    this.tableHolderName = this.tableForm.value.tableHolderName
    this.tableMember = this.number
  }

  yes(){
    console.log(this.tableHolderName + this.tableMember)
    // this.closebutton.nativeElement.click();
    this.service.postData({"tableHolderName": this.tableHolderName, "numberOfFamilyMembers":this.tableMember}).subscribe((data) => {
      this.tableData = data
    })
  }

}
