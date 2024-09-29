package controller

import (
	"context"
	"errors"
	"fmt"
	"net/http"
	"time"

	"github.com/labstack/echo/v4"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"

	"github.com/golang-jwt/jwt/v5"
	"github.com/krzkro4122/goopher/db"
	"github.com/krzkro4122/goopher/model"
	"github.com/lestrrat-go/jwx/jwk"
)

type jwtCustomClaims struct {
	Name  string `json:"name"`
	Admin bool   `json:"admin"`
	jwt.RegisteredClaims
}

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
	if err := db.Db.Where("email = ?", email).First(&user).Error; err != nil {
		// Return a 404 response if the product does not exist
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return user, err
		}
	}
	return user, nil
}

func get_credentials_by_user_id(userID int) (model.Credentials, error) {
	var credentials model.Credentials
	if err := db.Db.Where("user_id = ?", userID).First(&credentials).Error; err != nil {
		// Return a 404 response if the product does not exist
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return credentials, err
		}
	}
	return credentials, nil
}

func getKey(token *jwt.Token) (interface{}, error) {
	keySet, err := jwk.Fetch(context.Background(), "https://www.googleapis.com/oauth2/v3/certs")
	if err != nil {
		return nil, err
	}

	keyID, ok := token.Header["kid"].(string)
	if !ok {
		return nil, errors.New("expecting JWT header to have a key ID in the kid field")
	}

	key, found := keySet.LookupKeyID(keyID)

	if !found {
		return nil, fmt.Errorf("unable to find key %q", keyID)
	}

	var pubkey interface{}
	if err := key.Raw(&pubkey); err != nil {
		return nil, fmt.Errorf("Unable to get the public key. Error: %s", err.Error())
	}

	return pubkey, nil
}

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
				"error": "User with email: " + body.Email + " not found",
			},
		)
	}

	credentials, err := get_credentials_by_user_id(user.ID)
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return c.JSON(
			http.StatusNotFound,
			map[string]string{
				"error": "User with email: " + body.Email + " not registered",
			},
		)
	}

	validPassword := checkPasswordHash(body.Password, credentials.Hash)
	if !validPassword {
		return c.JSON(
			http.StatusUnauthorized,
			map[string]string{
				"error": "Bad credentials",
			},
		)
	}

	claims := &jwtCustomClaims{
		user.Username,
		true,
		jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Hour * 72)),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	return c.JSON(http.StatusOK, token)
}

func Register(c echo.Context) error {

	var body model.IRegister

	// Bind the JSON data from the request body to your struct
	if err := c.Bind(&body); err != nil {
		return err
	}

	user, err := get_user_by_email(body.Email)
	if !errors.Is(err, gorm.ErrRecordNotFound) {
		return c.JSON(
			http.StatusNotFound,
			map[string]string{
				"error": "User with email: " + body.Email + " already exists!",
			},
		)
	}

	passwordHash, err := hashPassword(body.Password)
	if err != nil {
		return c.JSON(
			http.StatusExpectationFailed,
			map[string]string{
				"error": "Password hashing failed!",
			},
		)
	}

	new_user := model.User{
		Username:  body.Username,
		Email:     body.Email,
		FirstName: body.FirstName,
		LastName:  body.LastName,
	}
	db.Db.Create(&new_user)

	credentials := &model.Credentials{
		UserID: new_user.ID,
		Hash:   passwordHash,
	}
	db.Db.Create(&credentials)

	claims := &jwtCustomClaims{
		user.Username,
		true,
		jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Hour * 72)),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	return c.JSON(http.StatusOK, token)
}
