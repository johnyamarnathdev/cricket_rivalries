package com.cricketrivalries.api.repository;

import org.springframework.data.repository.CrudRepository;

import com.cricketrivalries.api.model.User;

public interface UserRepository extends CrudRepository<User, Long>{

}
