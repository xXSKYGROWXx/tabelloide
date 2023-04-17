import { Component } from '@angular/core';
import { EmployeesService } from '../employees.service';

export interface Employee {
  id: number,
  firstName: String,
  lastName: String,
  gender: String,
  birthDate: String,
  hireDate: String,
}

export interface Employees {
  employees: Employee[]
}

export interface DataObject {
  _embedded: Employees,
  _links: Link,
  page: Page,
}

export interface Link {
  first: LinkPart,
  last: LinkPart,
  next: LinkPart,
  prev: LinkPart,
  self: LinkPart,
}

export interface LinkPart {
  href: String,
}

export interface Page {
  number: number,
  size: number,
  totalElements: number,
  totalPages: number,
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  pageCount = 0;
  data: DataObject | undefined;
  columns: String[] = ["id", "firstName", "lastName", "gender", "birthDate", "hireDate", "actions"]

  constructor(private employees: EmployeesService) {
    this.loadEmployees(0)
  }

  firstPage() {
    const url = this.data?._links.first.href
    const urlParams = new URLSearchParams(url?.split('?')[1]);
    const pageNumber = parseInt(urlParams.get('page') as any)
    this.loadEmployees(pageNumber)
    this.pageCount = pageNumber
  }

  prevPage() {
    if (this.pageCount == 0)
    return

    const url = this.data?._links.prev.href
    const urlParams = new URLSearchParams(url?.split('?')[1]);
    const pageNumber = parseInt(urlParams.get('page') as any)
    this.loadEmployees(pageNumber)
    this.pageCount = pageNumber
  }

  nextPage() {
    if (this.data?.page.totalPages == this.pageCount + 1)
    return

    const url = this.data?._links.next.href
    const urlParams = new URLSearchParams(url?.split('?')[1]);
    const pageNumber = parseInt(urlParams.get('page') as any)
    this.loadEmployees(pageNumber)
    this.pageCount = pageNumber
  }

  lastPage() {
    const url = this.data?._links.last.href
    const urlParams = new URLSearchParams(url?.split('?')[1]);
    const pageNumber = parseInt(urlParams.get('page') as any)
    this.loadEmployees(pageNumber)
    this.pageCount = pageNumber
  }

  loadEmployees(page: number) {
    this.employees.getEmployees(page).subscribe(
      data => {
        this.data = data as DataObject;
      }
    )
  }

  insertEmployee(id: number, employee: Employee) {
    this.employees.addEmployee(id, employee).subscribe(
      _ => {
        alert("Impiegato inserito con successo!")
      },
      _ => {
        alert("Errore durante l'inserimento dell'impiegato")
      }
    )
  }

  fireEmployee(id: number) {
    if (confirm("Sei sicuro di voler licenziare l'impiegato?"))
    {
      this.employees.removeEmployee(id).subscribe(
        _ => {
          this.loadEmployees(0)
          this.firstPage()
        },
        _ => alert("NON SI PUO LICENZIARE")
      )
    }
  }


}