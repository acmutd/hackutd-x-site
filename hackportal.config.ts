import schools from './public/schools.json';
import majors from './public/majors.json';
import countries from './public/countries.json';

export const hackPortalConfig: HackPortalConfig = {
  //registration fields are separated by question topics (general, school, hackathon experience, etc. )
  //each question topic is separated by question types(textInput, numberInput, dropdown, etc. )
  //  which hold all the questions of that type
  //add extra questions types(even ones already used) to question topics and add more questions under each question type
  //questions are displayed on page in order
  groupNames: ['Champagne', 'Polo', 'Estate', 'Pearl'],
  registrationFields: {
    //Question Topic
    generalQuestions: [
      {
        textInputQuestions: [
          {
            //don't remove; for user account info
            question: 'First Name',
            id: 'firstName',
            name: 'firstName',
            required: true,
            initialValue: '',
          },
          {
            //don't remove; for user account info
            question: 'Last Name',
            id: 'lastName',
            name: 'lastName',
            required: true,
            initialValue: '',
          },
          {
            //don't remove; for user account info
            question: 'Email',
            id: 'email',
            name: 'preferredEmail',
            required: true,
            initialValue: '',
          },
          {
            question: 'Phone number',
            id: 'phoneNumber',
            name: 'phoneNumber',
            required: true,
            initialValue: '',
          },
        ],
      },
      {
        numberInputQuestions: [
          {
            //Age question
            question: 'Age',
            required: true,
            id: 'age',
            name: 'age',
            min: '1',
            max: '100',
            pattern: '[0-9]+',
            initialValue: null,
          },
        ],
      },
      {
        dropdownQuestions: [
          {
            //Gender question
            question: 'Gender',
            required: true,
            id: 'gender',
            name: 'gender',
            initialValue: '',
            options: [
              {
                title: 'Female',
                value: 'Female',
              },
              {
                title: 'Male',
                value: 'Male',
              },
              {
                title: 'Non-binary',
                value: 'Non-binary',
              },

              {
                title: 'Prefer to self-describe',
                value: 'Prefer to self-describe',
              },
              {
                title: 'Prefer not to say',
                value: 'notSay',
              },
            ],
          },
        ],
      },
      {
        textInputQuestions: [
          {
            question: 'Self-Describe',
            id: 'selfdescribe',
            name: 'genderSelfDescribe',
            required: false,
            initialValue: '',
          },
        ],
      },
      {
        dropdownQuestions: [
          {
            //Race question
            question: 'Race',
            required: true,
            id: 'race',
            name: 'race',
            initialValue: '',
            options: [
              {
                title: 'Native American',
                value: 'Native American',
              },
              {
                title: 'Asian/Pacific Islander',
                value: 'Asian',
              },
              {
                title: 'Black or African American',
                value: 'Black',
              },
              {
                title: 'Hispanic',
                value: 'Hispanic',
              },
              {
                title: 'White/Caucasian',
                value: 'White',
              },
              {
                title: 'Multiple/Other',
                value: 'Other',
              },
              {
                title: 'Prefer not to answer',
                value: 'notSay',
              },
            ],
          },
          {
            //Ethnicity question
            question: 'Ethnicity',
            required: true,
            id: 'ethnicity',
            name: 'ethnicity',
            initialValue: '',
            options: [
              {
                title: 'Hispanic or Latino',
                value: 'hispanic',
              },
              {
                title: 'Not Hispanic or Latino',
                value: 'notHispanic',
              },
            ],
          },
        ],
      },
      {
        dropdownQuestions: [
          {
            //Country question
            question: 'Country of Residence',
            id: 'country',
            name: 'country',
            required: true,
            initialValue: '',
            options: countries.map(({ country }) => ({ title: country, value: country })),
          },
        ],
      },
    ],
    //Question Topic
    schoolQuestions: [
      {
        dropdownQuestions: [
          {
            //University question
            question:
              'This event is for students worldwide. Which university/school do you attend?',
            id: 'university',
            name: 'university',
            required: true,
            initialValue: '',
            options: schools.map(({ university }) => ({ title: university, value: university })),
          },
          {
            //Major question
            question: 'ALL majors are welcome at this event! What is your major?',
            id: 'major',
            name: 'major',
            required: true,
            initialValue: '',
            options: majors.map(({ major }) => ({ title: major, value: major })),
          },
        ],
      },
      {
        dropdownQuestions: [
          {
            //Grade question
            question: 'Current level of study',
            required: true,
            id: 'studyLevel',
            name: 'studyLevel',
            initialValue: '',
            options: [
              {
                title: 'Less than Secondary/High School',
                value: 'LessThanSecondaryHighSchool',
              },
              {
                title: 'Secondary/High School',
                value: 'SecondaryHighSchool',
              },
              {
                title: 'Undergraduate University(2 year)',
                value: 'Undergraduate(2 year)',
              },
              {
                title: 'Undergraduate University(3+ year)',
                value: 'Undergraduate(3+ year)',
              },
              {
                title: 'Graduate University (Masters, Professional, Doctoral, etc)',
                value: 'Graduate',
              },
              {
                title: 'Code School / Bootcamp',
                value: 'Code School / Bootcamp',
              },
              {
                title: 'Other Vocational / Trade Program or Apprenticeship',
                value: 'Vocational/Trade',
              },
              {
                title: 'Post Doctorate',
                value: 'Post Doctorate',
              },
              {
                title: 'Other',
                value: 'Other',
              },
              {
                title: "I'm not currently a student",
                value: 'NotaStudent',
              },
              {
                title: 'Prefer not to answer',
                value: 'NoAnswer',
              },
            ],
          },
        ],
      },
    ],
    //Question Topic
    hackathonExperienceQuestions: [
      {
        numberInputQuestions: [
          {
            //Hackathons attended question
            question: 'How many hackathons have you attended before?',
            required: true,
            id: 'hackathonExperience',
            name: 'hackathonExperience',
            min: '0',
            max: '100',
            pattern: '[0-9]+',
            initialValue: null,
          },
        ],
      },
      {
        dropdownQuestions: [
          {
            //Experience question
            question: 'Relative software-building experience:',
            required: true,
            id: 'softwareExperience',
            name: 'softwareExperience',
            initialValue: '',
            options: [
              {
                title: 'Beginner',
                value: 'Beginner',
              },
              {
                title: 'Intermediate',
                value: 'Intermediate',
              },
              {
                title: 'Advanced',
                value: 'Advanced',
              },
              {
                title: 'Expert',
                value: 'Expert',
              },
            ],
          },
          {
            //Heard from question
            question: 'Where did you hear about HackUTD X?',
            required: true,
            id: 'heardFrom',
            name: 'heardFrom',
            initialValue: '',
            options: [
              {
                title: 'Instagram',
                value: 'Instagram',
              },
              {
                title: 'Twitter',
                value: 'Twitter',
              },
              {
                title: 'Event Site',
                value: 'Event Site',
              },
              {
                title: 'Friend',
                value: 'Friend',
              },
              {
                title: 'MLH Website',
                value: 'MLH Website',
              },
              {
                title: 'Campus Poster',
                value: 'Campus Poster',
              },
              {
                title: 'Pinnacle',
                value: 'Pinnacle',
              },
              {
                title: 'Other',
                value: 'Other',
              },
            ],
          },
        ],
      },
    ],
    //Question Topic
    eventInfoQuestions: [
      {
        dropdownQuestions: [
          {
            //Shirt size question
            question: 'Shirt Size',
            required: true,
            id: 'size',
            name: 'size',
            initialValue: '',
            options: [
              {
                title: 'S',
                value: 's',
              },
              {
                title: 'M',
                value: 'm',
              },
              {
                title: 'L',
                value: 'l',
              },
              {
                title: 'XL',
                value: 'xl',
              },
            ],
          },
        ],
      },
      {
        checkboxQuestions: [
          {
            //Allergies question
            question: 'Allergies / Dietary Restrictions:',
            required: false,
            id: 'dietary',
            name: 'dietary',
            initialValue: [],
            options: [
              {
                title: 'Vegan',
                value: 'Vegan',
              },
              {
                title: 'Vegetarian',
                value: 'Vegetarian',
              },
              {
                title: 'Nuts',
                value: 'Nuts',
              },
              {
                title: 'Fish',
                value: 'Fish',
              },
              {
                title: 'Wheat',
                value: 'Wheat',
              },
              {
                title: 'Dairy',
                value: 'Dairy',
              },
              {
                title: 'Eggs',
                value: 'Eggs',
              },
            ],
          },
        ],
      },
      {
        textAreaQuestions: [
          {
            //Accomodations question
            question: 'Anything else we can do to better accommodate you at our hackathon?',
            id: 'accomodations',
            name: 'accomodations',
            required: false,
            initialValue: '',
            placeholder: 'List any accessibility concerns here',
          },
        ],
      },
    ],
    shortAnswerQuestions: [
      {
        textAreaQuestions: [
          {
            question: 'Why do you want to attend HackUTD?',
            id: 'motivation',
            name: 'motivation',
            required: true,
            initialValue: '',
            placeholder: '',
          },
          {
            question:
              "Tell us about a project you've made in the past or a potential idea you have for a future project",
            id: 'projectExample',
            name: 'projectExample',
            required: true,
            initialValue: '',
            placeholder: '',
          },
          {
            question: 'What are you looking forward to at HackUTD X?',
            id: 'excitedFor',
            name: 'excitedFor',
            required: true,
            initialValue: '',
            placeholder: '',
          },
        ],
      },
    ],
    //Question Topic
    sponsorInfoQuestions: [
      {
        textInputQuestions: [
          {
            //Github question
            question: 'Github:',
            id: 'github',
            name: 'github',
            required: false,
            initialValue: '',
          },
          {
            //LinkedIn question
            question: 'LinkedIn:',
            id: 'linkedin',
            name: 'linkedin',
            required: false,
            initialValue: '',
          },
          {
            //Website question
            question: 'Personal Website:',
            id: 'website',
            name: 'website',
            required: false,
            initialValue: '',
          },
        ],
      },
    ],
    // Question Topic
    oneLastThing: [
      {
        textAreaQuestions: [
          {
            //Songs question
            question: 'Link to your favorite song(s):',
            id: 'song',
            name: 'song',
            required: false,
            initialValue: '',
            placeholder: 'List song links here',
          },
        ],
      },
      {
        checkboxQuestions: [
          {
            question: 'I have read and agree to the MLH Code of Conduct.',
            required: true,
            id: 'CoC',
            name: 'CoC',
            initialValue: [],
            options: [
              {
                title: 'Agree',
                value: 'Agree',
              },
            ],
          },
          {
            question:
              'I authorize you to share my application/registration information with Major League Hacking for event administration, ranking, and MLH administration in-line with the MLH Privacy Policy (https://mlh.io/privacy). I further agree to the terms of both the MLH Contest Terms and Conditions (https://github.com/MLH/mlh-policies/blob/main/contest-terms.md) and the MLH Privacy Policy (https://mlh.io/privacy)',
            required: true,
            id: 'shareApp',
            name: 'shareApp',
            initialValue: [],
            options: [
              {
                title: 'Authorize',
                value: 'Authorize',
              },
            ],
          },
          {
            question:
              'I authorize MLH to send me occasional emails about relevant events, career opportunities, and community announcements',
            required: false,
            id: 'emailMLH',
            name: 'emailMLH',
            initialValue: [],
            options: [
              {
                title: 'Authorize',
                value: 'Authorize',
              },
            ],
          },
        ],
      },
    ],
  },
};

