import React, { createContext, useState, useEffect } from 'react';

// getAlcoholIcon by name
export const getAlchohol = (name) => {
	switch (name) {
		case "soju":
			require("../../assets/alcohol/soju_logo.png");
		case "beer":
			return require("../../assets/alcohol/beer_logo.png");
		case "wine":
			return require("../../assets/alcohol/wine_logo.png");
		case "vodka":
			return require("../../assets/alcohol/vodka_logo.png");
		default:
			console.error('Invalid alcohol name');
			return null;
	}
};

// getfeelingicon by feeling 1-5
export const getFeeling = (feeling) => {
	switch (feeling) {
		case 1:
			return require("../../assets/Daily_view/feeling5.png");
		case 2:
			return require("../../assets/Daily_view/feeling4.png");
		case 3:
			return require("../../assets/Daily_view/feeling3.png");
		case 4:
			return require("../../assets/Daily_view/feeling2.png");
		case 5:
			return require("../../assets/Daily_view/feeling1.png");
		default:
			console.error('Invalid feeling number');
			return null;
	}
};