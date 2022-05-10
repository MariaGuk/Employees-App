const ROUTEPATHS = {
  employees: '/employees',
  profile: '/profile',
};

const ROUTES = [
  {
    title: 'Employees',
    component: 'EmployeesContainer',
    path: ROUTEPATHS.employees,
  },
  {
    title: 'Profile',
    component: 'ProfileContainer',
    path: ROUTEPATHS.profile,
  },
];
const URL = 'https://api-for-masha.herokuapp.com';

const API = {
  getProfile: 'api/profile',
  getEmployees: 'api/employees',
};

export { ROUTEPATHS, ROUTES, URL, API };