//add any question data that your org would like to see on the admin stats page
export type statRecordTypes = {
  //name: Record<string || number, number>
  age: Record<number, number>;
  dietary: Record<string, number>;
  ethnicity: Record<string, number>;
  race: Record<string, number>;
  size: Record<string, number>;
  softwareExperience: Record<string, number>;
  studyLevel: Record<string, number>;
  university: Record<string, number>;
  major: Record<string, number>;
  gender: Record<string, number>;
  hackathonExperience: Record<number, number>;
  heardFrom: Record<string, number>;
  timestamp: Record<string, number>;
  group: Record<string, number>;
};

//add the title for each field that will be displayed as chart titles in admin stats page
export const fieldNames = {
  //name: title
  age: 'Age',
  ethnicity: 'Ethnicity',
  race: 'Race',
  size: 'Shirt Size',
  softwareExperience: 'Software Experience',
  studyLevel: 'Study Level',
  university: 'University',
  major: 'major',
  gender: 'Gender',
  hackathonExperience: 'Number of Hackathon attended',
  heardFrom: 'Heard of Hackathon from',
  scans: 'Scans', //not part of registration questions, used for scanner
  dietary: 'Dietary',
  timestamp: 'Registration Time',
  group: 'Group Distribution',
};

//name fields that are checkbox questions belong here
export const arrayField = ['scans', 'companies', 'dietary'];
//any other fields belong here
export const singleField = [
  'age',
  'ethnicity',
  'race',
  'size',
  'softwareExperience',
  'studyLevel',
  'university',
  'major',
  'gender',
  'hackathonExperience',
  'heardFrom',
];

