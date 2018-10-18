// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak(){
        return `Hello, my name is ${this.name} I am from ${this.location}`
    }
}

class Instructors extends Person {
    constructor(childAttributes) {
        super(childAttributes);
        this.specialty = childAttributes.specialty;
        this.favLanguage = childAttributes.favLanguage;
        this.catchPhrase = childAttributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`;
    };
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.` ;
    };
}

class Student extends Person {
    constructor(childAttributes) {
        super(childAttributes);
        this.previousBackground = childAttributes.previousBackground;
        this.className = childAttributes.className;
        this.favSubjects = childAttributes.favSubjects;
    }
    listsSubjects(){
        return `${this.favSubjects}`;
    }
    prAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManagers extends Instructors {
    constructor(grandAttributes) {
        super(grandAttributes);
        this.gradClassName = grandAttributes.gradClassName;
        this.favInstructor = this.grandAttributes.favInstructor;
  * `favInstructor`: i.e. Sean
* ProjectManangers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

    }
}