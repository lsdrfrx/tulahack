package responses

import "awesomeProject/pkg/models"

type AuthResponse struct {
	Info     models.User `json:"info"`
	Progress interface{} `json:"progress"`
	Shop     interface{} `json:"shop"`
}
