import { Calendar } from "./components";

export const departmentTeams = {
  teams: [
    {
      name: "Frontend Team",
      percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
      members: [
        {
          name: "FE_Team_User1",
          vacations: [
            { startDate: "01.12.2020", endDate: "05.12.2020", type: "Paid" },
            { startDate: "11.12.2020", endDate: "17.12.2020", type: "Paid" },
            { startDate: "24.12.2020", endDate: "02.01.2021", type: "Paid" },
          ],
        },
        {
          name: "FE_Team_User2",
          vacations: [
            { startDate: "20.11.2020", endDate: "22.12.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
      ],
    },
    {
      name: "Design Team",
      percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
      members: [
        {
          name: "Des_Team_User1",
          vacations: [
            { startDate: "15.01.2021", endDate: "22.01.2021", type: "Paid" },
            { startDate: "05.02.2021", endDate: "15.02.2021", type: "Paid" },
          ],
        },
        {
          name: "Des_Team_User2",
          vacations: [
            { startDate: "08.12.2020", endDate: "21.12.2020", type: "Paid" },
            { startDate: "20.02.2021", endDate: "22.02.2021", type: "UnPaid" },
          ],
        },
      ],
    },
    {
      name: "Backend Team",
      percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
      members: [
        {
          name: "BE_Team_User1",
          vacations: [
            { startDate: "10.12.2020", endDate: "15.12.2020", type: "Paid" },
            { startDate: "05.02.2021", endDate: "15.02.2021", type: "Paid" },
          ],
        },
        {
          name: "BE_Team_User2",
          vacations: [
            { startDate: "01.02.2020", endDate: "10.02.2020", type: "Paid" },
            { startDate: "20.02.2021", endDate: "22.02.2021", type: "UnPaid" },
          ],
        },
      ],
    },
    {
      name: "Managers Team",
      percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
      members: [
        {
          name: "Man_Team_User1",
          vacations: [
            { startDate: "15.12.2020", endDate: "30.12.2020", type: "Paid" },
            { startDate: "05.02.2021", endDate: "15.02.2021", type: "Paid" },
          ],
        },
        {
          name: "Man_Team_User2",
          vacations: [
            { startDate: "01.02.2020", endDate: "10.02.2020", type: "Paid" },
            { startDate: "20.02.2021", endDate: "22.02.2021", type: "UnPaid" },
          ],
        },
      ],
    },
  ],
};

const calendar = new Calendar("#app");
calendar.render();
// window.calendar = calendar;

// setTimeout(() => calendar.render(), 4000);

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   body: JSON.stringify(departmentTeams),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
