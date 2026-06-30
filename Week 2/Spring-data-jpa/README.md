
# Difference Between JPA, Hibernate and Spring Data JPA

----- What I Learned
- JPA is a specification that defines the standard for object-relational mapping.
- Hibernate is an ORM framework that implements the JPA specification.
- Spring Data JPA is built on top of JPA and helps reduce boilerplate code.
- Spring Data JPA uses Hibernate as the default JPA implementation.
- CRUD operations become much easier using `JpaRepository`.
- Transaction management is simplified using the `@Transactional` annotation.

------ Key Points
- JPA only provides rules and interfaces.
- Hibernate provides the actual implementation.
- Spring Data JPA simplifies database operations by providing ready-made repository methods.
- Less code is required compared to using Hibernate directly.
- It improves code readability and maintainability.


