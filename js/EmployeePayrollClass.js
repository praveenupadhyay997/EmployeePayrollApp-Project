// Defining the class for the instance of data from the employee payroll webapplication
class EmployeePayRoll {
  // getter and setter method
  get id() {
    return this._id;
  }
  /// Defining the setter with the regex so as to match the input by the user
  set id(id) {
    let ID_REGEX = RegExp("^[1-9]{1}[0-9]*$");
    if (ID_REGEX.test(id)) this._id = id;
    else throw "Incorrect Id";
    this._id = id;
  }

  get name() {
    return this._name;
  }
  /// Defining the setter with the regex so as to match the input by the user
  set name(name) {
    let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z]{2,}$");
    if (nameRegex.test(name)) this._name = name;
    else throw "Incorect Name!!!";
  }

  get profilePic() {
    return this._profilePic;
  }
  set profilePic(profilePic) {
    this._profilePic = profilePic;
  }

  get gender() {
    return this._gender;
  }
  set gender(gender) {
    this._gender = gender;
  }

  get department() {
    return this._department;
  }
  set department(department) {
    this._department = department;
  }

  get salary() {
    return this._salary;
  }
  set salary(salary) {
    this._salary = salary;
  }

  get note() {
    return this._note;
  }
  set note(note) {
    this._note = note;
  }
  /// Defining the validation for the start date whether it's a future date or not
  get startDate() { return this._startDate; }
  set startDate(startDate) { 
   let now = new Date();
   if (startDate > now) throw 'Start Date is a Future Date!';
   var diff = Math.abs(now.getTime() - startDate.getTime());
   if (diff / (1000 * 60 * 60 * 24) > 30) 
     throw 'Start Date is beyond 30 Days!';
   this._startDate = startDate; 
 }

  /// Defining toString method for aggregrating the data entered by the user
  toString() {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const empDate = !this.startDate ? "undefined" : this.startDate;
    return (
      "id=" +
      this.id +
      ", name='" +
      this.name +
      ", gender='" +
      this.gender +
      ", profilePic='" +
      this.profilePic +
      ", department=" +
      this.department +
      ", salary=" +
      this.salary +
      ", startDate=" +
      empDate +
      ", note=" +
      this.note
    );
  }
}
