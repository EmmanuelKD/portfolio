export type Capability = {
  image: string;
  title: string;
  discreption: string;
  experienceLevel: number;
  type: CapabilityType;
};

export enum CapabilityType {
  language = "Language",
  tool = "Tool",
  framework = "Framework",
  design = "Design",
  database = "Database",
}

const MyCapability: Array<Capability> = [
  {
    discreption: "i have been programming c++ from  the start",
    experienceLevel: 5,
    type: CapabilityType.language,
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-dcaba.appspot.com/o/capabilitiesImgs%2Fimage10.jpeg?alt=media&token=8532abb1-a986-4074-b21e-e5a0bdca1fbf",
    title: "C++",
  },

  {
    discreption: "i have been programming c++ from  the start i have been programming c++ from  the start i have been programming c++ from  the start",
    experienceLevel: 5,
    type: CapabilityType.language,

    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-dcaba.appspot.com/o/capabilitiesImgs%2Fimage10.jpeg?alt=media&token=8532abb1-a986-4074-b21e-e5a0bdca1fbf",
    title: "Java",
  },

  {
    discreption: "i have been programming c++ from  the start",
    experienceLevel: 5,
    type: CapabilityType.language,
    image:
      "https://uplandsoftware.com/localytics/wp-content/uploads/sites/45/Localytics_FB2@2x.png",
    title: "Dart",
  },
  {
    discreption: "i have been programming c++ from  the start",
    experienceLevel: 5,
    type: CapabilityType.language,
    image:
      "https://uplandsoftware.com/localytics/wp-content/uploads/sites/45/Localytics_FB2@2x.png",
    title: "C#",
  },
  {
    discreption: "i have been programming c++ from  the start",
    experienceLevel: 5,
    type: CapabilityType.language,
    image:
      "https://uplandsoftware.com/localytics/wp-content/uploads/sites/45/Localytics_FB2@2x.png",
    title: "SQL",
  },
  {
    discreption: "i have been programming c++ from  the start",
    experienceLevel: 5,
    type: CapabilityType.language,
    image:
      "https://uplandsoftware.com/localytics/wp-content/uploads/sites/45/Localytics_FB2@2x.png",
    title: "Java script",
  },
  {
    discreption: "i have been programming c++ from  the start",
    experienceLevel: 5,
    type: CapabilityType.framework,
    image:
      "https://uplandsoftware.com/localytics/wp-content/uploads/sites/45/Localytics_FB2@2x.png",
    title: "React",
  },
  {
    discreption: "i have been programming c++ from  the start",
    experienceLevel: 5,
    type: CapabilityType.framework,
    image:
      "https://uplandsoftware.com/localytics/wp-content/uploads/sites/45/Localytics_FB2@2x.png",
    title: "React Native",
  },
  {
    discreption: "i have been programming c++ from  the start",
    experienceLevel: 5,
    type: CapabilityType.framework,
    image:
      "https://uplandsoftware.com/localytics/wp-content/uploads/sites/45/Localytics_FB2@2x.png",
    title: "Flutter",
  },
  {
    discreption: "i have been programming c++ from  the start",
    experienceLevel: 5,
    type: CapabilityType.tool,
    image:
      "https://uplandsoftware.com/localytics/wp-content/uploads/sites/45/Localytics_FB2@2x.png",
    title: "Android studio",
  },
  {
    discreption: "i have been programming c++ from  the start",
    experienceLevel: 5,
    type: CapabilityType.database,
    image:
      "https://uplandsoftware.com/localytics/wp-content/uploads/sites/45/Localytics_FB2@2x.png",
    title: "SQL",
  },
  {
    discreption: "i have been programming c++ from  the start",
    experienceLevel: 5,
    type: CapabilityType.tool,
    image:
      "https://uplandsoftware.com/localytics/wp-content/uploads/sites/45/Localytics_FB2@2x.png",
    title: "Firebase",
  },
  {
    discreption: "i have been programming c++ from  the start",
    experienceLevel: 5,
    type: CapabilityType.design,
    image:
      "https://uplandsoftware.com/localytics/wp-content/uploads/sites/45/Localytics_FB2@2x.png",
    title: "Adobe Photoshop",
  },
  {
    discreption: "i have been programming c++ from  the start",
    experienceLevel: 5,
    type: CapabilityType.design,
    image:
      "https://uplandsoftware.com/localytics/wp-content/uploads/sites/45/Localytics_FB2@2x.png",
    title: "Adobe Illustratoe",
  },
  {
    discreption: "i have been programming c++ from  the start",
    experienceLevel: 5,
    type: CapabilityType.design,
    image:
      "https://uplandsoftware.com/localytics/wp-content/uploads/sites/45/Localytics_FB2@2x.png",
    title: "Adobe Xd",
  },
];

export default MyCapability;
