import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loading = false;
  public formData: any = {};
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit(event: Event){
    event.preventDefault();
    console.log(this.formData);
    this.loading = true;
    await new Promise(resolve => setTimeout(resolve, 4000));
    this.loading = false;
    notify("You're logged in successfully!", 'success', 4000);
    this.router.navigate(['/main']);
  }

  onCreateAccountClick = () => {
    this.router.navigate(['/create-account']);
  }
}
