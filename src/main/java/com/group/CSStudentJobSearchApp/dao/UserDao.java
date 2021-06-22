package com.group.CSStudentJobSearchApp.dao;

import com.group.CSStudentJobSearchApp.model.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("fakeDao")
public class UserDao {
    private static List<User> DB = new ArrayList<>();

    public int insertUserId(UUID id, User user) {

        DB.add(new User(id, user.getEmail()));
        return 0;
    }

    int insertUser(User user) {
        UUID id = UUID.randomUUID();
        return insertUserId(id, user);
    }

    public List<User> selectAllUsers() {
        return DB;
    }

    public Optional<User> selectUserById(UUID id) {
        return DB.stream()
                .filter(user -> user.getId().equals(id))
                .findFirst();
    }

    public int deleteUserById(UUID id) {
        Optional<User> personMaybe = selectUserById(id);
        if (personMaybe.isEmpty()) {
            return 0;
        }
        DB.remove(personMaybe.get());
        return 1;

    }

    public int updateUserById(UUID id, User user) {
        return selectUserById(id)
                .map(person -> {
                    int indexOfPersonToUpdate = DB.indexOf(person);
                    if (indexOfPersonToUpdate >= 0) {
                        DB.set(indexOfPersonToUpdate, new User(id, user.getEmail()));
                        return 1;
                    }
                    return 0;
                })
                .orElse(0);
    }


}