//not to be edited ⬇︎ (unless there needs to be more question topics)
export interface HackPortalConfig {
  registrationFields: {
    generalQuestions: QuestionTypes[];
    schoolQuestions: QuestionTypes[];
    hackathonExperienceQuestions: QuestionTypes[];
    eventInfoQuestions: QuestionTypes[];
    shortAnswerQuestions: QuestionTypes[];
    sponsorInfoQuestions: QuestionTypes[];
    oneLastThing: QuestionTypes[];
  };
  groupNames: string[];
}

export interface QuestionTypes {
  checkboxQuestions?: CheckboxQuestion[];
  dropdownQuestions?: DropdownQuestion[];
  textInputQuestions?: RegistrationQuestion[];
  numberInputQuestions?: NumberInputQuestion[];
  textAreaQuestions?: textAreaQuestion[];
}

interface RegistrationQuestion {
  question: string;
  id: string;
  name: string;
  required: boolean;
  initialValue: any; //value that will be first presented on the form
}

interface CheckboxQuestion extends RegistrationQuestion {
  options: Array<{
    title: string;
    value: string;
  }>;
}

interface DropdownQuestion extends RegistrationQuestion {
  options: Array<{
    title: string;
    value: string;
  }>;
}

interface NumberInputQuestion extends RegistrationQuestion {
  min: string;
  max: string;
  pattern: string;
}

