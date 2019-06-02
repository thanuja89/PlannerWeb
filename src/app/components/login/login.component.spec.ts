// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { LoginComponent } from './login.component';
// import { AuthService } from 'src/app/shared/services/auth.service';
// import { FormsModule } from '@angular/forms';
// import { MatInputModule, MatButtonModule } from '@angular/material';
// import { HttpClientModule } from '@angular/common/http';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         BrowserModule,
//         FormsModule,
//         BrowserAnimationsModule,
//         HttpClientModule,
//         MatButtonModule,
//         MatInputModule],
//       declarations: [LoginComponent],
//       providers: [AuthService]
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should call login on AuthService', () => {
//     const username = fixture.debugElement.query(e => e.name === 'username');
//     username.nativeElement.value = 'text';
//     username.nativeElement.dispatchEvent(new Event('input'));
//     expect(component).toBeTruthy();
//   });
// });

// let setInputValue = (fixture, name, value) => {
//   const username = fixture.debugElement.query(e => e.name === name);
//   username.nativeElement.value = value;
//   username.nativeElement.dispatchEvent(new Event('input'));
// };
