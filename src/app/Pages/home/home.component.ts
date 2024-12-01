import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarComponent } from "../../Components/sidebar/sidebar.component";
import { TimelineComponent } from "../../Components/timeline/timeline.component";
import { WorkExp } from "../../Models/work-exp";
import { EducationExp } from "../../Models/education-exp";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    SidebarComponent,
    TimelineComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public profileContent: string = "I am a fast and eager learner looking to engage in more complex challenges that will aid in my growth as a developer both in my personal and professional life";
  public workItems: WorkExp[] = [
    { id: 0, subTitle: "Luna Software Solutions", jobTitle: "Full-Stack Developer", tasks: ["Building & maintaining client relationships", "Building & maintaining functionality for web API’s using C# & NodeJs", "Building & maintaining angular web applications", "Communicating with clients to identify project requirements.", "Noting client concerns & creating solutions", "Maintaining the Jira board & git per project per relevant clients"], dates: "01/2022 - 08/2024" },
    { id: 1, subTitle: "DcData (Linux Tech)", jobTitle: "Junior Systems Administrator", tasks: ["Monitoring of in-house & customer tickets in help-desk system", "Technical support of in-house & client systems.", "Answering telephone calls & logging tickets for clients", "Monitoring system backups by examining backup reports", "Assisting with IT security related tasks", "Client & supplier relationship building & maintenance"], dates: "02/2021 - 01/2022" },
  ]
  public educationItems: EducationExp[] = [
    { id: 0, institution: "Pass GED South Africa", certificate: "Matric", dates: "08/2018" },
  ]
  public certificateItems: EducationExp[] = [
    { id: 0, institution: "IT Certification Academy", certificate: "IT Fundamentals", dates: "12/2016" },
    { id: 1, institution: "IT Certification Academy", certificate: "A+ Attendance Certificate", dates: "12/2017" },
    { id: 2, institution: "IT Certification Academy", certificate: "N+ Attendance Certificate", dates: "12/2017" },
    { id: 3, institution: "IT Certification Academy", certificate: "S+ Attendance Certificate", dates: "08/2019" },
  ]

}
