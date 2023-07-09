package model

import (
	"gorm.io/gorm"
)

// Models
// type Product struct {
// 	gorm.Model
// 	ID         int
// 	Name       string
// 	Price      int
// 	Category   string
// 	CategoryID int
// 	Quantity   int
// 	Stock      int
// 	Thumbnail  string
// }
//
// type Category struct {
// 	ID   int
// 	Name string
// }

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
	Salt   string
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

// type IPayment struct {
// 	Cvv            string `json:"cvv"`
// 	ExpirationDate string `json:"expirationDate"`
// 	CardNumber     string `json:"cardNumber"`
// 	Amount         int    `json:"amount"`
// }
//
// type IPurchase struct {
// 	Payment  IPayment  `json:"payment"`
// 	Products []Product `json:"products"`
// }
