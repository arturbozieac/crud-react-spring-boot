package com.packt.cardatabase.domain;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CarRepository extends CrudRepository<Car, Long> {

	// Fetch cars by brand and sort by year
	List<Car> findByBrandOrderByYearAsc(@Param("brand") String brand);

	// Fetch cars by brand
	 @Query("select c from Car c where c.brand = ?1")
	List<Car> findByBrand(@Param("brand") String brand);

	// Fetch cars by color
	List<Car> findByColor(@Param("color") String color);

	// Fetch cars by year
	List<Car> findByYear(@Param("year") int year);

	// Fetch cars by brand and model
	List<Car> findByBrandAndModel(@Param("brand") String brand, @Param("model") String model);

	// Fetch cars by brand or color
	List<Car> findByBrandOrColor(@Param("brand") String brand, @Param("color") String color);

}
