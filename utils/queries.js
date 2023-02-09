const pool = require("../db/connection");

// function to retrieve all departments
async function getDepartments() {
    return await pool.query(`SELECT * FROM departments`);
}

// function to retrieve all roles
const getRoles = async function () {
return await pool.query(
    `SELECT roles.*, departments.name 
        AS department_name 
        FROM roles 
        LEFT JOIN departments 
        ON roles.department_id = departments.id`
    );
};

// function to retrieve all employees
const getEmployees = async function () {
    return await pool.query(
        `SELECT employees.*, 
            roles.title AS job_title, 
            roles.salary, 
            departments.name AS department_name
            FROM employees
            LEFT JOIN roles ON employees.role_id = roles.id
            LEFT JOIN departments ON roles.department_id = departments.id; 
        `
    );
};

// function to insert a new department into the departments table
const insertDepartment = async function (name) {
    return await pool.query(
        `INSERT INTO departments (name)
            VALUES
            ('${name}');`
    );
};

// function to insert a new role
const insertRole = async function (title, salary, departmentId) {
    return await pool.query(
        `INSERT INTO roles (title, salary, department_id)
            VALUES
            ('${title}', ${salary}, ${departmentId});`
    );
};

// function to insert a new employee
const insertEmployee = async function (firstName, lastName, roleId, managerId) {
    return await pool.query(
        `INSERT INTO employees (first_name, last_name, role_id, manager_id)
            VALUES
            ('${firstName}', '${lastName}', ${roleId}, ${managerId});`
    );
};

// function to update the role of an employee
const updateEmployeeRole = async function (employeeId, roleId) {
    return await pool.query(
        `UPDATE employees
            SET
                role_id = ${roleId}
            WHERE
                id = ${employeeId};`
    );
};

// exports the functions for use in other modules

module.exports = {
    getDepartments,
    getRoles,
    getEmployees,
    insertDepartment,
    insertRole,
    insertEmployee,
    updateEmployeeRole,
};