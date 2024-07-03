package com.fullstackapplication.ems.controller;

import com.fullstackapplication.ems.dto.EmployeeDto;
import com.fullstackapplication.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/employees")
@AllArgsConstructor
public class EmployeeController {

    private EmployeeService employeeService;


    @PostMapping
    // Build Add Employees Rest Api
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
        EmployeeDto savedEmployee= employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    // Build get employee Rest Api
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId){
        EmployeeDto employeeDto = employeeService.getEmployeeById(employeeId);
        return ResponseEntity.ok(employeeDto);

    }
    @GetMapping
    // Build get All Employees Rest Apisss
    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
     List<EmployeeDto> employees = employeeService.getAllEmployees();
     return ResponseEntity.ok(employees);
    }

    // Build update Employee RestAPI
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee( @PathVariable Long employeeId ,
                                                       @RequestBody EmployeeDto updatedEmployee){
      EmployeeDto employeeDto =  employeeService.updateEmployee(employeeId , updatedEmployee);
      return ResponseEntity.ok(employeeDto);
    }

    // Build Delete Employee Rest API
    @DeleteMapping("{id}")
    public  ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
        employeeService.deleteEmployee(employeeId);

        return ResponseEntity.ok("employee Deleted Successfully!.");
    }
}


