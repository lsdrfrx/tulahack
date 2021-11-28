package responses

import (
	"awesomeProject/pkg/models"
	"encoding/json"
)

type AuthResponse struct {
	Info     models.User `json:"info"`
	Progress interface{} `json:"progress"`
	Shop     interface{} `json:"shop"`
}

func ErrorResponse(content string) string {
	resp := make(map[string]string)
	resp["error"] = content

	result, _ := json.Marshal(resp)
	return string(result)
}

func UserResponse(user models.User) string {
	resp := AuthResponse{
		Info: user,
	}

	result, _ := json.Marshal(resp)
	return string(result)
}