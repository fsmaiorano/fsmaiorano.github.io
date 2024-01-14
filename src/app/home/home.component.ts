import { Component } from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  name = 'Fábio Santini Maiorano';
  nationality = 'Brazilian';
  email = 'fsmaiorano@gmail.com';
  phone = '+351 910 069 584';
  linkedin = 'https://www.linkedin.com/in/fsmaiorano';
  address = 'Lisbon, Portugal';
  photo = 'https://github.com/fsmaiorano.png';
  aboutMe =
    "I'm a software engineer with 10+ years of experience in the field. I have a bachelor's degree in Computer Science and graduate degree in Software Engineering. I'm passionate about technology and I'm always looking for new challenges and opportunities to learn and grow. I'm currently living in Lisbon, Portugal, and I'm looking for a new job opportunity in the area.";
}
