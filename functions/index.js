const functions = require('firebase-functions');

const express = require('express');
const app = express();

const { searchForTweet, getTweetById, saveFavoriteTweet, deleteFavoriteTweet, getFavoriteTweets } = require('./handlers/twitter');
const { signup, login } = require('./handlers/users');
const { auth } = require('./utilities/auth');

app.post('/search', searchForTweet);
app.post('/search/:tweetId', getTweetById);
app.post('/addfavorite/:tweetId', auth ,saveFavoriteTweet);
app.post('/deletefavorite/:tweetId', auth, deleteFavoriteTweet);
app.post('/getfavorites', auth, getFavoriteTweets);

app.post('/signup', signup);
app.post('/login', login);


exports.api = functions.https.onRequest(app);