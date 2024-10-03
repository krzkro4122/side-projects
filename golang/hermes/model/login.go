package model

import (
	"gorm.io/gorm"
)

// Models
type User struct {
	gorm.Model
	ID        int
	Email     string
	Username  string
	FirstName string
	LastName  string
}

type Credentials struct {
	gorm.Model
	ID     int
	UserID int
	Hash   string
}

type Token struct {
	gorm.Model
	ID     int
	UserID int
	Value string
}

type ILogin struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type IRegister struct {
	Username  string `json:"username"`
	Password  string `json:"password"`
	Email     string `json:"email"`
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
}
