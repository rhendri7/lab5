const students = [
    {
      id: 1,
      last: "Last1",
      first: "First1",
    },
    {
      id: 2,
      last: "Last2",
      first: "First2",
    },
    {
      id: 3,
      last: "Last3",
      first: "First3",
    }
  ];

const getStudentByUId = (id) =>{
    let num = parseInt(id);
    let student = students.find(data => data.id = num)
    return student;
}