interface textAreaQuestion extends RegistrationQuestion {
  placeholder: string;
}

//extracting initial values
var InitialValues: any = {};
const getInitialValues = () => {
  for (let obj of hackPortalConfig.registrationFields.generalQuestions) {
    setInitialValues(obj);
  }
  for (let obj of hackPortalConfig.registrationFields.schoolQuestions) {
    setInitialValues(obj);
  }
  for (let obj of hackPortalConfig.registrationFields.hackathonExperienceQuestions) {
    setInitialValues(obj);
  }
  for (let obj of hackPortalConfig.registrationFields.eventInfoQuestions) {
    setInitialValues(obj);
  }
  for (let obj of hackPortalConfig.registrationFields.shortAnswerQuestions) {
    setInitialValues(obj);
  }
  for (let obj of hackPortalConfig.registrationFields.sponsorInfoQuestions) {
    setInitialValues(obj);
  }
  for (let obj of hackPortalConfig.registrationFields.oneLastThing) {
    setInitialValues(obj);
  }
  return InitialValues;
};
const setInitialValues = (obj) => {
  if (obj.textInputQuestions)
    for (let inputObj of obj.textInputQuestions) {
      InitialValues[inputObj.name] = inputObj.initialValue;
    }
  if (obj.numberInputQuestions)
    for (let inputObj of obj.numberInputQuestions) {
      InitialValues[inputObj.name] = inputObj.initialValue;
    }
  if (obj.dropdownQuestions)
    for (let inputObj of obj.dropdownQuestions) {
      InitialValues[inputObj.name] = inputObj.initialValue;
    }
  if (obj.textAreaQuestions)
    for (let inputObj of obj.textAreaQuestions) {
      InitialValues[inputObj.name] = inputObj.initialValue;
    }
  if (obj.checkboxQuestions)
    for (let inputObj of obj.checkboxQuestions) {
      InitialValues[inputObj.name] = inputObj.initialValue;
    }
};

export const formInitialValues = getInitialValues();

//extracting statRecords for general stats
const getStatRecords = () => {
  let records: any = {};
  for (const field in fieldNames) {
    records[field] = {};
  }
  return records;
};
export const statRecords: statRecordTypes = getStatRecords();
