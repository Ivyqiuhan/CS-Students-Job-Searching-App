package com.group.CSStudentJobSearchApp.model;

import javax.persistence.*;

@Entity
@Table
public class UserCredential {
  @Id
  @SequenceGenerator(
      name = "user_credential_sequence",
      sequenceName = "user_credential_sequence",
      allocationSize = 1
  )  
  @GeneratedValue(
      strategy = GenerationType.SEQUENCE,
      generator = "user_credential_sequence"
  )

  private Long id;

  @Column(unique=true)
  private String username;

  private String passwordDigest;

  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "userProfile_id", referencedColumnName = "id")
  private UserProfile userProfile;

  public UserCredential(){

  }

  public UserCredential(Long userCredentialKey, String username, String passwordDigest){
    this.id = userCredentialKey;
    this.username = username;
    this.passwordDigest = passwordDigest;
  }

  public void setUsername(String username){
    this.username = username;
  }

  public String getUsername(){
    return this.username;
  }
  
  public void setPasswordDigest(String passwordDigest){
    this.passwordDigest = passwordDigest;
  }

  public String getPasswordDigest(){
    return this.passwordDigest;
  }

}
