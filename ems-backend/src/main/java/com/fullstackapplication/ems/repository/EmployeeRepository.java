package com.fullstackapplication.ems.repository;

import com.fullstackapplication.ems.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
