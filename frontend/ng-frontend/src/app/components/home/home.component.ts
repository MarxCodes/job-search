import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedItem: any;
  featuredJobs = [
    { jobTitle: 'Developer', location: 'London', added: '1 hour'},
    { jobTitle: 'Software Developer', location: 'Manchester', added: '1 hour'},
    { jobTitle: 'Front End Developer', location: 'London', added: '1 hour'},
    { jobTitle: 'Front End Developer', location: 'Manchester', added: '3 hour'},
    { jobTitle: 'UI Developer', location: 'York', added: '3 hour'},
    { jobTitle: 'Technial Developer', location: 'Liverpool', added: 'Past Day'},
    { jobTitle: 'Software Developer', location: 'London', added: 'Past Day'},
    { jobTitle: 'Front End Developer', location: 'London', added: 'Past Day'},

  ]

  trendingJobs = [
    'Finance jobs',
    'Immediate start jobs',
    'Work from home jobs',
    'Part-time jobs',
    'Manager jobs',
    'Administration jobs',
    'Accountant jobs',
    'Warehouse jobs',
    'Delivery jobs',
    'Receptionist jobs',
    'Retail jobs',
    'Customer Service jobs',
    'Software developer jobs'
  ];
  footerList = [
    [
      'Contact us',
      'Job search',
      'Recruiter directory',
      'Work from home',
      'Browse jobs',
      'Browse locations',
      'Popular searches',
      'Career advice',
      'Average salary checker',
      'Help'
    ],
    [
      'Recruiter site',
      'Post a job',
      'CV Search',
      'Recruitment agencies',
      'Recruiter Advice'
    ],
    [
      'Help',
      'Contact us',
      'Find a course',
      'View all subjects',
      'Discount courses',
      'Online courses',
      'Free courses',
      'Awarding body directory',
      'Career guides',
      'Advertise a course'
    ],
    [
      'About us',
      'Careers',
      'Press office',
      'Corporate governance',
      'Modern slavery statement',
      'Tempzone: timesheets & holiday',
      'Services',
      'Global',
       ]

  ]
  footerjobList = [
      'Contact us',
      'Job search',
      'Recruiter directory',
      'Work from home',
      'Browse jobs',
      'Browse locations',
      'Popular searches',
      'Career advice',
      'Average salary checker',
      'Help'
    ]
   footerRecruiterList = [
        'Recruiter site',
        'Post a job',
        'CV Search',
        'Recruitment agencies',
        'Recruiter Advice'
      ]
    footerCourseList = [
        'Help',
        'Contact us',
        'Find a course',
        'View all subjects',
        'Discount courses',
        'Online courses',
        'Free courses',
        'Awarding body directory',
        'Career guides',
        'Advertise a course'
      ]
    foolterValuesList = [
        'About us',
        'Careers',
        'Press office',
        'Corporate governance',
        'Modern slavery statement',
        'Tempzone: timesheets & holiday',
        'Services',
        'Global',
         ]


  constructor() { }

  ngOnInit(): void {
  }
  listClick(event: Event, newValue: any) {
    console.log(newValue);
    this.selectedItem = newValue;  // don't forget to update the model here
    // ... do other stuff here ...
    console.log(this.selectedItem, 'licked')
}
}
