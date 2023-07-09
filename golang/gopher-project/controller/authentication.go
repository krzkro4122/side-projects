package controller

import (
	"errors"
	"strconv"
	"net/http"

	"gorm.io/gorm"
	"github.com/labstack/echo/v4"
	"golang.org/x/crypto/bcrypt"

	"github.com/krzkro4122/echogogorm/db"
	"github.com/krzkro4122/echogogorm/model"
)

func hashPassword(password string) (string, error) {
    bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
    return string(bytes), err
}

func checkPasswordHash(password, hash string) bool {
    err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
    return err == nil
}

func get_user(id string) (model.User, error) {
	var user model.User
	if err := db.Db.First(&user, id).Error; err != nil {
		// Return a 404 response if the product does not exist
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return user, err
		}
	}
	return user, nil
}

func get_user_by_email(email string) (model.User, error) {
	var user model.User
	if err := db.Db.First(&user, email).Error; err != nil {
		// Return a 404 response if the product does not exist
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return user, err
		}
	}
	return user, nil
}

func get_credentials(id string) (model.Credentials, error) {
	var credentials model.Credentials
	if err := db.Db.First(&credentials, id).Error; err != nil {
		// Return a 404 response if the product does not exist
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return credentials, err
		}
	}
	return credentials, nil
}

func generate_token(id string) model.Token {
		
}

// func filter(products []model.Product, cond func(product model.Product) bool) []model.Product {
//
// 	result := []model.Product{}
//
// 	for _, product := range products {
// 		if cond(product) {
// 			result = append(result, product)
// 		}
// 	}
// 	return result
// }

func Login(c echo.Context) error {

	var body model.ILogin

	// Bind the JSON data from the request body to your struct
	if err := c.Bind(&body); err != nil {
		return err
	}

	user, err := get_user_by_email(body.Email)
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return c.JSON(
			http.StatusNotFound,
			map[string]string{
				"error": "User with Email: " + body.Email + " not found",
			},
		)
	}

	token := 

	return c.JSON(http.StatusOK, token)
}

func ReadAllCategories(c echo.Context) error {
	var categories []model.Category
	db.Db.Find(&categories)
	return c.JSON(http.StatusOK, categories)
}

func UpdateCategory(c echo.Context) error {
	id := c.Param("id")
	var body model.Category

	// Bind the JSON data from the request body to your struct
	if err := c.Bind(&body); err != nil {
		return err
	}

	category, err := get_category(id)
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return c.JSON(
			http.StatusNotFound,
			map[string]string{
				"error": "Category with ID: " + id + " not found",
			},
		)
	}

	db.Db.Model(&category).Update("Name", body.Name)
	return c.JSON(http.StatusOK, category)
}

func CreateCategory(c echo.Context) error {
	var body model.Category

	// Bind the JSON data from the request body to your struct
	if err := c.Bind(&body); err != nil {
		return err
	}

	_, err := get_category(strconv.Itoa(body.ID))
	if !errors.Is(err, gorm.ErrRecordNotFound) {
		return c.JSON(
			http.StatusNotFound,
			map[string]string{
				"error": "Category with ID: " + strconv.Itoa(body.ID) + " already exists",
			},
		)
	}

	var category = model.Category{
		ID:   body.ID,
		Name: body.Name,
	}
	db.Db.Create(&category)
	return c.JSON(http.StatusOK, category)
}

func DeleteCategory(c echo.Context) error {
	id := c.Param("id")

	category, err := get_category(id)
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return c.JSON(
			http.StatusNotFound,
			map[string]string{
				"error": "Category with ID: " + id + " not found",
			},
		)
	}
	db.Db.Delete(&category)
	return c.JSON(http.StatusOK, category)
}

