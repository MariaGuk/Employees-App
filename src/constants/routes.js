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

export { ROUTEPATHS, ROUTES };